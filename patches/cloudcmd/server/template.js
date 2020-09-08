'use strict';

const path = require('path');
const readFilesSync = require('@cloudcmd/read-files-sync');
const templatePath = path.join('node_modules/visionr-cloudcmd/build/cloudcmd', 'tmpl/fs');

module.exports = readFilesSync(templatePath, 'utf8');
