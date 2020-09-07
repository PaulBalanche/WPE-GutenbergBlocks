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

/***/ "../../../../frontspec.json":
/*!****************************************************************************************************!*\
  !*** /Applications/MAMP/htdocs/github.com/WPtoWPextend/web/app/themes/custom-theme/frontspec.json ***!
  \****************************************************************************************************/
/*! exports provided: assets, components, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assets\":{\"css\":[{\"name\":\"main\",\"type\":\"style\",\"path\":\"./dist/index.css\"}],\"js\":[{\"name\":\"main\",\"type\":\"bare\",\"path\":\"./dist/index.js\"}]},\"components\":[{\"id\":\"s-google-map\",\"name\":\"Google map\",\"description\":\"Allows you to display nice google maps in your website\",\"path\":\"s-google-map/render.twig\",\"props\":{\"title\":{\"label\":\"Title\",\"type\":\"string\",\"category\":\"cat1\"},\"subtitle\":{\"label\":\"Subtitle\",\"type\":\"string\",\"category\":\"cat1\"},\"api-key\":{\"label\":\"API key\",\"type\":\"string\",\"category\":\"cat2\",\"required\":true,\"description\":\"Google map API key\",\"default\":\"AIzaSyDzFfEzhmYXRTlONUCtMWQ88uHJhsbtXY4\"},\"zoom\":{\"label\":\"Zoom\",\"type\":\"number\",\"description\":\"Specify the zoom you want on the map\",\"default\":4}},\"props_categories\":[{\"id\":\"cat1\",\"name\":\"Ma super categorie\"},{\"id\":\"cat2\",\"name\":\"Hého !!!\"}]},{\"id\":\"demo\",\"name\":\"Demo\",\"description\":\"Ma super demo\",\"path\":\"demo.twig\",\"props\":{\"string\":{\"label\":\"String\",\"type\":\"string\"},\"string_repeat\":{\"label\":\"String repeatable\",\"type\":\"string\",\"repeatable\":true},\"number\":{\"label\":\"Number\",\"type\":\"number\",\"default\":4},\"number_repeatable\":{\"label\":\"Number\",\"type\":\"number\",\"repeatable\":true},\"text\":{\"label\":\"Text\",\"type\":\"text\"},\"boolean\":{\"label\":\"Boolean\",\"type\":\"boolean\"},\"image\":{\"label\":\"Image\",\"type\":\"image\"},\"gallery\":{\"label\":\"Gallery\",\"type\":\"gallery\"}}}]}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _frontspec_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../frontspec.json */ "../../../../frontspec.json");
var _frontspec_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../frontspec.json */ "../../../../frontspec.json", 1);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var WpeComponent = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WpeComponent, _Component);

  var _super = _createSuper(WpeComponent);

  function WpeComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, WpeComponent);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(WpeComponent, [{
    key: "getAttribute",
    value: function getAttribute(key) {
      return this.props.attributes[key];
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      this.props.setAttributes(attributes);
    }
  }, {
    key: "renderTextControl",
    value: function renderTextControl(label, keyProp) {
      var _this = this;

      var isNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var repeatable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!!repeatable) {
        var currentValueAttribute = this.getAttribute(keyProp);
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(currentValueAttribute) != "object" || currentValueAttribute.length == 0) currentValueAttribute = [""];
        var tempHtml = [];
        currentValueAttribute.forEach(function (valueRepeatableAttribute, indexRepeatableAttribute) {
          tempHtml.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
            key: _this.props.clientId + "-" + keyProp + "-" + indexRepeatableAttribute,
            label: label + " (" + indexRepeatableAttribute + ")",
            type: !!isNumber ? "number" : "text",
            value: valueRepeatableAttribute,
            onChange: function onChange(value) {
              return _this.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, currentValueAttribute.map(function (valueMapTemp, keyMapTemp) {
                if (keyMapTemp == indexRepeatableAttribute) return value;
                return valueMapTemp;
              })));
            }
          }));
        });
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          key: this.props.clientId + "-" + keyProp + "-container"
        }, tempHtml, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          isSecondary: true,
          isSmall: true,
          onClick: function onClick() {
            return _this.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, currentValueAttribute.concat([""])));
          }
        }, "Add"));
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          key: this.props.clientId + "-" + keyProp + "-container"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
          key: this.props.clientId + "-" + keyProp,
          label: label,
          type: !!isNumber ? "number" : "text",
          value: this.getAttribute(keyProp),
          onChange: function onChange(value) {
            return _this.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, parseInt(value, 10)));
          }
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected,
          clientId = _this$props.clientId;

      for (var key in _frontspec_json__WEBPACK_IMPORTED_MODULE_12__.components) {
        if (_frontspec_json__WEBPACK_IMPORTED_MODULE_12__.components.hasOwnProperty(key)) {
          var element = _frontspec_json__WEBPACK_IMPORTED_MODULE_12__.components[key];

          if (this.props.name == "custom/wpe-component-" + element.id) {
            // Visual mode
            if (!isSelected) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default.a, {
                block: "custom/wpe-component-" + element.id,
                attributes: attributes
              });
            } // Edition mode


            var catReOrder = {
              default: {
                props: {}
              }
            }; // 1. Loop Props Categories

            if (typeof element.props_categories != 'undefined') {
              for (var _i = 0, _Object$entries = Object.entries(element.props_categories); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
                    keyCatProps = _Object$entries$_i[0],
                    valueCatProps = _Object$entries$_i[1];

                catReOrder[valueCatProps.id] = {
                  name: valueCatProps.name,
                  props: {}
                };
              }
            } // 2. Loop Props


            for (var _i2 = 0, _Object$entries2 = Object.entries(element.props); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries2[_i2], 2),
                  keyProp = _Object$entries2$_i[0],
                  valueProp = _Object$entries2$_i[1];

              if (typeof valueProp.category != 'undefined' && valueProp.category in catReOrder) {
                catReOrder[valueProp.category].props[keyProp] = valueProp;
              } else {
                catReOrder['default'].props[keyProp] = valueProp;
              }
            } // 3. Render


            var editPlaceHolder = [];

            for (var _i3 = 0, _Object$entries3 = Object.entries(catReOrder); _i3 < _Object$entries3.length; _i3++) {
              var _Object$entries3$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries3[_i3], 2),
                  keyCat = _Object$entries3$_i[0],
                  valCat = _Object$entries3$_i[1];

              if (valCat.props.length == 0) continue;
              var currentEditCat = [];

              var _loop = function _loop() {
                var _createElement;

                var _Object$entries4$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries4[_i4], 2),
                    keyProp = _Object$entries4$_i[0],
                    valueProp = _Object$entries4$_i[1];

                switch (valueProp.type) {
                  case 'string':
                    currentEditCat.push(_this2.renderTextControl(valueProp.label, keyProp, false, valueProp.repeatable));
                    break;

                  case 'number':
                    currentEditCat.push(_this2.renderTextControl(valueProp.label, keyProp, true, valueProp.repeatable));
                    break;

                  case 'text':
                    currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                      key: clientId + "-" + keyProp + "-container"
                    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextareaControl"], {
                      key: clientId + "-" + keyProp,
                      label: valueProp.label,
                      value: attributes[keyProp],
                      onChange: function onChange(value) {
                        return _this2.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, value));
                      }
                    })));
                    break;

                  case 'boolean':
                    currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                      key: clientId + "-" + keyProp + "-container"
                    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], (_createElement = {
                      key: clientId + "-" + keyProp,
                      label: valueProp.label,
                      help: 'Help text',
                      checked: false
                    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_createElement, "help", attributes[keyProp] ? 'Enable' : 'Disable'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_createElement, "checked", attributes[keyProp]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_createElement, "onChange", function onChange(value) {
                      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, value));
                    }), _createElement))));
                    break;

                  case 'image':
                    var imagePreview = !!(attributes[keyProp] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(attributes[keyProp]) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
                      key: clientId + "-edit-image",
                      alt: "Edit image",
                      title: "Edit image",
                      className: "edit-image-preview",
                      src: attributes[keyProp].url
                    });
                    var removeImage = '';

                    if (imagePreview) {
                      removeImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                        key: clientId + "-remove-image",
                        isSecondary: true,
                        isSmall: true,
                        className: "block-library-cover__reset-button",
                        onClick: function onClick() {
                          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, undefined));
                        }
                      }, "Remove");
                    }

                    currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                      key: clientId + "-" + keyProp + "-container"
                    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
                      key: clientId + "-" + keyProp,
                      label: valueProp.label,
                      onSelect: function onSelect(value) {
                        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, {
                          id: value.id,
                          url: value.url
                        }));
                      },
                      allowedTypes: ['image'],
                      multiple: false,
                      disableMediaButtons: false,
                      mediaPreview: imagePreview,
                      value: attributes[keyProp]
                    }, removeImage)));
                    break;

                  case 'gallery':
                    var removeGallery = !!(attributes[keyProp] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(attributes[keyProp]) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                      key: clientId + "-remove-gallery",
                      isSecondary: true,
                      isSmall: true,
                      className: "block-library-cover__reset-button",
                      onClick: function onClick() {
                        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, undefined));
                      }
                    }, "Remove");
                    var galleryPreview = '';

                    if (removeGallery) {
                      var ulGalleryPreview = [];
                      attributes[keyProp].forEach(function (image) {
                        ulGalleryPreview.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("li", {
                          className: "blocks-gallery-item"
                        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
                          key: clientId + "-gallery-image" + image.id,
                          src: image.url
                        })));
                      });
                      galleryPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("figure", {
                        className: "wp-block-gallery columns-3"
                      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("ul", {
                        className: "blocks-gallery-grid"
                      }, ulGalleryPreview));
                    }

                    currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                      key: clientId + "-" + keyProp + "-container"
                    }, galleryPreview, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
                      key: clientId + "-" + keyProp,
                      label: valueProp.label,
                      onSelect: function onSelect(value) {
                        var newGallery = [];
                        value.forEach(function (image) {
                          newGallery.push({
                            id: image.id,
                            url: image.url
                          });
                        });
                        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyProp, newGallery));
                      },
                      allowedTypes: ['image'],
                      multiple: true,
                      disableMediaButtons: false,
                      addToGallery: !!attributes[keyProp],
                      value: attributes[keyProp],
                      isAppender: true
                    }, removeGallery)));
                    break;
                }
              };

              for (var _i4 = 0, _Object$entries4 = Object.entries(valCat.props); _i4 < _Object$entries4.length; _i4++) {
                _loop();
              }

              if (keyCat == "default") {
                editPlaceHolder.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", null, currentEditCat));
              } else {
                editPlaceHolder.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("legend", null, valCat.name), currentEditCat));
              }
            }

            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Placeholder"], {
              key: clientId + "-placeholder",
              label: element.name,
              isColumnLayout: true
            }, editPlaceHolder));
          }
        }
      }
    }
  }]);

  return WpeComponent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WpeComponent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontspec_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontspec.json */ "../../../../frontspec.json");
var _frontspec_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../frontspec.json */ "../../../../frontspec.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");





/**
 * Internal dependencies
 */


_frontspec_json__WEBPACK_IMPORTED_MODULE_4__.components.forEach(function (element) {
  var initAttributes = {
    id: {
      type: 'string',
      default: element.id
    }
  };

  for (var _i = 0, _Object$entries = Object.entries(element.props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var currentType = value.type;

    if (typeof value.repeatable != 'undefined' && value.repeatable) {
      currentType = 'array';
    }

    switch (currentType) {
      case 'string':
        initAttributes[key] = {
          type: 'string'
        };
        break;

      case 'text':
        initAttributes[key] = {
          type: 'string'
        };
        break;

      case 'boolean':
        initAttributes[key] = {
          type: 'boolean'
        };
        break;

      case 'array':
        initAttributes[key] = {
          type: 'array'
        };
        break;

      case 'object':
        initAttributes[key] = {
          type: 'object'
        };
        break;

      case 'number':
        initAttributes[key] = {
          type: 'number'
        };
        break;

      case 'image':
        initAttributes[key] = {
          type: 'object'
        };
        break;

      case 'gallery':
        initAttributes[key] = {
          type: 'array'
        };
        break;
    }
  }

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('custom/wpe-component-' + element.id, {
    title: element.name,
    attributes: initAttributes,
    description: element.description,
    edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
    save: function save() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null);
    }
  });
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map