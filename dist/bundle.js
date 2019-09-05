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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./Fonts/HelveticaNeue-UltraLight.otf */ "./src/Fonts/HelveticaNeue-UltraLight.otf"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ./Fonts/HelveticaNeue-Roman.otf */ "./src/Fonts/HelveticaNeue-Roman.otf"));
// Module
exports.push([module.i, "@font-face {\n  font-family: 'timefont';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('opentype');\n  font-weight: 600;\n  font-style: 'normal';\n}\n@font-face {\n  font-family: 'lapfont';\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format('opentype');\n  font-weight: 100;\n  font-style: 'normal';\n}\n\nbody {\n  background-color: black;\n}\n\n.timerContainer {\n  color: white;\n  height: 70vh;\n  width: vw;\n  font-family: 'timefont', Arial, Helvetica, sans-serif;\n}\n\n.timeDisplay {\n  height: 50vw;\n  font-size: 22vw;\n  margin-top: 100px;\n  text-align: center;\n  font-style: 'bold';\n  position: static;\n}\n\n.btn {\n  text-align: center;\n  height: 16vw;\n  width: 16vw;\n  font-size: 5vw;\n  font-family: 'lapfont', Arial, Helvetica, sans-serif;\n  border-radius: 50%;\n  border: solid 2px black;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#buttons{\n  height: 21vw;\n  position: static;\n}\n#lapsDisplay{\n  position: relative;\n  width: 100%;\n  height: 50%;\n  overflow: scroll;\n}\n\n.startTimer {\n  color: #4FC53D;\n  background-color: rgba(55, 94, 3, 0.6);\n  box-shadow: 0px 0px 0px 2px rgba(55, 94, 3, 0.6);\n}\n\n.stopTimer {\n  color: red;\n  background-color: rgba(144, 9, 9, 0.6);\n  box-shadow: 0px 0px 0px 2px rgba(144, 9, 9, 0.6);\n}\n\n.resetTimer{\n  color: white;\n  background-color:rgba(166, 166, 166, 0.6);\n  box-shadow: 0px 0px 0px 2px rgba(166, 166, 166, 0.6);\n}\n\n.runningLap{\n  color: white !important;\n  background-color:rgba(166, 166, 166, 0.6) !important;\n  box-shadow: 0px 0px 0px 2px rgba(166, 166, 166, 0.6) !important;\n}\n\n.lap {\n  color: rgba(166, 166, 166, 1);\n  background-color: rgba(48, 48, 48, 0.6);\n  box-shadow: 0px 0px 0px 2px rgba(48, 48, 48, 0.6);\n}\n\n.startTimer, .stopTimer {\n  float: right;\n  margin-right: 4vw;\n}\n.lap, .resetTimer {\n  float: left;\n  margin-left: 4vw;\n}\n\n.lapsContainer, .currentLapContainer {\n  font-size: 6vw;\n  font-family: 'lapfont', Arial, Helvetica, sans-serif;\n  color: white;\n  list-style:none;\n  text-align: center;\n  padding: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\nh2{\n  font-size: 4vw;\n  font-weight: lighter;\n}\n.currentLapContainer ul {\n  margin-block-end: 0%\n}\nul{\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\nli {\n  border-top: solid 0.3px rgba(166, 166, 166, 0.6);\n}\n\n.lapNo{\nfloat: left;\ndisplay: flex;\nmargin-left: 4vw;\n}\n.lapStopTime {\nfloat: right;\ndisplay: flex;\nmargin-right: 4vw;\n}\n\n.currentLapContainer li {\n  border-top: solid 0.3px rgba(166, 166, 166, 0.6);\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/Actions/actions.js":
/*!********************************!*\
  !*** ./src/Actions/actions.js ***!
  \********************************/
/*! exports provided: startTimer, getCurrentTime, stopTimer, resetTimer, lapTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimer", function() { return startTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTime", function() { return getCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return stopTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTimer", function() { return resetTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lapTimer", function() { return lapTimer; });
/* harmony import */ var _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/actionTypes */ "./src/Constants/actionTypes.js");


// ACTIONS
const startTimer = (time) => ({
  type: _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["START_TIMER"],
  payload: {
    time
  }
})


const getCurrentTime = (time) => ({
  type: _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CURRENT_TIME"],
  payload: {
    time
  }
})

const stopTimer = (time) => ({
  type: _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOP_TIMER"],
  payload: {
    time
  }
})

const resetTimer = () => ({
  type: _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET_TIMER"],
})

const lapTimer = () => ({
  type: _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LAP"],
})



/***/ }),

/***/ "./src/Constants/actionTypes.js":
/*!**************************************!*\
  !*** ./src/Constants/actionTypes.js ***!
  \**************************************/
/*! exports provided: START_TIMER, STOP_TIMER, RESET_TIMER, LAP, GET_CURRENT_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_TIMER", function() { return START_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_TIMER", function() { return STOP_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_TIMER", function() { return RESET_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAP", function() { return LAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_TIME", function() { return GET_CURRENT_TIME; });
// ACTION TYPES
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const LAP = 'LAP';
const GET_CURRENT_TIME = 'GET_CURRENT_TIME';

/***/ }),

/***/ "./src/Constants/initialState.js":
/*!***************************************!*\
  !*** ./src/Constants/initialState.js ***!
  \***************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
// INITIAL STATE
const initialState = {
  startTime: 0,
  currentTime: 0,

  running: false,
  nextId: 1,

  currentLapTime: 0,
  previousLapTime: 0,

  slowestLapTimeId: null,
  fastestLapTimeId: null,

  slowestLapTime: 0,
  fastestLapTime: Infinity,

  laps: [],
}

/***/ }),

/***/ "./src/Fonts/HelveticaNeue-Roman.otf":
/*!*******************************************!*\
  !*** ./src/Fonts/HelveticaNeue-Roman.otf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "06b479b25d6201103e708a7b4dd509af.otf";

/***/ }),

/***/ "./src/Fonts/HelveticaNeue-UltraLight.otf":
/*!************************************************!*\
  !*** ./src/Fonts/HelveticaNeue-UltraLight.otf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11cf35c0ccde5171ba1a91ca47e6225a.otf";

/***/ }),

/***/ "./src/Reducer/timerReducer.js":
/*!*************************************!*\
  !*** ./src/Reducer/timerReducer.js ***!
  \*************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Constants_initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/initialState */ "./src/Constants/initialState.js");
/* harmony import */ var _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/actionTypes */ "./src/Constants/actionTypes.js");



// REDUCER
const timer = (state = _Constants_initialState__WEBPACK_IMPORTED_MODULE_0__["initialState"], action) => {
  switch (action.type) {
    case _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["START_TIMER"]: {
      let { time } = action.payload;
      let { currentTime } = state
      return ({
        ...state,
        startTime: time - currentTime,
        running: true,
      })
    }
    case _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["STOP_TIMER"]: {
      return ({
        ...state,
        startTime: 0,
        running: false,
      })
    }
    case _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET_TIMER"]: {
      return ({
        ...state,
        ..._Constants_initialState__WEBPACK_IMPORTED_MODULE_0__["initialState"],
      })
    }
    case _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_TIME"]: {
      const { time } = action.payload;
      const { startTime, currentTime: previousCurrentTime, previousLapTime } = state;
      const currentTime = startTime > 0 ? time - startTime : previousCurrentTime;

      return ({
        ...state,
        currentTime,
        currentLapTime: currentTime - previousLapTime,
      })
    }
    case _Constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LAP"]: {
      const {
        currentLapTime, 
        laps, 
        previousLapTime, 
        slowestLapTime, 
        fastestLapTime,
        slowestLapTimeId,
        fastestLapTimeId,
        nextId
      } = state;
      let newLap = {
        id: nextId,
        lapTime: currentLapTime,
      };
      return ({
        ...state,
        nextId: nextId + 1,
        previousLapTime: currentLapTime + previousLapTime,
        laps: [...laps].concat(newLap),
        slowestLapTimeId: currentLapTime > slowestLapTime ? newLap.id : slowestLapTimeId,
        fastestLapTimeId: currentLapTime < fastestLapTime ? newLap.id : fastestLapTimeId,
        fastestLapTime: currentLapTime < fastestLapTime ? currentLapTime : fastestLapTime,
        slowestLapTime: currentLapTime > slowestLapTime ? currentLapTime : slowestLapTime,
      })
    }
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/*! exports provided: getTimeAsAString, createLapNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeAsAString", function() { return getTimeAsAString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLapNode", function() { return createLapNode; });

// Helper function to format a millisecond timestamp into a string of (*hours) : minutes : seconds : centiseconds
// * only displayed if time is greater than 60 minutes
const getTimeAsAString = (time) => {
  let hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(time % (1000 * 60) / (1000));
  let milliseconds = Math.floor(time % (1000) / 10);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  return `${Number(hours) < 1 ? '' : hours + ':'} ${minutes}:${seconds}.${milliseconds}`;
}

// Helper function to create lapNodes and assigning them a color based on 
// the optional 2nd and 3rd arguments.
const createLapNode = (lapObj, boolFastest = false, boolSlowest = false) => {
  const { id, lapTime } = lapObj;

  let newLapNode = document.createElement('li');
  
  const newLap = document.createElement('h2');
  newLap.className = "lapNo";
  newLap.appendChild(document.createTextNode(`Lap ${id}`));

  const newLapTime = document.createElement('h2');
  newLapTime.className = "lapStopTime";
  newLapTime.appendChild(document.createTextNode(`${getTimeAsAString(lapTime)}`));

  if ((boolFastest || boolSlowest) && boolFastest !== boolSlowest) {
    newLapNode.style.color = boolFastest ? 'green' : 'red';
  };

  newLapNode.append(newLap);
  newLapNode.append(newLapTime);

  return newLapNode;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants/initialState */ "./src/Constants/initialState.js");
/* harmony import */ var _Actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actions/actions */ "./src/Actions/actions.js");
/* harmony import */ var _Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducer/timerReducer */ "./src/Reducer/timerReducer.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");






// DECLARE STATE AND ASSIGN IT TO THE VALUE OF THE INITIAL STATE
let state = _Constants_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], tInterval;

// Declare constants for buttons and assign them a reference to their
// respective properties of the document object.
const startBtn = document.querySelector('.startTimer');
const stopBtn = document.querySelector('.stopTimer');
const resetBtn = document.querySelector('.resetTimer');
const lapBtn = document.querySelector('.lap');

// Declare and assign re-assignable variables for elements to be rendered.
let currentTimeDisplay = document.querySelector('.timeDisplay');
let currentLapDisplay = document.querySelector('.currentLapContainer');
//let lapDisplay = document.querySelector('.lapsContainer');
let lapDisplay = document.querySelector('#lapsCont')


// Define show and hide functions to toggle display property of buttons
const show = function (elem) {
  elem.style.display = 'inline-flex';
}
const hide = function (elem) {
  elem.style.display = 'none';
}

// Use helper function to create lap nodes from the array of lap objects
// and use the return values to manipulate the DOM
function showLaps ({ laps, slowestLapTimeId, fastestLapTimeId }) {
  lapDisplay.innerHTML = '';
  laps = laps.map(lap => {
    const { id } = lap;
    return Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_4__["createLapNode"])(lap, fastestLapTimeId === id, slowestLapTimeId === id);
  }).reverse();
  laps.forEach(lap => {
    lapDisplay.appendChild(lap);
  })
}

// Calculate current time and current lap time by comparing Date.now() to
// the startTime timestamp in state. Then update the DOM with the calculated 
// current times. This function only "consumes" the state and does not alter 
// it at all. Function is called recursively by the setInterval function 
// assigned to the tInterval variable. 
function getTime() {
  const timeStamp = Date.now();
  const { startTime, currentTime, previousLapTime, nextId } = state;
  const currTime = startTime ? (timeStamp - startTime) : currentTime;
  const currLapTime = currTime - previousLapTime;
  const currentLap = Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_4__["createLapNode"])(({ id: nextId, lapTime: currLapTime }))

  currentLapDisplay.innerHTML = '';
  currentLapDisplay.appendChild(currentLap);
  currentTimeDisplay.innerHTML = Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_4__["getTimeAsAString"])(currTime);
}

// Rendering funtion that handles the conditional rendering logic such as
// showing/hiding buttons, resetting DOM elements to their empty/initial value
// state. The function is called after each click event, after the reducer has 
// fired and the new state has been assigned.
function renderState ({ laps, currentTime, running }) {

  if(laps.length > 0) showLaps(state)
  else lapDisplay.innerHTML = '';

  if (running) {
    hide(startBtn);
    hide(resetBtn);
    show(stopBtn);
    show(lapBtn);
  }

  if (!running) {
    show(startBtn);
    show(resetBtn);
    hide(stopBtn);
    hide(lapBtn);
  }

  if (currentTime === 0) {
    currentLapDisplay.innerHTML = '';
    currentTimeDisplay.innerHTML = '00:00.00';
    hide(resetBtn);
    show(lapBtn);
    lapBtn.classList.toggle("runningLap")
  }

}

// This event listener listens for any click event that fires within the 
// time container div. Any click event that fires in a child element of the
// container will first execute this function before traveling down to the 
// child element's event handler (set useCapture to true). This is to avoid
// repeating logic in reducer that relies on the currentTime and currentLapTime.
document.querySelector('.timerContainer').addEventListener('click', e => {
  let time = Date.now();
  state = Object(_Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__["timer"])(state, Object(_Actions_actions__WEBPACK_IMPORTED_MODULE_2__["getCurrentTime"])(time));
  console.log('here', state);
},true);


// Event listener that listens for a click event and fires the reducer.
// the new state returned from the reducer is then assigned to the state variable.
document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.startTimer')) {
    let time = Date.now();
    state = Object(_Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__["timer"])(state, Object(_Actions_actions__WEBPACK_IMPORTED_MODULE_2__["startTimer"])(time))
    renderState(state);
    tInterval = setInterval(getTime, 10);
  }
  else if(event.target.matches('.stopTimer')) {
    let time = Date.now();
    clearInterval(tInterval);
    state = Object(_Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__["timer"])(state, Object(_Actions_actions__WEBPACK_IMPORTED_MODULE_2__["stopTimer"])(time))
    renderState(state);
  }
  else if(event.target.matches('.resetTimer')) {
    state = Object(_Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__["timer"])(state, Object(_Actions_actions__WEBPACK_IMPORTED_MODULE_2__["resetTimer"])());
    renderState(state);
  }
  else if(event.target.matches('.lap')) {
    state = Object(_Reducer_timerReducer__WEBPACK_IMPORTED_MODULE_3__["timer"])(state, Object(_Actions_actions__WEBPACK_IMPORTED_MODULE_2__["lapTimer"])());
    renderState(state)
  }
});



/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy9pbml0aWFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZvbnRzL0hlbHZldGljYU5ldWUtUm9tYW4ub3RmIiwid2VicGFjazovLy8uL3NyYy9Gb250cy9IZWx2ZXRpY2FOZXVlLVVsdHJhTGlnaHQub3RmIiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2VyL3RpbWVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz84MzAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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QUFZLG1FQUFLLFFBQVEsbUVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBSyxRQUFRLGlFQUFRO0FBQ2pDO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbklELGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9Gb250cy9IZWx2ZXRpY2FOZXVlLVVsdHJhTGlnaHQub3RmXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vRm9udHMvSGVsdmV0aWNhTmV1ZS1Sb21hbi5vdGZcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAndGltZWZvbnQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgZm9ybWF0KCdvcGVudHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6ICdub3JtYWwnO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbGFwZm9udCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogJ25vcm1hbCc7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50aW1lckNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogdnc7XFxuICBmb250LWZhbWlseTogJ3RpbWVmb250JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRpbWVEaXNwbGF5IHtcXG4gIGhlaWdodDogNTB2dztcXG4gIGZvbnQtc2l6ZTogMjJ2dztcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogJ2JvbGQnO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLmJ0biB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE2dnc7XFxuICB3aWR0aDogMTZ2dztcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgZm9udC1mYW1pbHk6ICdsYXBmb250JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYnV0dG9uc3tcXG4gIGhlaWdodDogMjF2dztcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcbiNsYXBzRGlzcGxheXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uc3RhcnRUaW1lciB7XFxuICBjb2xvcjogIzRGQzUzRDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDk0LCAzLCAwLjYpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoNTUsIDk0LCAzLCAwLjYpO1xcbn1cXG5cXG4uc3RvcFRpbWVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgOSwgOSwgMC42KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDE0NCwgOSwgOSwgMC42KTtcXG59XFxuXFxuLnJlc2V0VGltZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY2LCAxNjYsIDE2NiwgMC42KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDE2NiwgMTY2LCAxNjYsIDAuNik7XFxufVxcblxcbi5ydW5uaW5nTGFwe1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY2LCAxNjYsIDE2NiwgMC42KSAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMTY2LCAxNjYsIDE2NiwgMC42KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGFwIHtcXG4gIGNvbG9yOiByZ2JhKDE2NiwgMTY2LCAxNjYsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjYpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoNDgsIDQ4LCA0OCwgMC42KTtcXG59XFxuXFxuLnN0YXJ0VGltZXIsIC5zdG9wVGltZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XFxufVxcbi5sYXAsIC5yZXNldFRpbWVyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG59XFxuXFxuLmxhcHNDb250YWluZXIsIC5jdXJyZW50TGFwQ29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgZm9udC1mYW1pbHk6ICdsYXBmb250JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxpc3Qtc3R5bGU6bm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmgye1xcbiAgZm9udC1zaXplOiA0dnc7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuLmN1cnJlbnRMYXBDb250YWluZXIgdWwge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMCVcXG59XFxudWx7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcbmxpIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDAuM3B4IHJnYmEoMTY2LCAxNjYsIDE2NiwgMC42KTtcXG59XFxuXFxuLmxhcE5ve1xcbmZsb2F0OiBsZWZ0O1xcbmRpc3BsYXk6IGZsZXg7XFxubWFyZ2luLWxlZnQ6IDR2dztcXG59XFxuLmxhcFN0b3BUaW1lIHtcXG5mbG9hdDogcmlnaHQ7XFxuZGlzcGxheTogZmxleDtcXG5tYXJnaW4tcmlnaHQ6IDR2dztcXG59XFxuXFxuLmN1cnJlbnRMYXBDb250YWluZXIgbGkge1xcbiAgYm9yZGVyLXRvcDogc29saWQgMC4zcHggcmdiYSgxNjYsIDE2NiwgMTY2LCAwLjYpO1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uL0NvbnN0YW50cy9hY3Rpb25UeXBlcyc7XG5cbi8vIEFDVElPTlNcbmV4cG9ydCBjb25zdCBzdGFydFRpbWVyID0gKHRpbWUpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1RJTUVSLFxuICBwYXlsb2FkOiB7XG4gICAgdGltZVxuICB9XG59KVxuXG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VGltZSA9ICh0aW1lKSA9PiAoe1xuICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQ1VSUkVOVF9USU1FLFxuICBwYXlsb2FkOiB7XG4gICAgdGltZVxuICB9XG59KVxuXG5leHBvcnQgY29uc3Qgc3RvcFRpbWVyID0gKHRpbWUpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLlNUT1BfVElNRVIsXG4gIHBheWxvYWQ6IHtcbiAgICB0aW1lXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZXNldFRpbWVyID0gKCkgPT4gKHtcbiAgdHlwZTogYWN0aW9uVHlwZXMuUkVTRVRfVElNRVIsXG59KVxuXG5leHBvcnQgY29uc3QgbGFwVGltZXIgPSAoKSA9PiAoe1xuICB0eXBlOiBhY3Rpb25UeXBlcy5MQVAsXG59KVxuXG4iLCIvLyBBQ1RJT04gVFlQRVNcbmV4cG9ydCBjb25zdCBTVEFSVF9USU1FUiA9ICdTVEFSVF9USU1FUic7XG5leHBvcnQgY29uc3QgU1RPUF9USU1FUiA9ICdTVE9QX1RJTUVSJztcbmV4cG9ydCBjb25zdCBSRVNFVF9USU1FUiA9ICdSRVNFVF9USU1FUic7XG5leHBvcnQgY29uc3QgTEFQID0gJ0xBUCc7XG5leHBvcnQgY29uc3QgR0VUX0NVUlJFTlRfVElNRSA9ICdHRVRfQ1VSUkVOVF9USU1FJzsiLCIvLyBJTklUSUFMIFNUQVRFXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzdGFydFRpbWU6IDAsXG4gIGN1cnJlbnRUaW1lOiAwLFxuXG4gIHJ1bm5pbmc6IGZhbHNlLFxuICBuZXh0SWQ6IDEsXG5cbiAgY3VycmVudExhcFRpbWU6IDAsXG4gIHByZXZpb3VzTGFwVGltZTogMCxcblxuICBzbG93ZXN0TGFwVGltZUlkOiBudWxsLFxuICBmYXN0ZXN0TGFwVGltZUlkOiBudWxsLFxuXG4gIHNsb3dlc3RMYXBUaW1lOiAwLFxuICBmYXN0ZXN0TGFwVGltZTogSW5maW5pdHksXG5cbiAgbGFwczogW10sXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDZiNDc5YjI1ZDYyMDExMDNlNzA4YTdiNGRkNTA5YWYub3RmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTFjZjM1YzBjY2RlNTE3MWJhMWE5MWNhNDdlNjIyNWEub3RmXCI7IiwiaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vQ29uc3RhbnRzL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICcuLi9Db25zdGFudHMvYWN0aW9uVHlwZXMnO1xuXG4vLyBSRURVQ0VSXG5leHBvcnQgY29uc3QgdGltZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVF9USU1FUjoge1xuICAgICAgbGV0IHsgdGltZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBsZXQgeyBjdXJyZW50VGltZSB9ID0gc3RhdGVcbiAgICAgIHJldHVybiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhcnRUaW1lOiB0aW1lIC0gY3VycmVudFRpbWUsXG4gICAgICAgIHJ1bm5pbmc6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUT1BfVElNRVI6IHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVRfVElNRVI6IHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfSlcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQ1VSUkVOVF9USU1FOiB7XG4gICAgICBjb25zdCB7IHRpbWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgeyBzdGFydFRpbWUsIGN1cnJlbnRUaW1lOiBwcmV2aW91c0N1cnJlbnRUaW1lLCBwcmV2aW91c0xhcFRpbWUgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBzdGFydFRpbWUgPiAwID8gdGltZSAtIHN0YXJ0VGltZSA6IHByZXZpb3VzQ3VycmVudFRpbWU7XG5cbiAgICAgIHJldHVybiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgIGN1cnJlbnRMYXBUaW1lOiBjdXJyZW50VGltZSAtIHByZXZpb3VzTGFwVGltZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTEFQOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRMYXBUaW1lLCBcbiAgICAgICAgbGFwcywgXG4gICAgICAgIHByZXZpb3VzTGFwVGltZSwgXG4gICAgICAgIHNsb3dlc3RMYXBUaW1lLCBcbiAgICAgICAgZmFzdGVzdExhcFRpbWUsXG4gICAgICAgIHNsb3dlc3RMYXBUaW1lSWQsXG4gICAgICAgIGZhc3Rlc3RMYXBUaW1lSWQsXG4gICAgICAgIG5leHRJZFxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgbGV0IG5ld0xhcCA9IHtcbiAgICAgICAgaWQ6IG5leHRJZCxcbiAgICAgICAgbGFwVGltZTogY3VycmVudExhcFRpbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXh0SWQ6IG5leHRJZCArIDEsXG4gICAgICAgIHByZXZpb3VzTGFwVGltZTogY3VycmVudExhcFRpbWUgKyBwcmV2aW91c0xhcFRpbWUsXG4gICAgICAgIGxhcHM6IFsuLi5sYXBzXS5jb25jYXQobmV3TGFwKSxcbiAgICAgICAgc2xvd2VzdExhcFRpbWVJZDogY3VycmVudExhcFRpbWUgPiBzbG93ZXN0TGFwVGltZSA/IG5ld0xhcC5pZCA6IHNsb3dlc3RMYXBUaW1lSWQsXG4gICAgICAgIGZhc3Rlc3RMYXBUaW1lSWQ6IGN1cnJlbnRMYXBUaW1lIDwgZmFzdGVzdExhcFRpbWUgPyBuZXdMYXAuaWQgOiBmYXN0ZXN0TGFwVGltZUlkLFxuICAgICAgICBmYXN0ZXN0TGFwVGltZTogY3VycmVudExhcFRpbWUgPCBmYXN0ZXN0TGFwVGltZSA/IGN1cnJlbnRMYXBUaW1lIDogZmFzdGVzdExhcFRpbWUsXG4gICAgICAgIHNsb3dlc3RMYXBUaW1lOiBjdXJyZW50TGFwVGltZSA+IHNsb3dlc3RMYXBUaW1lID8gY3VycmVudExhcFRpbWUgOiBzbG93ZXN0TGFwVGltZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgYSBtaWxsaXNlY29uZCB0aW1lc3RhbXAgaW50byBhIHN0cmluZyBvZiAoKmhvdXJzKSA6IG1pbnV0ZXMgOiBzZWNvbmRzIDogY2VudGlzZWNvbmRzXG4vLyAqIG9ubHkgZGlzcGxheWVkIGlmIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDYwIG1pbnV0ZXNcbmV4cG9ydCBjb25zdCBnZXRUaW1lQXNBU3RyaW5nID0gKHRpbWUpID0+IHtcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lICUgKDEwMDAgKiA2MCAqIDYwICogMjQpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lICUgKDEwMDAgKiA2MCAqIDYwKSAvICgxMDAwICogNjApKTtcbiAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSAoMTAwMCAqIDYwKSAvICgxMDAwKSk7XG4gIGxldCBtaWxsaXNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSAoMTAwMCkgLyAxMCk7XG5cbiAgaG91cnMgPSAoaG91cnMgPCAxMCkgPyAnMCcgKyBob3VycyA6IGhvdXJzO1xuICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcbiAgc2Vjb25kcyA9IChzZWNvbmRzIDwgMTApID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHM7XG4gIG1pbGxpc2Vjb25kcyA9IChtaWxsaXNlY29uZHMgPCAxMCkgPyAnMCcgKyBtaWxsaXNlY29uZHMgOiBtaWxsaXNlY29uZHM7XG5cbiAgcmV0dXJuIGAke051bWJlcihob3VycykgPCAxID8gJycgOiBob3VycyArICc6J30gJHttaW51dGVzfToke3NlY29uZHN9LiR7bWlsbGlzZWNvbmRzfWA7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgbGFwTm9kZXMgYW5kIGFzc2lnbmluZyB0aGVtIGEgY29sb3IgYmFzZWQgb24gXG4vLyB0aGUgb3B0aW9uYWwgMm5kIGFuZCAzcmQgYXJndW1lbnRzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxhcE5vZGUgPSAobGFwT2JqLCBib29sRmFzdGVzdCA9IGZhbHNlLCBib29sU2xvd2VzdCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGxhcFRpbWUgfSA9IGxhcE9iajtcblxuICBsZXQgbmV3TGFwTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIFxuICBjb25zdCBuZXdMYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuZXdMYXAuY2xhc3NOYW1lID0gXCJsYXBOb1wiO1xuICBuZXdMYXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYExhcCAke2lkfWApKTtcblxuICBjb25zdCBuZXdMYXBUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmV3TGFwVGltZS5jbGFzc05hbWUgPSBcImxhcFN0b3BUaW1lXCI7XG4gIG5ld0xhcFRpbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Z2V0VGltZUFzQVN0cmluZyhsYXBUaW1lKX1gKSk7XG5cbiAgaWYgKChib29sRmFzdGVzdCB8fCBib29sU2xvd2VzdCkgJiYgYm9vbEZhc3Rlc3QgIT09IGJvb2xTbG93ZXN0KSB7XG4gICAgbmV3TGFwTm9kZS5zdHlsZS5jb2xvciA9IGJvb2xGYXN0ZXN0ID8gJ2dyZWVuJyA6ICdyZWQnO1xuICB9O1xuXG4gIG5ld0xhcE5vZGUuYXBwZW5kKG5ld0xhcCk7XG4gIG5ld0xhcE5vZGUuYXBwZW5kKG5ld0xhcFRpbWUpO1xuXG4gIHJldHVybiBuZXdMYXBOb2RlO1xufSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vQ29uc3RhbnRzL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgeyBzdGFydFRpbWVyLCBnZXRDdXJyZW50VGltZSwgc3RvcFRpbWVyLCByZXNldFRpbWVyLCBsYXBUaW1lciB9IGZyb20gJy4vQWN0aW9ucy9hY3Rpb25zJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAnLi9SZWR1Y2VyL3RpbWVyUmVkdWNlcic7XG5pbXBvcnQgeyBnZXRUaW1lQXNBU3RyaW5nLCBjcmVhdGVMYXBOb2RlIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG4vLyBERUNMQVJFIFNUQVRFIEFORCBBU1NJR04gSVQgVE8gVEhFIFZBTFVFIE9GIFRIRSBJTklUSUFMIFNUQVRFXG5sZXQgc3RhdGUgPSBpbml0aWFsU3RhdGUsIHRJbnRlcnZhbDtcblxuLy8gRGVjbGFyZSBjb25zdGFudHMgZm9yIGJ1dHRvbnMgYW5kIGFzc2lnbiB0aGVtIGEgcmVmZXJlbmNlIHRvIHRoZWlyXG4vLyByZXNwZWN0aXZlIHByb3BlcnRpZXMgb2YgdGhlIGRvY3VtZW50IG9iamVjdC5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0VGltZXInKTtcbmNvbnN0IHN0b3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcFRpbWVyJyk7XG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldFRpbWVyJyk7XG5jb25zdCBsYXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFwJyk7XG5cbi8vIERlY2xhcmUgYW5kIGFzc2lnbiByZS1hc3NpZ25hYmxlIHZhcmlhYmxlcyBmb3IgZWxlbWVudHMgdG8gYmUgcmVuZGVyZWQuXG5sZXQgY3VycmVudFRpbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVEaXNwbGF5Jyk7XG5sZXQgY3VycmVudExhcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudExhcENvbnRhaW5lcicpO1xuLy9sZXQgbGFwRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXBzQ29udGFpbmVyJyk7XG5sZXQgbGFwRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXBzQ29udCcpXG5cblxuLy8gRGVmaW5lIHNob3cgYW5kIGhpZGUgZnVuY3Rpb25zIHRvIHRvZ2dsZSBkaXNwbGF5IHByb3BlcnR5IG9mIGJ1dHRvbnNcbmNvbnN0IHNob3cgPSBmdW5jdGlvbiAoZWxlbSkge1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xufVxuY29uc3QgaGlkZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy8gVXNlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgbGFwIG5vZGVzIGZyb20gdGhlIGFycmF5IG9mIGxhcCBvYmplY3RzXG4vLyBhbmQgdXNlIHRoZSByZXR1cm4gdmFsdWVzIHRvIG1hbmlwdWxhdGUgdGhlIERPTVxuZnVuY3Rpb24gc2hvd0xhcHMgKHsgbGFwcywgc2xvd2VzdExhcFRpbWVJZCwgZmFzdGVzdExhcFRpbWVJZCB9KSB7XG4gIGxhcERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxhcHMgPSBsYXBzLm1hcChsYXAgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGxhcDtcbiAgICByZXR1cm4gY3JlYXRlTGFwTm9kZShsYXAsIGZhc3Rlc3RMYXBUaW1lSWQgPT09IGlkLCBzbG93ZXN0TGFwVGltZUlkID09PSBpZCk7XG4gIH0pLnJldmVyc2UoKTtcbiAgbGFwcy5mb3JFYWNoKGxhcCA9PiB7XG4gICAgbGFwRGlzcGxheS5hcHBlbmRDaGlsZChsYXApO1xuICB9KVxufVxuXG4vLyBDYWxjdWxhdGUgY3VycmVudCB0aW1lIGFuZCBjdXJyZW50IGxhcCB0aW1lIGJ5IGNvbXBhcmluZyBEYXRlLm5vdygpIHRvXG4vLyB0aGUgc3RhcnRUaW1lIHRpbWVzdGFtcCBpbiBzdGF0ZS4gVGhlbiB1cGRhdGUgdGhlIERPTSB3aXRoIHRoZSBjYWxjdWxhdGVkIFxuLy8gY3VycmVudCB0aW1lcy4gVGhpcyBmdW5jdGlvbiBvbmx5IFwiY29uc3VtZXNcIiB0aGUgc3RhdGUgYW5kIGRvZXMgbm90IGFsdGVyIFxuLy8gaXQgYXQgYWxsLiBGdW5jdGlvbiBpcyBjYWxsZWQgcmVjdXJzaXZlbHkgYnkgdGhlIHNldEludGVydmFsIGZ1bmN0aW9uIFxuLy8gYXNzaWduZWQgdG8gdGhlIHRJbnRlcnZhbCB2YXJpYWJsZS4gXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICBjb25zdCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IHN0YXJ0VGltZSwgY3VycmVudFRpbWUsIHByZXZpb3VzTGFwVGltZSwgbmV4dElkIH0gPSBzdGF0ZTtcbiAgY29uc3QgY3VyclRpbWUgPSBzdGFydFRpbWUgPyAodGltZVN0YW1wIC0gc3RhcnRUaW1lKSA6IGN1cnJlbnRUaW1lO1xuICBjb25zdCBjdXJyTGFwVGltZSA9IGN1cnJUaW1lIC0gcHJldmlvdXNMYXBUaW1lO1xuICBjb25zdCBjdXJyZW50TGFwID0gY3JlYXRlTGFwTm9kZSgoeyBpZDogbmV4dElkLCBsYXBUaW1lOiBjdXJyTGFwVGltZSB9KSlcblxuICBjdXJyZW50TGFwRGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgY3VycmVudExhcERpc3BsYXkuYXBwZW5kQ2hpbGQoY3VycmVudExhcCk7XG4gIGN1cnJlbnRUaW1lRGlzcGxheS5pbm5lckhUTUwgPSBnZXRUaW1lQXNBU3RyaW5nKGN1cnJUaW1lKTtcbn1cblxuLy8gUmVuZGVyaW5nIGZ1bnRpb24gdGhhdCBoYW5kbGVzIHRoZSBjb25kaXRpb25hbCByZW5kZXJpbmcgbG9naWMgc3VjaCBhc1xuLy8gc2hvd2luZy9oaWRpbmcgYnV0dG9ucywgcmVzZXR0aW5nIERPTSBlbGVtZW50cyB0byB0aGVpciBlbXB0eS9pbml0aWFsIHZhbHVlXG4vLyBzdGF0ZS4gVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciBlYWNoIGNsaWNrIGV2ZW50LCBhZnRlciB0aGUgcmVkdWNlciBoYXMgXG4vLyBmaXJlZCBhbmQgdGhlIG5ldyBzdGF0ZSBoYXMgYmVlbiBhc3NpZ25lZC5cbmZ1bmN0aW9uIHJlbmRlclN0YXRlICh7IGxhcHMsIGN1cnJlbnRUaW1lLCBydW5uaW5nIH0pIHtcblxuICBpZihsYXBzLmxlbmd0aCA+IDApIHNob3dMYXBzKHN0YXRlKVxuICBlbHNlIGxhcERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgaWYgKHJ1bm5pbmcpIHtcbiAgICBoaWRlKHN0YXJ0QnRuKTtcbiAgICBoaWRlKHJlc2V0QnRuKTtcbiAgICBzaG93KHN0b3BCdG4pO1xuICAgIHNob3cobGFwQnRuKTtcbiAgfVxuXG4gIGlmICghcnVubmluZykge1xuICAgIHNob3coc3RhcnRCdG4pO1xuICAgIHNob3cocmVzZXRCdG4pO1xuICAgIGhpZGUoc3RvcEJ0bik7XG4gICAgaGlkZShsYXBCdG4pO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRUaW1lID09PSAwKSB7XG4gICAgY3VycmVudExhcERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gICAgY3VycmVudFRpbWVEaXNwbGF5LmlubmVySFRNTCA9ICcwMDowMC4wMCc7XG4gICAgaGlkZShyZXNldEJ0bik7XG4gICAgc2hvdyhsYXBCdG4pO1xuICAgIGxhcEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwicnVubmluZ0xhcFwiKVxuICB9XG5cbn1cblxuLy8gVGhpcyBldmVudCBsaXN0ZW5lciBsaXN0ZW5zIGZvciBhbnkgY2xpY2sgZXZlbnQgdGhhdCBmaXJlcyB3aXRoaW4gdGhlIFxuLy8gdGltZSBjb250YWluZXIgZGl2LiBBbnkgY2xpY2sgZXZlbnQgdGhhdCBmaXJlcyBpbiBhIGNoaWxkIGVsZW1lbnQgb2YgdGhlXG4vLyBjb250YWluZXIgd2lsbCBmaXJzdCBleGVjdXRlIHRoaXMgZnVuY3Rpb24gYmVmb3JlIHRyYXZlbGluZyBkb3duIHRvIHRoZSBcbi8vIGNoaWxkIGVsZW1lbnQncyBldmVudCBoYW5kbGVyIChzZXQgdXNlQ2FwdHVyZSB0byB0cnVlKS4gVGhpcyBpcyB0byBhdm9pZFxuLy8gcmVwZWF0aW5nIGxvZ2ljIGluIHJlZHVjZXIgdGhhdCByZWxpZXMgb24gdGhlIGN1cnJlbnRUaW1lIGFuZCBjdXJyZW50TGFwVGltZS5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lckNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgc3RhdGUgPSB0aW1lcihzdGF0ZSwgZ2V0Q3VycmVudFRpbWUodGltZSkpO1xuICBjb25zb2xlLmxvZygnaGVyZScsIHN0YXRlKTtcbn0sdHJ1ZSk7XG5cblxuLy8gRXZlbnQgbGlzdGVuZXIgdGhhdCBsaXN0ZW5zIGZvciBhIGNsaWNrIGV2ZW50IGFuZCBmaXJlcyB0aGUgcmVkdWNlci5cbi8vIHRoZSBuZXcgc3RhdGUgcmV0dXJuZWQgZnJvbSB0aGUgcmVkdWNlciBpcyB0aGVuIGFzc2lnbmVkIHRvIHRoZSBzdGF0ZSB2YXJpYWJsZS5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5zdGFydFRpbWVyJykpIHtcbiAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgc3RhdGUgPSB0aW1lcihzdGF0ZSwgc3RhcnRUaW1lcih0aW1lKSlcbiAgICByZW5kZXJTdGF0ZShzdGF0ZSk7XG4gICAgdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2V0VGltZSwgMTApO1xuICB9XG4gIGVsc2UgaWYoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5zdG9wVGltZXInKSkge1xuICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICBjbGVhckludGVydmFsKHRJbnRlcnZhbCk7XG4gICAgc3RhdGUgPSB0aW1lcihzdGF0ZSwgc3RvcFRpbWVyKHRpbWUpKVxuICAgIHJlbmRlclN0YXRlKHN0YXRlKTtcbiAgfVxuICBlbHNlIGlmKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcucmVzZXRUaW1lcicpKSB7XG4gICAgc3RhdGUgPSB0aW1lcihzdGF0ZSwgcmVzZXRUaW1lcigpKTtcbiAgICByZW5kZXJTdGF0ZShzdGF0ZSk7XG4gIH1cbiAgZWxzZSBpZihldmVudC50YXJnZXQubWF0Y2hlcygnLmxhcCcpKSB7XG4gICAgc3RhdGUgPSB0aW1lcihzdGF0ZSwgbGFwVGltZXIoKSk7XG4gICAgcmVuZGVyU3RhdGUoc3RhdGUpXG4gIH1cbn0pO1xuXG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9