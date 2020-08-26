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

/***/ "../../../json/wpe-container_config.json":
/*!*****************************************************************************************************************************!*\
  !*** /Applications/MAMP/htdocs/github.com/WPtoWPextend/web/app/themes/custom-theme/wpextend/json/wpe-container_config.json ***!
  \*****************************************************************************************************************************/
/*! exports provided: totalColumns, variations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"totalColumns\":12,\"variations\":[{\"name\":\"column-1\",\"title\":\"1 column\",\"attributes\":{\"gridCountColumns\":1},\"innerBlocks\":[{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":12,\"columnStartTablet\":1,\"widthTablet\":12,\"columnStartMobile\":1,\"widthMobile\":12}}],\"scope\":[\"block\"]},{\"name\":\"column-2\",\"title\":\"2 column\",\"attributes\":{\"gridCountColumns\":2},\"innerBlocks\":[{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":6,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":6,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}}],\"scope\":[\"block\"]},{\"name\":\"column-3\",\"title\":\"3 column\",\"attributes\":{\"gridCountColumns\":3},\"innerBlocks\":[{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":4,\"columnStartTablet\":1,\"widthTablet\":4,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":5,\"widthDesktop\":4,\"columnStartTablet\":5,\"widthTablet\":4,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":9,\"widthDesktop\":4,\"columnStartTablet\":9,\"widthTablet\":4,\"columnStartMobile\":1,\"widthMobile\":12}}],\"scope\":[\"block\"]},{\"name\":\"column-4\",\"title\":\"4 column\",\"attributes\":{\"gridCountColumns\":4,\"gridLocked\":true},\"innerBlocks\":[{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":3,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":4,\"widthDesktop\":3,\"columnStartTablet\":7,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":7,\"widthDesktop\":3,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":10,\"widthDesktop\":3,\"columnStartTablet\":7,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}}],\"scope\":[\"block\"]},{\"name\":\"column-6\",\"title\":\"6 column\",\"attributes\":{\"gridCountColumns\":6},\"innerBlocks\":[{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":1,\"widthDesktop\":2,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":3,\"widthDesktop\":2,\"columnStartTablet\":7,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":5,\"widthDesktop\":2,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":7,\"widthDesktop\":2,\"columnStartTablet\":7,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":9,\"widthDesktop\":2,\"columnStartTablet\":1,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}},{\"name\":\"custom/wpe-column\",\"attributes\":{\"columnStartDesktop\":11,\"widthDesktop\":2,\"columnStartTablet\":7,\"widthTablet\":6,\"columnStartMobile\":1,\"widthMobile\":12}}],\"scope\":[\"block\"]}]}");

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
/* harmony import */ var _json_wpe_container_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../json/wpe-container_config.json */ "../../../json/wpe-container_config.json");
var _json_wpe_container_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../json/wpe-container_config.json */ "../../../json/wpe-container_config.json", 1);




var configTotalColumns = _json_wpe_container_config_json__WEBPACK_IMPORTED_MODULE_3__["totalColumns"];
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('custom/wpe-column', {
  title: 'Col',
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
  supports: {
    lightBlockWrapper: true
  },
  parent: ['custom/wpe-container'],
  attributes: {
    columnStartDesktop: {
      type: 'number',
      default: 1
    },
    columnStartTablet: {
      type: 'number',
      default: 1
    },
    columnStartMobile: {
      type: 'number',
      default: 1
    },
    widthDesktop: {
      type: 'number',
      default: 1
    },
    widthTablet: {
      type: 'number',
      default: 1
    },
    widthMobile: {
      type: 'number',
      default: 1
    },
    rowStartDesktop: {
      type: 'number',
      default: 1
    },
    rowStartTablet: {
      type: 'number',
      default: 1
    },
    rowStartMobile: {
      type: 'number',
      default: 1
    },
    heightDesktop: {
      type: 'number',
      default: 1
    },
    heightTablet: {
      type: 'number',
      default: 1
    },
    heightMobile: {
      type: 'number',
      default: 1
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var newClassName = '';

    if (Number.isInteger(attributes.columnStartDesktop) && attributes.columnStartDesktop > 0 && Number.isInteger(attributes.widthDesktop) && attributes.widthDesktop > 0) {
      var ColumnEndDesktop = attributes.columnStartDesktop + attributes.widthDesktop;
      newClassName += "gridColumnStartDesktop-" + attributes.columnStartDesktop + " gridColumnEndDesktop-" + ColumnEndDesktop + " ";
    }

    if (Number.isInteger(attributes.columnStartTablet) && attributes.columnStartTablet > 0 && Number.isInteger(attributes.widthTablet) && attributes.widthTablet > 0) {
      var ColumnEndTablet = attributes.columnStartTablet + attributes.widthTablet;
      newClassName += "gridColumnStartTablet-" + attributes.columnStartTablet + " gridColumnEndTablet-" + ColumnEndTablet + " ";
    }

    if (Number.isInteger(attributes.columnStartMobile) && attributes.columnStartMobile > 0 && Number.isInteger(attributes.widthMobile) && attributes.widthMobile > 0) {
      var ColumnEndMobile = attributes.columnStartMobile + attributes.widthMobile;
      newClassName += "gridColumnStartMobile-" + attributes.columnStartMobile + " gridColumnEndMobile-" + ColumnEndMobile + " ";
    }

    if (Number.isInteger(attributes.rowStartDesktop) && attributes.rowStartDesktop > 0 && Number.isInteger(attributes.heightDesktop) && attributes.heightDesktop > 0) {
      var RowEndDesktop = attributes.rowStartDesktop + attributes.heightDesktop;
      newClassName += "gridRowStartDesktop-" + attributes.rowStartDesktop + " gridRowEndDesktop-" + RowEndDesktop + " ";
    }

    if (Number.isInteger(attributes.rowStartTablet) && attributes.rowStartTablet > 0 && Number.isInteger(attributes.heightTablet) && attributes.heightTablet > 0) {
      var RowEndTablet = attributes.rowStartTablet + attributes.heightTablet;
      newClassName += "gridRowStartTablet-" + attributes.rowStartTablet + " gridRowEndTablet-" + RowEndTablet + " ";
    }

    if (Number.isInteger(attributes.rowStartMobile) && attributes.rowStartMobile > 0 && Number.isInteger(attributes.heightMobile) && attributes.heightMobile > 0) {
      var RowEndMobile = attributes.rowStartMobile + attributes.heightMobile;
      newClassName += "gridRowStartMobile-" + attributes.rowStartMobile + " gridRowEndMobile-" + RowEndMobile + " ";
    } // Render


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      __experimentalTagName: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalBlock"].div,
      __experimentalPassedProps: {
        className: newClassName
      },
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].ButtonBlockAppender, null);
      }
    }));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null);
  }
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