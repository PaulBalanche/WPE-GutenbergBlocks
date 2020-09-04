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

module.exports = JSON.parse("{\"assets\":{\"css\":[{\"name\":\"main\",\"type\":\"style\",\"path\":\"./dist/index.css\"}],\"js\":[{\"name\":\"main\",\"type\":\"bare\",\"path\":\"./dist/index.js\"}]},\"components\":[{\"id\":\"s-google-map\",\"name\":\"Google map\",\"description\":\"Allows you to display nice google maps in your website\",\"path\":\"s-google-map/render.twig\",\"props\":{\"title\":{\"label\":\"Title\",\"type\":\"string\",\"category\":\"cat1\"},\"subtitle\":{\"label\":\"Subtitle\",\"type\":\"string\",\"category\":\"cat1\"},\"api-key\":{\"label\":\"API key\",\"type\":\"string\",\"category\":\"cat2\",\"required\":true,\"description\":\"Google map API key\",\"default\":\"AIzaSyDzFfEzhmYXRTlONUCtMWQ88uHJhsbtXY4\"},\"zoom\":{\"label\":\"Zoom\",\"type\":\"number\",\"description\":\"Specify the zoom you want on the map\",\"default\":4}},\"props_categories\":[{\"id\":\"cat1\",\"name\":\"Ma super categorie\"},{\"id\":\"cat2\",\"name\":\"Hého !!!\"}]},{\"id\":\"demo\",\"name\":\"Demo\",\"description\":\"Ma super demo\",\"path\":\"demo.twig\",\"props\":{\"string\":{\"label\":\"String\",\"type\":\"string\"},\"string_repeat\":{\"label\":\"String repeatable\",\"type\":\"string\",\"repeatable\":true},\"number\":{\"label\":\"Number\",\"type\":\"number\",\"default\":4},\"text\":{\"label\":\"Text\",\"type\":\"text\"},\"boolean\":{\"label\":\"Boolean\",\"type\":\"boolean\"},\"image\":{\"label\":\"Image\",\"type\":\"image\"},\"gallery\":{\"label\":\"Gallery\",\"type\":\"gallery\"}}}]}");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frontspec_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontspec.json */ "../../../../frontspec.json");
var _frontspec_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../frontspec.json */ "../../../../frontspec.json", 1);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









_frontspec_json__WEBPACK_IMPORTED_MODULE_7__.components.forEach(function (element) {
  var initAttributes = {
    id: {
      type: 'string',
      default: element.id
    }
  };

  for (var _i = 0, _Object$entries = Object.entries(element.props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
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

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])('custom/wpe-component-' + element.id, {
    title: element.name,
    attributes: initAttributes,
    description: element.description,
    edit: function edit(props) {
      var attributes = props.attributes,
          setAttributes = props.setAttributes,
          isSelected = props.isSelected,
          clientId = props.clientId; // Visual mode

      if (!isSelected) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
        for (var _i2 = 0, _Object$entries2 = Object.entries(element.props_categories); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries2[_i2], 2),
              keyCatProps = _Object$entries2$_i[0],
              valueCatProps = _Object$entries2$_i[1];

          catReOrder[valueCatProps.id] = {
            name: valueCatProps.name,
            props: {}
          };
        }
      } // 2. Loop Props


      for (var _i3 = 0, _Object$entries3 = Object.entries(element.props); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries3[_i3], 2),
            keyProp = _Object$entries3$_i[0],
            valueProp = _Object$entries3$_i[1];

        if (typeof valueProp.category != 'undefined' && valueProp.category in catReOrder) {
          catReOrder[valueProp.category].props[keyProp] = valueProp;
        } else {
          catReOrder['default'].props[keyProp] = valueProp;
        }
      } // 3. Render


      var editPlaceHolder = [];

      for (var _i4 = 0, _Object$entries4 = Object.entries(catReOrder); _i4 < _Object$entries4.length; _i4++) {
        var _Object$entries4$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries4[_i4], 2),
            keyCat = _Object$entries4$_i[0],
            valCat = _Object$entries4$_i[1];

        if (valCat.props.length == 0) continue;
        var currentEditCat = [];

        var _loop = function _loop() {
          var _createElement;

          var _Object$entries5$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries5[_i5], 2),
              keyProp = _Object$entries5$_i[0],
              valueProp = _Object$entries5$_i[1];

          switch (valueProp.type) {
            case 'string':
              if (typeof valueProp.repeatable != 'undefined' && valueProp.repeatable == true) {
                if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(attributes[keyProp]) != "object" || attributes[keyProp].length == 0) setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, [""]));
                var tempHtml = [];
                attributes[keyProp].forEach(function (valueRepeatableAttribute, indexRepeatableAttribute) {
                  tempHtml.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
                    key: clientId + "-" + keyProp + "-" + indexRepeatableAttribute,
                    label: valueProp.label + " " + indexRepeatableAttribute,
                    value: valueRepeatableAttribute,
                    onChange: function onChange(value) {
                      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, attributes[keyProp].map(function (valueMapTemp, keyMapTemp) {
                        if (keyMapTemp == indexRepeatableAttribute) return value;
                        return valueMapTemp;
                      })));
                    }
                  }));
                });
                currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                  key: clientId + "-" + keyProp + "-container"
                }, tempHtml, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                  isSecondary: true,
                  isSmall: true,
                  onClick: function onClick() {
                    return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, attributes[keyProp].concat([""])));
                  }
                }, "Add")));
              } else {
                currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                  key: clientId + "-" + keyProp + "-container"
                }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
                  key: clientId + "-" + keyProp,
                  label: valueProp.label,
                  value: attributes[keyProp],
                  onChange: function onChange(value) {
                    return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, value));
                  }
                })));
              }

              break;

            case 'number':
              currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                key: clientId + "-" + keyProp + "-container"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
                key: clientId + "-" + keyProp,
                label: valueProp.label,
                type: "number",
                value: attributes[keyProp],
                onChange: function onChange(value) {
                  return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, parseInt(value, 10)));
                }
              })));
              break;

            case 'text':
              currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                key: clientId + "-" + keyProp + "-container"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
                key: clientId + "-" + keyProp,
                label: valueProp.label,
                value: attributes[keyProp],
                onChange: function onChange(value) {
                  return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, value));
                }
              })));
              break;

            case 'boolean':
              currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                key: clientId + "-" + keyProp + "-container"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], (_createElement = {
                key: clientId + "-" + keyProp,
                label: valueProp.label,
                help: 'Help text',
                checked: false
              }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "help", attributes[keyProp] ? 'Enable' : 'Disable'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "checked", attributes[keyProp]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "onChange", function onChange(value) {
                return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, value));
              }), _createElement))));
              break;

            case 'image':
              var imagePreview = !!(attributes[keyProp] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(attributes[keyProp]) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
                key: clientId + "-edit-image",
                alt: "Edit image",
                title: "Edit image",
                className: "edit-image-preview",
                src: attributes[keyProp].url
              });
              var removeImage = '';

              if (imagePreview) {
                removeImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                  key: clientId + "-remove-image",
                  isSecondary: true,
                  isSmall: true,
                  className: "block-library-cover__reset-button",
                  onClick: function onClick() {
                    return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, undefined));
                  }
                }, "Remove");
              }

              currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                key: clientId + "-" + keyProp + "-container"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
                key: clientId + "-" + keyProp,
                label: valueProp.label,
                onSelect: function onSelect(value) {
                  return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, {
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
              var removeGallery = !!(attributes[keyProp] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(attributes[keyProp]) == 'object') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                key: clientId + "-remove-gallery",
                isSecondary: true,
                isSmall: true,
                className: "block-library-cover__reset-button",
                onClick: function onClick() {
                  return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, undefined));
                }
              }, "Remove");
              var galleryPreview = '';

              if (removeGallery) {
                var ulGalleryPreview = [];
                attributes[keyProp].forEach(function (image) {
                  ulGalleryPreview.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("li", {
                    className: "blocks-gallery-item"
                  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
                    key: clientId + "-gallery-image" + image.id,
                    src: image.url
                  })));
                });
                galleryPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", {
                  className: "wp-block-gallery columns-3"
                }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("ul", {
                  className: "blocks-gallery-grid"
                }, ulGalleryPreview));
              }

              currentEditCat.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
                key: clientId + "-" + keyProp + "-container"
              }, galleryPreview, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
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
                  setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, keyProp, newGallery));
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

        for (var _i5 = 0, _Object$entries5 = Object.entries(valCat.props); _i5 < _Object$entries5.length; _i5++) {
          _loop();
        }

        if (keyCat == "default") {
          editPlaceHolder.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, currentEditCat));
        } else {
          editPlaceHolder.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("legend", null, valCat.name), currentEditCat));
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], {
        key: clientId + "-placeholder",
        label: element.name,
        isColumnLayout: true
      }, editPlaceHolder));
    },
    save: function save() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null);
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