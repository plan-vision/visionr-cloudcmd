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
/******/ 		"./modules/terminal-run": 0
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
/******/ 	deferredModules.push(["./client/modules/terminal-run.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/terminal-run.js":
/*!****************************************!*\
  !*** ./client/modules/terminal-run.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd, gritty */\n\nconst {\n  promisify\n} = __webpack_require__(/*! es6-promisify */ \"./node_modules/es6-promisify/dist/promisify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst fullstore = __webpack_require__(/*! fullstore */ \"./node_modules/fullstore/lib/fullstore.js\");\n\n__webpack_require__(/*! ../../css/terminal.css */ \"./css/terminal.css\");\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst DOM = __webpack_require__(/*! ../dom */ \"./client/dom/index.js\");\n\nconst Images = __webpack_require__(/*! ../dom/images */ \"./client/dom/images.js\");\n\nconst {\n  Dialog\n} = DOM;\nconst {\n  Key,\n  config\n} = CloudCmd;\nCloudCmd.TerminalRun = exports;\nlet Loaded;\nlet Terminal;\nlet Socket;\nconst exitCodeStore = fullstore();\n\nconst loadAll = async () => {\n  const {\n    prefix\n  } = CloudCmd;\n  const prefixGritty = getPrefix();\n  const js = `${prefixGritty}/gritty.js`;\n  const css = `${prefix}/dist/terminal.css`;\n  const [e] = await tryToCatch(load.parallel, [js, css]);\n\n  if (e) {\n    const src = e.target.src.replace(window.location.href, '');\n    return Dialog.alert(`file ${src} could not be loaded`);\n  }\n\n  Loaded = true;\n};\n\nmodule.exports.init = async () => {\n  if (!config('terminal')) return;\n  Images.show.load('top');\n  await CloudCmd.View();\n  await loadAll();\n};\n\nmodule.exports.show = promisify((options = {}, fn) => {\n  if (!Loaded) return;\n  if (!config('terminal')) return;\n  create(options);\n  CloudCmd.View.show(Terminal.element, {\n    afterShow: () => {\n      Terminal.focus();\n    },\n    afterClose: () =>\n    /* exec.series args */\n    {\n      fn(null, exitCodeStore());\n    }\n  });\n});\nmodule.exports.hide = hide;\n\nfunction hide() {\n  CloudCmd.View.hide();\n}\n\nfunction getPrefix() {\n  return CloudCmd.prefix + '/gritty';\n}\n\nfunction getPrefixSocket() {\n  return CloudCmd.prefixSocket + '/gritty';\n}\n\nfunction getEnv() {\n  return {\n    ACTIVE_DIR: DOM.getCurrentDirPath,\n    PASSIVE_DIR: DOM.getNotCurrentDirPath,\n    CURRENT_NAME: DOM.getCurrentName,\n    CURRENT_PATH: DOM.getCurrentPath\n  };\n}\n\nfunction create(createOptions) {\n  const {\n    cwd = DOM.getCurrentDirPath(),\n    command,\n    autoClose,\n    closeMessage = 'Press any key to close Terminal...'\n  } = createOptions;\n  const options = {\n    cwd,\n    env: getEnv(),\n    prefix: getPrefixSocket(),\n    socketPath: CloudCmd.prefix,\n    fontFamily: 'Droid Sans Mono',\n    command,\n    autoRestart: false\n  };\n  let commandExit = false;\n  const {\n    socket,\n    terminal\n  } = gritty(document.body, options);\n  Socket = socket;\n  Terminal = terminal;\n  Terminal.onKey(({\n    domEvent\n  }) => {\n    const {\n      keyCode,\n      shiftKey\n    } = domEvent;\n    if (commandExit) hide();\n\n    if (shiftKey && keyCode === Key.ESC) {\n      hide();\n    }\n  });\n  Socket.on('exit', code => {\n    exitCodeStore(code);\n    if (autoClose) return hide();\n    terminal.write(`\\n${closeMessage}`);\n    commandExit = true;\n  });\n  Socket.on('connect', exec.with(authCheck, socket));\n}\n\nfunction authCheck(spawn) {\n  spawn.emit('auth', config('username'), config('password'));\n  spawn.on('reject', () => {\n    Dialog.alert('Wrong credentials!');\n  });\n}\n\n//# sourceURL=file://cloudcmd/client/modules/terminal-run.js");

/***/ })

/******/ });