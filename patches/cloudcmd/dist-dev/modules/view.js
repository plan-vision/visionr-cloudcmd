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
/******/ 		"./modules/view": 0
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
/******/ 	deferredModules.push(["./client/modules/view.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/view.js":
/*!********************************!*\
  !*** ./client/modules/view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd, DOM */\n\n__webpack_require__(/*! ../../css/view.css */ \"./css/view.css\");\n\nconst itype = __webpack_require__(/*! itype */ \"./node_modules/itype/lib/itype.js\");\n\nconst rendy = __webpack_require__(/*! rendy */ \"./node_modules/rendy/lib/rendy.js\");\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst modal = __webpack_require__(/*! @cloudcmd/modal */ \"./node_modules/@cloudcmd/modal/lib/modal.js\");\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst {\n  time\n} = __webpack_require__(/*! ../../common/util */ \"./common/util.js\");\n\nconst {\n  FS\n} = __webpack_require__(/*! ../../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst Files = __webpack_require__(/*! ../dom/files */ \"./client/dom/files.js\");\n\nconst Events = __webpack_require__(/*! ../dom/events */ \"./client/dom/events/index.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst Images = __webpack_require__(/*! ../dom/images */ \"./client/dom/images.js\");\n\nconst {\n  encode\n} = __webpack_require__(/*! ../../common/entity */ \"./common/entity.js\");\n\nconst {\n  isArray\n} = Array;\nconst testRegExp = currify((name, reg) => reg.test(name));\nconst lifo = currify((fn, el, cb, name) => fn(name, el, cb));\nconst addEvent = lifo(Events.add);\n\nconst getRegExp = ext => RegExp(`\\\\.${ext}$`, 'i');\n\nconst loadCSS = load.css;\nmodule.exports.show = show;\nmodule.exports.hide = hide;\nlet Loading = false;\nconst Name = 'View';\nCloudCmd[Name] = module.exports;\nconst Info = DOM.CurrentInfo;\nconst {\n  Key\n} = CloudCmd;\n\nconst basename = a => a.split('/').pop();\n\nlet El;\nlet TemplateAudio;\nlet Overlay;\nconst Config = {\n  beforeShow: callback => {\n    Images.hide();\n    Key.unsetBind();\n    exec(callback);\n  },\n  beforeClose: callback => {\n    Events.rmKey(listener);\n    Key.setBind();\n    exec(callback);\n  },\n  afterShow: callback => {\n    El.focus();\n    exec(callback);\n  },\n  onOverlayClick,\n  afterClose: exec,\n  autoSize: false,\n  helpers: {\n    title: {}\n  }\n};\n\nmodule.exports.init = async () => {\n  await loadAll();\n  const events = ['click', 'contextmenu'];\n  events.forEach(addEvent(Overlay, onOverlayClick));\n};\n\nasync function show(data, options) {\n  const prefixURL = CloudCmd.prefixURL + FS;\n  if (Loading) return;\n  if (!options || options.bindKeys !== false) Events.addKey(listener);\n  El = createElement('div', {\n    className: 'view',\n    notAppend: true\n  });\n  El.tabIndex = 0;\n\n  if (data) {\n    if (isArray(data)) El.append(...data);else El.append(data);\n    modal.open(El, initConfig(Config, options));\n    return;\n  }\n\n  Images.show.load();\n  const path = prefixURL + Info.path;\n  const type = getType(path);\n\n  switch (type) {\n    default:\n      return viewFile();\n\n    case 'image':\n      return viewImage(prefixURL);\n\n    case 'media':\n      return viewMedia(path);\n\n    case 'pdf':\n      return viewPDF(path);\n  }\n}\n\nfunction viewPDF(src) {\n  const element = createElement('iframe', {\n    src,\n    width: '100%',\n    height: '100%'\n  });\n  element.addEventListener('load', () => {\n    element.contentWindow.addEventListener('keydown', listener);\n  });\n  const options = { ...Config\n  };\n  if (CloudCmd.config('showFileName')) options.title = Info.name;\n  modal.open(element, options);\n}\n\nasync function viewMedia(path) {\n  const [e, element] = await getMediaElement(path);\n  if (e) return alert(e);\n  const allConfig = { ...Config,\n    ...{\n      autoSize: true,\n      afterShow: () => {\n        element.querySelector('audio, video').focus();\n      }\n    }\n  };\n  modal.open(element, allConfig);\n}\n\nfunction viewFile() {\n  Info.getData((error, data) => {\n    if (error) return Images.hide();\n    const element = document.createTextNode(data);\n    const options = { ...Config\n    };\n    if (CloudCmd.config('showFileName')) options.title = Info.name;\n    El.append(element);\n    modal.open(El, options);\n  });\n}\n\nfunction initConfig(Config, options) {\n  const config = { ...Config\n  };\n  if (!options) return config;\n  const names = Object.keys(options);\n\n  for (const name of names) {\n    const isConfig = !!config[name];\n    const item = options[name];\n    const isFunc = itype.function(item);\n\n    if (!isFunc || !isConfig) {\n      config[name] = options[name];\n      continue;\n    }\n\n    const func = config[name];\n\n    config[name] = () => {\n      exec.series([func, item]);\n    };\n  }\n\n  return config;\n}\n\nfunction hide() {\n  modal.close();\n}\n\nfunction viewImage(prefixURL) {\n  const makeTitle = path => {\n    return {\n      href: prefixURL + path,\n      title: encode(basename(path))\n    };\n  };\n\n  const names = Info.files.map(DOM.getCurrentPath).filter(isImage);\n  const titles = names.map(makeTitle);\n  const index = names.indexOf(Info.path);\n  const imageConfig = {\n    index,\n    autoSize: true,\n    arrows: true,\n    keys: true,\n    helpers: {\n      title: {}\n    }\n  };\n  const config = { ...Config,\n    ...imageConfig\n  };\n  modal.open(titles, config);\n}\n\nfunction isImage(name) {\n  const images = ['jp(e|g|eg)', 'gif', 'png', 'bmp', 'webp', 'svg', 'ico'];\n  return images.map(getRegExp).some(testRegExp(name));\n}\n\nfunction isMedia(name) {\n  return isAudio(name) || isVideo(name);\n}\n\nfunction isAudio(name) {\n  return /\\.(mp3|ogg|m4a)$/i.test(name);\n}\n\nfunction isVideo(name) {\n  return /\\.(mp4|avi|webm)$/i.test(name);\n}\n\nconst isPDF = name => /\\.(pdf)$/i.test(name);\n\nfunction getType(name) {\n  if (isPDF(name)) return 'pdf';\n  if (isImage(name)) return 'image';\n  if (isMedia(name)) return 'media';\n}\n\nasync function getMediaElement(src) {\n  check(src);\n  const [error, template] = await tryToCatch(Files.get, 'view/media-tmpl');\n  if (error) return [error];\n  const {\n    name\n  } = Info;\n  if (!TemplateAudio) TemplateAudio = template;\n  const is = isAudio(name);\n  const type = is ? 'audio' : 'video';\n  const innerHTML = rendy(TemplateAudio, {\n    src,\n    type,\n    name\n  });\n  const element = createElement('div', {\n    innerHTML\n  });\n  return [null, element];\n}\n\nfunction check(src) {\n  if (typeof src !== 'string') throw Error('src should be a string!');\n}\n/**\n * function loads css and js of FancyBox\n * @callback   -  executes, when everything loaded\n */\n\n\nasync function loadAll() {\n  const {\n    prefix\n  } = CloudCmd;\n  time(Name + ' load');\n  Loading = true;\n  await loadCSS(`${prefix}/dist/view.css`);\n  Loading = false;\n}\n\nfunction onOverlayClick(event) {\n  const position = {\n    x: event.clientX,\n    y: event.clientY\n  };\n  setCurrentByPosition(position);\n}\n\nfunction setCurrentByPosition(position) {\n  const element = DOM.getCurrentByPosition(position);\n  if (!element) return;\n  const {\n    files,\n    filesPassive\n  } = Info;\n  const isFiles = ~files.indexOf(element);\n  const isFilesPassive = ~filesPassive.indexOf(element);\n  if (!isFiles && !isFilesPassive) return;\n  const isCurrent = DOM.isCurrentFile(element);\n  if (isCurrent) return;\n  DOM.setCurrentFile(element);\n}\n\nfunction listener({\n  keyCode\n}) {\n  if (keyCode === Key.ESC) hide();\n}\n\n//# sourceURL=file://cloudcmd/client/modules/view.js");

/***/ }),

/***/ "./css/view.css":
/*!**********************!*\
  !*** ./css/view.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/view.css");

/***/ })

/******/ });