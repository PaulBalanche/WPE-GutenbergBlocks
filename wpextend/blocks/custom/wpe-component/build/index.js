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

module.exports = JSON.parse("{\"assets\":{\"css\":[{\"name\":\"main\",\"type\":\"style\",\"path\":\"./dist/index.css\"}],\"js\":[{\"name\":\"main\",\"type\":\"bare\",\"path\":\"./dist/index.js\"}]},\"components\":[{\"id\":\"s-google-map\",\"name\":\"Google map\",\"description\":\"Allows you to display nice google maps in your website\",\"path\":\"s-google-map/render.twig\",\"props\":{\"title\":{\"label\":\"Title\",\"type\":\"string\"},\"subtitle\":{\"label\":\"Subtitle\",\"type\":\"string\"},\"api-key\":{\"label\":\"API key\",\"type\":\"string\",\"required\":true,\"description\":\"Google map API key\",\"default\":\"AIzaSyDzFfEzhmYXRTlONUCtMWQ88uHJhsbtXY4\"},\"zoom\":{\"label\":\"Zoom\",\"type\":\"number\",\"description\":\"Specify the zoom you want on the map\",\"default\":4}},\"props_categories\":[{\"id\":\"cat1\",\"name\":\"Ma super categorie\"},{\"id\":\"cat2\",\"name\":\"Hého !!!\"}]},{\"id\":\"demo\",\"name\":\"Demo\",\"description\":\"Ma super demo\",\"path\":\"demo.twig\",\"props_categories\":[{\"id\":\"cat1\",\"name\":\"Basic fields\"},{\"id\":\"cat2\",\"name\":\"Repeatable fields\"},{\"id\":\"cat3\",\"name\":\"Others\"}],\"props\":{\"string\":{\"label\":\"String\",\"type\":\"string\",\"category\":\"cat1\"},\"number\":{\"label\":\"Number\",\"type\":\"number\",\"default\":4,\"category\":\"cat1\"},\"boolean\":{\"label\":\"Boolean\",\"type\":\"boolean\",\"category\":\"cat1\"},\"text\":{\"label\":\"Text\",\"type\":\"text\",\"category\":\"cat1\"},\"object2\":{\"label\":\"Object\",\"type\":\"object\",\"category\":\"cat1\",\"props\":{\"firstname\":{\"label\":\"Firstname\",\"type\":\"string\"},\"lastname\":{\"label\":\"Lastname\",\"type\":\"string\"},\"address\":{\"label\":\"Address\",\"type\":\"object\",\"props\":{\"street_number\":{\"label\":\"Street number\",\"type\":\"number\"},\"street\":{\"label\":\"Street\",\"type\":\"string\"},\"city\":{\"label\":\"City\",\"type\":\"object\",\"props\":{\"postal_code\":{\"label\":\"Postal code\",\"type\":\"string\"},\"city\":{\"label\":\"City\",\"type\":\"string\"},\"country\":{\"label\":\"Country\",\"type\":\"text\"}}},\"neighbours\":{\"label\":\"Neighbours\",\"type\":\"object\",\"repeatable\":true,\"props\":{\"firstname\":{\"label\":\"Firstname\",\"type\":\"string\"},\"lastname\":{\"label\":\"Lastname\",\"type\":\"string\"},\"address\":{\"label\":\"Address\",\"type\":\"object\",\"props\":{\"street_number\":{\"label\":\"Street number\",\"type\":\"number\"},\"street\":{\"label\":\"Street\",\"type\":\"string\",\"repeatable\":true},\"city\":{\"label\":\"City\",\"type\":\"object\",\"props\":{\"postal_code\":{\"label\":\"Postal code\",\"type\":\"string\"},\"city\":{\"label\":\"City\",\"type\":\"string\"},\"country\":{\"label\":\"Country\",\"type\":\"text\"}}}}}}}}}}},\"image\":{\"label\":\"Image\",\"type\":\"image\",\"category\":\"cat1\"},\"string_repeat\":{\"label\":\"String\",\"type\":\"string\",\"repeatable\":true,\"category\":\"cat2\"},\"number_repeatable\":{\"label\":\"Number\",\"type\":\"object\",\"repeatable\":true,\"category\":\"cat2\",\"props\":{\"un\":{\"label\":\"Un\",\"type\":\"string\"},\"deux\":{\"label\":\"Deux\",\"type\":\"string\"}}},\"text_repeatable\":{\"label\":\"Text\",\"type\":\"text\",\"repeatable\":true,\"category\":\"cat2\"},\"boolean_repeatble\":{\"label\":\"Boolean\",\"type\":\"boolean\",\"repeatable\":true,\"category\":\"cat2\"},\"object_repeatable\":{\"label\":\"Object\",\"type\":\"object\",\"category\":\"cat2\",\"repeatable\":true,\"props\":{\"firstname\":{\"label\":\"Firstname\",\"type\":\"string\"},\"lastname\":{\"label\":\"Lastname\",\"type\":\"string\"},\"address\":{\"label\":\"Address\",\"type\":\"text\"}}},\"gallery\":{\"label\":\"Gallery\",\"type\":\"gallery\",\"category\":\"cat3\"}}}]}");

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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
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
    key: "addEltToRepeatable",
    value: function addEltToRepeatable(arrayKey, currentValueProp, currentValueRepeatableField) {
      var isNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.updateAttributes(arrayKey, currentValueProp, currentValueRepeatableField.concat([undefined]), isNumber);
    }
  }, {
    key: "removeEltRepeatable",
    value: function removeEltRepeatable(arrayKey, currentValueProp) {
      this.updateAttributes(arrayKey, currentValueProp, false);
    }
  }, {
    key: "updateAttributes",
    value: function updateAttributes(arrayKey, currentValue, newValue) {
      var isNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var keyToUpdate = arrayKey[0];
      var newValueToUpdate = this.recursiveUpdateObjectFromObject(arrayKey, currentValue, newValue, isNumber);
      this.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, keyToUpdate, newValueToUpdate[keyToUpdate]));
    }
  }, {
    key: "recursiveUpdateObjectFromObject",
    value: function recursiveUpdateObjectFromObject(arrayKey, fromObject, newValue) {
      var isNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var firstElement = arrayKey.shift();
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(fromObject) != 'object' || Array.isArray(fromObject) && typeof firstElement == 'string' || !Array.isArray(fromObject) && typeof firstElement == 'number') fromObject = typeof firstElement == 'string' ? {} : [];
      var objectReturned = Array.isArray(fromObject) ? [] : {};

      for (var _i = 0, _Object$entries = Object.entries(fromObject); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        if (key == firstElement) {
          if (arrayKey.length > 0) objectReturned[key] = this.recursiveUpdateObjectFromObject(arrayKey, val, newValue, isNumber);else if (!!newValue) objectReturned[key] = this.returnStringOrNumber(newValue, isNumber);
        } else objectReturned[key] = val;
      }

      if (typeof objectReturned[firstElement] == 'undefined') {
        if (arrayKey.length > 0) objectReturned[firstElement] = this.recursiveUpdateObjectFromObject(arrayKey, undefined, newValue, isNumber);else if (!!newValue) objectReturned[firstElement] = this.returnStringOrNumber(newValue, isNumber);
      } // Re-index in case of element suppression


      if (arrayKey.length == 0 && !newValue) {
        for (var index = 0; index < objectReturned.length; index++) {
          if (typeof objectReturned[index] == 'undefined') objectReturned.splice(index, 1);
        }
      }

      return objectReturned;
    }
  }, {
    key: "returnStringOrNumber",
    value: function returnStringOrNumber(value) {
      var isNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return !!isNumber ? parseInt(value, 10) : value;
    }
  }, {
    key: "renderControl",
    value: function renderControl(prop, keys, valueProp) {
      var _this = this;

      var blocReturned = [];
      var repeatable = typeof prop.repeatable != "undefined" && !!prop.repeatable ? true : false;
      var currentValueAttribute = valueProp;
      keys.forEach(function (element) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(currentValueAttribute) == 'object') currentValueAttribute = currentValueAttribute[element];else currentValueAttribute = currentValueAttribute;
      });
      if (!repeatable) currentValueAttribute = [currentValueAttribute];else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(currentValueAttribute) != "object" || currentValueAttribute.length == 0) currentValueAttribute = [""];

      for (var keyLoop in currentValueAttribute) {
        keyLoop = this.returnStringOrNumber(keyLoop, true);
        var fieldId = this.props.clientId + "-" + keys[0] + "-" + keyLoop;

        switch (prop.type) {
          case 'string':
            blocReturned.push(this.renderTextControl(fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], false, repeatable));
            break;

          case 'number':
            blocReturned.push(this.renderTextControl(fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], true, repeatable));
            break;

          case 'text':
            blocReturned.push(this.renderTextareaControl(fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable));
            break;

          case 'boolean':
            blocReturned.push(this.renderToggleControl(fieldId, prop.label, 'Help', repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable));
            break;

          case 'image':
            blocReturned.push(this.renderImageControl(fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable));
            break;

          case 'gallery':
            blocReturned.push(this.renderGalleryControl(fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable));
            break;

          case 'object':
            if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(prop.props) == "object") {
              var fieldsetObject = [];

              for (var _i2 = 0, _Object$entries2 = Object.entries(prop.props); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries2[_i2], 2),
                    keySubProp = _Object$entries2$_i[0],
                    valueSubProp = _Object$entries2$_i[1];

                fieldsetObject.push(this.renderControl(valueSubProp, repeatable ? keys.concat(keyLoop).concat(keySubProp) : keys.concat(keySubProp), valueProp));
              }

              var labelObject = prop.label;

              if (repeatable) {
                var index = keyLoop + 1;
                labelObject = prop.label + " " + index + "/" + currentValueAttribute.length;
              }

              blocReturned.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
                title: labelObject,
                initialOpen: false
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                key: this.props.clientId + "-" + keys[0] + "-objectContainer",
                className: "objectField components-base-control"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
                key: this.props.clientId + "-" + keys[0] + "-objectContainer-content",
                className: "objectField-content"
              }, fieldsetObject)))));
            }

            break;
        }
      } // Add repeatable button


      if (!!repeatable) {
        blocReturned.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          key: this.props.clientId + "-" + keys[0] + "-add",
          isSecondary: true,
          isSmall: true,
          onClick: function onClick() {
            return _this.addEltToRepeatable(keys, valueProp, currentValueAttribute, false);
          }
        }, "Add"));
        blocReturned = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          key: this.props.clientId + "-" + keys[0] + "-repeatableContainer",
          className: "repeatableField components-base-control"
        }, blocReturned);
      } else {
        blocReturned = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          key: this.props.clientId + "-" + keys[0] + "-basicContainer",
          className: "basicField"
        }, blocReturned);
      } // Return


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, blocReturned);
    }
  }, {
    key: "renderTextControl",
    value: function renderTextControl(id, label, keys, valueProp, objectValue) {
      var _this2 = this;

      var isNumber = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var repeatable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (repeatable) {
        label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          isLink: true,
          className: "removeRepeatable",
          onClick: function onClick() {
            return _this2.removeEltRepeatable(keys, valueProp);
          }
        }, "Remove"));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        key: id,
        label: label,
        type: !!isNumber ? "number" : "text",
        value: objectValue,
        onChange: function onChange(newValue) {
          return _this2.updateAttributes(keys, valueProp, newValue, isNumber, repeatable);
        }
      });
    }
  }, {
    key: "renderTextareaControl",
    value: function renderTextareaControl(id, label, keys, valueProp, objectValue) {
      var _this3 = this;

      var repeatable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (repeatable) {
        label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          isLink: true,
          className: "removeRepeatable",
          onClick: function onClick() {
            return _this3.removeEltRepeatable(keys, valueProp);
          }
        }, "Remove"));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextareaControl"], {
        key: id,
        label: label,
        value: objectValue,
        onChange: function onChange(newValue) {
          return _this3.updateAttributes(keys, valueProp, newValue, false, repeatable);
        }
      });
    }
  }, {
    key: "renderToggleControl",
    value: function renderToggleControl(id, label, help, keys, valueProp, objectValue) {
      var _this4 = this;

      var repeatable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (repeatable) {
        label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          isLink: true,
          className: "removeRepeatable",
          onClick: function onClick() {
            return _this4.removeEltRepeatable(keys, valueProp);
          }
        }, "Remove"));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        key: id,
        label: label,
        help: help,
        checked: objectValue,
        onChange: function onChange(newValue) {
          return _this4.updateAttributes(keys, valueProp, newValue, false, repeatable);
        }
      });
    }
  }, {
    key: "renderImageControl",
    value: function renderImageControl(id, label, key, valueProp, objectValue) {
      var _this5 = this;

      var repeatable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var imagePreview = !!(objectValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(objectValue) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
        key: id + "-imagePreview",
        alt: "Edit image",
        title: "Edit image",
        className: "edit-image-preview",
        src: objectValue.url
      });
      var removeImage = '';

      if (imagePreview) {
        removeImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          key: id + "-removeImage",
          isSecondary: true,
          isSmall: true,
          className: "block-library-cover__reset-button",
          onClick: function onClick() {
            return _this5.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, undefined));
          }
        }, "Remove");
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
        key: id,
        labels: {
          title: label
        },
        onSelect: function onSelect(value) {
          return _this5.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, {
            id: value.id,
            url: value.url
          }));
        },
        allowedTypes: ['image'],
        mediaPreview: imagePreview,
        value: objectValue,
        disableDropZone: true
      }, removeImage);
    }
  }, {
    key: "renderGalleryControl",
    value: function renderGalleryControl(id, label, key, valueProp, objectValue) {
      var _this6 = this;

      var repeatable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var removeGallery = !!(objectValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(objectValue) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        key: id + "-removeGallery",
        isSecondary: true,
        isSmall: true,
        className: "block-library-cover__reset-button",
        onClick: function onClick() {
          var countImages = objectValue.length;
          if (countImages > 1) _this6.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, objectValue.slice(0, countImages - 1)));else _this6.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, undefined));
        }
      }, "Remove");
      var galleryPreview = '';

      if (removeGallery) {
        var ulGalleryPreview = [];
        objectValue.forEach(function (image) {
          ulGalleryPreview.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("li", {
            key: id + "-galleryImageContainerLi" + image.id,
            className: "blocks-gallery-item"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            key: id + "-galleryImage_" + image.id,
            src: image.url
          })));
        });
        var columns = objectValue.length;

        if (columns > 5) {
          columns = 5;
        }

        galleryPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("figure", {
          key: id + "-galleryImagefigure",
          className: "wp-block-gallery columns-" + columns
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("ul", {
          key: id + "-galleryImageContainerUl",
          className: "blocks-gallery-grid"
        }, ulGalleryPreview));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, galleryPreview, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
        key: id,
        labels: {
          title: label
        },
        onSelect: function onSelect(value) {
          var newGallery = [];
          value.forEach(function (image) {
            newGallery.push({
              id: image.id,
              url: image.url
            });
          });

          _this6.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, newGallery));
        },
        allowedTypes: ['image'],
        multiple: true,
        addToGallery: !!objectValue,
        value: objectValue,
        disableDropZone: true
      }, removeGallery));
    }
    /**
     * Render
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
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
              for (var _i3 = 0, _Object$entries3 = Object.entries(element.props_categories); _i3 < _Object$entries3.length; _i3++) {
                var _Object$entries3$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries3[_i3], 2),
                    keyCatProps = _Object$entries3$_i[0],
                    valueCatProps = _Object$entries3$_i[1];

                catReOrder[valueCatProps.id] = {
                  name: valueCatProps.name,
                  props: {}
                };
              }
            } // 2. Loop Props


            for (var _i4 = 0, _Object$entries4 = Object.entries(element.props); _i4 < _Object$entries4.length; _i4++) {
              var _Object$entries4$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries4[_i4], 2),
                  keyProp = _Object$entries4$_i[0],
                  valueProp = _Object$entries4$_i[1];

              if (typeof valueProp.category != 'undefined' && valueProp.category in catReOrder) {
                catReOrder[valueProp.category].props[keyProp] = valueProp;
              } else {
                catReOrder.default.props[keyProp] = valueProp;
              }
            } // 3. Remove empty category


            for (var _i5 = 0, _Object$entries5 = Object.entries(catReOrder); _i5 < _Object$entries5.length; _i5++) {
              var _Object$entries5$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries5[_i5], 2),
                  _keyProp = _Object$entries5$_i[0],
                  _valueProp = _Object$entries5$_i[1];

              if (Object.keys(catReOrder[_keyProp].props).length == 0) {
                delete catReOrder[_keyProp];
              }
            } // 4. Render


            var tabPanel = [];

            for (var _i6 = 0, _Object$entries6 = Object.entries(catReOrder); _i6 < _Object$entries6.length; _i6++) {
              var _Object$entries6$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries6[_i6], 2),
                  keyCat = _Object$entries6$_i[0],
                  valCat = _Object$entries6$_i[1];

              if (valCat.props.length == 0) continue;
              var currentEditCat = [];

              for (var _i7 = 0, _Object$entries7 = Object.entries(valCat.props); _i7 < _Object$entries7.length; _i7++) {
                var _Object$entries7$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries7[_i7], 2),
                    _keyProp2 = _Object$entries7$_i[0],
                    prop = _Object$entries7$_i[1];

                var _valueProp2 = this.getAttribute(_keyProp2);

                currentEditCat.push(this.renderControl(prop, [_keyProp2], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, _keyProp2, _valueProp2)));
              }

              if (keyCat == "default") {
                tabPanel.push({
                  name: keyCat,
                  title: "Default",
                  content: currentEditCat
                });
              } else {
                tabPanel.push({
                  name: keyCat,
                  title: valCat.name,
                  content: currentEditCat
                });
              }
            }

            var editPlaceHolder = '';

            if (tabPanel.length > 1) {
              editPlaceHolder = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TabPanel"], {
                className: "tab-panel-wpe-component",
                activeClass: "active-tab",
                tabs: tabPanel
              }, function (tabPanel) {
                return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, " ", tabPanel.content, " ");
              }));
            } else {
              editPlaceHolder = tabPanel[0].content;
            }

            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Placeholder"], {
              key: clientId + "-placeholder",
              label: element.name,
              isColumnLayout: true,
              className: "wpe-component_edit_placeholder"
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