'use strict';

const {realpath} = require('fs').promises;

const {read} = require('flop');
const ponse = require('ponse');
const rendy = require('rendy');
const format = require('format-io');
const currify = require('currify');
const tryToCatch = require('try-to-catch');
const once = require('once');

const root = require('./root');
const prefixer = require('./prefixer');
const CloudFunc = require('cloudcmd/common/cloudfunc');

const getPrefix = (config) => prefixer(config('prefix'));

const sendIndex = (params, data) => {
    const ponseParams = {
        ...params,
        name: 'index.html',
    };

    ponse.send(data, ponseParams);
};

const {FS} = CloudFunc;

const Columns = require('./columns');
const Template = require('./template');

const tokenize = (fn, a) => (b) => fn(a, b);
const getReadDir = (config) => {
    if (!config('dropbox'))
        return read;
    const {readDir} = require('@cloudcmd/dropbox');
    return tokenize(readDir, config('dropboxToken'));
};

/**
 * routing of server queries
 */
module.exports = currify((config, options, request, response, next) => {
    const name = ponse.getPathName(request);
    const isFS = RegExp('^/$|^' + FS).test(name);

    if (!isFS)
        return next();

    route({config, options, request, response})
        .catch(next);
});

module.exports._getReadDir = getReadDir;

async function route({config, options, request, response}) {
    const name = ponse.getPathName(request);
    const gzip = true;
    const p = {
        request,
        response,
        gzip,
        name,
    };

    config('prefix', prefixer(request.baseUrl));

    const rootName = name.replace(CloudFunc.FS, '') || '/';
    const fullPath = root(rootName, config('root'));

    const read = getReadDir(config);
    const [error, dir] = await tryToCatch(read, fullPath);
    const {html} = options;

    if (!error)
        return sendIndex(p, buildIndex(config, html, {
            ...dir,
            path: format.addSlashToEnd(rootName),
        }));

    if (error.code !== 'ENOTDIR')
        return ponse.sendError(error, p);

    const [realPathError, pathReal] = await tryToCatch(realpath, fullPath);

    ponse.sendFile({
        ...p,
        name: realPathError ? name : pathReal,
        gzip: false,
    });
}

/**
 * additional processing of index file
 */
function indexProcessing(config, options) {
    const oneFilePanel = config('oneFilePanel');
    const noKeysPanel = !config('keysPanel');
    const noContact = !config('contact');
    const noConfig = !config('configDialog');
    const noConsole = !config('console');
    const noTerminal = !config('terminal');
    const {panel} = options;

    let {data} = options;

    if (noKeysPanel)
        data = hideKeysPanel(data);

    if (oneFilePanel)
        data = data
            .replace('icon-move', 'icon-move none')
            .replace('icon-copy', 'icon-copy none');

    if (noContact)
        data = data
            .replace('icon-contact', 'icon-contact none');

    if (noConfig)
        data = data
            .replace('icon-config', 'icon-config none');

    if (noConsole)
        data = data
            .replace('icon-console', 'icon-console none');

    if (noTerminal)
        data = data
            .replace('icon-terminal', 'icon-terminal none');

    const left = rendy(Template.panel, {
        side        : 'left',
        content     : panel,
        className   : !oneFilePanel ? '' : 'panel-single',
    });

    let right = '';

    if (!oneFilePanel)
        right = rendy(Template.panel, {
            side        : 'right',
            content     : panel,
            className   : '',
        });

    const name = config('name');

    data = rendy(data, {
        title: CloudFunc.getTitle({
            name,
        }),
        fm: left + right,
        prefix: getPrefix(config),
        config: JSON.stringify(config('*')),
        columns: Columns[config('columns')],
    });

    return data;
}

function buildIndex(config, html, data) {
    const panel = CloudFunc.buildFromJSON({
        data,
        prefix: getPrefix(config),
        template: Template,
    });

    return indexProcessing(config, {
        panel,
        data: html,
    });
}

module.exports._hideKeysPanel = hideKeysPanel;
function hideKeysPanel(html) {
    const keysPanel = '<div id="js-keyspanel" class="{{ className }}"';
    const keysPanelRegExp = '<div id="?js-keyspanel"? class="?{{ className }}"?';

    const from = rendy(keysPanelRegExp, {
        className: 'keyspanel',
    });

    const to = rendy(keysPanel, {
        className: 'keyspanel hidden',
    });

    return html.replace(RegExp(from), to);
}
