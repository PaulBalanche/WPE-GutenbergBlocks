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
/*! exports provided: assets, layouts, components, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assets\":{\"css\":[{\"name\":\"main\",\"type\":\"style\",\"path\":\"./dist/index.css\"}],\"js\":[{\"name\":\"main\",\"type\":\"bare\",\"path\":\"./dist/index.js\"}]},\"layouts\":[{\"id\":\"4-columns\",\"class\":\"four-columns\",\"name\":\"4 columns\",\"description\":\"Simple 4 columns layout\",\"tag\":\"section\",\"blocks\":[{\"class\":\"four-columns-01\"},{\"class\":\"four-columns-02\"},{\"class\":\"four-columns-03\"},{\"class\":\"four-columns-04\"}]},{\"id\":\"fout-columns-two-rows\",\"class\":\"four-columns-two-rows\",\"name\":\"4 columns 2 rows\",\"description\":\"Simple 4 columns 2 rows layout\",\"tag\":\"section\",\"blocks\":[{\"class\":\"four-columns-two-rows-top\"},{\"class\":\"four-columns-two-rows-bottom-01\"},{\"class\":\"four-columns-two-rows-bottom-02\"},{\"class\":\"four-columns-two-rows-bottom-03\"},{\"class\":\"four-columns-two-rows-bottom-04\"}]}],\"components\":[{\"id\":\"s-google-map\",\"name\":\"Google map\",\"description\":\"Allows you to display nice google maps in your website\",\"tag\":\"s-google-map\",\"props\":{\"api-key\":{\"type\":\"String\",\"required\":true,\"description\":\"Google map API key\",\"default\":\"AIzaSyDzFfEzhmYXRTlONUCtMWQ88uHJhsbtXY4\"},\"zoom\":{\"type\":\"Integer\",\"description\":\"Specify the zoom you want on the map\",\"default\":4}}}]}");

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/*! exports provided: name, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"custom/wpe-dynamic-section\",\"attributes\":{\"title\":{\"type\":\"string\"}},\"supports\":{\"lightBlockWrapper\":true}}");

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _frontspec_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../frontspec.json */ "../../../../frontspec.json");
var _frontspec_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../frontspec.json */ "../../../../frontspec.json", 1);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block.json */ "./block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../block.json */ "./block.json", 1);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);








/**
 * Internal dependencies
 */



var attributesComponent = {
  title: {
    type: 'string',
    label: 'Title'
  },
  description: {
    type: 'text',
    label: 'Description'
  },
  enabled: {
    type: 'boolean',
    label: 'Enabled ?'
  },
  images: {
    type: 'array',
    label: 'Images'
  },
  object: {
    type: 'object',
    label: 'Object'
  },
  order: {
    type: 'number',
    label: 'Order'
  }
};
var initAttributes = {};

for (var _i = 0, _Object$entries = Object.entries(attributesComponent); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  switch (value.type) {
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
  }
}

_frontspec_json__WEBPACK_IMPORTED_MODULE_7__.layouts.forEach(function (element) {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_8__.name + '-' + element.id, {
    title: element.name,
    attributes: _block_json__WEBPACK_IMPORTED_MODULE_8__.attributes,
    supports: _block_json__WEBPACK_IMPORTED_MODULE_8__.supports,
    edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, props) {
      return {
        inner_blocks: select('core/block-editor').getBlocks(props.clientId)
      };
    })(function (_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes,
          inner_blocks = _ref.inner_blocks,
          clientId = _ref.clientId;

      // frontspec V1
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(inner_blocks) != 'object' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(inner_blocks) == 'object' && inner_blocks.length == 0) {
        var new_inner_blocks = [];
        element.blocks.forEach(function (block, index) {
          new_inner_blocks.push(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('custom/wpe-simple-wrapper', {
            "element": "div",
            "class": block.class
          }));
        });
        Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/block-editor').replaceInnerBlocks(clientId, new_inner_blocks, false);
      } // frontspec V2
      // var wrapper_inner_blocks = '';
      // // <div className="test">
      //     <InnerBlocks
      //             allowedBlocks={ [ 'custom/wpe-simple-wrapper' ] }
      //             __experimentalTagName={ Block[element.tag] }
      //             __experimentalPassedProps={ {
      //                 className: element.class,
      //             } }
      //             renderAppender={ false }
      //         />
      // // </div>;
      // ;
      // if( typeof(inner_blocks ) != 'object' || ( typeof(inner_blocks ) == 'object' && inner_blocks.length == 0 ) ) {
      //     // var new_inner_blocks = [];
      //     element.layout.forEach( ( block ) => {
      //         wrapper_inner_blocks = React.createElement(
      //             block.tag,
      //             { className: block.class },
      //             <InnerBlocks renderAppender={ false } />
      //         );
      //         // new_inner_blocks.push( createBlock('custom/wpe-simple-wrapper', { "element": "div", "class": block.class }) );
      //     });
      //     // dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, new_inner_blocks, false);
      // }


      var inspector = [];

      var _loop = function _loop() {
        var _createElement;

        var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        inspector.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["HorizontalRule"], {
          key: key
        }));

        switch (value.type) {
          case 'string':
            inspector.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
              key: key,
              label: value.label,
              value: attributes[key],
              onChange: function onChange(value) {
                return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
              }
            }));
            break;

          case 'text':
            inspector.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextareaControl"], {
              key: key,
              label: value.label,
              value: attributes[key],
              onChange: function onChange(value) {
                return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
              }
            }));
            break;

          case 'boolean':
            inspector.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], (_createElement = {
              key: key,
              label: value.label,
              help: 'Help text',
              checked: false
            }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "help", attributes[key] ? 'Enable' : 'Disable'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "checked", attributes[key]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "onChange", function onChange(value) {
              return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
            }), _createElement)));
            break;
        }
      };

      for (var _i2 = 0, _Object$entries2 = Object.entries(attributesComponent); _i2 < _Object$entries2.length; _i2++) {
        _loop();
      } // images: {
      //     type: 'array',
      //     label: 'Images'
      // },
      // object: {
      //     type: 'object',
      //     label: 'Object'
      // },
      // order: {
      //     type: 'number',
      //     label: 'Order'
      // }


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], null, inspector)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
        allowedBlocks: ['custom/wpe-simple-wrapper'],
        __experimentalTagName: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["__experimentalBlock"][element.tag],
        __experimentalPassedProps: {
          className: element.class
        },
        renderAppender: false
      }));
    }),
    save: function save() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null);
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

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map