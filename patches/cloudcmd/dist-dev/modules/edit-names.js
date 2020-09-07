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
/******/ 		"./modules/edit-names": 0
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
/******/ 	deferredModules.push(["./client/modules/edit-names.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/edit-names.js":
/*!**************************************!*\
  !*** ./client/modules/edit-names.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd, DOM */\n\nCloudCmd.EditNames = exports;\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst supermenu = __webpack_require__(/*! supermenu */ \"./node_modules/supermenu/lib/supermenu.js\");\n\nconst multiRename = __webpack_require__(/*! multi-rename */ \"./node_modules/multi-rename/lib/multi-rename.js\");\n\nconst reject = Promise.reject.bind(Promise);\nconst Info = DOM.CurrentInfo;\nconst {\n  Dialog\n} = DOM;\nconst refresh = currify(_refresh);\nconst rename = currify(_rename);\nlet Menu;\nconst ConfigView = {\n  beforeClose: () => {\n    exec.ifExist(Menu, 'hide');\n    DOM.Events.remove('keydown', keyListener);\n    isChanged();\n  }\n};\n\nmodule.exports.init = async () => {\n  await CloudCmd.Edit();\n  const editor = CloudCmd.Edit.getEditor();\n  setListeners(editor);\n};\n\nmodule.exports.show = options => {\n  const names = getActiveNames().join('\\n');\n  const config = { ...ConfigView,\n    ...options\n  };\n  if (Info.name === '..' && names.length === 1) return Dialog.alert.noFiles();\n  DOM.Events.addKey(keyListener);\n  CloudCmd.Edit.getEditor().setValueFirst('edit-names', names).setMode().setOption('keyMap', 'default').disableKey();\n  CloudCmd.Edit.show(config);\n  return CloudCmd.Edit;\n};\n\nasync function keyListener(event) {\n  const ctrl = event.ctrlKey;\n  const meta = event.metaKey;\n  const ctrlMeta = ctrl || meta;\n  const {\n    Key\n  } = CloudCmd;\n  if (ctrlMeta && event.keyCode === Key.S) hide();else if (ctrlMeta && event.keyCode === Key.P) {\n    const [, pattern] = await Dialog.prompt('Apply pattern:', '[n][e]');\n    pattern && applyPattern(pattern);\n  }\n  event.preventDefault();\n}\n\nfunction applyPattern(pattern) {\n  const newNames = multiRename(pattern, getActiveNames());\n  const editor = CloudCmd.Edit.getEditor();\n  editor.setValue(newNames.join('\\n'));\n}\n\nfunction getActiveNames() {\n  return DOM.getFilenames(DOM.getActiveFiles());\n}\n\nmodule.exports.hide = hide;\n\nfunction hide() {\n  CloudCmd.Edit.hide();\n}\n\nfunction setListeners() {\n  const element = CloudCmd.Edit.getElement();\n  DOM.Events.addOnce('contextmenu', element, setMenu);\n}\n\nfunction applyNames() {\n  const dir = Info.dirPath;\n  const from = getActiveNames();\n  const nameIndex = from.indexOf(Info.name);\n  const editor = CloudCmd.Edit.getEditor();\n  const to = editor.getValue().split('\\n');\n  const root = CloudCmd.config('root');\n  Promise.resolve(root).then(rename(dir, from, to)).then(refresh(to, nameIndex)).catch(alert);\n}\n\nfunction _refresh(to, nameIndex, res) {\n  if (res.status === 404) return res.text().then(reject);\n  const currentName = to[nameIndex];\n  CloudCmd.refresh({\n    currentName\n  });\n}\n\nfunction getDir(root, dir) {\n  if (root === '/') return dir;\n  return root + dir;\n}\n\nfunction _rename(path, from, to, root) {\n  const dir = getDir(root, path);\n  const {\n    prefix\n  } = CloudCmd;\n  return fetch(`${prefix}/rename`, {\n    method: 'put',\n    credentials: 'include',\n    body: JSON.stringify({\n      from,\n      to,\n      dir\n    })\n  });\n}\n\nfunction setMenu(event) {\n  const position = {\n    x: event.clientX,\n    y: event.clientY\n  };\n  event.preventDefault();\n  if (Menu) return;\n  const editor = CloudCmd.Edit.getEditor();\n  const options = {\n    beforeShow: params => {\n      params.x -= 18;\n      params.y -= 27;\n    },\n    afterClick: () => {\n      editor.focus();\n    }\n  };\n  const menuData = {\n    'Save           Ctrl+S': () => {\n      applyNames();\n      hide();\n    },\n    'Go To Line     Ctrl+G': () => {\n      editor.goToLine();\n    },\n    'Cut            Ctrl+X': () => {\n      editor.cutToClipboard();\n    },\n    'Copy           Ctrl+C': () => {\n      editor.copyToClipboard();\n    },\n    'Paste          Ctrl+V': () => {\n      editor.pasteFromClipboard();\n    },\n    'Delete         Del': () => {\n      editor.remove('right');\n    },\n    'Select All     Ctrl+A': () => {\n      editor.selectAll();\n    },\n    'Close          Esc': () => {\n      hide();\n    }\n  };\n  const element = CloudCmd.Edit.getElement();\n  Menu = supermenu(element, options, menuData);\n  Menu.addContextMenuListener();\n  Menu.show(position.x, position.y);\n}\n\nmodule.exports.isChanged = isChanged;\n\nasync function isChanged() {\n  const editor = CloudCmd.Edit.getEditor();\n  const msg = 'Apply new names?';\n  if (!editor.isChanged()) return;\n  const [, names] = await Dialog.confirm(msg);\n  names && applyNames(names);\n}\n\n//# sourceURL=file://cloudcmd/client/modules/edit-names.js");

/***/ })

/******/ });