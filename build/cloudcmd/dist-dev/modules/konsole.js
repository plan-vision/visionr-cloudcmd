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
/******/ 		"./modules/konsole": 0
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
/******/ 	deferredModules.push(["./client/modules/konsole.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/konsole.js":
/*!***********************************!*\
  !*** ./client/modules/konsole.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd */\n\n/* global Util */\n\n/* global DOM */\n\n/* global Console */\n\nCloudCmd.Konsole = exports;\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst loadJS = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\").js;\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst Images = __webpack_require__(/*! ../dom/images */ \"./client/dom/images.js\");\n\nconst {\n  Dialog,\n  CurrentInfo: Info\n} = DOM;\n\nconst rmLastSlash = a => a.replace(/\\/$/, '') || '/';\n\nlet konsole;\nconst {\n  config\n} = CloudCmd;\nconst cd = currify((fn, dir) => fn(`cd ${rmLastSlash(dir)}`));\nconst Name = 'Konsole';\nlet Element;\nlet Loaded;\n\nmodule.exports.init = async () => {\n  if (!config('console')) return;\n  Images.show.load('top');\n  await CloudCmd.View();\n  await load();\n  await create();\n};\n\nmodule.exports.hide = () => {\n  CloudCmd.View.hide();\n};\n\nmodule.exports.clear = () => {\n  konsole.clear();\n};\n\nfunction getPrefix() {\n  return CloudCmd.prefix + '/console';\n}\n\nfunction getPrefixSocket() {\n  return CloudCmd.prefixSocket + '/console';\n}\n\nfunction getEnv() {\n  return {\n    ACTIVE_DIR: DOM.getCurrentDirPath.bind(DOM),\n    PASSIVE_DIR: DOM.getNotCurrentDirPath.bind(DOM),\n    CURRENT_NAME: DOM.getCurrentName.bind(DOM),\n    CURRENT_PATH: () => {\n      return Info.path;\n    }\n  };\n}\n\nasync function onPath(path) {\n  if (Info.dirPath === path) return;\n  await CloudCmd.loadDir({\n    path\n  });\n}\n\nconst getDirPath = () => {\n  if (config('syncConsolePath')) return Info.dirPath;\n};\n\nconst create = async () => {\n  const options = {\n    cwd: getDirPath(),\n    env: getEnv(),\n    prefix: getPrefix(),\n    prefixSocket: getPrefixSocket(),\n    socketPath: CloudCmd.prefix\n  };\n  Element = createElement('div', {\n    className: 'console'\n  });\n  konsole = await Console(Element, options);\n  konsole.on('connect', exec.with(authCheck, konsole));\n  konsole.on('path', config.if('syncConsolePath', onPath));\n  CloudCmd.on('active-dir', config.if('syncConsolePath', cd(konsole.handler)));\n  konsole.addShortCuts({\n    P: () => {\n      const command = konsole.getPromptText();\n      const path = DOM.getCurrentDirPath();\n      konsole.setPromptText(command + path);\n    }\n  });\n};\n\nfunction authCheck(konsole) {\n  konsole.emit('auth', config('username'), config('password'));\n  konsole.on('reject', () => {\n    Dialog.alert('Wrong credentials!');\n  });\n}\n\nmodule.exports.show = callback => {\n  if (!Loaded) return;\n  if (!config('console')) return;\n  CloudCmd.View.show(Element, {\n    afterShow: () => {\n      konsole.focus();\n      exec(callback);\n    }\n  });\n};\n\nconst load = async () => {\n  Util.time(Name + ' load');\n  const prefix = getPrefix();\n  const url = prefix + '/console.js';\n  const [error] = await tryToCatch(loadJS, url);\n  Loaded = true;\n  Util.timeEnd(Name + ' load');\n  if (error) return Dialog.alert(error.message, {\n    cancel: false\n  });\n};\n\n//# sourceURL=file://cloudcmd/client/modules/konsole.js");

/***/ })

/******/ });