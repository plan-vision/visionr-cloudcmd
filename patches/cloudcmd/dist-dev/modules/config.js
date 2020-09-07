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
/******/ 		"./modules/config": 0
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
/******/ 	deferredModules.push(["./client/modules/config/index.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/config/index.js":
/*!****************************************!*\
  !*** ./client/modules/config/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd, DOM, io */\n\n__webpack_require__(/*! ../../../css/config.css */ \"./css/config.css\");\n\nconst rendy = __webpack_require__(/*! rendy */ \"./node_modules/rendy/lib/rendy.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst wraptile = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst squad = __webpack_require__(/*! squad */ \"./node_modules/squad/lib/squad.js\");\n\nconst {\n  promisify\n} = __webpack_require__(/*! es6-promisify */ \"./node_modules/es6-promisify/dist/promisify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst input = __webpack_require__(/*! ./input */ \"./client/modules/config/input.js\");\n\nconst Images = __webpack_require__(/*! ../../dom/images */ \"./client/dom/images.js\");\n\nconst Events = __webpack_require__(/*! ../../dom/events */ \"./client/dom/events/index.js\");\n\nconst Files = __webpack_require__(/*! ../../dom/files */ \"./client/dom/files.js\");\n\nconst {\n  getTitle\n} = __webpack_require__(/*! ../../../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst {\n  Dialog,\n  setTitle\n} = DOM;\nconst Name = 'Config';\nCloudCmd[Name] = module.exports;\nconst loadSocket = promisify(DOM.loadSocket);\n\nconst showLoad = () => {\n  Images.show.load('top');\n};\n\nconst addKey = currify((fn, input) => {\n  Events.addKey(input, fn);\n  return input;\n});\nconst addChange = currify((fn, input) => {\n  Events.add('change', input, fn);\n  return input;\n});\nconst Config = {};\nlet Template;\nconst loadCSS = load.css;\n\nmodule.exports.init = async () => {\n  if (!CloudCmd.config('configDialog')) return;\n  showLoad();\n  const {\n    prefix\n  } = CloudCmd;\n  [Template] = await Promise.all([Files.get('config-tmpl'), loadSocket(), loadCSS(prefix + '/dist/config.css'), CloudCmd.View()]);\n  initSocket();\n};\n\nconst {\n  config,\n  Key\n} = CloudCmd;\nlet Element;\n\nfunction getHost() {\n  const {\n    host,\n    origin,\n    protocol\n  } = location;\n  const href = origin || `${protocol}//${host}`;\n  return href;\n}\n\nfunction initSocket() {\n  const href = getHost();\n  const {\n    prefixSocket,\n    prefix\n  } = CloudCmd;\n  const ONE_MINUTE = 60 * 1000;\n  const socket = io.connect(href + prefixSocket + '/config', {\n    reconnectionAttempts: Infinity,\n    reconnectionDelay: ONE_MINUTE,\n    path: prefix + '/socket.io'\n  });\n\n  const save = data => {\n    onSave(data);\n    socket.send(data);\n  };\n\n  authCheck(socket);\n  socket.on('connect', () => {\n    Config.save = save;\n  });\n  socket.on('message', onSave);\n  socket.on('log', CloudCmd.log);\n  socket.on('disconnect', () => {\n    Config.save = saveHttp;\n  });\n  socket.on('err', Dialog.alert);\n}\n\nfunction authCheck(socket) {\n  socket.emit('auth', config('username'), config('password'));\n  socket.on('reject', wraptile(Dialog.alert, 'Wrong credentials!'));\n}\n\nConfig.save = saveHttp;\nmodule.exports.show = show;\n\nasync function show() {\n  if (!CloudCmd.config('configDialog')) return;\n  await fillTemplate();\n}\n\nasync function fillTemplate() {\n  const [error, config] = await tryToCatch(Files.get, 'config');\n  if (error) return Dialog.alert('Could not load config!');\n  const {\n    editor,\n    packer,\n    columns,\n    configAuth,\n    ...obj\n  } = input.convert(config);\n  obj[editor + '-selected'] = 'selected';\n  obj[packer + '-selected'] = 'selected';\n  obj[columns + '-selected'] = 'selected';\n  obj.configAuth = configAuth ? '' : 'hidden';\n  const innerHTML = rendy(Template, obj);\n  Element = createElement('form', {\n    className: 'config',\n    innerHTML\n  });\n  const inputs = document.querySelectorAll('input, select', Element);\n  const [inputFirst] = inputs;\n  let afterShow;\n\n  if (inputFirst) {\n    onAuthChange(inputFirst.checked);\n    afterShow = inputFirst.focus.bind(inputFirst);\n  }\n\n  const getTarget = ({\n    target\n  }) => target;\n\n  const handleChange = squad(onChange, getTarget);\n  Array.from(inputs).map(addKey(onKey)).map(addChange(handleChange));\n  const autoSize = true;\n  CloudCmd.View.show(Element, {\n    autoSize,\n    afterShow\n  });\n}\n\nmodule.exports.hide = hide;\n\nfunction hide() {\n  CloudCmd.View.hide();\n}\n\nasync function onChange(el) {\n  const obj = {};\n  const name = input.getName(el);\n  const data = input.getValue(name, Element);\n  if (name === 'name') onNameChange(data);else if (name === 'auth') onAuthChange(data);\n  obj[name] = data;\n  await Config.save(obj);\n}\n\nfunction onSave(obj) {\n  for (const name of Object.keys(obj)) {\n    const data = obj[name];\n\n    CloudCmd._config(name, data);\n\n    input.setValue(name, data, Element);\n  }\n}\n\nasync function saveHttp(obj) {\n  const {\n    RESTful\n  } = DOM;\n  const [e] = await RESTful.Config.write(obj);\n  if (e) return;\n  onSave(obj);\n}\n\nfunction onAuthChange(checked) {\n  const elUsername = input.getElementByName('username', Element);\n  const elPassword = input.getElementByName('password', Element);\n  elUsername.disabled = elPassword.disabled = !checked;\n}\n\nfunction onNameChange(name) {\n  setTitle(getTitle({\n    name\n  }));\n}\n\nfunction onKey({\n  keyCode,\n  target\n}) {\n  switch (keyCode) {\n    case Key.ESC:\n      return hide();\n\n    case Key.ENTER:\n      return onChange(target);\n  }\n}\n\n//# sourceURL=file://cloudcmd/client/modules/config/index.js");

/***/ }),

/***/ "./client/modules/config/input.js":
/*!****************************************!*\
  !*** ./client/modules/config/input.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst isType = currify((type, object, name) => {\n  return typeof object[name] === type;\n});\nconst isBool = isType('boolean');\nmodule.exports.getElementByName = getElementByName;\n\nfunction getElementByName(selector, element) {\n  const str = `[data-name=\"js-${selector}\"]`;\n  return element.querySelector(str);\n}\n\nmodule.exports.getName = element => {\n  const name = element.getAttribute('data-name').replace(/^js-/, '');\n  return name;\n};\n\nmodule.exports.convert = config => {\n  const result = { ...config\n  };\n  const array = Object.keys(config);\n  const filtered = array.filter(isBool(config));\n\n  for (const name of filtered) {\n    const item = config[name];\n    result[name] = setState(item);\n  }\n\n  return result;\n};\n\nfunction setState(state) {\n  if (state) return ' checked';\n  return '';\n}\n\nmodule.exports.getValue = (name, element) => {\n  const el = getElementByName(name, element);\n  const {\n    type\n  } = el;\n\n  switch (type) {\n    case 'checkbox':\n      return el.checked;\n\n    case 'number':\n      return Number(el.value);\n\n    default:\n      return el.value;\n  }\n};\n\nmodule.exports.setValue = (name, value, element) => {\n  const el = getElementByName(name, element);\n  const {\n    type\n  } = el;\n\n  switch (type) {\n    case 'checkbox':\n      el.checked = value;\n      break;\n\n    default:\n      el.value = value;\n      break;\n  }\n};\n\n//# sourceURL=file://cloudcmd/client/modules/config/input.js");

/***/ }),

/***/ "./css/config.css":
/*!************************!*\
  !*** ./css/config.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/config.css");

/***/ })

/******/ });