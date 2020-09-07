(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["restafary"] = factory();
	else
		root["restafary"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet FS = '/api/v1/fs';\nconst isFunc = (a) => typeof a === 'function';\n\nmodule.exports.prefix = (prefix) => {\n    FS = prefix;\n};\n\nmodule.exports.delete = (url, data, callback) => {\n    if (!callback && isFunc(data)) {\n        callback = data;\n        data = null;\n    }\n    \n    sendRequest({\n        method      : 'DELETE',\n        url         : FS + url,\n        data,\n        callback,\n    });\n};\n\nmodule.exports.patch = (url, data, callback) => {\n    if (!callback && isFunc(data)) {\n        callback = data;\n        data = null;\n    }\n    \n    sendRequest({\n        method      : 'PATCH',\n        url         : FS + url,\n        data,\n        callback,\n    });\n};\n\nmodule.exports.write = (url, data, callback) => {\n    if (!callback && isFunc(data)) {\n        callback = data;\n        data = null;\n    }\n    \n    sendRequest({\n        method      : 'PUT',\n        url         : FS + url,\n        data,\n        callback,\n    });\n};\n\nmodule.exports.read = (url, callback) => {\n    sendRequest({\n        method      : 'GET',\n        url         : FS + url,\n        callback,\n    });\n};\n\nfunction sendRequest({url, data, method, callback}) {\n    ajax({\n        method,\n        data,\n        url: escape(url),\n    }, callback);\n}\n\n/*\n * when we send ajax request -\n * no need in hash so we escape #\n */\nmodule.exports._escape = escape;\nfunction escape(str) {\n    return encodeURI(str)\n        .replace(/#/g, '%23');\n}\n\nfunction ajax(params, callback) {\n    const {\n        url,\n        data,\n        method,\n    } = params;\n    const request = new XMLHttpRequest();\n    \n    if (typeof callback !== 'function')\n        throw Error('Callback should be function!');\n    \n    const load = () => {\n        if (request.status >= 200 && request.status < 400)\n            return callback(null, request.responseText);\n        \n        callback(Error(request.responseText));\n    };\n    \n    request.open(method, url, true);\n    request.addEventListener('error', callback);\n    request.addEventListener('load', load);\n    \n    request.send(data);\n}\n\n\n\n//# sourceURL=file://restafary/client/index.js");

/***/ })

/******/ });
});