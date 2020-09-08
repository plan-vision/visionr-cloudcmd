'use strict';

const {promisify} = require('util');
const {cpus} = require('os');
const {join} = require('path');

const tryCatch = require('try-catch');
const holdUp = require('@iocmd/hold-up');

const workerPath = './node_modules/thread-id/worker.js';
const {THREAD_IT_COUNT} = process.env;
const workersCount = isNaN(THREAD_IT_COUNT) ? cpus().length : Number(THREAD_IT_COUNT);

const workersDisabled = () => {
    /*if (!workersCount)
        return true;
    return false;*/
    return true;
};

const onMessage = (workerItem, callback) => ([error, result]) => {
    workerItem.free = true;
    callback(error, result);
};

const run = promisify((name, args, workerItem, callback) => {
    const {worker} = workerItem;

    worker.once('message', onMessage(workerItem, callback));
    worker.postMessage({
        name,
        args,
    });
});

let workers = [];

module.exports = (name, options) => {
    if (workersDisabled()) {
        var fn;
        switch (name.split("\\").join("/")) {
            case "putout/lib/putout" :  fn=require("putout/lib/putout");break;
            case "cloudcmd/server/markdown/worker" :  fn=require("cloudcmd/server/markdown/worker");break;
            default :
              throw "MISSING req thread-it : "+name.split("\\").join("/");
        }

        return async (...a) => fn(...a);
    }

    return async (...args) => {
        if (!workers.length)
            throw Error('You should init workers first!');

        const worker = await holdUp([getFreeWorker, workers], options);
        const result = await run(name, args, worker);

        return result;
    };
};

module.exports.init = () => {
    if (workersDisabled())
        return;

    if (workers.length)
        return;

    workers = initWorkers();
};

module.exports.terminate = () => {
    terminateWorkers(workers);
    workers = [];
};

function initWorkers() {
    const {Worker} = require('worker_threads');
    let i = workersCount;

    const workers = [];
    const free = true;

    while (i--) {
        const worker = new Worker(workerPath);

        workers.push({
            worker,
            free,
        });
    }

    return workers;
}

function terminateWorkers(workers) {
    for (const {worker} of workers) {
        worker.terminate();
    }
}

const isFree = ({free}) => free;
function getFreeWorker(workers) {
    const worker = workers.find(isFree);

    if (!worker)
        throw 'No free workers!';

    worker.free = false;
    return worker;
}
