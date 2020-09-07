'use strict';

console.log("CCC 0");
const wraptile = require('wraptile');
console.log("CCC 1");
const chalk = require('chalk');
console.log("CCC 2");

const datetime = require('../../common/datetime');
console.log("CCC 3");

const log = (isLog, name, msg) => isLog && console.log(`${datetime()} -> ${name}: ${msg}`);
console.log("CCC 4");
const makeColor = (a, color) => chalk.rgb(color || stringToRGB(a))(a);
console.log("CCC 5");
const getMessage = (e) => e.message || e;
console.log("CCC 6");
const getDescription = (e) => `${e.type}: ${e.description}`;
console.log("CCC 7");

module.exports = log;
console.log("CCC 8");
module.exports.logWraped = wraptile(log);
module.exports.stringToRGB = stringToRGB;
module.exports.makeColor = makeColor;
module.exports.getMessage = getMessage;
module.exports.getDescription = getDescription;
console.log("CCC 10");

module.exports.importStr = 'import';
module.exports.exportStr = 'export';
console.log("CCC 11");
module.exports.connectedStr = chalk.green('connected');
console.log("CCC 12");
module.exports.disconnectedStr = chalk.red('disconnected');
console.log("CCC 13");
module.exports.tokenRejectedStr = chalk.red('token rejected');
console.log("CCC 14");
module.exports.authTryStr = chalk.yellow('try to auth');

function stringToRGB(a) {
    return [
        a.charCodeAt(0),
        a.length,
        crc(a),
    ];
}

const add = (a, b) => {
    return a + b.charCodeAt(0);
};

function crc(a) {
    return a
        .split('')
        .reduce(add, 0);
}
