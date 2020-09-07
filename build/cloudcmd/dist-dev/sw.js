var serviceWorkerOption = {
  "assets": [
    "/columns/name-size-date.css",
    "/columns/name-size.css"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/sw/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/sw/sw.js":
/*!*************************!*\
  !*** ./client/sw/sw.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst isDev = \"development\" === 'development';\n\nconst isGet = a => a.method === 'GET';\n\nconst isBasic = a => a.type === 'basic';\n\nconst wait = currify((f, e) => e.waitUntil(f()));\nconst respondWith = currify((f, e) => {\n  const {\n    request\n  } = e;\n  const {\n    url\n  } = request;\n  const pathname = getPathName(url);\n  if (/\\/$/.test(url) || /\\^\\/fs/.test(pathname)) return;\n  if (!isGet(request)) return;\n  if (!isBasic(request)) return;\n  if (/^\\/api/.test(pathname)) return;\n  if (/^socket.io/.test(pathname)) return;\n  e.respondWith(f(e));\n});\n\nconst getPathName = url => new URL(url).pathname;\n\nconst date = \"Wed May 20 2020 18:37:12 GMT+0300 (Eastern European Summer Time)\";\nconst NAME = `cloudcmd: ${date}`;\n\nconst createRequest = a => new Request(a, {\n  credentials: 'same-origin'\n});\n\nconst getRequest = (a, request) => {\n  if (a !== '/') return request;\n  return createRequest('/');\n};\n\nself.addEventListener('install', wait(onInstall));\nself.addEventListener('fetch', respondWith(onFetch));\nself.addEventListener('activate', wait(onActivate));\n\nasync function onActivate() {\n  console.info(`cloudcmd: sw: activate: ${NAME}`);\n  await self.clients.claim();\n  const keys = await caches.keys();\n  const deleteCache = caches.delete.bind(caches);\n  await Promise.all(keys.map(deleteCache));\n}\n\nasync function onInstall() {\n  console.info(`cloudcmd: sw: install: ${NAME}`);\n  await self.skipWaiting();\n}\n\nasync function onFetch(event) {\n  const {\n    request\n  } = event;\n  const {\n    url\n  } = request;\n  const pathname = getPathName(url);\n  const newRequest = getRequest(pathname, event.request);\n  const cache = await caches.open(NAME);\n  const response = await cache.match(request);\n  if (!isDev && response) return response;\n  const [e, resp] = await tryToCatch(fetch, newRequest, {\n    credentials: 'same-origin'\n  });\n  if (e) return new Response(e.message);\n  await addToCache(request, resp.clone());\n  return resp;\n}\n\nasync function addToCache(request, response) {\n  const cache = await caches.open(NAME);\n  return cache.put(request, response);\n}\n\n//# sourceURL=file://cloudcmd/client/sw/sw.js");

/***/ }),

/***/ "./node_modules/currify/lib/currify.js":
/*!*********************************************!*\
  !*** ./node_modules/currify/lib/currify.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst f = (fn) => [\n    /*eslint no-unused-vars: 0*/\n    function (a) {return fn(...arguments);},\n    function (a, b) {return fn(...arguments);},\n    function (a, b, c) {return fn(...arguments);},\n    function (a, b, c, d) {return fn(...arguments);},\n    function (a, b, c, d, e) {return fn(...arguments);},\n];\n\nconst currify = (fn, ...args) => {\n    check(fn);\n    \n    if (args.length >= fn.length)\n        return fn(...args);\n    \n    const again = (...args2) => {\n        return currify(fn, ...[...args, ...args2]);\n    };\n    \n    const count = fn.length - args.length - 1;\n    const func = f(again)[count];\n    \n    return func || again;\n};\n\nmodule.exports = currify;\n\nfunction check(fn) {\n    if (typeof fn !== 'function')\n        throw Error('fn should be function!');\n}\n\n\n\n//# sourceURL=file://cloudcmd/node_modules/currify/lib/currify.js");

/***/ }),

/***/ "./node_modules/try-to-catch/lib/try-to-catch.js":
/*!*******************************************************!*\
  !*** ./node_modules/try-to-catch/lib/try-to-catch.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = async (fn, ...args) => {\n    check(fn);\n    \n    try {\n        return [null, await fn(...args)];\n    } catch(e) {\n        return [e];\n    }\n};\n\nfunction check(fn) {\n    if (typeof fn !== 'function')\n        throw Error('fn should be a function!');\n}\n\n\n\n//# sourceURL=file://cloudcmd/node_modules/try-to-catch/lib/try-to-catch.js");

/***/ })

/******/ });