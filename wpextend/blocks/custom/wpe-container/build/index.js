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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);




/**
 * WordPress dependencies
 */





/**
 * Some constants
 */

var ALLOWED_BLOCKS = ['custom/wpe-column'];
/**
 * Add some columns in wpe-container based on variation selected
 *
 */

function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(innerBlocksTemplate, function (_ref) {
    var name = _ref.name,
        attributes = _ref.attributes;
    return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(name, attributes);
  });
}
/**
 * registerBlockType edit function
 */


var WpeContainerEdit = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, props) {
  return {
    backgroundData: !props.attributes.backgroundFile ? null : select('core').getEntityRecord('postType', 'attachment', props.attributes.backgroundFile),
    inner_blocks: select('core/block-editor').getBlocks(props.clientId),
    countColumns: select('core/block-editor').getBlockCount(props.clientId),
    blockVariations: select('core/blocks').getBlockVariations(props.name, 'block'),
    blockType: select('core/blocks').getBlockType(props.name)
  };
})(function (_ref2) {
  var attributes = _ref2.attributes,
      setAttributes = _ref2.setAttributes,
      className = _ref2.className,
      backgroundData = _ref2.backgroundData,
      clientId = _ref2.clientId,
      inner_blocks = _ref2.inner_blocks,
      countColumns = _ref2.countColumns,
      blockVariations = _ref2.blockVariations,
      blockType = _ref2.blockType;
  // Custom style section
  var sectionStyle = {};

  if (backgroundData !== null && typeof backgroundData != 'undefined' && backgroundData.media_type == 'image') {
    sectionStyle = {
      background: 'url(' + backgroundData.media_details.sizes.thumbnail.source_url + ') no-repeat center center',
      backgroundSize: 'cover'
    };
  } // Section background


  var titleMediaPlaceholder = backgroundData !== null && typeof backgroundData != 'undefined' ? backgroundData.media_type == 'image' ? 'Edit image' : backgroundData.title.raw + ' (' + backgroundData.mime_type + ')' : 'Image/Video';
  var mediaPreview = !!backgroundData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
    alt: titleMediaPlaceholder,
    title: titleMediaPlaceholder,
    className: 'edit-image-preview',
    src: backgroundData.media_type == 'image' ? backgroundData.media_details.sizes.thumbnail.source_url : '/wp/wp-includes/images/media/video.png'
  });
  var removeButton = !!backgroundData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    isLarge: true,
    onClick: function onClick() {
      setAttributes({
        backgroundFile: null,
        backgroundType: null
      });
    }
  }, 'Remove');
  var mediaPlaceholder = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaPlaceholder"], {
    onSelect: function onSelect(el) {
      setAttributes({
        backgroundFile: el.id,
        backgroundType: el.type
      });
    },
    allowedTypes: ['image', 'video'],
    multiple: false,
    labels: {
      title: titleMediaPlaceholder
    },
    mediaPreview: mediaPreview,
    value: {
      id: attributes.backgroundFile
    },
    disableMediaButtons: false
  }, removeButton);
  /**
   * Padding & Margin
   */

  [{
    name: 'paddingTop',
    prefix: 'pt',
    default: 3
  }, {
    name: 'paddingBottom',
    prefix: 'pb',
    default: 3
  }, {
    name: 'marginTop',
    prefix: 'mt',
    default: 0
  }, {
    name: 'marginBottom',
    prefix: 'mb',
    default: 0
  }].forEach(function (attribute) {
    switch (attributes[attribute.name]) {
      case 0:
        className += ' ' + attribute.prefix + '-none';
        break;

      case 1:
        className += ' ' + attribute.prefix + '-smaller';
        break;

      case 2:
        className += ' ' + attribute.prefix + '-small';
        break;

      case 3:
        className += ' ' + attribute.prefix + '-medium';
        break;

      case 4:
        className += ' ' + attribute.prefix + '-big';
        break;

      case 5:
        className += ' ' + attribute.prefix + '-bigger';
        break;

      default:
        attributes[attribute.name] = attribute.default;
    }
  });
  /**
   * Define innerBlocks
   */

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(inner_blocks) != 'object' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(inner_blocks) == 'object' && countColumns == 0) {
    var edit_display = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["__experimentalBlockVariationPicker"], {
      icon: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(blockType, ['icon', 'src']),
      label: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(blockType, ['title']),
      variations: blockVariations,
      onSelect: function onSelect(nextVariation) {
        if (nextVariation.innerBlocks) {
          replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks), false);
        }

        if (nextVariation.attributes) {
          Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/editor').updateBlockAttributes(clientId, nextVariation.attributes);
        }
      }
    });
  } else {
    var edit_display = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: className,
      style: sectionStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: false
    }));
  }
  /**
   * Update grid
   */


  function updateGrid() {
    // Some declarations...
    var separatorGrid = '-';
    var totalColumns = 0;
    var newGridUpdated = [];
    var breakArray = false; // Validate new grid

    var newGrid = attributes.grid;
    newGrid = newGrid.split(separatorGrid);
    newGrid.forEach(function (element) {
      element = Number.parseInt(element);

      if (!breakArray && Number.isInteger(element)) {
        var elementTemp = totalColumns + element <= 12 ? element : 12 - totalColumns;
        newGridUpdated.push(elementTemp);
        totalColumns += elementTemp;

        if (totalColumns == 12) {
          breakArray = true;
        }
      }
    }); // Ensure there are 12 columns

    if (totalColumns < 12) {
      newGridUpdated.push(12 - totalColumns);
    } // Add or remove columns


    var newColumns = newGridUpdated.length;

    if (newColumns > countColumns) {
      var numberOfColumnsToAdd = newColumns - countColumns;
      var inner_blocks_new = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(inner_blocks), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["times"])(numberOfColumnsToAdd, function () {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])('custom/wpe-column');
      })));
      replaceInnerBlocks(clientId, inner_blocks_new, false);
      inner_blocks = inner_blocks_new;
    } else if (newColumns < countColumns) {
      var _inner_blocks_new = inner_blocks.slice(0, newColumns);

      replaceInnerBlocks(clientId, _inner_blocks_new, false);
    } // Loop on each columns to update start and width attributes


    var startGrid = 1;
    inner_blocks.forEach(function (element, index) {
      var widthChild = Number.parseInt(newGridUpdated[index]); // Update the child block's attributes

      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/editor').updateBlockAttributes(element.clientId, {
        start: startGrid,
        width: widthChild
      });
      startGrid += widthChild;
    }); // Finally, update grid attribute

    setAttributes({
      grid: newGridUpdated.join('-')
    });
  }
  /**
   * Render
   */


  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: 'Grid',
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("form", {
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextControl"], {
    value: attributes.grid,
    onChange: function onChange(value) {
      return setAttributes({
        grid: value
      });
    },
    onBlur: updateGrid,
    help: "For example: 3-3-3-3 or 6-6"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    isSecondary: true,
    type: "submit"
  }, "Apply"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: 'Style',
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    label: "Style",
    value: attributes.style,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Light',
      value: 'light'
    }, {
      label: 'Dark',
      value: 'dark'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        style: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: 'Background',
    initialOpen: false
  }, mediaPlaceholder), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: 'Padding/Margin',
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Padding Top",
    value: attributes.paddingTop,
    onChange: function onChange(value) {
      return setAttributes({
        paddingTop: value
      });
    },
    min: 0,
    max: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Padding Bottom",
    value: attributes.paddingBottom,
    onChange: function onChange(value) {
      return setAttributes({
        paddingBottom: value
      });
    },
    min: 0,
    max: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Margin Top",
    value: attributes.marginTop,
    onChange: function onChange(value) {
      return setAttributes({
        marginTop: value
      });
    },
    min: 0,
    max: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Margin Bottom",
    value: attributes.marginBottom,
    onChange: function onChange(value) {
      return setAttributes({
        marginBottom: value
      });
    },
    min: 0,
    max: 5
  }))), edit_display);
});
/* harmony default export */ __webpack_exports__["default"] = (WpeContainerEdit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variations */ "./src/variations.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('custom/wpe-container', {
  title: 'Container',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    enableBackground: "new 0 0 24 24",
    height: "24px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 24 24",
    width: "24px",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M4.8,5.6L12,9.8l7.2-4.2L12,1.5      L4.8,5.6z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M10.4,23.6c-0.1,0-0.2,0-0.2-0.1l-8.2-4.7c-0.2-0.1-0.3-0.3-0.3-0.4V8.9c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.2,0.4C10.5,23.6,10.5,23.6,10.4,23.6z M2.7,18.1l7.2,4.2v-8.3L2.7,9.8      V18.1z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M13.6,23.6c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.2-0.4v-9.5c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.3,0.4l-8.2,4.7C13.8,23.6,13.7,23.6,13.6,23.6z M14.1,13.9v8.3l7.2-4.2V9.8      L14.1,13.9z"
  })))))),
  category: 'layout',
  supports: {
    align: ['full', 'wide']
  },
  attributes: {
    style: {
      type: 'string'
    },
    align: {
      type: 'string'
    },
    backgroundFile: {
      type: 'number'
    },
    backgroundType: {
      type: 'string'
    },
    paddingTop: {
      type: 'number'
    },
    paddingBottom: {
      type: 'number'
    },
    marginTop: {
      type: 'number'
    },
    marginBottom: {
      type: 'number'
    },
    grid: {
      type: 'string'
    }
  },
  variations: _variations__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./src/variations.js":
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

var variations = [{
  name: 'column-1',
  title: '1 column',
  attributes: {
    grid: '12'
  },
  innerBlocks: [{
    name: 'custom/wpe-column',
    attributes: {
      start: 1,
      width: 12
    }
  }],
  scope: ['block']
}, {
  name: 'column-2',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  title: '2 columns',
  attributes: {
    grid: '6-6'
  },
  innerBlocks: [{
    name: 'custom/wpe-column',
    attributes: {
      start: 1,
      width: 6
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 7,
      width: 6
    }
  }],
  scope: ['block']
}, {
  name: 'column-3',
  title: '3 columns',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    grid: '4-4-4'
  },
  innerBlocks: [{
    name: 'custom/wpe-column',
    attributes: {
      start: 1,
      width: 4
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 5,
      width: 4
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 9,
      width: 4
    }
  }],
  scope: ['block']
}, {
  name: 'column-4',
  title: '4 columns',
  attributes: {
    grid: '3-3-3-3'
  },
  innerBlocks: [{
    name: 'custom/wpe-column',
    attributes: {
      start: 1,
      width: 3
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 4,
      width: 3
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 7,
      width: 3
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 10,
      width: 3
    }
  }],
  scope: ['block']
}, {
  name: 'column-6',
  title: '6 columns',
  attributes: {
    grid: '2-2-2-2-2-2'
  },
  innerBlocks: [{
    name: 'custom/wpe-column',
    attributes: {
      start: 1,
      width: 2
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 3,
      width: 2
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 5,
      width: 2
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 7,
      width: 2
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 9,
      width: 2
    }
  }, {
    name: 'custom/wpe-column',
    attributes: {
      start: 11,
      width: 2
    }
  }],
  scope: ['block']
}];
/* harmony default export */ __webpack_exports__["default"] = (variations);

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

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map