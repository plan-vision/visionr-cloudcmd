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
/******/ 		"cloudcmd": 0
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
/******/ 	deferredModules.push(["./client/cloudcmd.js","cloudcmd.common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global DOM */\n\nconst Emitify = __webpack_require__(/*! emitify */ \"./node_modules/emitify/lib/emitify.js\");\n\nconst inherits = __webpack_require__(/*! inherits */ \"./node_modules/inherits/inherits_browser.js\");\n\nconst rendy = __webpack_require__(/*! rendy */ \"./node_modules/rendy/lib/rendy.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst pascalCase = __webpack_require__(/*! just-pascal-case */ \"./node_modules/just-pascal-case/index.js\");\n\nconst isDev = \"development\" === 'development';\n\nconst Images = __webpack_require__(/*! ./dom/images */ \"./client/dom/images.js\");\n\nconst {\n  unregisterSW\n} = __webpack_require__(/*! ./sw/register */ \"./client/sw/register.js\");\n\nconst getJsonFromFileTable = __webpack_require__(/*! ./get-json-from-file-table */ \"./client/get-json-from-file-table.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst noJS = a => a.replace(/.js$/, '');\n\nconst {\n  apiURL,\n  formatMsg,\n  buildFromJSON\n} = __webpack_require__(/*! ../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst loadModule = __webpack_require__(/*! ./load-module */ \"./client/load-module.js\");\n\ninherits(CloudCmdProto, Emitify);\nmodule.exports = new CloudCmdProto(DOM);\nload.addErrorListener((e, src) => {\n  const msg = `file ${src} could not be loaded`;\n  Images.show.error(msg);\n});\n\nfunction CloudCmdProto(DOM) {\n  let Listeners;\n\n  const log = (...a) => {\n    if (!isDev) return;\n    console.log(...a);\n  };\n\n  Emitify.call(this);\n  const CloudCmd = this;\n  const Info = DOM.CurrentInfo;\n  const {\n    Storage,\n    Files\n  } = DOM;\n  this.log = log;\n  this.prefix = '';\n  this.prefixSocket = '';\n  this.prefixURL = '';\n  this.DIRCLIENT = '/dist/';\n  this.DIRCLIENT_MODULES = this.DIRCLIENT + 'modules/';\n  this.MIN_ONE_PANEL_WIDTH = 1155;\n  this.HOST = location.origin || location.protocol + '//' + location.host;\n  const TITLE = 'Cloud Commander';\n  this.TITLE = TITLE;\n  this.sort = {\n    left: 'name',\n    right: 'name'\n  };\n  this.order = {\n    left: 'asc',\n    right: 'asc'\n  };\n  /**\n   * Функция привязываеться ко всем ссылкам и\n   *  загружает содержимое каталогов\n   *\n   * @param params - {\n   *          paramLink - ссылка\n   *          needRefresh - необходимость обязательной загрузки данных с сервера\n   *          panel\n   *      }\n   * @param callback\n   */\n\n  this.loadDir = async params => {\n    const p = params;\n    const refresh = p.isRefresh;\n    const {\n      panel,\n      history,\n      noCurrent,\n      currentName\n    } = p;\n    let panelChanged;\n\n    if (!noCurrent && panel && panel !== Info.panel) {\n      DOM.changePanel();\n      panelChanged = true;\n    }\n\n    let imgPosition;\n    if (panelChanged || refresh || !history) imgPosition = 'top';\n    Images.show.load(imgPosition, panel);\n    /* загружаем содержимое каталога */\n\n    await ajaxLoad(p.path, {\n      refresh,\n      history,\n      noCurrent,\n      currentName\n    }, panel);\n  };\n  /**\n   * Конструктор CloudClient, который\n   * выполняет весь функционал по\n   * инициализации\n   */\n\n\n  this.init = async (prefix, config) => {\n    CloudCmd.prefix = prefix;\n    CloudCmd.prefixURL = `${prefix}${apiURL}`;\n    CloudCmd.prefixSocket = config.prefixSocket;\n\n    CloudCmd.config = key => config[key];\n\n    CloudCmd.config.if = currify((key, fn, a) => config[key] && fn(a));\n\n    CloudCmd._config = (key, value) => {\n      /*\n       * should be called from config.js only\n       * after successful update on server\n       */\n      if (key === 'password') return;\n      config[key] = value;\n    };\n\n    if (config.oneFilePanel) CloudCmd.MIN_ONE_PANEL_WIDTH = Infinity;\n    if (!document.body.scrollIntoViewIfNeeded) await load.js(prefix + CloudCmd.DIRCLIENT_MODULES + 'polyfill.js');\n    await initModules();\n    await baseInit();\n    await loadStyle();\n    CloudCmd.route(location.hash);\n  };\n\n  async function loadStyle() {\n    const {\n      prefix\n    } = CloudCmd;\n    const name = prefix + '/dist/cloudcmd.common.css';\n    await load.css(name);\n  }\n\n  this.route = path => {\n    const query = path.split('/');\n    if (!path) return;\n    const [kebabModule] = query;\n    const module = noJS(pascalCase(kebabModule.slice(1)));\n    const file = query[1];\n    const current = DOM.getCurrentByName(file);\n\n    if (file && !current) {\n      const msg = formatMsg('set current file', file, 'error');\n      CloudCmd.log(msg);\n      return;\n    }\n\n    DOM.setCurrentFile(current);\n    CloudCmd.execFromModule(module, 'show');\n  };\n\n  this.logOut = async () => {\n    const url = CloudCmd.prefix + '/logout';\n\n    const error = () => document.location.reload();\n\n    const {\n      prefix\n    } = CloudCmd;\n    await DOM.Storage.clear();\n    unregisterSW(prefix);\n    DOM.load.ajax({\n      url,\n      error\n    });\n  };\n\n  const initModules = async () => {\n    CloudCmd.Key = new CloudCmd.Key();\n    CloudCmd.Key.bind();\n    const [, modules] = await tryToCatch(Files.get, 'modules');\n    const showLoad = Images.show.load;\n    const doBefore = {\n      edit: showLoad,\n      menu: showLoad\n    };\n\n    const load = (name, path, dobefore) => {\n      loadModule({\n        name,\n        path,\n        dobefore\n      });\n    };\n\n    if (!modules) return;\n\n    for (const module of modules.local) {\n      load(null, module, doBefore[module]);\n    }\n  };\n\n  async function saveCurrentName(currentName) {\n    await Storage.set('current-name', currentName);\n  }\n\n  async function baseInit() {\n    const files = DOM.getFiles();\n    CloudCmd.on('current-file', DOM.updateCurrentInfo);\n    CloudCmd.on('current-name', saveCurrentName);\n    const name = await Storage.get('current-name');\n    const currentFile = name && DOM.getCurrentByName(name) || files[0];\n    /* выделяем строку с первым файлом */\n\n    if (files) DOM.setCurrentFile(currentFile, {\n      // when hash is present\n      // it should be handled with this.route\n      // overwre otherwise\n      history: !location.hash\n    });\n    const dirPath = DOM.getCurrentDirPath();\n    Listeners = CloudCmd.Listeners;\n    Listeners.init();\n    const panels = getPanels();\n    panels.forEach(Listeners.setOnPanel);\n    Listeners.initKeysPanel();\n    if (!CloudCmd.config('dirStorage')) return;\n    const data = await Storage.get(dirPath);\n    if (!data) await Storage.set(dirPath, getJsonFromFileTable());\n  }\n\n  function getPanels() {\n    const panels = ['left'];\n    if (CloudCmd.config('oneFilePanel')) return panels;\n    return [...panels, 'right'];\n  }\n\n  this.execFromModule = async (moduleName, funcName, ...args) => {\n    await CloudCmd[moduleName]();\n    const func = CloudCmd[moduleName][funcName];\n    func(...args);\n  };\n\n  this.refresh = async (options = {}) => {\n    const {\n      panel = Info.panel,\n      currentName\n    } = options;\n    const path = DOM.getCurrentDirPath(panel);\n    const isRefresh = true;\n    const history = false;\n    const noCurrent = options ? options.noCurrent : false;\n    await CloudCmd.loadDir({\n      path,\n      isRefresh,\n      history,\n      panel,\n      noCurrent,\n      currentName\n    });\n  };\n  /**\n   * Функция загружает json-данные о Файловой Системе\n   * через ajax-запрос.\n   * @param path - каталог для чтения\n   * @param options\n   * { refresh, history } - необходимость обновить данные о каталоге\n   * @param panel\n   * @param callback\n   *\n   */\n\n\n  async function ajaxLoad(path, options = {}, panel) {\n    const {\n      RESTful\n    } = DOM;\n    CloudCmd.log('reading dir: \"' + path + '\";');\n    const dirStorage = CloudCmd.config('dirStorage');\n    const json = dirStorage && (await Storage.get(path));\n    const name = options.currentName || Info.name;\n    const {\n      noCurrent,\n      refresh\n    } = options;\n    if (!refresh && json) return await createFileTable(json, panel, options);\n    const position = DOM.getPanelPosition(panel);\n    const sort = CloudCmd.sort[position];\n    const order = CloudCmd.order[position];\n    const query = rendy('?sort={{ sort }}&order={{ order }}', {\n      sort,\n      order\n    });\n    const [, newObj] = await RESTful.read(path + query, 'json');\n    if (!newObj) return; // that's OK, error handled by RESTful\n\n    options.sort = sort;\n    options.order = order;\n    await createFileTable(newObj, panel, options);\n    if (refresh && !noCurrent) DOM.setCurrentByName(name);\n    if (!CloudCmd.config('dirStorage')) return;\n    Storage.set(path, newObj);\n  }\n  /**\n   * Функция строит файловую таблицу\n   * @param json  - данные о файлах\n   * @param panelParam\n   * @param history\n   * @param callback\n   */\n\n\n  async function createFileTable(data, panelParam, options) {\n    const {\n      history,\n      noCurrent\n    } = options;\n    const names = ['file', 'path', 'link', 'pathLink'];\n    const [error, [file, path, link, pathLink]] = await tryToCatch(Files.get, names);\n    if (error) return DOM.Dialog.alert(error.responseText);\n    const panel = panelParam || DOM.getPanel();\n    const {\n      prefix\n    } = CloudCmd;\n    const {\n      dir,\n      name\n    } = Info;\n    const {\n      childNodes\n    } = panel;\n    let i = childNodes.length;\n\n    while (i--) panel.removeChild(panel.lastChild);\n\n    panel.innerHTML = buildFromJSON({\n      sort: options.sort,\n      order: options.order,\n      data,\n      id: panel.id,\n      prefix,\n      template: {\n        file,\n        path,\n        pathLink,\n        link\n      }\n    });\n    Listeners.setOnPanel(panel);\n\n    if (!noCurrent) {\n      let current;\n      if (name === '..' && dir !== '/') current = DOM.getCurrentByName(dir);\n      if (!current) [current] = DOM.getFiles(panel);\n      DOM.setCurrentFile(current, {\n        history\n      });\n      CloudCmd.emit('active-dir', Info.dirPath);\n    }\n  }\n\n  this.goToParentDir = async () => {\n    const {\n      dir,\n      dirPath,\n      parentDirPath,\n      panel\n    } = Info;\n    if (dirPath === parentDirPath) return;\n    const path = parentDirPath;\n    await CloudCmd.loadDir({\n      path\n    });\n    const current = DOM.getCurrentByName(dir);\n    const [first] = DOM.getFiles(panel);\n    DOM.setCurrentFile(current || first, {\n      history\n    });\n  };\n}\n\n//# sourceURL=file://cloudcmd/client/client.js");

/***/ }),

/***/ "./client/cloudcmd.js":
/*!****************************!*\
  !*** ./client/cloudcmd.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n\n__webpack_require__(/*! ../css/nojs.css */ \"./css/nojs.css\");\n\n__webpack_require__(/*! ../css/columns/name-size-date.css */ \"./css/columns/name-size-date.css\");\n\n__webpack_require__(/*! ../css/columns/name-size.css */ \"./css/columns/name-size.css\");\n\nconst wraptile = __webpack_require__(/*! wraptile */ \"./node_modules/wraptile/lib/wraptile.js\");\n\nconst load = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\");\n\nconst isDev = \"development\" === 'development';\n\nconst {\n  registerSW,\n  listenSW\n} = __webpack_require__(/*! ./sw/register */ \"./client/sw/register.js\"); // prevent additional loading of emitify\n\n\nwindow.Emitify = __webpack_require__(/*! emitify */ \"./node_modules/emitify/lib/emitify.js\");\n\nmodule.exports = window.CloudCmd = config => {\n  window.Util = __webpack_require__(/*! ../common/util */ \"./common/util.js\");\n  window.CloudFunc = __webpack_require__(/*! ../common/cloudfunc */ \"./common/cloudfunc.js\");\n\n  const DOM = __webpack_require__(/*! ./dom */ \"./client/dom/index.js\");\n\n  window.DOM = DOM;\n  window.CloudCmd = __webpack_require__(/*! ./client */ \"./client/client.js\");\n  register(config);\n\n  __webpack_require__(/*! ./listeners */ \"./client/listeners/index.js\");\n\n  __webpack_require__(/*! ./key */ \"./client/key/index.js\");\n\n  __webpack_require__(/*! ./sort */ \"./client/sort.js\");\n\n  const prefix = getPrefix(config.prefix);\n  window.CloudCmd.init(prefix, config);\n};\n\nfunction getPrefix(prefix) {\n  if (!prefix) return '';\n  if (!prefix.indexOf('/')) return prefix;\n  return `/${prefix}`;\n}\n\nconst onUpdateFound = wraptile(async config => {\n  if (isDev) return;\n  const {\n    DOM\n  } = window;\n  const prefix = getPrefix(config.prefix);\n  await load.js(`${prefix}/dist/cloudcmd.common.js`);\n  await load.js(`${prefix}/dist/cloudcmd.js`);\n  console.log('cloudcmd: sw: updated');\n  DOM.Events.removeAll();\n  window.CloudCmd(config);\n});\n\nasync function register(config) {\n  const {\n    prefix\n  } = config;\n  const sw = await registerSW(prefix);\n  listenSW(sw, 'updatefound', onUpdateFound(config));\n}\n\n//# sourceURL=file://cloudcmd/client/cloudcmd.js");

/***/ }),

/***/ "./client/get-json-from-file-table.js":
/*!********************************************!*\
  !*** ./client/get-json-from-file-table.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global DOM */\n\nconst Info = DOM.CurrentInfo;\n/**\n * Функция генерирует JSON из html-таблицы файлов и\n * используеться при первом заходе в корень\n */\n\nmodule.exports = () => {\n  const path = DOM.getCurrentDirPath();\n  const infoFiles = Info.files || [];\n\n  const notParent = current => {\n    const name = DOM.getCurrentName(current);\n    return name !== '..';\n  };\n\n  const parse = current => {\n    const name = DOM.getCurrentName(current);\n    const size = DOM.getCurrentSize(current);\n    const owner = DOM.getCurrentOwner(current);\n    const mode = DOM.getCurrentMode(current);\n    const date = DOM.getCurrentDate(current);\n    const type = DOM.getCurrentType(current);\n    return {\n      name,\n      size,\n      mode,\n      owner,\n      date,\n      type\n    };\n  };\n\n  const files = infoFiles.filter(notParent).map(parse);\n  const fileTable = {\n    path,\n    files\n  };\n  return fileTable;\n};\n\n//# sourceURL=file://cloudcmd/client/get-json-from-file-table.js");

/***/ }),

/***/ "./client/key/index.js":
/*!*****************************!*\
  !*** ./client/key/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global CloudCmd, DOM */\n\n\nconst Info = DOM.CurrentInfo;\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst clipboard = __webpack_require__(/*! @cloudcmd/clipboard */ \"./node_modules/@cloudcmd/clipboard/lib/clipboard.js\");\n\nconst Events = __webpack_require__(/*! ../dom/events */ \"./client/dom/events/index.js\");\n\nconst Buffer = __webpack_require__(/*! ../dom/buffer */ \"./client/dom/buffer.js\");\n\nconst KEY = __webpack_require__(/*! ./key */ \"./client/key/key.js\");\n\nconst vim = __webpack_require__(/*! ./vim */ \"./client/key/vim/index.js\");\n\nconst setCurrentByChar = __webpack_require__(/*! ./set-current-by-char */ \"./client/key/set-current-by-char.js\");\n\nconst fullstore = __webpack_require__(/*! fullstore */ \"./node_modules/fullstore/lib/fullstore.js\");\n\nconst Chars = fullstore();\nChars([]);\nKeyProto.prototype = KEY;\nCloudCmd.Key = KeyProto;\nconst {\n  loadDir\n} = CloudCmd;\n\nfunction KeyProto() {\n  let Binded;\n  const Key = this;\n\n  this.isBind = () => {\n    return Binded;\n  };\n\n  this.setBind = () => {\n    Binded = true;\n  };\n\n  this.unsetBind = () => {\n    Binded = false;\n  };\n\n  this.bind = () => {\n    Events.addKey(listener, true);\n    Binded = true;\n  };\n\n  function getChar(event) {\n    /*\n      * event.keyIdentifier deprecated in chrome v51\n      * but event.key is absent in chrome <= v51\n      */\n    if (event.key) return event.key;\n    return fromCharCode(event.keyIdentifier);\n  }\n\n  async function listener(event) {\n    const {\n      keyCode\n    } = event; // strange chrome bug calles listener twice\n    // in second time event misses a lot fields\n\n    if (typeof event.altKey === 'undefined') return;\n    const alt = event.altKey;\n    const ctrl = event.ctrlKey;\n    const shift = event.shiftKey;\n    const meta = event.metaKey;\n    const isBetween = keyCode >= KEY.ZERO && keyCode <= KEY.Z;\n    const isNumpad = /Numpad/.test(event.code);\n    let char = getChar(event);\n    let isSymbol = ~['.', '_', '-', '+', '='].indexOf(char);\n\n    if (!isSymbol) {\n      isSymbol = getSymbol(shift, keyCode);\n      if (isSymbol) char = isSymbol;\n    }\n\n    if (!Key.isBind()) return;\n    const isVim = CloudCmd.config('vim');\n    if (!isVim && !isNumpad && !alt && !ctrl && !meta && (isBetween || isSymbol)) return setCurrentByChar(char, Chars);\n    Chars([]);\n    await switchKey(event);\n    if (keyCode >= KEY.F1 && keyCode <= KEY.F10) return;\n    if (isVim) vim(char, event);\n  }\n\n  function getSymbol(shift, keyCode) {\n    switch (keyCode) {\n      case KEY.DOT:\n        return '.';\n\n      case KEY.HYPHEN:\n        return shift ? '_' : '-';\n\n      case KEY.EQUAL:\n        return shift ? '+' : '=';\n    }\n  }\n\n  function fromCharCode(keyIdentifier) {\n    const code = keyIdentifier.substring(2);\n    const hex = parseInt(code, 16);\n    const char = String.fromCharCode(hex);\n    return char;\n  }\n\n  async function switchKey(event) {\n    let i;\n    let isSelected;\n    let prev;\n    let next;\n    let current = Info.element;\n    let dataName;\n    const {\n      name,\n      panel,\n      path,\n      isDir\n    } = Info;\n    const {\n      Operation\n    } = CloudCmd;\n    const {\n      keyCode\n    } = event;\n    const alt = event.altKey;\n    const shift = event.shiftKey;\n    const ctrl = event.ctrlKey;\n    const meta = event.metaKey;\n    const ctrlMeta = ctrl || meta;\n\n    if (current) {\n      prev = current.previousSibling;\n      next = current.nextSibling;\n    }\n\n    switch (keyCode) {\n      case Key.TAB:\n        DOM.changePanel();\n        event.preventDefault();\n        break;\n\n      case Key.INSERT:\n        DOM.toggleSelectedFile(current).setCurrentFile(next);\n        break;\n\n      case Key.INSERT_MAC:\n        DOM.toggleSelectedFile(current).setCurrentFile(next);\n        break;\n\n      case Key.DELETE:\n        if (shift) Operation.show('delete:silent');else Operation.show('delete');\n        break;\n\n      case Key.ASTERISK:\n        DOM.toggleAllSelectedFiles(current);\n        break;\n\n      case Key.PLUS:\n        DOM.expandSelection();\n        event.preventDefault();\n        break;\n\n      case Key.MINUS:\n        DOM.shrinkSelection();\n        event.preventDefault();\n        break;\n\n      case Key.F1:\n        CloudCmd.Help.show();\n        event.preventDefault();\n        break;\n\n      case Key.F2:\n        CloudCmd.UserMenu.show();\n        break;\n\n      case Key.F3:\n        if (Info.isDir) await loadDir({\n          path\n        });else if (shift) CloudCmd.Markdown.show(path);else if (ctrlMeta) CloudCmd.sortPanel('name');else CloudCmd.View.show();\n        event.preventDefault();\n        break;\n\n      case Key.F4:\n        if (shift) CloudCmd.EditFileVim.show();else CloudCmd.EditFile.show();\n        event.preventDefault();\n        break;\n\n      case Key.F5:\n        if (ctrlMeta) CloudCmd.sortPanel('date');else if (alt) Operation.show('pack');else Operation.show('copy');\n        event.preventDefault();\n        break;\n\n      case Key.F6:\n        if (ctrlMeta) CloudCmd.sortPanel('size');else if (shift) DOM.renameCurrent(current);else Operation.show('move');\n        event.preventDefault();\n        break;\n\n      case Key.F7:\n        if (shift) DOM.promptNewFile();else DOM.promptNewDir();\n        event.preventDefault();\n        break;\n\n      case Key.F8:\n        Operation.show('delete');\n        event.preventDefault();\n        break;\n\n      case Key.F9:\n        if (alt) Operation.show('extract');else CloudCmd.Menu.show();\n        event.preventDefault();\n        break;\n\n      case Key.F10:\n        CloudCmd.Config.show();\n        event.preventDefault();\n        break;\n\n      case Key.TRA:\n        event.preventDefault();\n        if (shift) return CloudCmd.Terminal.show();\n        CloudCmd.Konsole.show();\n        break;\n\n      case KEY.BRACKET_CLOSE:\n        CloudCmd.Konsole.show();\n        event.preventDefault();\n        break;\n\n      case Key.SPACE:\n        if (!isDir || name === '..') isSelected = true;else isSelected = DOM.isSelected(current);\n        exec.if(isSelected, () => {\n          DOM.toggleSelectedFile(current);\n        }, callback => {\n          DOM.loadCurrentSize(current, callback);\n        });\n        event.preventDefault();\n        break;\n\n      case Key.U:\n        if (ctrlMeta) {\n          DOM.swapPanels();\n          event.preventDefault();\n        }\n\n        break;\n\n      /* navigation on file table:        *\n       * in case of pressing button 'up', *\n       * select previous row              */\n\n      case Key.UP:\n        if (shift) DOM.toggleSelectedFile(current);\n        DOM.setCurrentFile(prev);\n        event.preventDefault();\n        break;\n\n      /* in case of pressing button 'down', *\n       * select next row                    */\n\n      case Key.DOWN:\n        if (shift) DOM.toggleSelectedFile(current);\n        DOM.setCurrentFile(next);\n        event.preventDefault();\n        break;\n\n      case Key.LEFT:\n        if (!alt) return;\n        event.preventDefault();\n        dataName = Info.panel.getAttribute('data-name');\n        if (dataName === 'js-right') DOM.duplicatePanel();\n        break;\n\n      case Key.RIGHT:\n        if (!alt) return;\n        event.preventDefault();\n        dataName = Info.panel.getAttribute('data-name');\n        if (dataName === 'js-left') DOM.duplicatePanel();\n        break;\n\n      /* in case of pressing button 'Home',  *\n       * go to top element                   */\n\n      case Key.HOME:\n        DOM.setCurrentFile(Info.first);\n        event.preventDefault();\n        break;\n\n      /* in case of pressing button 'End', select last element */\n\n      case Key.END:\n        DOM.setCurrentFile(Info.last);\n        event.preventDefault();\n        break;\n\n      /* если нажали клавишу page down проматываем экран */\n\n      case Key.PAGE_DOWN:\n        DOM.scrollByPages(panel, 1);\n\n        for (i = 0; i < 30; i++) {\n          if (!current.nextSibling) break;\n          current = current.nextSibling;\n        }\n\n        DOM.setCurrentFile(current);\n        event.preventDefault();\n        break;\n\n      /* если нажали клавишу page up проматываем экран */\n\n      case Key.PAGE_UP:\n        DOM.scrollByPages(panel, -1);\n\n        for (i = 0; i < 30; i++) {\n          if (!current.previousSibling) break;\n          current = current.previousSibling;\n        }\n\n        DOM.setCurrentFile(current);\n        event.preventDefault();\n        break;\n\n      case Key.ENTER:\n        if (Info.isDir) await loadDir({\n          path\n        });else CloudCmd.View.show();\n        break;\n\n      case Key.BACKSPACE:\n        CloudCmd.goToParentDir();\n        event.preventDefault();\n        break;\n\n      case Key.BACKSLASH:\n        if (ctrlMeta) await loadDir({\n          path: '/'\n        });\n        break;\n\n      case Key.A:\n        if (ctrlMeta) {\n          DOM.selectAllFiles();\n          event.preventDefault();\n        }\n\n        break;\n\n      case Key.G:\n        if (alt) {\n          DOM.goToDirectory();\n          event.preventDefault();\n        }\n\n        break;\n\n      case Key.M:\n        if (ctrlMeta) {\n          if (shift) CloudCmd.EditNamesVim.show();else CloudCmd.EditNames.show();\n          event.preventDefault();\n        }\n\n        break;\n\n      case Key.P:\n        if (!ctrlMeta) return;\n        event.preventDefault();\n        clipboard.writeText(Info.dirPath).catch(CloudCmd.log);\n        break;\n\n      /**\n       * обновляем страницу,\n       * загружаем содержимое каталога\n       * при этом данные берём всегда с\n       * сервера, а не из кэша\n       * (обновляем кэш)\n       */\n\n      case Key.R:\n        if (ctrlMeta) {\n          CloudCmd.log('reloading page...\\n');\n          CloudCmd.refresh();\n          event.preventDefault();\n        }\n\n        break;\n\n      case Key.C:\n        if (ctrlMeta) Buffer.copy();\n        break;\n\n      case Key.X:\n        if (ctrlMeta) Buffer.cut();\n        break;\n\n      case Key.V:\n        if (ctrlMeta) Buffer.paste();\n        break;\n\n      case Key.Z:\n        if (ctrlMeta) Buffer.clear();\n        break;\n\n      /* чистим хранилище */\n\n      case Key.D:\n        if (ctrlMeta) {\n          CloudCmd.log('clearing storage...');\n          await DOM.Storage.clear();\n          CloudCmd.log('storage cleared');\n          event.preventDefault();\n        }\n\n        break;\n    }\n  }\n}\n\n//# sourceURL=file://cloudcmd/client/key/index.js");

/***/ }),

/***/ "./client/key/set-current-by-char.js":
/*!*******************************************!*\
  !*** ./client/key/set-current-by-char.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global DOM */\n\n\nconst Info = DOM.CurrentInfo;\n\nconst {\n  escapeRegExp\n} = __webpack_require__(/*! ../../common/util */ \"./common/util.js\");\n\nmodule.exports = function setCurrentByChar(char, charStore) {\n  let firstByName;\n  let skipCount = 0;\n  let setted = false;\n  let i = 0;\n  const escapeChar = escapeRegExp(char);\n  const regExp = new RegExp('^' + escapeChar + '.*$', 'i');\n  const {\n    files\n  } = Info;\n  const chars = charStore();\n  const n = chars.length;\n\n  while (i < n && char === chars[i]) i++;\n\n  if (!i) charStore([]);\n  const skipN = skipCount = i;\n  charStore(charStore().concat(char));\n  const names = DOM.getFilenames(files);\n\n  const isTest = a => regExp.test(a);\n\n  const isRoot = a => a === '..';\n\n  const not = f => a => !f(a);\n\n  const setCurrent = name => {\n    const byName = DOM.getCurrentByName(name);\n\n    if (!skipCount) {\n      setted = true;\n      DOM.setCurrentFile(byName);\n      return true;\n    }\n\n    if (skipN === skipCount) firstByName = byName;\n    --skipCount;\n  };\n\n  names.filter(isTest).filter(not(isRoot)).some(setCurrent);\n\n  if (!setted) {\n    DOM.setCurrentFile(firstByName);\n    charStore([char]);\n  }\n};\n\n//# sourceURL=file://cloudcmd/client/key/set-current-by-char.js");

/***/ }),

/***/ "./client/key/vim/find.js":
/*!********************************!*\
  !*** ./client/key/vim/find.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fullstore = __webpack_require__(/*! fullstore */ \"./node_modules/fullstore/lib/fullstore.js\");\n\nconst limier = __webpack_require__(/*! limier */ \"./node_modules/limier/lib/limier.js\");\n\nconst searchStore = fullstore([]);\nconst searchIndex = fullstore(0);\n\nmodule.exports.find = (value, names) => {\n  const result = limier(value, names);\n  searchStore(result);\n  searchIndex(0);\n  return result;\n};\n\nmodule.exports.findNext = () => {\n  const names = searchStore();\n  const index = next(searchIndex(), names.length);\n  searchIndex(index);\n  return names[searchIndex()];\n};\n\nmodule.exports.findPrevious = () => {\n  const names = searchStore();\n  const index = previous(searchIndex(), names.length);\n  searchIndex(index);\n  return names[index];\n};\n\nmodule.exports._next = next;\nmodule.exports._previous = previous;\n\nfunction next(index, length) {\n  if (index === length - 1) return 0;\n  return ++index;\n}\n\nfunction previous(index, length) {\n  if (!index) return length - 1;\n  return --index;\n}\n\n//# sourceURL=file://cloudcmd/client/key/vim/find.js");

/***/ }),

/***/ "./client/key/vim/index.js":
/*!*********************************!*\
  !*** ./client/key/vim/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd */\n\n/* global DOM */\n\nconst vim = __webpack_require__(/*! ./vim */ \"./client/key/vim/vim.js\");\n\nconst finder = __webpack_require__(/*! ./find */ \"./client/key/vim/find.js\");\n\nconst Info = DOM.CurrentInfo;\nconst {\n  Dialog\n} = DOM;\n\nmodule.exports = async (key, event) => {\n  const operations = getOperations(event);\n  await vim(key, operations);\n};\n\nconst getOperations = event => {\n  return {\n    escape: DOM.unselectFiles,\n    remove: () => {\n      CloudCmd.Operation.show('delete');\n    },\n    copy: () => {\n      DOM.Buffer.copy();\n      DOM.unselectFiles();\n    },\n    select: () => {\n      const current = Info.element;\n      DOM.toggleSelectedFile(current);\n    },\n    paste: DOM.Buffer.paste,\n    moveNext: ({\n      count,\n      isVisual,\n      isDelete\n    }) => {\n      setCurrent('next', {\n        count,\n        isVisual,\n        isDelete\n      });\n    },\n    movePrevious: ({\n      count,\n      isVisual,\n      isDelete\n    }) => {\n      setCurrent('previous', {\n        count,\n        isVisual,\n        isDelete\n      });\n    },\n    find: async () => {\n      event.preventDefault();\n      const [, value] = await Dialog.prompt('Find', '');\n      if (!value) return;\n      const names = Info.files.map(DOM.getCurrentName);\n      const [result] = finder.find(value, names);\n      DOM.setCurrentByName(result);\n    },\n    findNext: () => {\n      const name = finder.findNext();\n      DOM.setCurrentByName(name);\n    },\n    findPrevious: () => {\n      const name = finder.findPrevious();\n      DOM.setCurrentByName(name);\n    }\n  };\n};\n\nmodule.exports.selectFile = selectFile;\n\nfunction selectFile(current) {\n  const name = DOM.getCurrentName(current);\n  if (name === '..') return;\n  DOM.selectFile(current);\n}\n\nfunction setCurrent(sibling, {\n  count,\n  isVisual,\n  isDelete\n}) {\n  let current = Info.element;\n  const select = isVisual ? selectFile : DOM.unselectFile;\n  select(current);\n  const position = `${sibling}Sibling`;\n\n  for (let i = 0; i < count; i++) {\n    const next = current[position];\n    if (!next) break;\n    current = next;\n    select(current);\n  }\n\n  DOM.setCurrentFile(current);\n  if (isDelete) CloudCmd.Operation.show('delete');\n}\n\n//# sourceURL=file://cloudcmd/client/key/vim/index.js");

/***/ }),

/***/ "./client/key/vim/vim.js":
/*!*******************************!*\
  !*** ./client/key/vim/vim.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fullstore = __webpack_require__(/*! fullstore */ \"./node_modules/fullstore/lib/fullstore.js\");\n\nconst store = fullstore('');\nconst visual = fullstore(false);\n\nconst stopVisual = () => {\n  visual(false);\n};\n\nconst end = () => {\n  store('');\n};\n\nconst rmFirst = a => {\n  return a.split('').slice(1).join('');\n};\n\nconst noop = () => {};\n\nmodule.exports = (key, operations) => {\n  const prevStore = store();\n  const isVisual = visual();\n  const value = store(prevStore.concat(key));\n  const {\n    escape = noop,\n    moveNext = noop,\n    movePrevious = noop,\n    remove = noop,\n    copy = noop,\n    paste = noop,\n    select = noop,\n    find = noop,\n    findNext = noop,\n    findPrevious = noop\n  } = operations;\n  if (key === 'Enter') return end();\n\n  if (key === 'Escape') {\n    visual(false);\n    escape();\n    return end();\n  }\n\n  if (key === 'j') {\n    const {\n      count,\n      isDelete,\n      isVisual\n    } = handleDelete(prevStore);\n    !isNaN(count) && moveNext({\n      count,\n      isVisual,\n      isDelete\n    });\n    return end();\n  }\n\n  if (key === 'k') {\n    const {\n      count,\n      isDelete,\n      isVisual\n    } = handleDelete(prevStore);\n    !isNaN(count) && movePrevious({\n      count,\n      isVisual,\n      isDelete\n    });\n    return end();\n  }\n\n  if (/^gg$/.test(value)) {\n    const {\n      isDelete,\n      isVisual\n    } = handleDelete(prevStore);\n    movePrevious({\n      count: Infinity,\n      isVisual,\n      isDelete\n    });\n    return end();\n  }\n\n  if (key === 'd' && (visual() || prevStore === 'd')) {\n    stopVisual();\n    remove();\n    return end();\n  }\n\n  if (key === 'G') {\n    moveNext({\n      count: Infinity,\n      isVisual\n    });\n    return end();\n  }\n\n  if (key === 'y') {\n    if (!visual()) return end();\n    stopVisual();\n    copy();\n    return end();\n  }\n\n  if (/^p$/i.test(key)) {\n    paste();\n    return end();\n  }\n\n  if (/^v$/i.test(key)) {\n    visual(!visual());\n    select();\n    return end();\n  }\n\n  if (key === '/') {\n    find();\n    return end();\n  }\n\n  if (key === 'n') {\n    findNext();\n    return end();\n  }\n\n  if (key === 'N') {\n    findPrevious();\n    return end();\n  }\n};\n\nfunction handleDelete(prevStore) {\n  const isDelete = prevStore[0] === 'd';\n\n  if (isDelete) {\n    visual(true);\n    prevStore = rmFirst(prevStore);\n  }\n\n  const count = getNumber(prevStore);\n  const isVisual = visual();\n  return {\n    count,\n    isDelete,\n    isVisual\n  };\n}\n\nfunction getNumber(value) {\n  if (!value) return 1;\n  if (value === 'g') return 1;\n  return parseInt(value);\n}\n\n//# sourceURL=file://cloudcmd/client/key/vim/vim.js");

/***/ }),

/***/ "./client/listeners/get-index.js":
/*!***************************************!*\
  !*** ./client/listeners/get-index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (array, item) => {\n  const index = array.indexOf(item);\n  if (!~index) return 0;\n  return index;\n};\n\n//# sourceURL=file://cloudcmd/client/listeners/get-index.js");

/***/ }),

/***/ "./client/listeners/get-range.js":
/*!***************************************!*\
  !*** ./client/listeners/get-range.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (indexFrom, indexTo, files) => {\n  if (indexFrom < indexTo) return files.slice(indexFrom, indexTo + 1);\n  if (indexFrom > indexTo) return files.slice(indexTo, indexFrom + 1);\n  return [files[indexFrom]];\n};\n\n//# sourceURL=file://cloudcmd/client/listeners/get-range.js");

/***/ }),

/***/ "./client/listeners/index.js":
/*!***********************************!*\
  !*** ./client/listeners/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global DOM, CloudCmd */\n\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst itype = __webpack_require__(/*! itype */ \"./node_modules/itype/lib/itype.js\");\n\nconst currify = __webpack_require__(/*! currify */ \"./node_modules/currify/lib/currify.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst clipboard = __webpack_require__(/*! @cloudcmd/clipboard */ \"./node_modules/@cloudcmd/clipboard/lib/clipboard.js\");\n\nconst getRange = __webpack_require__(/*! ./get-range */ \"./client/listeners/get-range.js\");\n\nconst getIndex = currify(__webpack_require__(/*! ./get-index */ \"./client/listeners/get-index.js\"));\n\nconst uploadFiles = __webpack_require__(/*! ../dom/upload-files */ \"./client/dom/upload-files.js\");\n\nconst {\n  FS\n} = __webpack_require__(/*! ../../common/cloudfunc */ \"./common/cloudfunc.js\");\n\nconst NBSP_REG = RegExp(String.fromCharCode(160), 'g');\nconst SPACE = ' ';\n\nmodule.exports.init = () => {\n  contextMenu();\n  dragndrop();\n  unload();\n  pop();\n  resize();\n  config();\n  header();\n};\n\nCloudCmd.Listeners = module.exports;\n\nconst unselect = event => {\n  const isMac = /Mac/.test(window.navigator.platform);\n  const {\n    shiftKey,\n    metaKey,\n    ctrlKey\n  } = event;\n  if (shiftKey || isMac && metaKey || ctrlKey) return;\n  DOM.unselectFiles();\n};\n\nconst execAll = currify((funcs, event) => {\n  for (const fn of funcs) fn(event);\n});\nconst Info = DOM.CurrentInfo;\nconst {\n  Events\n} = DOM;\nconst EventsFiles = {\n  mousedown: exec.with(execIfNotUL, setCurrentFileByEvent),\n  click: execAll([onClick, unselect]),\n  dragstart: exec.with(execIfNotUL, onDragStart),\n  dblclick: exec.with(execIfNotUL, onDblClick),\n  touchstart: exec.with(execIfNotUL, onTouch)\n};\nlet EXT;\n\nfunction header() {\n  const fm = DOM.getFM();\n\n  const isDataset = el => el.dataset;\n\n  const isPanel = el => {\n    return /^js-(left|right)$/.test(el.dataset.name);\n  };\n\n  Events.addClick(fm, event => {\n    const el = event.target;\n    const parent = el.parentElement;\n    if (parent.dataset.name !== 'js-fm-header') return;\n    const name = (el.dataset.name || '').replace('js-', '');\n    if (!/^(name|size|date)$/.test(name)) return;\n    const panel = getPath(el).filter(isDataset).filter(isPanel).pop();\n    CloudCmd.sortPanel(name, panel);\n  });\n}\n\nfunction getPath(el, path = []) {\n  if (!el) return path;\n  return getPath(el.parentElement, path.concat(el));\n}\n\nasync function config() {\n  const [, config] = await tryToCatch(DOM.Files.get, 'config');\n  const type = config && config.packer;\n  EXT = DOM.getPackerExt(type);\n}\n\nmodule.exports.initKeysPanel = () => {\n  const keysElement = DOM.getById('js-keyspanel');\n  if (!keysElement) return;\n  Events.addClick(keysElement, ({\n    target\n  }) => {\n    const {\n      id\n    } = target;\n\n    const operation = name => {\n      const {\n        Operation\n      } = CloudCmd;\n      const fn = Operation.show.bind(null, name);\n      return fn;\n    };\n\n    const clickFuncs = {\n      'f1': CloudCmd.Help.show,\n      'f2': initF2,\n      'f3': CloudCmd.View.show,\n      'f4': CloudCmd.EditFile.show,\n      'f5': operation('copy'),\n      'f6': operation('move'),\n      'f7': DOM.promptNewDir,\n      'f8': operation('delete'),\n      'f9': CloudCmd.Menu.show,\n      'f10': CloudCmd.Config.show,\n      '~': CloudCmd.Konsole.show,\n      'shift~': CloudCmd.Terminal.show,\n      'contact': CloudCmd.Contact.show\n    };\n    exec(clickFuncs[id]);\n  });\n};\n\nfunction initF2() {\n  CloudCmd.UserMenu.show();\n}\n\nconst getPanel = side => {\n  if (!itype.string(side)) return side;\n  return DOM.getByDataName('js-' + side);\n};\n\nmodule.exports.setOnPanel = side => {\n  const panel = getPanel(side);\n  const filesElement = DOM.getByDataName('js-files', panel);\n  const pathElement = DOM.getByDataName('js-path', panel);\n  /* ставим загрузку гифа на клик*/\n\n  Events.addClick(pathElement, getPathListener(panel));\n  Events.add(filesElement, EventsFiles);\n};\n\nfunction getPathListener(panel) {\n  return onPathElementClick.bind(null, panel);\n}\n\nfunction isNoCurrent(panel) {\n  const infoPanel = Info.panel;\n  if (!infoPanel) return true;\n  const namePanel = panel.getAttribute('data-name');\n  const nameInfoPanel = infoPanel.getAttribute('data-name');\n  return namePanel !== nameInfoPanel;\n}\n\nfunction decodePath(path) {\n  const url = CloudCmd.HOST;\n  const {\n    prefix\n  } = CloudCmd;\n  const prefixReg = RegExp('^' + prefix + FS);\n  return decodeURI(path).replace(url, '').replace(prefixReg, '') // browser doesn't replace % -> %25% do it for him\n  .replace('%%', '%25%').replace(NBSP_REG, SPACE) || '/';\n}\n\nasync function onPathElementClick(panel, event) {\n  event.preventDefault();\n  const element = event.target;\n  const attr = element.getAttribute('data-name');\n  const noCurrent = isNoCurrent(panel);\n  if (attr === 'js-copy-path') return copyPath(element);\n  if (attr === 'js-refresh') return CloudCmd.refresh({\n    panel,\n    noCurrent\n  });\n  if (attr !== 'js-path-link') return;\n  const {\n    href\n  } = element;\n  const path = decodePath(href);\n  await CloudCmd.loadDir({\n    path,\n    isRefresh: false,\n    panel: noCurrent ? panel : Info.panel\n  });\n}\n\nfunction copyPath(el) {\n  clipboard.writeText(el.parentElement.title).then(CloudCmd.log).catch(CloudCmd.log);\n}\n\nfunction execIfNotUL(callback, event) {\n  const {\n    target\n  } = event;\n  const {\n    tagName\n  } = target;\n  if (tagName !== 'UL') callback(event);\n}\n\nfunction onClick(event) {\n  event.preventDefault();\n  changePanel(event.target);\n}\n\nfunction toggleSelect(key, files) {\n  const isMac = /Mac/.test(window.navigator.platform);\n  if (!key) throw Error('key should not be undefined!');\n  const [file] = files;\n  if (isMac && key.meta || key.ctrl) return DOM.toggleSelectedFile(file);\n  if (key.shift) return files.map(DOM.selectFile);\n}\n\nfunction changePanel(element) {\n  const {\n    panel\n  } = Info;\n  const files = DOM.getByDataName('js-files', panel);\n  const ul = getULElement(element);\n  if (ul !== files) DOM.changePanel();\n}\n\nasync function onDblClick(event) {\n  const current = getLIElement(event.target);\n  const isDir = DOM.isCurrentIsDir(current);\n  const path = DOM.getCurrentPath(current);\n\n  if (isDir) {\n    await CloudCmd.loadDir({\n      path: path === '/' ? '/' : path + '/'\n    });\n    event.preventDefault();\n  } else {\n    CloudCmd.View.show();\n    event.preventDefault();\n  }\n}\n\nasync function onTouch(event) {\n  const current = getLIElement(event.target);\n  const isDir = DOM.isCurrentIsDir(current);\n  if (!isDir) return;\n  const isCurrent = DOM.isCurrentFile(current);\n  if (!isCurrent) return;\n  await CloudCmd.loadDir({\n    path: DOM.getCurrentPath(current)\n  });\n}\n/*\n  * download file from browser to desktop\n  * in Chrome (HTML5)\n  */\n\n\nfunction onDragStart(event) {\n  const {\n    prefixURL\n  } = CloudCmd;\n  const element = getLIElement(event.target);\n  const {\n    isDir\n  } = Info;\n  let link = DOM.getCurrentLink(element);\n  let name = DOM.getCurrentName(element);\n  /* if it's directory - adding json extension */\n\n  if (isDir) {\n    name += EXT;\n    link = document.createElement('a');\n    link.textContent = name;\n    link.href = prefixURL + '/pack' + Info.path + EXT;\n  }\n\n  event.dataTransfer.setData('DownloadURL', 'application/octet-stream' + ':' + name + ':' + link);\n}\n\nfunction getLIElement(element) {\n  if (!element) return element;\n\n  while (element.tagName !== 'LI') element = element.parentElement;\n\n  return element;\n}\n\nfunction getULElement(element) {\n  while (element.tagName !== 'UL') element = element.parentElement;\n\n  return element;\n}\n\nfunction setCurrentFileByEvent(event) {\n  const BUTTON_LEFT = 0;\n  const key = {\n    alt: event.altKey,\n    ctrl: event.ctrlKey,\n    meta: event.metaKey,\n    shift: event.shiftKey\n  };\n  const element = getLIElement(event.target);\n  const fromName = Info.name;\n  DOM.setCurrentFile(element);\n  const toName = Info.name;\n  let files = [];\n  if (key.shift) files = getFilesRange(fromName, toName);else files.push(Info.element);\n  if (event.button === BUTTON_LEFT) toggleSelect(key, files);\n}\n\nfunction getFilesRange(from, to) {\n  const files = DOM.getAllFiles();\n  const names = DOM.getFilenames(files);\n  const getNameIndex = getIndex(names);\n  const indexFrom = getNameIndex(from);\n  const indexTo = getNameIndex(to);\n  return getRange(indexFrom, indexTo, files);\n}\n\nfunction contextMenu() {\n  const fm = DOM.getFM();\n  Events.addOnce('contextmenu', fm, event => {\n    CloudCmd.Menu.show({\n      x: event.clientX,\n      y: event.clientY\n    });\n  });\n  Events.addContextMenu(fm, event => {\n    CloudCmd.Menu.ENABLED || event.preventDefault();\n  });\n}\n\nfunction dragndrop() {\n  const panels = DOM.getByClassAll('panel');\n\n  const select = ({\n    target\n  }) => {\n    target.classList.add('selected-panel');\n  };\n\n  const unselect = ({\n    target\n  }) => {\n    target.classList.remove('selected-panel');\n  };\n\n  const onDrop = event => {\n    const {\n      files,\n      items\n    } = event.dataTransfer;\n    const {\n      length: filesCount\n    } = files;\n    event.preventDefault();\n    if (filesCount && (!items || !items.length || !items[0].webkitGetAsEntry)) return uploadFiles(files);\n\n    const isFile = item => item.kind === 'file';\n\n    const dirFiles = Array.from(items).filter(isFile);\n    if (dirFiles.length) return DOM.uploadDirectory(dirFiles);\n    const {\n      Operation\n    } = CloudCmd;\n    const operation = event.shiftKey ? 'move' : 'copy';\n    return Operation.show(operation);\n  };\n  /**\n   * In Mac OS Chrome dropEffect = 'none'\n   * so drop do not firing up when try\n   * to upload file from download bar\n   */\n\n\n  const onDragOver = event => {\n    const {\n      dataTransfer\n    } = event;\n    const {\n      effectAllowed\n    } = dataTransfer;\n    if (/move|linkMove/.test(effectAllowed)) dataTransfer.dropEffect = 'move';else dataTransfer.dropEffect = 'copy';\n    event.preventDefault();\n  };\n\n  for (const panel of panels) Events.add('dragover', panel, onDragOver).add('drop', panel, onDrop).add('dragenter', select).add(['dragleave', 'drop'], unselect);\n}\n\nfunction unload() {\n  DOM.Events.add(['unload', 'beforeunload'], event => {\n    const {\n      Key\n    } = CloudCmd;\n    const isBind = Key && Key.isBind();\n    if (isBind) return;\n    event.preventDefault();\n    return 'Please make sure that you saved all work.';\n  });\n}\n\nfunction pop() {\n  Events.add('popstate', async ({\n    state\n  }) => {\n    const path = (state || '').replace(FS, '');\n    if (!path) return CloudCmd.route(location.hash);\n    const history = false;\n    await CloudCmd.loadDir({\n      path,\n      history\n    });\n  });\n}\n\nfunction resize() {\n  Events.add('resize', () => {\n    const is = window.innerWidth < CloudCmd.MIN_ONE_PANEL_WIDTH;\n    if (!is) return;\n    const {\n      panel\n    } = Info;\n    const isEmptyRoot = !panel;\n    if (isEmptyRoot) return;\n    const name = panel.getAttribute('data-name');\n    const isLeft = name === 'js-left';\n    if (isLeft) return;\n    DOM.changePanel();\n  });\n}\n\n//# sourceURL=file://cloudcmd/client/listeners/index.js");

/***/ }),

/***/ "./client/load-module.js":
/*!*******************************!*\
  !*** ./client/load-module.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd */\n\nconst exec = __webpack_require__(/*! execon */ \"./node_modules/execon/lib/exec.js\");\n\nconst tryToCatch = __webpack_require__(/*! try-to-catch */ \"./node_modules/try-to-catch/lib/try-to-catch.js\");\n\nconst loadJS = __webpack_require__(/*! load.js */ \"./node_modules/load.js/lib/load.js\").js;\n\nconst pascalCase = __webpack_require__(/*! just-pascal-case */ \"./node_modules/just-pascal-case/index.js\");\n\nconst noJS = a => a.replace(/.js$/, '');\n/**\n * function load modules\n * @params = {name, path, func, dobefore, arg}\n */\n\n\nmodule.exports = function loadModule(params) {\n  if (!params) return;\n  const {\n    path\n  } = params;\n  const name = path && noJS(pascalCase(path));\n  const doBefore = params.dobefore;\n  if (CloudCmd[name]) return;\n\n  CloudCmd[name] = () => {\n    exec(doBefore);\n    const {\n      prefix\n    } = CloudCmd;\n    const pathFull = prefix + CloudCmd.DIRCLIENT_MODULES + path + '.js';\n    return loadJS(pathFull).then(async () => {\n      const newModule = async f => f && f();\n\n      const module = CloudCmd[name];\n      Object.assign(newModule, module);\n      CloudCmd[name] = newModule;\n      CloudCmd.log('init', name);\n      await module.init();\n      return newModule;\n    });\n  };\n\n  CloudCmd[name].show = async (...args) => {\n    CloudCmd.log('show', name, args);\n    const m = CloudCmd[name];\n    const [e, a] = await tryToCatch(m);\n    if (e) return console.error(e);\n    await a.show(...args);\n  };\n};\n\n//# sourceURL=file://cloudcmd/client/load-module.js");

/***/ }),

/***/ "./client/sort.js":
/*!************************!*\
  !*** ./client/sort.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global CloudCmd */\n\nconst DOM = __webpack_require__(/*! ./dom */ \"./client/dom/index.js\");\n\nconst Info = DOM.CurrentInfo;\nconst {\n  sort,\n  order\n} = CloudCmd;\nconst position = DOM.getPanelPosition();\nlet sortPrevious = sort[position];\nconst {\n  getPanel\n} = DOM;\n\nCloudCmd.sortPanel = (name, panel = getPanel()) => {\n  const position = panel.dataset.name.replace('js-', '');\n\n  if (name !== sortPrevious) {\n    order[position] = 'asc';\n  } else {\n    if (order[position] === 'asc') order[position] = 'desc';else order[position] = 'asc';\n  }\n\n  sortPrevious = sort[position] = name;\n  const noCurrent = position !== Info.panelPosition;\n  CloudCmd.refresh({\n    panel,\n    noCurrent\n  });\n};\n\n//# sourceURL=file://cloudcmd/client/sort.js");

/***/ }),

/***/ "./client/sw/register.js":
/*!*******************************!*\
  !*** ./client/sw/register.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.registerSW = registerSW;\nmodule.exports.unregisterSW = unregisterSW;\n\nmodule.exports.listenSW = (sw, ...args) => {\n  sw && sw.addEventListener(...args);\n};\n\nasync function registerSW(prefix) {\n  if (!navigator.serviceWorker) return;\n  const isHTTPS = location.protocol === 'https:';\n  const isLocalhost = location.hostname === 'localhost';\n  if (!isHTTPS && !isLocalhost) return;\n  return navigator.serviceWorker.register(`${prefix}/sw.js`);\n}\n\nasync function unregisterSW(prefix) {\n  const reg = await registerSW(prefix);\n  reg && reg.unregister(prefix);\n}\n\n//# sourceURL=file://cloudcmd/client/sw/register.js");

/***/ }),

/***/ "./css/columns/name-size-date.css":
/*!****************************************!*\
  !*** ./css/columns/name-size-date.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/columns/name-size-date.css");

/***/ }),

/***/ "./css/columns/name-size.css":
/*!***********************************!*\
  !*** ./css/columns/name-size.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/columns/name-size.css");

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/main.css");

/***/ }),

/***/ "./css/nojs.css":
/*!**********************!*\
  !*** ./css/nojs.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=file://cloudcmd/css/nojs.css");

/***/ })

/******/ });