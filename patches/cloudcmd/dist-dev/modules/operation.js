/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"./modules/operation": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/modules/operation/index.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/operation/format.js":
/*!********************************************!*\
  !*** ./client/modules/operation/format.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (operation, from, to) => {\n  if (!to) return `${operation} ${from}`;\n  return `${operation} ${from} -> ${to}`;\n};\n\n//# sourceURL=file://cloudcmd/client/modules/operation/format.js");

/***/ }),

/***/ "./client/modules/operation/get-next-current-name.js":
/*!***********************************************************!*\
  !*** ./client/modules/operation/get-next-current-name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst not = currify((array, value) => !~array.indexOf(value));\nconst notOneOf = currify((a, b) => a.filter(not(b)));\n\nmodule.exports = (currentName, names, removedNames) => {\n  const i = names.indexOf(currentName);\n  const nextNames = notOneOf(names, removedNames);\n  const {\n    length\n  } = nextNames;\n  if (nextNames[i]) return nextNames[i];\n  return nextNames[length - 1];\n};\n\n//# sourceURL=file://cloudcmd/client/modules/operation/get-next-current-name.js");

/***/ }),

/***/ "./client/modules/operation/index.js":
/*!*******************************************!*\
  !*** ./client/modules/operation/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global CloudCmd */\n\n/* global Util */\n\n/* global DOM */\n\n/* global fileop */\n\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst wraptile = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst {\n  promisify\n} = __webpack_require__(/*! es6-promisify */ \"./node_modules/es6-promisify/dist/promisify.js\");\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst {\n  encode\n} = __webpack_require__(/*! ../../../common/entity */ \"./common/entity.js\");\n\nconst removeExtension = __webpack_require__(/*! ./remove-extension */ \"./client/modules/operation/remove-extension.js\");\n\nconst setListeners = __webpack_require__(/*! ./set-listeners */ \"./client/modules/operation/set-listeners.js\");\n\nconst getNextCurrentName = __webpack_require__(/*! ./get-next-current-name */ \"./client/modules/operation/get-next-current-name.js\");\n\nconst removeQuery = a => a.replace(/\\?.*/, '');\n\nconst Name = 'Operation';\nCloudCmd[Name] = exports;\nconst {\n  config\n} = CloudCmd;\nconst {\n  Dialog,\n  Images\n} = DOM;\nconst authCheck = wraptile(_authCheck);\nconst Operation = {};\nlet Loaded;\nlet copyFn;\nlet moveFn;\nlet deleteFn;\nlet extractFn;\nlet packZipFn;\nlet packTarFn;\nconst Info = DOM.CurrentInfo;\nconst showLoad = Images.show.load.bind(null, 'top');\nconst processFiles = currify(_processFiles);\n\nconst noFilesCheck = () => {\n  const {\n    length\n  } = DOM.getActiveFiles();\n  const is = Boolean(!length);\n  if (is) return Dialog.alert.noFiles();\n  return is;\n};\n\nmodule.exports.init = promisify(callback => {\n  showLoad();\n  exec.series([DOM.loadSocket, async callback => {\n    if (config('dropbox')) return callback();\n    const {\n      prefix,\n      prefixSocket\n    } = CloudCmd;\n    await loadAll();\n    initOperations(prefix, prefixSocket, callback);\n  }, callback => {\n    Loaded = true;\n    Images.hide();\n    callback();\n  }], callback);\n});\n\nfunction _authCheck(spawn, ok) {\n  const accept = wraptile(ok);\n  const alertDialog = wraptile(Dialog.alert);\n  spawn.on('accept', accept(spawn));\n  spawn.on('reject', alertDialog('Wrong credentials!'));\n  spawn.emit('auth', config('username'), config('password'));\n}\n\nconst onConnect = currify((fn, operator) => {\n  setOperations(operator);\n  fn();\n});\n\nasync function initOperations(prefix, socketPrefix, fn) {\n  socketPrefix = `${socketPrefix}/fileop`;\n  const operator = await fileop({\n    prefix,\n    socketPrefix\n  });\n  operator.on('connect', authCheck(operator, onConnect(fn)));\n}\n\nfunction setOperations(operator) {\n  packTarFn = ({\n    from,\n    to,\n    names\n  }, callback) => {\n    const operation = 'Tar';\n    const listen = setListeners({\n      operation,\n      callback,\n      noContinue: true,\n      from,\n      to\n    });\n    operator.tar(from, to, names).then(listen);\n  };\n\n  packZipFn = ({\n    from,\n    to,\n    names\n  }, callback) => {\n    const operation = 'Zip';\n    const listen = setListeners({\n      operation,\n      callback,\n      noContinue: true,\n      from,\n      to\n    });\n    operator.zip(from, to, names).then(listen);\n  };\n\n  deleteFn = (from, files, callback) => {\n    from = removeQuery(from);\n    const operation = 'Delete';\n    const listen = setListeners({\n      operation,\n      callback,\n      from\n    });\n    operator.remove(from, files).then(listen);\n  };\n\n  copyFn = ({\n    from,\n    to,\n    names\n  }, callback) => {\n    const operation = 'Copy';\n    const listen = setListeners({\n      operation,\n      callback,\n      from,\n      to,\n      names\n    });\n    operator.copy(from, to, names).then(listen);\n  };\n\n  moveFn = ({\n    from,\n    to,\n    names\n  }, callback) => {\n    const operation = 'Move';\n    const listen = setListeners({\n      operation,\n      callback,\n      from,\n      to\n    });\n    operator.move(from, to, names).then(listen);\n  };\n\n  extractFn = ({\n    from,\n    to\n  }, callback) => {\n    const operation = 'Extract';\n    const listen = setListeners({\n      operation,\n      callback,\n      noContinue: true,\n      from,\n      to\n    });\n    operator.extract(from, to).then(listen);\n  };\n}\n\nfunction getPacker(type) {\n  if (type === 'zip') return packZipFn;\n  return packTarFn;\n}\n\nmodule.exports.hide = () => {\n  CloudCmd.View.hide();\n};\n\nmodule.exports.show = (operation, data) => {\n  if (!Loaded) return;\n  if (operation === 'copy') return Operation.copy(data);\n  if (operation === 'move') return Operation.move(data);\n  if (operation === 'delete') return Operation.delete();\n  if (operation === 'delete:silent') return Operation.deleteSilent();\n  if (operation === 'pack') return Operation.pack();\n  if (operation === 'extract') return Operation.extract();\n};\n\nOperation.copy = processFiles({\n  type: 'copy'\n});\nOperation.move = processFiles({\n  type: 'move'\n});\n\nOperation.delete = () => {\n  promptDelete();\n};\n\nOperation.deleteSilent = () => {\n  deleteSilent();\n};\n\nOperation.pack = () => {\n  const isZip = config('packer') === 'zip';\n  twopack('pack', isZip ? 'zip' : 'tar');\n};\n\nOperation.extract = () => {\n  twopack('extract');\n};\n/**\n * prompt and delete current file or selected files\n *\n * @currentFile\n */\n\n\nasync function promptDelete() {\n  if (noFilesCheck()) return;\n  const msgAsk = 'Do you really want to delete the ';\n  const msgSel = 'selected ';\n  const files = DOM.getActiveFiles();\n  const names = DOM.getFilenames(files);\n  const n = names.length;\n  let msg;\n\n  if (n) {\n    let name = '';\n\n    for (let i = 0; i < 5 && i < n; i++) name += '\\n' + names[i];\n\n    if (n >= 5) name += '\\n...';\n    msg = msgAsk + msgSel + n + ' files/directories?\\n' + encode(name);\n  } else {\n    const current = DOM.getCurrentFile();\n    const isDir = DOM.isCurrentIsDir(current);\n\n    const getType = isDir => {\n      return isDir ? 'directory' : 'file';\n    };\n\n    const type = getType(isDir) + ' ';\n    const name = DOM.getCurrentName(current);\n    msg = msgAsk + msgSel + type + name + '?';\n  }\n\n  const [cancel] = await Dialog.confirm(msg);\n  if (cancel) return;\n  deleteSilent(files);\n}\n/**\n * delete current or selected files\n *\n * @files\n */\n\n\nfunction deleteSilent(files = DOM.getActiveFiles()) {\n  const query = '?files';\n  const path = Info.dirPath;\n  if (noFilesCheck()) return;\n  showLoad();\n  const removedNames = DOM.getFilenames(files);\n  const names = DOM.CurrentInfo.files.map(DOM.getCurrentName);\n  const currentName = DOM.getCurrentName();\n  const nextCurrentName = getNextCurrentName(currentName, names, removedNames);\n  deleteFn(path + query, removedNames, async () => {\n    await CloudCmd.refresh();\n    const names = Info.files.map(DOM.getCurrentName);\n    const isCurrent = names.includes(currentName);\n    const name = isCurrent ? currentName : nextCurrentName;\n    DOM.setCurrentByName(name);\n  });\n}\n/*\n * process files (copy or move)\n * @param data\n * @param operation\n */\n\n\nasync function _processFiles(options, data) {\n  let selFiles;\n  let files;\n  let panel;\n  let shouldAsk;\n  let ok;\n  let from = '';\n  let to = '';\n  let names = [];\n  /* eslint no-multi-spaces: 0 */\n\n  if (data) {\n    from = data.from;\n    to = data.to;\n    names = data.names;\n    panel = Info.panel;\n  } else {\n    from = Info.dirPath;\n    to = DOM.getNotCurrentDirPath();\n    selFiles = DOM.getSelectedFiles();\n    names = DOM.getFilenames(selFiles);\n    data = {};\n    shouldAsk = true;\n    panel = Info.panelPassive;\n  }\n\n  if (!names.length) names.push(DOM.getCurrentName());\n  const [name] = names;\n  const sameName = DOM.getCurrentByName(name, panel);\n  if (!data && noFilesCheck()) return;\n  const {\n    type\n  } = options;\n  const isCopy = type === 'copy';\n  const option = isCopy ? 'confirmCopy' : 'confirmMove';\n  const title = isCopy ? 'Copy' : 'Rename/Move';\n  const operation = isCopy ? copyFn : moveFn;\n\n  if (shouldAsk && config(option)) {\n    const [cancel, newTo] = await prompt(title, to, names.map(encode));\n    if (!cancel) ask(newTo);\n    return;\n  }\n\n  ask(to);\n\n  function ask(to) {\n    ok = from !== to && to;\n    if (ok && !shouldAsk || !sameName) return go();\n    const str = `\"${name}\" already exist. Overwrite?`;\n    const cancel = false;\n    Dialog.confirm(str, {\n      cancel\n    }).then(go);\n\n    function go() {\n      showLoad();\n      files = {\n        from,\n        to,\n        names\n      };\n      operation(files, async () => {\n        await DOM.Storage.remove(from);\n        const {\n          panel,\n          panelPassive\n        } = Info;\n\n        const setCurrent = () => {\n          const currentName = name || data.names[0];\n          DOM.setCurrentByName(currentName);\n        };\n\n        if (!Info.isOnePanel) CloudCmd.refresh({\n          panel: panelPassive,\n          noCurrent: true\n        });\n        CloudCmd.refresh({\n          panel\n        }, setCurrent);\n      });\n    }\n  }\n}\n\nfunction checkEmpty(name, operation) {\n  if (!operation) throw Error(name + ' could not be empty!');\n}\n\nfunction twopack(operation, type) {\n  let op;\n  let fileFrom;\n  let currentName = Info.name;\n  const {\n    path,\n    dirPath\n  } = Info;\n  const activeFiles = DOM.getActiveFiles();\n  const names = DOM.getFilenames(activeFiles);\n  checkEmpty('operation', operation);\n  if (!names.length) return Dialog.alert.noFiles();\n\n  switch (operation) {\n    case 'extract':\n      op = extractFn;\n      fileFrom = {\n        from: path,\n        to: dirPath\n      };\n      currentName = removeExtension(currentName);\n      break;\n\n    case 'pack':\n      op = getPacker(type);\n      if (names.length > 1) currentName = Info.dir;\n      currentName += DOM.getPackerExt(type);\n      fileFrom = {\n        from: dirPath,\n        to: dirPath + currentName,\n        names\n      };\n      break;\n  }\n\n  showLoad();\n  op(fileFrom, error => {\n    !error && CloudCmd.refresh({\n      currentName\n    });\n  });\n}\n\nasync function prompt(msg, to, names) {\n  const n = names.length;\n  const [name] = names;\n  msg += ' ';\n  if (names.length > 1) msg += n + ' file(s)';else msg += '\"' + name + '\"';\n  msg += ' to';\n  return Dialog.prompt(msg, to);\n}\n\nasync function loadAll() {\n  const {\n    prefix\n  } = CloudCmd;\n  const file = `${prefix}/fileop/fileop.js`;\n  const [error] = await tryToCatch(load.js, file);\n  if (error) Dialog.alert(error.message);\n  Loaded = true;\n}\n\n//# sourceURL=file://cloudcmd/client/modules/operation/index.js");

/***/ }),

/***/ "./client/modules/operation/remove-extension.js":
/*!******************************************************!*\
  !*** ./client/modules/operation/remove-extension.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  getExt\n} = __webpack_require__(/*! ../../../common/util */ \"./common/util.js\");\n\nmodule.exports = name => {\n  const ext = getExtension(name);\n  return name.replace(ext, '');\n};\n\nfunction getExtension(name) {\n  if (/\\.tar\\.gz$/.test(name)) return '.tar.gz';\n  if (/\\.tar\\.bz2$/.test(name)) return '.tar.bz2';\n  return getExt(name);\n}\n\n//# sourceURL=file://cloudcmd/client/modules/operation/remove-extension.js");

/***/ }),

/***/ "./client/modules/operation/set-listeners.js":
/*!***************************************************!*\
  !*** ./client/modules/operation/set-listeners.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global DOM */\n\nconst {\n  Dialog,\n  Images\n} = DOM;\n\nconst forEachKey = __webpack_require__(/*! for-each-key */ \"./node_modules/for-each-key/lib/for-each-key.js\");\n\nconst wraptile = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst format = __webpack_require__(/*! ./format */ \"./client/modules/operation/format.js\");\n\nmodule.exports = options => emitter => {\n  const {\n    operation,\n    callback,\n    noContinue,\n    from,\n    to\n  } = options;\n  let done;\n  let lastError;\n  const onAbort = wraptile(({\n    emitter,\n    operation\n  }) => {\n    emitter.abort();\n    const msg = `${operation} aborted`;\n    lastError = true;\n    Dialog.alert(msg, {\n      cancel: false\n    });\n  });\n  const removeListener = emitter.removeListener.bind(emitter);\n  const on = emitter.on.bind(emitter);\n  const message = format(operation, from, to);\n  const progress = Dialog.progress(message);\n  progress.catch(onAbort({\n    emitter,\n    operation\n  }));\n  const listeners = {\n    progress: value => {\n      done = value === 100;\n      progress.setProgress(value);\n    },\n    end: () => {\n      Images.hide();\n      forEachKey(removeListener, listeners);\n      progress.remove();\n      if (lastError || done) callback();\n    },\n    error: async error => {\n      lastError = error;\n\n      if (noContinue) {\n        listeners.end(error);\n        Dialog.alert(error);\n        progress.remove();\n        return;\n      }\n\n      const [cancel] = await Dialog.confirm(error + '\\n Continue?');\n      if (!done && !cancel) return emitter.continue();\n      emitter.abort();\n      progress.remove();\n    }\n  };\n  forEachKey(on, listeners);\n};\n\n//# sourceURL=file://cloudcmd/client/modules/operation/set-listeners.js");

/***/ })

/******/ });