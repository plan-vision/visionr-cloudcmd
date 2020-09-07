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
/******/ 		"./modules/edit": 0
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
/******/ 	deferredModules.push(["./client/modules/edit.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/edit.js":
/*!********************************!*\
  !*** ./client/modules/edit.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global CloudCmd */\n\n\nconst {\n  promisify\n} = __webpack_require__(/*! es6-promisify */ \"./node_modules/es6-promisify/dist/promisify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst loadJS = load.js;\n\nconst {\n  MAX_FILE_SIZE: maxSize\n} = __webpack_require__(/*! ../../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst {\n  time,\n  timeEnd\n} = __webpack_require__(/*! ../../common/util */ \"./common/util.js\");\n\nconst Name = 'Edit';\nCloudCmd[Name] = exports;\nconst EditorName = CloudCmd.config('editor');\nlet Loading = true;\nlet Element;\nlet editor;\nconst ConfigView = {\n  afterShow: () => {\n    editor.moveCursorTo(0, 0).focus();\n  }\n};\n\nmodule.exports.init = async () => {\n  const element = create();\n  await CloudCmd.View();\n  await loadFiles(element);\n};\n\nfunction create() {\n  const element = createElement('div', {\n    style: 'width      : 100%;' + 'height     : 100%;' + 'font-family: \"Droid Sans Mono\";',\n    notAppend: true\n  });\n  Element = element;\n  return element;\n}\n\nfunction checkFn(name, fn) {\n  if (typeof fn !== 'function') throw Error(name + ' should be a function!');\n}\n\nfunction initConfig(options = {}) {\n  const config = { ...options,\n    ...ConfigView\n  };\n  if (!options.afterShow) return config;\n  checkFn('options.afterShow', options.afterShow);\n  const afterShow = {\n    config\n  };\n\n  config.afterShow = () => {\n    afterShow();\n    options.afterShow();\n  };\n\n  return config;\n}\n\nmodule.exports.show = options => {\n  if (Loading) return;\n  CloudCmd.View.show(Element, initConfig(options));\n  getEditor().setOptions({\n    fontSize: 16\n  });\n};\n\nmodule.exports.getEditor = getEditor;\n\nfunction getEditor() {\n  return editor;\n}\n\nmodule.exports.getElement = () => {\n  return Element;\n};\n\nmodule.exports.hide = () => {\n  CloudCmd.View.hide();\n};\n\nconst loadFiles = async element => {\n  const prefix = `${CloudCmd.prefix}/${EditorName}`;\n  const socketPath = CloudCmd.prefix;\n  const prefixSocket = `${CloudCmd.prefixSocket}/${EditorName}`;\n  const url = `${prefix}/${EditorName}.js`;\n  time(Name + ' load');\n  await loadJS(url);\n  const word = promisify(window[EditorName]);\n  const [ed] = await tryToCatch(word, element, {\n    maxSize,\n    prefix,\n    prefixSocket,\n    socketPath\n  });\n  timeEnd(Name + ' load');\n  editor = ed;\n  Loading = false;\n};\n\n//# sourceURL=file://cloudcmd/client/modules/edit.js");

/***/ })

/******/ });