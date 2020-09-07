'use strict';

const path = require('path');
const readFilesSync = require('@cloudcmd/read-files-sync');
const templatePath = path.join('node_modules/visionr-cloudcmd/build/cloudcmd', 'tmpl/fs');

console.log("YOOO "+templatePath);

module.exports = readFilesSync(templatePath, 'utf8');
