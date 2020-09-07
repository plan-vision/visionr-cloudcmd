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
/******/ 		"./modules/menu": 0
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
/******/ 	deferredModules.push(["./client/modules/menu.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/modules/menu.js":
/*!********************************!*\
  !*** ./client/modules/menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global CloudCmd, DOM */\n\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst wrap = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst supermenu = __webpack_require__(/*! supermenu */ \"./node_modules/supermenu/lib/supermenu.js\");\n\nconst createElement = __webpack_require__(/*! @cloudcmd/create-element */ \"./node_modules/@cloudcmd/create-element/lib/create-element.js\");\n\nconst {\n  FS\n} = __webpack_require__(/*! ../../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst {\n  getIdBySrc\n} = __webpack_require__(/*! ../dom/load */ \"./client/dom/load.js\");\n\nconst RESTful = __webpack_require__(/*! ../dom/rest */ \"./client/dom/rest.js\");\n\nconst {\n  config,\n  Key\n} = CloudCmd;\nconst {\n  Buffer,\n  Events,\n  Dialog,\n  Images\n} = DOM;\nconst Info = DOM.CurrentInfo;\nconst alertNoFiles = Dialog.alert.noFiles;\nconst uploadTo = wrap(_uploadTo);\nlet MenuShowedName;\nlet MenuContext;\nlet MenuContextFile;\nmodule.exports.ENABLED = false;\nCloudCmd.Menu = exports;\n\nmodule.exports.init = () => {\n  const {\n    isAuth,\n    menuDataFile\n  } = getFileMenuData();\n  const fm = DOM.getFM();\n  const menuData = getMenuData(isAuth);\n  const options = getOptions({\n    type: 'context'\n  });\n  const optionsFile = getOptions({\n    type: 'file'\n  });\n  MenuContext = supermenu(fm, options, menuData);\n  MenuContextFile = supermenu(fm, optionsFile, menuDataFile);\n  MenuContext.addContextMenuListener();\n  MenuContextFile.addContextMenuListener();\n  Events.addKey(listener);\n};\n\nmodule.exports.hide = hide;\n\nfunction hide() {\n  MenuContext.hide();\n  MenuContextFile.hide();\n}\n\nmodule.exports.show = position => {\n  const {\n    x,\n    y\n  } = getPosition(position);\n  MenuContext.show(x, y);\n  MenuContextFile.show(x, y);\n  Images.hide();\n};\n\nfunction getPosition(position) {\n  if (position) return {\n    x: position.x,\n    y: position.y\n  };\n  return getCurrentPosition();\n}\n\nfunction getMenuNameByEl(el) {\n  if (!el) return 'context';\n  const name = DOM.getCurrentName(el);\n  if (name === '..') return 'context';\n  return 'contextFile';\n}\n\nfunction getOptions({\n  type\n}) {\n  let name;\n  let func;\n\n  if (type === 'context') {\n    name = 'context';\n    func = Key.unsetBind;\n  } else if (type === 'file') {\n    name = 'contextFile';\n  }\n\n  const options = {\n    icon: true,\n    beforeClose: Key.setBind,\n    beforeShow: exec.with(beforeShow, func),\n    beforeClick,\n    name\n  };\n  return options;\n}\n\nfunction getMenuData(isAuth) {\n  const menu = {\n    'Paste': Buffer.paste,\n    'New': {\n      File: DOM.promptNewFile,\n      Directory: DOM.promptNewDir\n    },\n    'Upload': () => {\n      CloudCmd.Upload.show();\n    },\n    'Upload From Cloud': uploadFromCloud,\n    '(Un)Select All': DOM.toggleAllSelectedFiles\n  };\n  if (isAuth) menu['Log Out'] = CloudCmd.logOut;\n  return menu;\n}\n\nfunction getFileMenuData() {\n  const isAuth = CloudCmd.config('auth');\n  const show = wrap(name => {\n    CloudCmd[name].show();\n  });\n  const menuBottom = getMenuData(isAuth);\n  const menuTop = {\n    'View': show('View'),\n    'Edit': show('EditFile'),\n    'Rename': () => {\n      setTimeout(DOM.renameCurrent, 100);\n    },\n    'Delete': () => {\n      CloudCmd.Operation.show('delete');\n    },\n    'Pack': () => {\n      CloudCmd.Operation.show('pack');\n    },\n    'Extract': () => {\n      CloudCmd.Operation.show('extract');\n    },\n    'Download': preDownload,\n    'Upload To Cloud': uploadTo('Cloud'),\n    'Cut': () => {\n      isCurrent(Buffer.cut, alertNoFiles);\n    },\n    'Copy': () => {\n      isCurrent(Buffer.copy, alertNoFiles);\n    }\n  };\n  const menuDataFile = { ...menuTop,\n    ...menuBottom\n  };\n  return {\n    isAuth,\n    menuDataFile\n  };\n}\n\nfunction isCurrent(yesFn, noFn) {\n  if (Info.name !== '..') return yesFn();\n  noFn();\n}\n\nfunction isPath(x, y) {\n  const {\n    panel\n  } = Info;\n  const isEmptyRoot = !panel;\n  if (isEmptyRoot) return false;\n  const el = document.elementFromPoint(x, y);\n  const elements = panel.querySelectorAll('[data-name=\"js-path\"] *');\n  const is = ~[].indexOf.call(elements, el);\n  return is;\n}\n\nfunction beforeShow(callback, params) {\n  const {\n    name\n  } = params;\n  const el = DOM.getCurrentByPosition({\n    x: params.x,\n    y: params.y\n  });\n  const menuName = getMenuNameByEl(el);\n  let isShow = menuName !== 'contextFile';\n  if (params.name === 'contextFile') isShow = !isShow;\n  if (isShow) MenuShowedName = name;\n  exec(callback);\n  if (isShow) isShow = isPath(params.x, params.y);\n  return isShow;\n}\n\nfunction beforeClick(name) {\n  return MenuShowedName !== name;\n}\n\nfunction _uploadTo(nameModule) {\n  Info.getData((error, data) => {\n    if (error) return;\n    const {\n      name\n    } = Info;\n    CloudCmd.execFromModule(nameModule, 'uploadFile', name, data);\n  });\n  CloudCmd.log('Uploading to ' + name + '...');\n}\n\nfunction uploadFromCloud() {\n  Images.show.load('top');\n  CloudCmd.execFromModule('Cloud', 'saveFile', async (currentName, data) => {\n    const path = DOM.getCurrentDirPath() + currentName;\n    const [e] = await RESTful.write(path, data);\n    if (e) return;\n    await CloudCmd.refresh({\n      currentName\n    });\n  });\n}\n\nfunction preDownload() {\n  download(config('packer'));\n}\n\nfunction download(type) {\n  const TIME = 30 * 1000;\n  const {\n    prefixURL\n  } = CloudCmd;\n  const PACK = '/pack';\n  const date = Date.now();\n  const files = DOM.getActiveFiles();\n  if (!files.length) return alertNoFiles();\n\n  for (const file of files) {\n    const selected = DOM.isSelected(file);\n    const isDir = DOM.isCurrentIsDir(file);\n    const path = DOM.getCurrentPath(file);\n    CloudCmd.log('downloading file ' + path + '...');\n    /*\n      * if we send ajax request -\n      * no need in hash so we escape #\n      * and all other characters, like \"%\"\n      */\n\n    const encodedPath = encodeURI(path).replace(/#/g, '%23');\n    const id = getIdBySrc(path);\n    let src;\n    if (isDir) src = prefixURL + PACK + encodedPath + DOM.getPackerExt(type);else src = prefixURL + FS + encodedPath + '?download';\n    const element = createElement('iframe', {\n      id: id + '-' + date,\n      async: false,\n      className: 'hidden',\n      src\n    });\n    const {\n      body\n    } = document;\n    const removeChild = body.removeChild.bind(body, element);\n    setTimeout(removeChild, TIME);\n    if (selected) DOM.toggleSelectedFile(file);\n  }\n}\n\nfunction getCurrentPosition() {\n  const current = Info.element;\n  const rect = current.getBoundingClientRect();\n  const position = {\n    x: Math.round(rect.left + rect.width / 3),\n    y: Math.round(rect.top)\n  };\n  return position;\n}\n\nfunction listener(event) {\n  const {\n    F9,\n    ESC\n  } = Key;\n  const key = event.keyCode;\n  const isBind = Key.isBind();\n  if (!isBind) return;\n  if (key === ESC) return hide();\n\n  if (key === F9) {\n    const position = getCurrentPosition();\n    MenuContext.show(position.x, position.y);\n    event.preventDefault();\n  }\n}\n\n//# sourceURL=file://cloudcmd/client/modules/menu.js");

/***/ })

/******/ });