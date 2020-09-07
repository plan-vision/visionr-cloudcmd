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
/******/ 		"./modules/user-menu": 0
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
/******/ 	deferredModules.push(["./client/modules/user-menu/index.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/user-menu/get-user-menu.js":
/*!***************************************************!*\
  !*** ./client/modules/user-menu/get-user-menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = menuFn => {\n  const module = {};\n  const fn = Function('module', menuFn);\n  fn(module);\n  return module.exports;\n};\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/get-user-menu.js");

/***/ }),

/***/ "./client/modules/user-menu/index.js":
/*!*******************************************!*\
  !*** ./client/modules/user-menu/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd, DOM */\n\n__webpack_require__(/*! ../../../css/user-menu.css */ \"./css/user-menu.css\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst wraptile = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst fullstore = __webpack_require__(/*! fullstore */ \"./node_modules/fullstore/lib/fullstore.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst tryCatch = __webpack_require__(/*! try-catch */ \"./node_modules/try-catch/lib/try-catch.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst {\n  codeFrameColumns\n} = __webpack_require__(/*! @babel/code-frame */ \"./node_modules/@babel/code-frame/lib/index.js\");\n\nconst Images = __webpack_require__(/*! ../../dom/images */ \"./client/dom/images.js\");\n\nconst Dialog = __webpack_require__(/*! ../../dom/dialog */ \"./client/dom/dialog.js\");\n\nconst getUserMenu = __webpack_require__(/*! ./get-user-menu */ \"./client/modules/user-menu/get-user-menu.js\");\n\nconst navigate = __webpack_require__(/*! ./navigate */ \"./client/modules/user-menu/navigate.js\");\n\nconst parseError = __webpack_require__(/*! ./parse-error */ \"./client/modules/user-menu/parse-error.js\");\n\nconst parseUserMenu = __webpack_require__(/*! ./parse-user-menu */ \"./client/modules/user-menu/parse-user-menu.js\");\n\nconst {\n  runSelected\n} = __webpack_require__(/*! ./run */ \"./client/modules/user-menu/run.js\");\n\nconst loadCSS = load.css;\nconst sourceStore = fullstore();\nconst Name = 'UserMenu';\nCloudCmd[Name] = module.exports;\nconst {\n  Key\n} = CloudCmd;\n\nmodule.exports.init = async () => {\n  await Promise.all([loadCSS(`${CloudCmd.prefix}/dist/user-menu.css`), CloudCmd.View()]);\n};\n\nmodule.exports.show = show;\nmodule.exports.hide = hide;\nconst {\n  CurrentInfo\n} = DOM;\n\nasync function show() {\n  Images.show.load('top');\n  const {\n    dirPath\n  } = CurrentInfo;\n  const res = await fetch(`${CloudCmd.prefix}/api/v1/user-menu?dir=${dirPath}`);\n  const source = await res.text();\n  const [error, userMenu] = tryCatch(getUserMenu, source);\n  Images.hide();\n  if (error) return Dialog.alert(getCodeFrame({\n    error,\n    source\n  }));\n  sourceStore(source);\n  const {\n    names,\n    keys,\n    items,\n    settings\n  } = parseUserMenu(userMenu);\n  if (settings.run) return runSelected(settings.select, items, runUserMenu);\n  const button = createElement('button', {\n    className: 'cloudcmd-user-menu-button',\n    innerText: 'User Menu'\n  });\n  const select = createElement('select', {\n    className: 'cloudcmd-user-menu',\n    innerHTML: fillTemplate(names),\n    size: 10\n  });\n  button.addEventListener('click', onButtonClick(items, select));\n  select.addEventListener('dblclick', onDblClick(userMenu));\n  select.addEventListener('keydown', onKeyDown({\n    keys,\n    userMenu\n  }));\n\n  const afterShow = () => select.focus();\n\n  const autoSize = true;\n  CloudCmd.View.show([button, select], {\n    autoSize,\n    afterShow\n  });\n}\n\nfunction fillTemplate(options) {\n  const result = [];\n\n  for (const option of options) result.push(`<option>${option}</option>`);\n\n  return result.join('');\n}\n\nfunction hide() {\n  CloudCmd.View.hide();\n}\n\nconst onDblClick = currify(async (items, e) => {\n  const {\n    value\n  } = e.target;\n  await runUserMenu(items[value]);\n});\nconst onButtonClick = wraptile(async (items, {\n  value\n}) => {\n  await runUserMenu(items[value]);\n});\nconst onKeyDown = currify(async ({\n  keys,\n  userMenu\n}, e) => {\n  const {\n    keyCode,\n    target\n  } = e;\n  const keyName = e.key.toUpperCase();\n  e.preventDefault();\n  e.stopPropagation();\n  let value;\n  if (keyCode === Key.ESC) return hide();else if (keyCode === Key.ENTER) value = userMenu[target.value];else if (keys[keyName]) value = keys[keyName];else return navigate(target, e);\n  await runUserMenu(value);\n});\n\nconst runUserMenu = async fn => {\n  hide();\n  const [error] = await tryToCatch(fn, {\n    DOM,\n    CloudCmd,\n    tryToCatch\n  });\n  if (!error) return;\n  const source = sourceStore();\n  return Dialog.alert(getCodeFrame({\n    error,\n    source\n  }));\n};\n\nfunction getCodeFrame({\n  error,\n  source\n}) {\n  const {\n    code\n  } = error;\n  if (!code || code === 'frame') return error.message;\n  const [line, column] = parseError(error);\n  const start = {\n    line,\n    column\n  };\n  const location = {\n    start\n  };\n  const frame = codeFrameColumns(source, location, {\n    message: error.message,\n    highlightCode: false\n  });\n  return `<pre>${frame}</pre>`;\n}\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/index.js");

/***/ }),

/***/ "./client/modules/user-menu/navigate.js":
/*!**********************************************!*\
  !*** ./client/modules/user-menu/navigate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  J,\n  K,\n  UP,\n  DOWN\n} = __webpack_require__(/*! ../../key/key.js */ \"./client/key/key.js\");\n\nmodule.exports = (el, {\n  keyCode\n}) => {\n  if (keyCode === DOWN || keyCode === J) return down(el);\n  if (keyCode === UP || keyCode === K) return up(el);\n};\n\nfunction down(el) {\n  const {\n    length\n  } = el;\n  if (el.selectedIndex === length - 1) el.selectedIndex = 0;else ++el.selectedIndex;\n}\n\nfunction up(el) {\n  const {\n    length\n  } = el;\n  if (!el.selectedIndex) el.selectedIndex = length - 1;else --el.selectedIndex;\n}\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/navigate.js");

/***/ }),

/***/ "./client/modules/user-menu/parse-error.js":
/*!*************************************************!*\
  !*** ./client/modules/user-menu/parse-error.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst isNumber = a => typeof a === 'number';\n\nmodule.exports = error => {\n  const {\n    lineNumber,\n    columnNumber\n  } = error; // thank you firefox\n\n  if (isNumber(lineNumber) && isNumber(columnNumber)) return [lineNumber, columnNumber];\n  const before = error.stack.indexOf('>');\n  const str = error.stack.slice(before + 1);\n  const after = str.indexOf(')');\n  const newStr = str.slice(1, after);\n  const [line, column] = newStr.split(':');\n  return [Number(line), Number(column)];\n};\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/parse-error.js");

/***/ }),

/***/ "./client/modules/user-menu/parse-user-menu.js":
/*!*****************************************************!*\
  !*** ./client/modules/user-menu/parse-user-menu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  entries,\n  assign\n} = Object;\n\nmodule.exports = userMenu => {\n  const names = [];\n  const keys = {};\n  const items = {};\n  const settings = {};\n\n  for (const [str, fn] of entries(userMenu)) {\n    if (str === '__settings') {\n      assign(settings, userMenu[str]);\n      continue;\n    }\n\n    if (/^_/.test(str)) {\n      continue;\n    }\n\n    names.push(str);\n    const [key, name] = str.split(' - ');\n    keys[key] = fn;\n    items[name] = fn;\n  }\n\n  return {\n    names,\n    keys,\n    items,\n    settings\n  };\n};\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/parse-user-menu.js");

/***/ }),

/***/ "./client/modules/user-menu/run.js":
/*!*****************************************!*\
  !*** ./client/modules/user-menu/run.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.runSelected = async (selectedItems, items, runUserMenu) => {\n  for (const selected of selectedItems) {\n    await runUserMenu(items[selected]);\n  }\n};\n\n//# sourceURL=file://cloudcmd/client/modules/user-menu/run.js");

/***/ }),

/***/ "./css/user-menu.css":
/*!***************************!*\
  !*** ./css/user-menu.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/user-menu.css");

/***/ })

/******/ });