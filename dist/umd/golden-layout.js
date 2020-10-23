(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["GoldenLayout"] = factory(require("jquery"));
	else
		root["GoldenLayout"] = factory(root["$"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, ItemContainer, BrowserPopout, Header, HeaderButton, Tab, Component, Root, RowOrColumn, Stack, BubblingEvent, ConfigMinifier, DragListener, EventEmitter, EventHub, ReactComponentHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_es6_LayoutManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_es6/LayoutManager */ "./src/js_es6/LayoutManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _js_es6_LayoutManager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _js_es6_container_ItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_es6/container/ItemContainer */ "./src/js_es6/container/ItemContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemContainer", function() { return _js_es6_container_ItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _js_es6_controls_BrowserPopout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_es6/controls/BrowserPopout */ "./src/js_es6/controls/BrowserPopout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPopout", function() { return _js_es6_controls_BrowserPopout__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _js_es6_controls_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_es6/controls/Header */ "./src/js_es6/controls/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _js_es6_controls_Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _js_es6_controls_HeaderButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_es6/controls/HeaderButton */ "./src/js_es6/controls/HeaderButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderButton", function() { return _js_es6_controls_HeaderButton__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _js_es6_controls_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_es6/controls/Tab */ "./src/js_es6/controls/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _js_es6_controls_Tab__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _js_es6_items_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js_es6/items/Component */ "./src/js_es6/items/Component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _js_es6_items_Component__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _js_es6_items_Root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js_es6/items/Root */ "./src/js_es6/items/Root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return _js_es6_items_Root__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _js_es6_items_RowOrColumn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js_es6/items/RowOrColumn */ "./src/js_es6/items/RowOrColumn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowOrColumn", function() { return _js_es6_items_RowOrColumn__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _js_es6_items_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js_es6/items/Stack */ "./src/js_es6/items/Stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return _js_es6_items_Stack__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _js_es6_utils_BubblingEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js_es6/utils/BubblingEvent */ "./src/js_es6/utils/BubblingEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BubblingEvent", function() { return _js_es6_utils_BubblingEvent__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _js_es6_utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js_es6/utils/ConfigMinifier */ "./src/js_es6/utils/ConfigMinifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigMinifier", function() { return _js_es6_utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _js_es6_utils_DragListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js_es6/utils/DragListener */ "./src/js_es6/utils/DragListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragListener", function() { return _js_es6_utils_DragListener__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _js_es6_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js_es6/utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return _js_es6_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _js_es6_utils_EventHub__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js_es6/utils/EventHub */ "./src/js_es6/utils/EventHub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHub", function() { return _js_es6_utils_EventHub__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _js_es6_utils_ReactComponentHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js_es6/utils/ReactComponentHandler */ "./src/js_es6/utils/ReactComponentHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactComponentHandler", function() { return _js_es6_utils_ReactComponentHandler__WEBPACK_IMPORTED_MODULE_15__["default"]; });

// helper file for webpack build system
// whatever is imported/exported here will be included in the build
//import 'less/test.less'
//import './less/goldenlayout-base.less'
//import './less/goldenlayout-dark-theme.less'
//
// Layout
 //
// container

 //
// controls




 //
// items




 //
// utils








/***/ }),

/***/ "./src/js_es6/LayoutManager.js":
/*!*************************************!*\
  !*** ./src/js_es6/LayoutManager.js ***!
  \*************************************/
/*! exports provided: REACT_COMPONENT_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_COMPONENT_ID", function() { return REACT_COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutManager; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ConfigMinifier */ "./src/js_es6/utils/ConfigMinifier.js");
/* harmony import */ var _utils_EventHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/EventHub */ "./src/js_es6/utils/EventHub.js");
/* harmony import */ var _items_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/Root */ "./src/js_es6/items/Root.js");
/* harmony import */ var _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/RowOrColumn */ "./src/js_es6/items/RowOrColumn.js");
/* harmony import */ var _items_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/Stack */ "./src/js_es6/items/Stack.js");
/* harmony import */ var _items_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/Component */ "./src/js_es6/items/Component.js");
/* harmony import */ var _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/AbstractContentItem */ "./src/js_es6/items/AbstractContentItem.js");
/* harmony import */ var _controls_BrowserPopout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/BrowserPopout */ "./src/js_es6/controls/BrowserPopout.js");
/* harmony import */ var _controls_DragSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/DragSource */ "./src/js_es6/controls/DragSource.js");
/* harmony import */ var _controls_DropTargetIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/DropTargetIndicator */ "./src/js_es6/controls/DropTargetIndicator.js");
/* harmony import */ var _controls_TransitionIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/TransitionIndicator */ "./src/js_es6/controls/TransitionIndicator.js");
/* harmony import */ var _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./errors/ConfigurationError */ "./src/js_es6/errors/ConfigurationError.js");
/* harmony import */ var _config_defaultConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config/defaultConfig */ "./src/js_es6/config/defaultConfig.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

















var REACT_COMPONENT_ID = 'lm-react-component';
/**
 * The main class that will be exposed as GoldenLayout.
 *
 * @public
 * @constructor
 * @param {GoldenLayout config} config
 * @param {[DOM element container]} container Can be a jQuery selector string or a Dom element. Defaults to body
 *
 * @returns {VOID}
 */

var LayoutManager = /*#__PURE__*/function (_EventEmitter) {
  _inherits(LayoutManager, _EventEmitter);

  var _super = _createSuper(LayoutManager);

  function LayoutManager(config, container) {
    var _this;

    _classCallCheck(this, LayoutManager);

    _this = _super.call(this);
    _this.isInitialised = false;
    _this._isFullPage = false;
    _this._resizeTimeoutId = null;
    _this._components = {};
    _this._itemAreas = [];
    _this._resizeFunction = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(_this._onResize, _assertThisInitialized(_this));
    _this._unloadFunction = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(_this._onUnload, _assertThisInitialized(_this));
    _this._maximisedItem = null;
    _this._maximisePlaceholder = jquery__WEBPACK_IMPORTED_MODULE_15___default()('<div class="lm_maximise_place"></div>');
    _this._creationTimeoutPassed = false;
    _this._subWindowsCreated = false;
    _this._dragSources = [];
    _this._updatingColumnsResponsive = false;
    _this._firstLoad = true;
    _this.width = null;
    _this.height = null;
    _this.root = null;
    _this.openPopouts = [];
    _this.selectedItem = null;
    _this.isSubWindow = false;
    _this.eventHub = new _utils_EventHub__WEBPACK_IMPORTED_MODULE_2__["default"](_assertThisInitialized(_this));
    _this.config = _this._createConfig(config);
    _this.container = container;
    _this.dropTargetIndicator = null;
    _this.transitionIndicator = null;
    _this.tabDropPlaceholder = jquery__WEBPACK_IMPORTED_MODULE_15___default()('<div class="lm_drop_tab_placeholder"></div>');

    if (_this.isSubWindow === true) {
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('body').css('visibility', 'hidden');
    }

    _this._typeToItem = {
      'column': Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(_items_RowOrColumn__WEBPACK_IMPORTED_MODULE_4__["default"], _assertThisInitialized(_this), [true]),
      'row': Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(_items_RowOrColumn__WEBPACK_IMPORTED_MODULE_4__["default"], _assertThisInitialized(_this), [false]),
      'stack': _items_Stack__WEBPACK_IMPORTED_MODULE_5__["default"],
      'component': _items_Component__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }
  /**
   * Takes a GoldenLayout configuration object and
   * replaces its keys and values recursively with
   * one letter codes
   *
   * @static
   * @public
   * @param   {Object} config A GoldenLayout config object
   *
   * @returns {Object} minified config
   */


  _createClass(LayoutManager, [{
    key: "minifyConfig",
    value: function minifyConfig(config) {
      return new _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__["default"]().minifyConfig(config);
    }
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     *
     * @static
     * @public
     * @param   {Object} minifiedConfig
     *
     * @returns {Object} the original configuration
     */

  }, {
    key: "unminifyConfig",
    value: function unminifyConfig(config) {
      return new _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__["default"]().unminifyConfig(config);
    }
    /**
     * Register a component with the layout manager. If a configuration node
     * of type component is reached it will look up componentName and create the
     * associated component
     *
     *  {
     *    type: "component",
     *    componentName: "EquityNewsFeed",
     *    componentState: { "feedTopic": "us-bluechips" }
     *  }
     *
     * @public
     * @param   {String} name
     * @param   {Function} constructor
     *
     * @returns {void}
     */

  }, {
    key: "registerComponent",
    value: function registerComponent(name, constructor) {
      if (typeof constructor !== 'function') {
        throw new Error('Please register a constructor function');
      }

      if (this._components[name] !== undefined) {
        throw new Error('Component ' + name + ' is already registered');
      }

      this._components[name] = constructor;
    }
    /**
     * Register a component function with the layout manager. This function should
     * return a constructor for a component based on a config.  If undefined is returned, 
     * and no component has been registered under that name using registerComponent, an 
     * error will be thrown.
     *
     * @public
     * @param   {Function} callback
     *
     * @returns {void}
     */

  }, {
    key: "registerComponentFunction",
    value: function registerComponentFunction(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Please register a callback function');
      }

      if (this._componentFunction !== undefined) {
        console.warn('Multiple component functions are being registered.  Only the final registered function will be used.');
      }

      this._componentFunction = callback;
    }
    /**
     * Creates a layout configuration object based on the the current state
     *
     * @public
     * @returns {Object} GoldenLayout configuration
     */

  }, {
    key: "toConfig",
    value: function toConfig(root) {
      var config, _next, i;

      if (this.isInitialised === false) {
        throw new Error('Can\'t create config, layout not yet initialised');
      }

      if (root && !(root instanceof _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_7__["default"])) {
        throw new Error('Root must be a ContentItem');
      }
      /*
       * settings & labels
       */


      config = {
        settings: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["copy"])({}, this.config.settings),
        dimensions: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["copy"])({}, this.config.dimensions),
        labels: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["copy"])({}, this.config.labels)
      };
      /*
       * Content
       */

      config.content = [];

      _next = function next(configNode, item) {
        var key, i;

        for (key in item.config) {
          if (key !== 'content') {
            configNode[key] = item.config[key];
          }
        }

        if (item.contentItems.length) {
          configNode.content = [];

          for (i = 0; i < item.contentItems.length; i++) {
            configNode.content[i] = {};

            _next(configNode.content[i], item.contentItems[i]);
          }
        }
      };

      if (root) {
        _next(config, {
          contentItems: [root]
        });
      } else {
        _next(config, this.root);
      }
      /*
       * Retrieve config for subwindows
       */


      this._$reconcilePopoutWindows();

      config.openPopouts = [];

      for (i = 0; i < this.openPopouts.length; i++) {
        config.openPopouts.push(this.openPopouts[i].toConfig());
      }
      /*
       * Add maximised item
       */


      config.maximisedItemId = this._maximisedItem ? '__glMaximised' : null;
      return config;
    }
    /**
     * Returns a previously registered component.  Attempts to utilize registered 
     * component by name first, then falls back to the component function.  If either
     * lack a response for what the component should be, it throws an error.
     *
     * @public
     * @param {Object} config - The item config
     * 
     * @returns {Function}
     */

  }, {
    key: "getComponent",
    value: function getComponent(config) {
      var name = this.getComponentNameFromConfig(config);
      var componentToUse = this._components[name];

      if (this._componentFunction !== undefined) {
        componentToUse = componentToUse || this._componentFunction({
          config: config
        });
      }

      if (componentToUse === undefined) {
        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__["default"]('Unknown component "' + name + '"');
      }

      return componentToUse;
    }
    /**
     * Creates the actual layout. Must be called after all initial components
     * are registered. Recurses through the configuration and sets up
     * the item tree.
     *
     * If called before the document is ready it adds itself as a listener
     * to the document.ready event
     *
     * @public
     *
     * @returns {void}
     */

  }, {
    key: "init",
    value: function init() {
      /**
       * Create the popout windows straight away. If popouts are blocked
       * an error is thrown on the same 'thread' rather than a timeout and can
       * be caught. This also prevents any further initilisation from taking place.
       */
      if (this._subWindowsCreated === false) {
        this._createSubWindows();

        this._subWindowsCreated = true;
      }
      /**
       * If the document isn't ready yet, wait for it.
       */


      if (document.readyState === 'loading' || document.body === null) {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).ready(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(this.init, this));
        return;
      }
      /**
       * If this is a subwindow, wait a few milliseconds for the original
       * page's js calls to be executed, then replace the bodies content
       * with GoldenLayout
       */


      if (this.isSubWindow === true && this._creationTimeoutPassed === false) {
        setTimeout(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(this.init, this), 7);
        this._creationTimeoutPassed = true;
        return;
      }

      if (this.isSubWindow === true) {
        this._adjustToWindowMode();
      }

      this._setContainer();

      this.dropTargetIndicator = new _controls_DropTargetIndicator__WEBPACK_IMPORTED_MODULE_10__["default"](this.container);
      this.transitionIndicator = new _controls_TransitionIndicator__WEBPACK_IMPORTED_MODULE_11__["default"]();
      this.updateSize();

      this._create(this.config);

      this._bindEvents();

      this.isInitialised = true;

      this._adjustColumnsResponsive();

      this.emit('initialised');
    }
    /**
     * Updates the layout managers size
     *
     * @public
     * @param   {[int]} width  height in pixels
     * @param   {[int]} height width in pixels
     *
     * @returns {void}
     */

  }, {
    key: "updateSize",
    value: function updateSize(width, height) {
      if (arguments.length === 2) {
        this.width = width;
        this.height = height;
      } else {
        this.width = this.container.width();
        this.height = this.container.height();
      }

      if (this.isInitialised === true) {
        this.root.callDownwards('setSize', [this.width, this.height]);

        if (this._maximisedItem) {
          this._maximisedItem.element.width(this.container.width());

          this._maximisedItem.element.height(this.container.height());

          this._maximisedItem.callDownwards('setSize');
        }

        this._adjustColumnsResponsive();
      }
    }
    /**
     * Destroys the LayoutManager instance itself as well as every ContentItem
     * within it. After this is called nothing should be left of the LayoutManager.
     *
     * @public
     * @returns {void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isInitialised === false) {
        return;
      }

      this._onUnload();

      jquery__WEBPACK_IMPORTED_MODULE_15___default()(window).off('resize', this._resizeFunction);
      jquery__WEBPACK_IMPORTED_MODULE_15___default()(window).off('unload beforeunload', this._unloadFunction);
      this.root.callDownwards('_$destroy', [], true);
      this.root.contentItems = [];
      this.tabDropPlaceholder.remove();
      this.dropTargetIndicator.destroy();
      this.transitionIndicator.destroy();
      this.eventHub.destroy();

      this._dragSources.forEach(function (dragSource) {
        dragSource._dragListener.destroy();

        dragSource._element = null;
        dragSource._itemConfig = null;
        dragSource._dragListener = null;
      });

      this._dragSources = [];
    }
    /**
     * Returns whether or not the config corresponds to a react component or a normal component.
     * 
     * At some point the type is mutated, but the componentName should then correspond to the
     * REACT_COMPONENT_ID.
     * 
     * @param {Object} config ItemConfig
     * 
     * @returns {Boolean}
     */

  }, {
    key: "isReactConfig",
    value: function isReactConfig(config) {
      return config.type === 'react-component' || config.componentName === REACT_COMPONENT_ID;
    }
    /**
     * Returns the name of the component for the config, taking into account whether it's a react component or not.
     * 
     * @param {Object} config ItemConfig
     * 
     * @returns {String}
     */

  }, {
    key: "getComponentNameFromConfig",
    value: function getComponentNameFromConfig(config) {
      if (this.isReactConfig(config)) {
        return config.component;
      }

      return config.componentName;
    }
    /**
     * Recursively creates new item tree structures based on a provided
     * ItemConfiguration object
     *
     * @public
     * @param   {Object} config ItemConfig
     * @param   {[ContentItem]} parent The item the newly created item should be a child of
     *
     * @returns {ContentItem}
     */

  }, {
    key: "createContentItem",
    value: function createContentItem(config, parent) {
      var typeErrorMsg, contentItem;

      if (typeof config.type !== 'string') {
        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__["default"]('Missing parameter \'type\'', config);
      }

      if (this.isReactConfig(config)) {
        config.type = 'component';
        config.componentName = REACT_COMPONENT_ID;
      }

      if (!this._typeToItem[config.type]) {
        typeErrorMsg = 'Unknown type \'' + config.type + '\'. ' + 'Valid types are ' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["objectKeys"])(this._typeToItem).join(',');
        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__["default"](typeErrorMsg);
      }
      /**
       * We add an additional stack around every component that's not within a stack anyways.
       */


      if ( // If this is a component
      config.type === 'component' && // and it's not already within a stack
      !(parent instanceof _items_Stack__WEBPACK_IMPORTED_MODULE_5__["default"]) && // and we have a parent
      !!parent && // and it's not the topmost item in a new window
      !(this.isSubWindow === true && parent instanceof _items_Root__WEBPACK_IMPORTED_MODULE_3__["default"])) {
        config = {
          type: 'stack',
          width: config.width,
          height: config.height,
          content: [config]
        };
      }

      contentItem = new this._typeToItem[config.type](this, config, parent);
      return contentItem;
    }
    /**
     * Creates a popout window with the specified content and dimensions
     *
     * @param   {Object|lm.itemsAbstractContentItem} configOrContentItem
     * @param   {[Object]} dimensions A map with width, height, left and top
     * @param    {[String]} parentId the id of the element this item will be appended to
     *                             when popIn is called
     * @param    {[Number]} indexInParent The position of this item within its parent element
     
     * @returns {BrowserPopout}
     */

  }, {
    key: "createPopout",
    value: function createPopout(configOrContentItem, dimensions, parentId, indexInParent) {
      var config = configOrContentItem,
          isItem = configOrContentItem instanceof _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_7__["default"],
          self = this,
          windowLeft,
          windowTop,
          offset,
          parent,
          child,
          browserPopout;
      parentId = parentId || null;

      if (isItem) {
        config = this.toConfig(configOrContentItem).content;
        parentId = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["getUniqueId"])();
        /**
         * If the item is the only component within a stack or for some
         * other reason the only child of its parent the parent will be destroyed
         * when the child is removed.
         *
         * In order to support this we move up the tree until we find something
         * that will remain after the item is being popped out
         */

        parent = configOrContentItem.parent;
        child = configOrContentItem;

        while (parent.contentItems.length === 1 && !parent.isRoot) {
          parent = parent.parent;
          child = child.parent;
        }

        parent.addId(parentId);

        if (isNaN(indexInParent)) {
          indexInParent = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["indexOf"])(child, parent.contentItems);
        }
      } else {
        if (!(config instanceof Array)) {
          config = [config];
        }
      }

      if (!dimensions && isItem) {
        windowLeft = window.screenX || window.screenLeft;
        windowTop = window.screenY || window.screenTop;
        offset = configOrContentItem.element.offset();
        dimensions = {
          left: windowLeft + offset.left,
          top: windowTop + offset.top,
          width: configOrContentItem.element.width(),
          height: configOrContentItem.element.height()
        };
      }

      if (!dimensions && !isItem) {
        dimensions = {
          left: window.screenX || window.screenLeft + 20,
          top: window.screenY || window.screenTop + 20,
          width: 500,
          height: 309
        };
      }

      if (isItem) {
        configOrContentItem.remove();
      }

      browserPopout = new _controls_BrowserPopout__WEBPACK_IMPORTED_MODULE_8__["default"](config, dimensions, parentId, indexInParent, this);
      browserPopout.on('initialised', function () {
        self.emit('windowOpened', browserPopout);
      });
      browserPopout.on('closed', function () {
        self._$reconcilePopoutWindows();
      });
      this.openPopouts.push(browserPopout);
      return browserPopout;
    }
    /**
     * Attaches DragListener to any given DOM element
     * and turns it into a way of creating new ContentItems
     * by 'dragging' the DOM element into the layout
     *
     * @param   {jQuery DOM element} element
     * @param   {Object|Function} itemConfig for the new item to be created, or a function which will provide it
     *
     * @returns {DragSource}  an opaque object that identifies the DOM element
    *          and the attached itemConfig. This can be used in
    *          removeDragSource() later to get rid of the drag listeners.
     */

  }, {
    key: "createDragSource",
    value: function createDragSource(element, itemConfig) {
      this.config.settings.constrainDragToContainer = false;
      var dragSource = new _controls_DragSource__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_15___default()(element), itemConfig, this);

      this._dragSources.push(dragSource);

      return dragSource;
    }
    /**
    * Removes a DragListener added by createDragSource() so the corresponding
    * DOM element is not a drag source any more.
    *
    * @param   {jQuery DOM element} element
    *
    * @returns {void}
    */

  }, {
    key: "removeDragSource",
    value: function removeDragSource(dragSource) {
      dragSource.destroy();
      lm.utils.removeFromArray(dragSource, this._dragSources);
    }
    /**
     * Programmatically selects an item. This deselects
     * the currently selected item, selects the specified item
     * and emits a selectionChanged event
     *
     * @param   {AbstractContentItem} item#
     * @param   {[Boolean]} _$silent Wheather to notify the item of its selection
     * @event    selectionChanged
     *
     * @returns {VOID}
     */

  }, {
    key: "selectItem",
    value: function selectItem(item, _$silent) {
      if (this.config.settings.selectionEnabled !== true) {
        throw new Error('Please set selectionEnabled to true to use this feature');
      }

      if (item === this.selectedItem) {
        return;
      }

      if (this.selectedItem !== null) {
        this.selectedItem.deselect();
      }

      if (item && _$silent !== true) {
        item.select();
      }

      this.selectedItem = item;
      this.emit('selectionChanged', item);
    }
    /*************************
     * PACKAGE PRIVATE
     *************************/

  }, {
    key: "_$maximiseItem",
    value: function _$maximiseItem(contentItem) {
      if (this._maximisedItem !== null) {
        this._$minimiseItem(this._maximisedItem);
      }

      this._maximisedItem = contentItem;
      contentItem.on('beforeItemDestroyed', this._$cleanupBeforeMaximisedItemDestroyed, this);

      this._maximisedItem.addId('__glMaximised');

      contentItem.element.addClass('lm_maximised');
      contentItem.element.after(this._maximisePlaceholder);
      this.root.element.prepend(contentItem.element);
      contentItem.element.width(this.container.width());
      contentItem.element.height(this.container.height());
      contentItem.callDownwards('setSize');

      this._maximisedItem.emit('maximised');

      this.emit('stateChanged');
    }
  }, {
    key: "_$minimiseItem",
    value: function _$minimiseItem(contentItem) {
      contentItem.element.removeClass('lm_maximised');
      contentItem.removeId('__glMaximised');

      this._maximisePlaceholder.after(contentItem.element);

      this._maximisePlaceholder.remove();

      contentItem.parent.callDownwards('setSize');
      this._maximisedItem = null;
      contentItem.off('beforeItemDestroyed', this._$cleanupBeforeMaximisedItemDestroyed, this);
      contentItem.emit('minimised');
      this.emit('stateChanged');
    }
  }, {
    key: "_$cleanupBeforeMaximisedItemDestroyed",
    value: function _$cleanupBeforeMaximisedItemDestroyed() {
      if (this._maximisedItem === event.origin) {
        this._maximisedItem.off('beforeItemDestroyed', this._$cleanupBeforeMaximisedItemDestroyed, this);

        this._maximisedItem = null;
      }
    }
    /**
     * This method is used to get around sandboxed iframe restrictions.
     * If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
     * (as is the case with codepens) the parent window is forbidden from calling certain
     * methods on the child, such as window.close() or setting document.location.href.
     *
     * This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
     * _$closeWindow on the child window's gl instance which (after a timeout to disconnect
     * the invoking method from the close call) closes itself.
     *
     * @packagePrivate
     *
     * @returns {void}
     */

  }, {
    key: "_$closeWindow",
    value: function _$closeWindow() {
      window.setTimeout(function () {
        window.close();
      }, 1);
    }
  }, {
    key: "_$getArea",
    value: function _$getArea(x, y) {
      var i,
          area,
          smallestSurface = Infinity,
          mathingArea = null;

      for (i = 0; i < this._itemAreas.length; i++) {
        area = this._itemAreas[i];

        if (x > area.x1 && x < area.x2 && y > area.y1 && y < area.y2 && smallestSurface > area.surface) {
          smallestSurface = area.surface;
          mathingArea = area;
        }
      }

      return mathingArea;
    }
  }, {
    key: "_$createRootItemAreas",
    value: function _$createRootItemAreas() {
      var areaSize = 50;
      var sides = {
        y2: 'y1',
        x2: 'x1',
        y1: 'y2',
        x1: 'x2'
      };

      for (var side in sides) {
        var area = this.root._$getArea();

        area.side = side;
        if (sides[side][1] === '2') area[side] = area[sides[side]] - areaSize;else area[side] = area[sides[side]] + areaSize;
        area.surface = (area.x2 - area.x1) * (area.y2 - area.y1);

        this._itemAreas.push(area);
      }
    }
  }, {
    key: "_$calculateItemAreas",
    value: function _$calculateItemAreas() {
      var i,
          area,
          allContentItems = this._getAllContentItems();

      this._itemAreas = [];
      /**
       * If the last item is dragged out, highlight the entire container size to
       * allow to re-drop it. allContentItems[ 0 ] === this.root at this point
       *
       * Don't include root into the possible drop areas though otherwise since it
       * will used for every gap in the layout, e.g. splitters
       */

      if (allContentItems.length === 1) {
        this._itemAreas.push(this.root._$getArea());

        return;
      }

      this._$createRootItemAreas();

      for (i = 0; i < allContentItems.length; i++) {
        if (!allContentItems[i].isStack) {
          continue;
        }

        area = allContentItems[i]._$getArea();

        if (area === null) {
          continue;
        } else if (area instanceof Array) {
          this._itemAreas = this._itemAreas.concat(area);
        } else {
          this._itemAreas.push(area);

          var header = {};
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["copy"])(header, area);
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["copy"])(header, area.contentItem._contentAreaDimensions.header.highlightArea);
          header.surface = (header.x2 - header.x1) * (header.y2 - header.y1);

          this._itemAreas.push(header);
        }
      }
    }
    /**
     * Takes a contentItem or a configuration and optionally a parent
     * item and returns an initialised instance of the contentItem.
     * If the contentItem is a function, it is first called
     *
     * @packagePrivate
     *
     * @param   {AbtractContentItem|Object|Function} contentItemOrConfig
     * @param   {AbtractContentItem} parent Only necessary when passing in config
     *
     * @returns {AbtractContentItem}
     */

  }, {
    key: "_$normalizeContentItem",
    value: function _$normalizeContentItem(contentItemOrConfig, parent) {
      if (!contentItemOrConfig) {
        throw new Error('No content item defined');
      }

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["isFunction"])(contentItemOrConfig)) {
        contentItemOrConfig = contentItemOrConfig();
      }

      if (contentItemOrConfig instanceof _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        return contentItemOrConfig;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_15___default.a.isPlainObject(contentItemOrConfig) && contentItemOrConfig.type) {
        var newContentItem = this.createContentItem(contentItemOrConfig, parent);
        newContentItem.callDownwards('_$init');
        return newContentItem;
      } else {
        throw new Error('Invalid contentItem');
      }
    }
    /**
     * Iterates through the array of open popout windows and removes the ones
     * that are effectively closed. This is necessary due to the lack of reliably
     * listening for window.close / unload events in a cross browser compatible fashion.
     *
     * @packagePrivate
     *
     * @returns {void}
     */

  }, {
    key: "_$reconcilePopoutWindows",
    value: function _$reconcilePopoutWindows() {
      var openPopouts = [],
          i;

      for (i = 0; i < this.openPopouts.length; i++) {
        if (this.openPopouts[i].getWindow().closed === false) {
          openPopouts.push(this.openPopouts[i]);
        } else {
          this.emit('windowClosed', this.openPopouts[i]);
        }
      }

      if (this.openPopouts.length !== openPopouts.length) {
        this.openPopouts = openPopouts;
        this.emit('stateChanged');
      }
    }
    /***************************
     * PRIVATE
     ***************************/

    /**
     * Returns a flattened array of all content items,
     * regardles of level or type
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_getAllContentItems",
    value: function _getAllContentItems() {
      var allContentItems = [];

      var addChildren = function addChildren(contentItem) {
        allContentItems.push(contentItem);

        if (contentItem.contentItems instanceof Array) {
          for (var i = 0; i < contentItem.contentItems.length; i++) {
            addChildren(contentItem.contentItems[i]);
          }
        }
      };

      addChildren(this.root);
      return allContentItems;
    }
    /**
     * Binds to DOM/BOM events on init
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      if (this._isFullPage) {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()(window).resize(this._resizeFunction);
      }

      jquery__WEBPACK_IMPORTED_MODULE_15___default()(window).on('unload beforeunload', this._unloadFunction);
    }
    /**
     * Debounces resize events
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_onResize",
    value: function _onResize() {
      clearTimeout(this._resizeTimeoutId);
      this._resizeTimeoutId = setTimeout(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(this.updateSize, this), 100);
    }
    /**
     * Extends the default config with the user specific settings and applies
     * derivations. Please note that there's a separate method (AbstractContentItem._extendItemNode)
     * that deals with the extension of item configs
     *
     * @param   {Object} config
     * @static
     * @returns {Object} config
     */

  }, {
    key: "_createConfig",
    value: function _createConfig(config) {
      var _this2 = this;

      var windowConfigKey = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["getQueryStringParam"])('gl-window');

      if (windowConfigKey) {
        this.isSubWindow = true;
        config = localStorage.getItem(windowConfigKey);
        config = JSON.parse(config);
        config = new _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__["default"]().unminifyConfig(config);
        localStorage.removeItem(windowConfigKey);
      }

      config = jquery__WEBPACK_IMPORTED_MODULE_15___default.a.extend(true, {}, _config_defaultConfig__WEBPACK_IMPORTED_MODULE_13__["default"], config);

      var nextNode = function nextNode(node) {
        for (var key in node) {
          if (key !== 'props' && _typeof(node[key]) === 'object') {
            nextNode(node[key]);
          } else if (key === 'type' && _this2.isReactConfig(node)) {
            node.type = 'component';
            node.componentName = REACT_COMPONENT_ID;
          }
        }
      };

      nextNode(config);

      if (config.settings.hasHeaders === false) {
        config.dimensions.headerHeight = 0;
      }

      return config;
    }
    /**
     * This is executed when GoldenLayout detects that it is run
     * within a previously opened popout window.
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_adjustToWindowMode",
    value: function _adjustToWindowMode() {
      var popInButton = jquery__WEBPACK_IMPORTED_MODULE_15___default()('<div class="lm_popin" title="' + this.config.labels.popin + '">' + '<div class="lm_icon"></div>' + '<div class="lm_bg"></div>' + '</div>');
      popInButton.click(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(function () {
        this.emit('popIn');
      }, this));
      document.title = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["stripTags"])(this.config.content[0].title);
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('head').append(jquery__WEBPACK_IMPORTED_MODULE_15___default()('body link, body style, template, .gl_keep'));
      this.container = jquery__WEBPACK_IMPORTED_MODULE_15___default()('body').html('').css('visibility', 'visible').append(popInButton);
      /*
       * This seems a bit pointless, but actually causes a reflow/re-evaluation getting around
       * slickgrid's "Cannot find stylesheet." bug in chrome
       */

      var x = document.body.offsetHeight; // jshint ignore:line

      /*
       * Expose this instance on the window object
       * to allow the opening window to interact with
       * it
       */

      window.__glInstance = this;
    }
    /**
     * Creates Subwindows (if there are any). Throws an error
     * if popouts are blocked.
     *
     * @returns {void}
     */

  }, {
    key: "_createSubWindows",
    value: function _createSubWindows() {
      var i, popout;

      for (i = 0; i < this.config.openPopouts.length; i++) {
        popout = this.config.openPopouts[i];
        this.createPopout(popout.content, popout.dimensions, popout.parentId, popout.indexInParent);
      }
    }
    /**
     * Determines what element the layout will be created in
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_setContainer",
    value: function _setContainer() {
      var container = jquery__WEBPACK_IMPORTED_MODULE_15___default()(this.container || 'body');

      if (container.length === 0) {
        throw new Error('GoldenLayout container not found');
      }

      if (container.length > 1) {
        throw new Error('GoldenLayout more than one container element specified');
      }

      if (container[0] === document.body) {
        this._isFullPage = true;
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('html, body').css({
          height: '100%',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        });
      }

      this.container = container;
    }
    /**
     * Kicks of the initial, recursive creation chain
     *
     * @param   {Object} config GoldenLayout Config
     *
     * @returns {void}
     */

  }, {
    key: "_create",
    value: function _create(config) {
      var errorMsg;

      if (!(config.content instanceof Array)) {
        if (config.content === undefined) {
          errorMsg = 'Missing setting \'content\' on top level of configuration';
        } else {
          errorMsg = 'Configuration parameter \'content\' must be an array';
        }

        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__["default"](errorMsg, config);
      }

      if (config.content.length > 1) {
        errorMsg = 'Top level content can\'t contain more then one element.';
        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_12__["default"](errorMsg, config);
      }

      this.root = new _items_Root__WEBPACK_IMPORTED_MODULE_3__["default"](this, {
        content: config.content
      }, this.container);
      this.root.callDownwards('_$init');

      if (config.maximisedItemId === '__glMaximised') {
        this.root.getItemsById(config.maximisedItemId)[0].toggleMaximise();
      }
    }
    /**
     * Called when the window is closed or the user navigates away
     * from the page
     *
     * @returns {void}
     */

  }, {
    key: "_onUnload",
    value: function _onUnload() {
      if (this.config.settings.closePopoutsOnUnload === true) {
        for (var i = 0; i < this.openPopouts.length; i++) {
          this.openPopouts[i].close();
        }
      }
    }
    /**
     * Adjusts the number of columns to be lower to fit the screen and still maintain minItemWidth.
     *
     * @returns {void}
     */

  }, {
    key: "_adjustColumnsResponsive",
    value: function _adjustColumnsResponsive() {
      // If there is no min width set, or not content items, do nothing.
      if (!this._useResponsiveLayout() || this._updatingColumnsResponsive || !this.config.dimensions || !this.config.dimensions.minItemWidth || this.root.contentItems.length === 0 || !this.root.contentItems[0].isRow) {
        this._firstLoad = false;
        return;
      }

      this._firstLoad = false; // If there is only one column, do nothing.

      var columnCount = this.root.contentItems[0].contentItems.length;

      if (columnCount <= 1) {
        return;
      } // If they all still fit, do nothing.


      var minItemWidth = this.config.dimensions.minItemWidth;
      var totalMinWidth = columnCount * minItemWidth;

      if (totalMinWidth <= this.width) {
        return;
      } // Prevent updates while it is already happening.


      this._updatingColumnsResponsive = true; // Figure out how many columns to stack, and put them all in the first stack container.

      var finalColumnCount = Math.max(Math.floor(this.width / minItemWidth), 1);
      var stackColumnCount = columnCount - finalColumnCount;
      var rootContentItem = this.root.contentItems[0];

      var firstStackContainer = this._findAllStackContainers()[0];

      for (var i = 0; i < stackColumnCount; i++) {
        // Stack from right.
        var column = rootContentItem.contentItems[rootContentItem.contentItems.length - 1];

        this._addChildContentItemsToContainer(firstStackContainer, column);
      }

      this._updatingColumnsResponsive = false;
    }
    /**
     * Determines if responsive layout should be used.
     *
     * @returns {bool} - True if responsive layout should be used; otherwise false.
     */

  }, {
    key: "_useResponsiveLayout",
    value: function _useResponsiveLayout() {
      return this.config.settings && (this.config.settings.responsiveMode == 'always' || this.config.settings.responsiveMode == 'onload' && this._firstLoad);
    }
    /**
     * Adds all children of a node to another container recursively.
     * @param {object} container - Container to add child content items to.
     * @param {object} node - Node to search for content items.
     * @returns {void}
     */

  }, {
    key: "_addChildContentItemsToContainer",
    value: function _addChildContentItemsToContainer(container, node) {
      if (node.type === 'stack') {
        node.contentItems.forEach(function (item) {
          container.addChild(item);
          node.removeChild(item, true);
        });
      } else {
        node.contentItems.forEach(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(function (item) {
          this._addChildContentItemsToContainer(container, item);
        }, this));
      }
    }
    /**
     * Finds all the stack containers.
     * @returns {array} - The found stack containers.
     */

  }, {
    key: "_findAllStackContainers",
    value: function _findAllStackContainers() {
      var stackContainers = [];

      this._findAllStackContainersRecursive(stackContainers, this.root);

      return stackContainers;
    }
    /**
     * Finds all the stack containers.
     *
     * @param {array} - Set of containers to populate.
     * @param {object} - Current node to process.
     *
     * @returns {void}
     */

  }, {
    key: "_findAllStackContainersRecursive",
    value: function _findAllStackContainersRecursive(stackContainers, node) {
      node.contentItems.forEach(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["fnBind"])(function (item) {
        if (item.type == 'stack') {
          stackContainers.push(item);
        } else if (!item.isComponent) {
          this._findAllStackContainersRecursive(stackContainers, item);
        }
      }, this));
    }
  }]);

  return LayoutManager;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Hook that allows to access private classes
 */
// LayoutManager.__lm = lm;




/***/ }),

/***/ "./src/js_es6/config/ItemDefaultConfig.js":
/*!************************************************!*\
  !*** ./src/js_es6/config/ItemDefaultConfig.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var itemDefaultConfig = {
  isClosable: true,
  reorderEnabled: true,
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (itemDefaultConfig);

/***/ }),

/***/ "./src/js_es6/config/defaultConfig.js":
/*!********************************************!*\
  !*** ./src/js_es6/config/defaultConfig.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultConfig = {
  openPopouts: [],
  settings: {
    hasHeaders: true,
    constrainDragToContainer: true,
    reorderEnabled: true,
    selectionEnabled: false,
    popoutWholeStack: false,
    blockedPopoutsThrowError: true,
    closePopoutsOnUnload: true,
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: true,
    responsiveMode: 'onload',
    // Can be onload, always, or none.
    tabOverlapAllowance: 0,
    // maximum pixel overlap per tab
    reorderOnTabMenuClick: true,
    tabControlOffset: 10
  },
  dimensions: {
    borderWidth: 5,
    borderGrabWidth: 15,
    minItemHeight: 10,
    minItemWidth: 10,
    headerHeight: 20,
    dragProxyWidth: 300,
    dragProxyHeight: 200
  },
  labels: {
    close: 'close',
    maximise: 'maximise',
    minimise: 'minimise',
    popout: 'open in new window',
    popin: 'pop in',
    tabDropdown: 'additional tabs'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);

/***/ }),

/***/ "./src/js_es6/container/ItemContainer.js":
/*!***********************************************!*\
  !*** ./src/js_es6/container/ItemContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemContainer; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ItemContainer = /*#__PURE__*/function (_EventEmitter) {
  _inherits(ItemContainer, _EventEmitter);

  var _super = _createSuper(ItemContainer);

  function ItemContainer(config, parent, layoutManager) {
    var _this;

    _classCallCheck(this, ItemContainer);

    _this = _super.call(this);
    _this.width = null;
    _this.height = null;
    _this.title = config.componentName;
    _this.parent = parent;
    _this.layoutManager = layoutManager;
    _this.isHidden = false;
    _this._config = config;
    _this._element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(['<div class="lm_item_container">', '<div class="lm_content"></div>', '</div>'].join(''));
    _this._contentElement = _this._element.find('.lm_content');
    return _this;
  }
  /**
   * Get the inner DOM element the container's content
   * is intended to live in
   *
   * @returns {DOM element}
   */


  _createClass(ItemContainer, [{
    key: "getElement",
    value: function getElement() {
      return this._contentElement;
    }
    /**
     * Hide the container. Notifies the containers content first
     * and then hides the DOM node. If the container is already hidden
     * this should have no effect
     *
     * @returns {void}
     */

  }, {
    key: "hide",
    value: function hide() {
      this.emit('hide');
      this.isHidden = true;

      this._element.hide();
    }
    /**
     * Shows a previously hidden container. Notifies the
     * containers content first and then shows the DOM element.
     * If the container is already visible this has no effect.
     *
     * @returns {void}
     */

  }, {
    key: "show",
    value: function show() {
      this.emit('show');
      this.isHidden = false;

      this._element.show(); // call shown only if the container has a valid size


      if (this.height != 0 || this.width != 0) {
        this.emit('shown');
      }
    }
    /**
     * Set the size from within the container. Traverses up
     * the item tree until it finds a row or column element
     * and resizes its items accordingly.
     *
     * If this container isn't a descendant of a row or column
     * it returns false
     * @todo  Rework!!!
     * @param {Number} width  The new width in pixel
     * @param {Number} height The new height in pixel
     *
     * @returns {Boolean} resizeSuccesful
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      var rowOrColumn = this.parent,
          rowOrColumnChild = this,
          totalPixel,
          percentage,
          direction,
          newSize,
          delta,
          i;

      while (!rowOrColumn.isColumn && !rowOrColumn.isRow) {
        rowOrColumnChild = rowOrColumn;
        rowOrColumn = rowOrColumn.parent;
        /**
         * No row or column has been found
         */

        if (rowOrColumn.isRoot) {
          return false;
        }
      }

      direction = rowOrColumn.isColumn ? "height" : "width";
      newSize = direction === "height" ? height : width;
      totalPixel = this[direction] * (1 / (rowOrColumnChild.config[direction] / 100));
      percentage = newSize / totalPixel * 100;
      delta = (rowOrColumnChild.config[direction] - percentage) / (rowOrColumn.contentItems.length - 1);

      for (i = 0; i < rowOrColumn.contentItems.length; i++) {
        if (rowOrColumn.contentItems[i] === rowOrColumnChild) {
          rowOrColumn.contentItems[i].config[direction] = percentage;
        } else {
          rowOrColumn.contentItems[i].config[direction] += delta;
        }
      }

      rowOrColumn.callDownwards('setSize');
      return true;
    }
    /**
     * Closes the container if it is closable. Can be called by
     * both the component within at as well as the contentItem containing
     * it. Emits a close event before the container itself is closed.
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._config.isClosable) {
        this.emit('close');
        this.parent.close();
      }
    }
    /**
     * Returns the current state object
     *
     * @returns {Object} state
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._config.componentState;
    }
    /**
     * Merges the provided state into the current one
     *
     * @param   {Object} state
     *
     * @returns {void}
     */

  }, {
    key: "extendState",
    value: function extendState(state) {
      this.setState(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(true, this.getState(), state));
    }
    /**
     * Notifies the layout manager of a stateupdate
     *
     * @param {serialisable} state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      this._config.componentState = state;
      this.parent.emitBubblingEvent('stateChanged');
    }
    /**
     * Set's the components title
     *
     * @param {String} title
     */

  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.parent.setTitle(title);
    }
    /**
     * Set's the containers size. Called by the container's component.
     * To set the size programmatically from within the container please
     * use the public setSize method
     *
     * @param {[Int]} width  in px
     * @param {[Int]} height in px
     *
     * @returns {void}
     */

  }, {
    key: "_$setSize",
    value: function _$setSize(width, height) {
      if (width !== this.width || height !== this.height) {
        this.width = width;
        this.height = height;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.zepto ? this._contentElement.width(width) : this._contentElement.outerWidth(width);
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.zepto ? this._contentElement.height(height) : this._contentElement.outerHeight(height);
        this.emit('resize');
      }
    }
  }]);

  return ItemContainer;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/controls/BrowserPopout.js":
/*!**********************************************!*\
  !*** ./src/js_es6/controls/BrowserPopout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrowserPopout; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ConfigMinifier */ "./src/js_es6/utils/ConfigMinifier.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Pops a content item out into a new browser window.
 * This is achieved by
 *
 *    - Creating a new configuration with the content item as root element
 *    - Serializing and minifying the configuration
 *    - Opening the current window's URL with the configuration as a GET parameter
 *    - GoldenLayout when opened in the new window will look for the GET parameter
 *      and use it instead of the provided configuration
 *
 * @param {Object} config GoldenLayout item config
 * @param {Object} dimensions A map with width, height, top and left
 * @param {String} parentId The id of the element the item will be appended to on popIn
 * @param {Number} indexInParent The position of this element within its parent
 * @param {lm.LayoutManager} layoutManager
 */

var BrowserPopout = /*#__PURE__*/function (_EventEmitter) {
  _inherits(BrowserPopout, _EventEmitter);

  var _super = _createSuper(BrowserPopout);

  function BrowserPopout(config, dimensions, parentId, indexInParent, layoutManager) {
    var _this;

    _classCallCheck(this, BrowserPopout);

    _this = _super.call(this);
    _this.isInitialised = false;
    _this._config = config;
    _this._dimensions = dimensions;
    _this._parentId = parentId;
    _this._indexInParent = indexInParent;
    _this._layoutManager = layoutManager;
    _this._popoutWindow = null;
    _this._id = null;

    _this._createWindow();

    return _this;
  }

  _createClass(BrowserPopout, [{
    key: "toConfig",
    value: function toConfig() {
      if (this.isInitialised === false) {
        throw new Error('Can\'t create config, layout not yet initialised');
      }

      return {
        dimensions: {
          width: this.getGlInstance().width,
          height: this.getGlInstance().height,
          left: this._popoutWindow.screenX || this._popoutWindow.screenLeft,
          top: this._popoutWindow.screenY || this._popoutWindow.screenTop
        },
        content: this.getGlInstance().toConfig().content,
        parentId: this._parentId,
        indexInParent: this._indexInParent
      };
    }
  }, {
    key: "getGlInstance",
    value: function getGlInstance() {
      return this._popoutWindow.__glInstance;
    }
  }, {
    key: "getWindow",
    value: function getWindow() {
      return this._popoutWindow;
    }
  }, {
    key: "close",
    value: function close() {
      if (this.getGlInstance()) {
        this.getGlInstance()._$closeWindow();
      } else {
        try {
          this.getWindow().close();
        } catch (e) {//
        }
      }
    }
    /**
     * Returns the popped out item to its original position. If the original
     * parent isn't available anymore it falls back to the layout's topmost element
     */

  }, {
    key: "popIn",
    value: function popIn() {
      var childConfig,
          parentItem,
          index = this._indexInParent;

      if (this._parentId) {
        /*
         * The $.extend call seems a bit pointless, but it's crucial to
         * copy the config returned by this.getGlInstance().toConfig()
         * onto a new object. Internet Explorer keeps the references
         * to objects on the child window, resulting in the following error
         * once the child window is closed:
         *
         * The callee (server [not server application]) is not available and disappeared
         */
        childConfig = jquery__WEBPACK_IMPORTED_MODULE_3___default.a.extend(true, {}, this.getGlInstance().toConfig()).content[0];
        parentItem = this._layoutManager.root.getItemsById(this._parentId)[0];
        /*
         * Fallback if parentItem is not available. Either add it to the topmost
         * item or make it the topmost item if the layout is empty
         */

        if (!parentItem) {
          if (this._layoutManager.root.contentItems.length > 0) {
            parentItem = this._layoutManager.root.contentItems[0];
          } else {
            parentItem = this._layoutManager.root;
          }

          index = 0;
        }
      }

      parentItem.addChild(childConfig, this._indexInParent);
      this.close();
    }
    /**
     * Creates the URL and window parameter
     * and opens a new window
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_createWindow",
    value: function _createWindow() {
      var checkReadyInterval,
          url = this._createUrl(),

      /**
       * Bogus title to prevent re-usage of existing window with the
       * same title. The actual title will be set by the new window's
       * GoldenLayout instance if it detects that it is in subWindowMode
       */
      title = Math.floor(Math.random() * 1000000).toString(36),

      /**
       * The options as used in the window.open string
       */
      options = this._serializeWindowOptions({
        width: this._dimensions.width,
        height: this._dimensions.height,
        innerWidth: this._dimensions.width,
        innerHeight: this._dimensions.height,
        menubar: 'no',
        toolbar: 'no',
        location: 'no',
        personalbar: 'no',
        resizable: 'yes',
        scrollbars: 'no',
        status: 'no'
      });

      this._popoutWindow = window.open(url, title, options);

      if (!this._popoutWindow) {
        if (this._layoutManager.config.settings.blockedPopoutsThrowError === true) {
          var error = new Error('Popout blocked');
          error.type = 'popoutBlocked';
          throw error;
        } else {
          return;
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this._popoutWindow).on('load', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(this._positionWindow, this)).on('unload beforeunload', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(this._onClose, this));
      /**
       * Polling the childwindow to find out if GoldenLayout has been initialised
       * doesn't seem optimal, but the alternatives - adding a callback to the parent
       * window or raising an event on the window object - both would introduce knowledge
       * about the parent to the child window which we'd rather avoid
       */

      checkReadyInterval = setInterval(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(function () {
        if (this._popoutWindow.__glInstance && this._popoutWindow.__glInstance.isInitialised) {
          this._onInitialised();

          clearInterval(checkReadyInterval);
        }
      }, this), 10);
    }
    /**
     * Serialises a map of key:values to a window options string
     *
     * @param   {Object} windowOptions
     *
     * @returns {String} serialised window options
     */

  }, {
    key: "_serializeWindowOptions",
    value: function _serializeWindowOptions(windowOptions) {
      var windowOptionsString = [],
          key;

      for (key in windowOptions) {
        windowOptionsString.push(key + '=' + windowOptions[key]);
      }

      return windowOptionsString.join(',');
    }
    /**
     * Creates the URL for the new window, including the
     * config GET parameter
     *
     * @returns {String} URL
     */

  }, {
    key: "_createUrl",
    value: function _createUrl() {
      var config = {
        content: this._config
      },
          storageKey = 'gl-window-config-' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getUniqueId"])(),
          urlParts;
      config = new _utils_ConfigMinifier__WEBPACK_IMPORTED_MODULE_1__["default"]().minifyConfig(config);

      try {
        localStorage.setItem(storageKey, JSON.stringify(config));
      } catch (e) {
        throw new Error('Error while writing to localStorage ' + e.toString());
      }

      urlParts = document.location.href.split('?'); // URL doesn't contain GET-parameters

      if (urlParts.length === 1) {
        return urlParts[0] + '?gl-window=' + storageKey; // URL contains GET-parameters
      } else {
        return document.location.href + '&gl-window=' + storageKey;
      }
    }
    /**
     * Move the newly created window roughly to
     * where the component used to be.
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_positionWindow",
    value: function _positionWindow() {
      this._popoutWindow.moveTo(this._dimensions.left, this._dimensions.top);

      this._popoutWindow.focus();
    }
    /**
     * Callback when the new window is opened and the GoldenLayout instance
     * within it is initialised
     *
     * @returns {void}
     */

  }, {
    key: "_onInitialised",
    value: function _onInitialised() {
      this.isInitialised = true;
      this.getGlInstance().on('popIn', this.popIn, this);
      this.emit('initialised');
    }
    /**
     * Invoked 50ms after the window unload event
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_onClose",
    value: function _onClose() {
      setTimeout(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(this.emit, this, ['closed']), 50);
    }
  }]);

  return BrowserPopout;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/controls/DragProxy.js":
/*!******************************************!*\
  !*** ./src/js_es6/controls/DragProxy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragProxy; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _template = '<div class="lm_dragProxy">' + '<div class="lm_header">' + '<ul class="lm_tabs">' + '<li class="lm_tab lm_active"><i class="lm_left"></i>' + '<span class="lm_title"></span>' + '<i class="lm_right"></i></li>' + '</ul>' + '</div>' + '<div class="lm_content"></div>' + '</div>';
/**
 * This class creates a temporary container
 * for the component whilst it is being dragged
 * and handles drag events
 *
 * @constructor
 * @private
 *
 * @param {Number} x              The initial x position
 * @param {Number} y              The initial y position
 * @param {DragListener} dragListener
 * @param {lm.LayoutManager} layoutManager
 * @param {AbstractContentItem} contentItem
 * @param {AbstractContentItem} originalParent
 */


var DragProxy = /*#__PURE__*/function (_EventEmitter) {
  _inherits(DragProxy, _EventEmitter);

  var _super = _createSuper(DragProxy);

  function DragProxy(x, y, dragListener, layoutManager, contentItem, originalParent) {
    var _this;

    _classCallCheck(this, DragProxy);

    _this = _super.call(this);
    _this._dragListener = dragListener;
    _this._layoutManager = layoutManager;
    _this._contentItem = contentItem;
    _this._originalParent = originalParent;
    _this._area = null;
    _this._lastValidArea = null;

    _this._dragListener.on('drag', _this._onDrag, _assertThisInitialized(_this));

    _this._dragListener.on('dragStop', _this._onDrop, _assertThisInitialized(_this));

    _this.element = jquery__WEBPACK_IMPORTED_MODULE_2___default()(_template);

    if (originalParent && originalParent._side) {
      _this._sided = originalParent._sided;

      _this.element.addClass('lm_' + originalParent._side);

      if (['right', 'bottom'].indexOf(originalParent._side) >= 0) _this.element.find('.lm_content').after(_this.element.find('.lm_header'));
    }

    _this.element.css({
      left: x,
      top: y
    });

    _this.element.find('.lm_tab').attr('title', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["stripTags"])(_this._contentItem.config.title));

    _this.element.find('.lm_title').html(_this._contentItem.config.title);

    _this.childElementContainer = _this.element.find('.lm_content');

    _this.childElementContainer.append(contentItem.element);

    _this._undisplayTree();

    _this._layoutManager._$calculateItemAreas();

    _this._setDimensions();

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document.body).append(_this.element);

    var offset = _this._layoutManager.container.offset();

    _this._minX = offset.left;
    _this._minY = offset.top;
    _this._maxX = _this._layoutManager.container.width() + _this._minX;
    _this._maxY = _this._layoutManager.container.height() + _this._minY;
    _this._width = _this.element.width();
    _this._height = _this.element.height();

    _this._setDropPosition(x, y);

    return _this;
  }
  /**
   * Callback on every mouseMove event during a drag. Determines if the drag is
   * still within the valid drag area and calls the layoutManager to highlight the
   * current drop area
   *
   * @param   {Number} offsetX The difference from the original x position in px
   * @param   {Number} offsetY The difference from the original y position in px
   * @param   {jQuery DOM event} event
   *
   * @private
   *
   * @returns {void}
   */


  _createClass(DragProxy, [{
    key: "_onDrag",
    value: function _onDrag(offsetX, offsetY, event) {
      event = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTouchEvent"])(event);
      var x = event.pageX,
          y = event.pageY,
          isWithinContainer = x > this._minX && x < this._maxX && y > this._minY && y < this._maxY;

      if (!isWithinContainer && this._layoutManager.config.settings.constrainDragToContainer === true) {
        return;
      }

      this._setDropPosition(x, y);
    }
    /**
     * Sets the target position, highlighting the appropriate area
     *
     * @param   {Number} x The x position in px
     * @param   {Number} y The y position in px
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_setDropPosition",
    value: function _setDropPosition(x, y) {
      this.element.css({
        left: x,
        top: y
      });
      this._area = this._layoutManager._$getArea(x, y);

      if (this._area !== null) {
        this._lastValidArea = this._area;

        this._area.contentItem._$highlightDropZone(x, y, this._area);
      }
    }
    /**
     * Callback when the drag has finished. Determines the drop area
     * and adds the child to it
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_onDrop",
    value: function _onDrop() {
      this._updateTree();

      this._layoutManager.dropTargetIndicator.hide();
      /*
       * Valid drop area found
       */


      if (this._area !== null) {
        this._area.contentItem._$onDrop(this._contentItem, this._area);
        /**
         * No valid drop area available at present, but one has been found before.
         * Use it
         */

      } else if (this._lastValidArea !== null) {
        this._lastValidArea.contentItem._$onDrop(this._contentItem, this._lastValidArea);
        /**
         * No valid drop area found during the duration of the drag. Return
         * content item to its original position if a original parent is provided.
         * (Which is not the case if the drag had been initiated by createDragSource)
         */

      } else if (this._originalParent) {
        this._originalParent.addChild(this._contentItem);
        /**
         * The drag didn't ultimately end up with adding the content item to
         * any container. In order to ensure clean up happens, destroy the
         * content item.
         */

      } else {
        this._contentItem._$destroy();
      }

      this.element.remove();

      this._layoutManager.emit('itemDropped', this._contentItem);
    }
    /**
     * Undisplays the item from its original position within the tree
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_undisplayTree",
    value: function _undisplayTree() {
      /**
       * parent is null if the drag had been initiated by a external drag source
       */
      if (this._contentItem.parent) {
        this._contentItem.parent.undisplayChild(this._contentItem);
      }
    }
    /**
     * Removes the item from its original position within the tree
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_updateTree",
    value: function _updateTree() {
      /**
       * parent is null if the drag had been initiated by a external drag source
       */
      if (this._contentItem.parent) {
        this._contentItem.parent.removeChild(this._contentItem, true);
      }

      this._contentItem._$setParent(this);
    }
    /**
     * Updates the Drag Proxie's dimensions
     *
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_setDimensions",
    value: function _setDimensions() {
      var dimensions = this._layoutManager.config.dimensions,
          width = dimensions.dragProxyWidth,
          height = dimensions.dragProxyHeight;
      this.element.width(width);
      this.element.height(height);
      width -= this._sided ? dimensions.headerHeight : 0;
      height -= !this._sided ? dimensions.headerHeight : 0;
      this.childElementContainer.width(width);
      this.childElementContainer.height(height);

      this._contentItem.element.width(width);

      this._contentItem.element.height(height);

      this._contentItem.callDownwards('_$show');

      this._contentItem.callDownwards('setSize');
    }
  }]);

  return DragProxy;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/controls/DragSource.js":
/*!*******************************************!*\
  !*** ./src/js_es6/controls/DragSource.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragSource; });
/* harmony import */ var _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DragListener */ "./src/js_es6/utils/DragListener.js");
/* harmony import */ var _controls_DragProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/DragProxy */ "./src/js_es6/controls/DragProxy.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * Allows for any DOM item to create a component on drag
 * start tobe dragged into the Layout
 *
 * @param {jQuery element} element
 * @param {Object} itemConfig the configuration for the contentItem that will be created
 * @param {LayoutManager} layoutManager
 *
 * @constructor
 */

var DragSource = /*#__PURE__*/function () {
  function DragSource(element, itemConfig, layoutManager) {
    _classCallCheck(this, DragSource);

    this._element = element;
    this._itemConfig = itemConfig;
    this._layoutManager = layoutManager;
    this._dragListener = null;

    this._createDragListener();
  }
  /**
   * Disposes of the drag listeners so the drag source is not usable any more.
   *
   * @returns {void}
   */


  _createClass(DragSource, [{
    key: "destroy",
    value: function destroy() {
      this._removeDragListener();
    }
    /**
     * Called initially and after every drag
     *
     * @returns {void}
     */

  }, {
    key: "_createDragListener",
    value: function _createDragListener() {
      this._removeDragListener();

      this._dragListener = new _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__["default"](this._element);

      this._dragListener.on('dragStart', this._onDragStart, this);

      this._dragListener.on('dragStop', this._createDragListener, this);
    }
    /**
     * Callback for the DragListener's dragStart event
     *
     * @param   {int} x the x position of the mouse on dragStart
     * @param   {int} y the x position of the mouse on dragStart
     *
     * @returns {void}
     */

  }, {
    key: "_onDragStart",
    value: function _onDragStart(x, y) {
      var itemConfig = this._itemConfig;

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(itemConfig)) {
        itemConfig = itemConfig();
      }

      var contentItem = this._layoutManager._$normalizeContentItem(jquery__WEBPACK_IMPORTED_MODULE_3___default.a.extend(true, {}, itemConfig)),
          dragProxy = new _controls_DragProxy__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, this._dragListener, this._layoutManager, contentItem, null);

      this._layoutManager.transitionIndicator.transitionElements(this._element, dragProxy.element);
    }
    /**
    * Called after every drag and when the drag source is being disposed of.
    *
    * @returns {void}
    */

  }, {
    key: "_removeDragListener",
    value: function _removeDragListener() {
      if (this._dragListener !== null) {
        this._dragListener.destroy();
      }
    }
  }]);

  return DragSource;
}();



/***/ }),

/***/ "./src/js_es6/controls/DropTargetIndicator.js":
/*!****************************************************!*\
  !*** ./src/js_es6/controls/DropTargetIndicator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropTargetIndicator; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var _template = '<div class="lm_dropTargetIndicator"><div class="lm_inner"></div></div>';

var DropTargetIndicator = /*#__PURE__*/function () {
  function DropTargetIndicator() {
    _classCallCheck(this, DropTargetIndicator);

    this.element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_template);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).append(this.element);
  }

  _createClass(DropTargetIndicator, [{
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }, {
    key: "highlight",
    value: function highlight(x1, y1, x2, y2) {
      this.highlightArea({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }, {
    key: "highlightArea",
    value: function highlightArea(area) {
      this.element.css({
        left: area.x1,
        top: area.y1,
        width: area.x2 - area.x1,
        height: area.y2 - area.y1
      }).show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.element.hide();
    }
  }]);

  return DropTargetIndicator;
}();



/***/ }),

/***/ "./src/js_es6/controls/Header.js":
/*!***************************************!*\
  !*** ./src/js_es6/controls/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _controls_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/Tab */ "./src/js_es6/controls/Tab.js");
/* harmony import */ var _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/HeaderButton */ "./src/js_es6/controls/HeaderButton.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var _template = ['<div class="lm_header">', '<ul class="lm_tabs"></ul>', '<ul class="lm_controls"></ul>', '<ul class="lm_tabdropdown_list"></ul>', '</div>'].join('');
/**
 * This class represents a header above a Stack ContentItem.
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {AbstractContentItem} parent
 */


var Header = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Header, _EventEmitter);

  var _super = _createSuper(Header);

  function Header(layoutManager, parent) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this);
    _this.layoutManager = layoutManager;
    _this.element = jquery__WEBPACK_IMPORTED_MODULE_4___default()(_template);

    if (_this.layoutManager.config.settings.selectionEnabled === true) {
      _this.element.addClass('lm_selectable');

      _this.element.on('click touchstart', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(_this._onHeaderClick, _assertThisInitialized(_this)));
    }

    _this.tabsContainer = _this.element.find('.lm_tabs');
    _this.tabDropdownContainer = _this.element.find('.lm_tabdropdown_list');

    _this.tabDropdownContainer.hide();

    _this.controlsContainer = _this.element.find('.lm_controls');
    _this.parent = parent;

    _this.parent.on('resize', _this._updateTabSizes, _assertThisInitialized(_this));

    _this.tabs = [];
    _this.tabsMarkedForRemoval = [];
    _this.activeContentItem = null;
    _this.closeButton = null;
    _this.dockButton = null;
    _this.tabDropdownButton = null;
    _this.hideAdditionalTabsDropdown = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(_this._hideAdditionalTabsDropdown, _assertThisInitialized(_this));
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).mouseup(_this.hideAdditionalTabsDropdown);
    _this._lastVisibleTabIndex = -1;
    _this._tabControlOffset = _this.layoutManager.config.settings.tabControlOffset;

    _this._createControls();

    return _this;
  }
  /**
   * Creates a new tab and associates it with a contentItem
   *
   * @param    {AbstractContentItem} contentItem
   * @param    {Integer} index The position of the tab
   *
   * @returns {void}
   */


  _createClass(Header, [{
    key: "createTab",
    value: function createTab(contentItem, index) {
      var tab, i; //If there's already a tab relating to the
      //content item, don't do anything

      for (i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].contentItem === contentItem) {
          return;
        }
      }

      tab = new _controls_Tab__WEBPACK_IMPORTED_MODULE_1__["default"](this, contentItem);

      if (this.tabs.length === 0) {
        this.tabs.push(tab);
        this.tabsContainer.append(tab.element);
        return;
      }

      if (index === undefined) {
        index = this.tabs.length;
      }

      if (index > 0) {
        this.tabs[index - 1].element.after(tab.element);
      } else {
        this.tabs[0].element.before(tab.element);
      }

      this.tabs.splice(index, 0, tab);

      this._updateTabSizes();
    }
    /**
     * Finds a tab based on the contentItem its associated with and removes it.
     *
     * @param    {AbstractContentItem} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "removeTab",
    value: function removeTab(contentItem) {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].contentItem === contentItem) {
          this.tabs[i]._$destroy();

          this.tabs.splice(i, 1);
          return;
        }
      }

      for (i = 0; i < this.tabsMarkedForRemoval.length; i++) {
        if (this.tabsMarkedForRemoval[i].contentItem === contentItem) {
          this.tabsMarkedForRemoval[i]._$destroy();

          this.tabsMarkedForRemoval.splice(i, 1);
          return;
        }
      }

      throw new Error('contentItem is not controlled by this header');
    }
    /**
     * Finds a tab based on the contentItem its associated with and marks it
     * for removal, hiding it too.
     *
     * @param    {AbstractContentItem} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "hideTab",
    value: function hideTab(contentItem) {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].contentItem === contentItem) {
          this.tabs[i].element.hide();
          this.tabsMarkedForRemoval.push(this.tabs[i]);
          this.tabs.splice(i, 1);
          return;
        }
      }

      throw new Error('contentItem is not controlled by this header');
    }
    /**
     * The programmatical equivalent of clicking a Tab.
     *
     * @param {AbstractContentItem} contentItem
     */

  }, {
    key: "setActiveContentItem",
    value: function setActiveContentItem(contentItem) {
      var i, j, isActive, activeTab;
      if (this.activeContentItem === contentItem) return;

      for (i = 0; i < this.tabs.length; i++) {
        isActive = this.tabs[i].contentItem === contentItem;
        this.tabs[i].setActive(isActive);

        if (isActive === true) {
          this.activeContentItem = contentItem;
          this.parent.config.activeItemIndex = i;
        }
      }

      if (this.layoutManager.config.settings.reorderOnTabMenuClick) {
        /**
         * If the tab selected was in the dropdown, move everything down one to make way for this one to be the first.
         * This will make sure the most used tabs stay visible.
         */
        if (this._lastVisibleTabIndex !== -1 && this.parent.config.activeItemIndex > this._lastVisibleTabIndex) {
          activeTab = this.tabs[this.parent.config.activeItemIndex];

          for (j = this.parent.config.activeItemIndex; j > 0; j--) {
            this.tabs[j] = this.tabs[j - 1];
          }

          this.tabs[0] = activeTab;
          this.parent.config.activeItemIndex = 0;
        }
      }

      this._updateTabSizes();

      this.parent.emitBubblingEvent('stateChanged');
    }
    /**
     * Programmatically operate with header position.
     *
     * @param {string} position one of ('top','left','right','bottom') to set or empty to get it.
     *
     * @returns {string} previous header position
     */

  }, {
    key: "position",
    value: function position(_position) {
      var previous = this.parent._header.show;
      if (this.parent._docker && this.parent._docker.docked) throw new Error('Can\'t change header position in docked stack');
      if (previous && !this.parent._side) previous = 'top';

      if (_position !== undefined && this.parent._header.show != _position) {
        this.parent._header.show = _position;
        this.parent.config.header ? this.parent.config.header.show = _position : this.parent.config.header = {
          show: _position
        };

        this.parent._setupHeaderPosition();
      }

      return previous;
    }
    /**
     * Programmatically set closability.
     *
     * @package private
     * @param {Boolean} isClosable Whether to enable/disable closability.
     *
     * @returns {Boolean} Whether the action was successful
     */

  }, {
    key: "_$setClosable",
    value: function _$setClosable(isClosable) {
      this._canDestroy = isClosable || this.tabs.length > 1;

      if (this.closeButton && this._isClosable()) {
        this.closeButton.element[isClosable ? "show" : "hide"]();
        return true;
      }

      return false;
    }
    /**
     * Programmatically set ability to dock.
     *
     * @package private
     * @param {Boolean} isDockable Whether to enable/disable ability to dock.
     *
     * @returns {Boolean} Whether the action was successful
     */

  }, {
    key: "_setDockable",
    value: function _setDockable(isDockable) {
      if (this.dockButton && this.parent._header && this.parent._header.dock) {
        this.dockButton.element.toggle(!!isDockable);
        return true;
      }

      return false;
    }
    /**
     * Destroys the entire header
     *
     * @package private
     *
     * @returns {void}
     */

  }, {
    key: "_$destroy",
    value: function _$destroy() {
      this.emit('destroy', this);

      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i]._$destroy();
      }

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).off('mouseup', this.hideAdditionalTabsDropdown);
      this.element.remove();
    }
    /**
     * get settings from header
     *
     * @returns {string} when exists
     */

  }, {
    key: "_getHeaderSetting",
    value: function _getHeaderSetting(name) {
      if (name in this.parent._header) return this.parent._header[name];
    }
    /**
     * Creates the popout, maximise and close buttons in the header's top right corner
     *
     * @returns {void}
     */

  }, {
    key: "_createControls",
    value: function _createControls() {
      var closeStack, popout, label, maximiseLabel, minimiseLabel, maximise, maximiseButton, tabDropdownLabel, showTabDropdown;
      /**
       * Dropdown to show additional tabs.
       */

      showTabDropdown = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this._showAdditionalTabsDropdown, this);
      tabDropdownLabel = this.layoutManager.config.labels.tabDropdown;
      this.tabDropdownButton = new _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"](this, tabDropdownLabel, 'lm_tabdropdown', showTabDropdown);
      this.tabDropdownButton.element.hide();

      if (this.parent._header && this.parent._header.dock) {
        var button = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this.parent.dock, this.parent);
        label = this._getHeaderSetting('dock');
        this.dockButton = new _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"](this, label, 'lm_dock', button);
      }
      /**
       * Popout control to launch component in new window.
       */


      if (this._getHeaderSetting('popout')) {
        popout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this._onPopoutClick, this);
        label = this._getHeaderSetting('popout');
        new _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"](this, label, 'lm_popout', popout);
      }
      /**
       * Maximise control - set the component to the full size of the layout
       */


      if (this._getHeaderSetting('maximise')) {
        maximise = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this.parent.toggleMaximise, this.parent);
        maximiseLabel = this._getHeaderSetting('maximise');
        minimiseLabel = this._getHeaderSetting('minimise');
        maximiseButton = new _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"](this, maximiseLabel, 'lm_maximise', maximise);
        this.parent.on('maximised', function () {
          maximiseButton.element.attr('title', minimiseLabel);
        });
        this.parent.on('minimised', function () {
          maximiseButton.element.attr('title', maximiseLabel);
        });
      }
      /**
       * Close button
       */


      if (this._isClosable()) {
        closeStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this.parent.remove, this.parent);
        label = this._getHeaderSetting('close');
        this.closeButton = new _controls_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"](this, label, 'lm_close', closeStack);
      }
    }
    /**
     * Shows drop down for additional tabs when there are too many to display.
     *
     * @returns {void}
     */

  }, {
    key: "_showAdditionalTabsDropdown",
    value: function _showAdditionalTabsDropdown() {
      this.tabDropdownContainer.show();
    }
    /**
     * Hides drop down for additional tabs when there are too many to display.
     *
     * @returns {void}
     */

  }, {
    key: "_hideAdditionalTabsDropdown",
    value: function _hideAdditionalTabsDropdown(e) {
      this.tabDropdownContainer.hide();
    }
    /**
     * Checks whether the header is closable based on the parent config and
     * the global config.
     *
     * @returns {Boolean} Whether the header is closable.
     */

  }, {
    key: "_isClosable",
    value: function _isClosable() {
      return this.parent.config.isClosable && this.layoutManager.config.settings.showCloseIcon;
    }
  }, {
    key: "_onPopoutClick",
    value: function _onPopoutClick() {
      if (this.layoutManager.config.settings.popoutWholeStack === true) {
        this.parent.popout();
      } else {
        this.activeContentItem.popout();
      }
    }
    /**
     * Invoked when the header's background is clicked (not it's tabs or controls)
     *
     * @param    {jQuery DOM event} event
     *
     * @returns {void}
     */

  }, {
    key: "_onHeaderClick",
    value: function _onHeaderClick(event) {
      if (event.target === this.element[0]) {
        this.parent.select();
      }
    }
    /**
     * Pushes the tabs to the tab dropdown if the available space is not sufficient
     *
     * @returns {void}
     */

  }, {
    key: "_updateTabSizes",
    value: function _updateTabSizes(showTabMenu) {
      if (this.tabs.length === 0) {
        return;
      } //Show the menu based on function argument


      this.tabDropdownButton.element.toggle(showTabMenu === true);

      var size = function size(val) {
        return val ? 'width' : 'height';
      };

      this.element.css(size(!this.parent._sided), '');
      this.element[size(this.parent._sided)](this.layoutManager.config.dimensions.headerHeight);

      var availableWidth = this.element.outerWidth() - this.controlsContainer.outerWidth() - this._tabControlOffset,
          cumulativeTabWidth = 0,
          visibleTabWidth = 0,
          tabElement,
          i,
          j,
          marginLeft,
          overlap = 0,
          tabWidth,
          tabOverlapAllowance = this.layoutManager.config.settings.tabOverlapAllowance,
          tabOverlapAllowanceExceeded = false,
          activeIndex = this.activeContentItem ? this.tabs.indexOf(this.activeContentItem.tab) : 0,
          activeTab = this.tabs[activeIndex];

      if (this.parent._sided) availableWidth = this.element.outerHeight() - this.controlsContainer.outerHeight() - this._tabControlOffset;
      this._lastVisibleTabIndex = -1;

      for (i = 0; i < this.tabs.length; i++) {
        tabElement = this.tabs[i].element; //Put the tab in the tabContainer so its true width can be checked

        this.tabsContainer.append(tabElement);
        tabWidth = tabElement.outerWidth() + parseInt(tabElement.css('margin-right'), 10);
        cumulativeTabWidth += tabWidth; //Include the active tab's width if it isn't already
        //This is to ensure there is room to show the active tab

        if (activeIndex <= i) {
          visibleTabWidth = cumulativeTabWidth;
        } else {
          visibleTabWidth = cumulativeTabWidth + activeTab.element.outerWidth() + parseInt(activeTab.element.css('margin-right'), 10);
        } // If the tabs won't fit, check the overlap allowance.


        if (visibleTabWidth > availableWidth) {
          //Once allowance is exceeded, all remaining tabs go to menu.
          if (!tabOverlapAllowanceExceeded) {
            //No overlap for first tab or active tab
            //Overlap spreads among non-active, non-first tabs
            if (activeIndex > 0 && activeIndex <= i) {
              overlap = (visibleTabWidth - availableWidth) / (i - 1);
            } else {
              overlap = (visibleTabWidth - availableWidth) / i;
            } //Check overlap against allowance.


            if (overlap < tabOverlapAllowance) {
              for (j = 0; j <= i; j++) {
                marginLeft = j !== activeIndex && j !== 0 ? '-' + overlap + 'px' : '';
                this.tabs[j].element.css({
                  'z-index': i - j,
                  'margin-left': marginLeft
                });
              }

              this._lastVisibleTabIndex = i;
              this.tabsContainer.append(tabElement);
            } else {
              tabOverlapAllowanceExceeded = true;
            }
          } else if (i === activeIndex) {
            //Active tab should show even if allowance exceeded. (We left room.)
            tabElement.css({
              'z-index': 'auto',
              'margin-left': ''
            });
            this.tabsContainer.append(tabElement);
          }

          if (tabOverlapAllowanceExceeded && i !== activeIndex) {
            if (showTabMenu) {
              //Tab menu already shown, so we just add to it.
              tabElement.css({
                'z-index': 'auto',
                'margin-left': ''
              });
              this.tabDropdownContainer.append(tabElement);
            } else {
              //We now know the tab menu must be shown, so we have to recalculate everything.
              this._updateTabSizes(true);

              return;
            }
          }
        } else {
          this._lastVisibleTabIndex = i;
          tabElement.css({
            'z-index': 'auto',
            'margin-left': ''
          });
          this.tabsContainer.append(tabElement);
        }
      }
    }
  }]);

  return Header;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/controls/HeaderButton.js":
/*!*********************************************!*\
  !*** ./src/js_es6/controls/HeaderButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderButton; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HeaderButton = /*#__PURE__*/function () {
  function HeaderButton(header, label, cssClass, action) {
    _classCallCheck(this, HeaderButton);

    this._header = header;
    this.element = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="' + cssClass + '" title="' + label + '"></li>');

    this._header.on('destroy', this._$destroy, this);

    this._action = action;
    this.element.on('click touchstart', this._action);

    this._header.controlsContainer.append(this.element);
  }

  _createClass(HeaderButton, [{
    key: "_$destroy",
    value: function _$destroy() {
      this.element.off();
      this.element.remove();
    }
  }]);

  return HeaderButton;
}();



/***/ }),

/***/ "./src/js_es6/controls/Splitter.js":
/*!*****************************************!*\
  !*** ./src/js_es6/controls/Splitter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Splitter; });
/* harmony import */ var _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DragListener */ "./src/js_es6/utils/DragListener.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Splitter = /*#__PURE__*/function () {
  function Splitter(isVertical, size, grabSize) {
    _classCallCheck(this, Splitter);

    this._isVertical = isVertical;
    this._size = size;
    this._grabSize = grabSize < size ? size : grabSize;
    this.element = this._createElement();
    this._dragListener = new _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__["default"](this.element);
  }

  _createClass(Splitter, [{
    key: "on",
    value: function on(event, callback, context) {
      this._dragListener.on(event, callback, context);
    }
  }, {
    key: "_$destroy",
    value: function _$destroy() {
      this.element.remove();
    }
  }, {
    key: "_createElement",
    value: function _createElement() {
      var dragHandle = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="lm_drag_handle"></div>');
      var element = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="lm_splitter"></div>');
      element.append(dragHandle);
      var handleExcessSize = this._grabSize - this._size;
      var handleExcessPos = handleExcessSize / 2;

      if (this._isVertical) {
        dragHandle.css('top', -handleExcessPos);
        dragHandle.css('height', this._size + handleExcessSize);
        element.addClass('lm_vertical');
        element['height'](this._size);
      } else {
        dragHandle.css('left', -handleExcessPos);
        dragHandle.css('width', this._size + handleExcessSize);
        element.addClass('lm_horizontal');
        element['width'](this._size);
      }

      return element;
    }
  }]);

  return Splitter;
}();



/***/ }),

/***/ "./src/js_es6/controls/Tab.js":
/*!************************************!*\
  !*** ./src/js_es6/controls/Tab.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
/* harmony import */ var _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DragListener */ "./src/js_es6/utils/DragListener.js");
/* harmony import */ var _controls_DragProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/DragProxy */ "./src/js_es6/controls/DragProxy.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * Represents an individual tab within a Stack's header
 *
 * @param {Header} header
 * @param {AbstractContentItem} contentItem
 *
 * @constructor
 */

var _template = '<li class="lm_tab"><i class="lm_left"></i>' + '<span class="lm_title"></span><div class="lm_close_tab"></div>' + '<i class="lm_right"></i></li>';

var Tab = /*#__PURE__*/function () {
  function Tab(header, contentItem) {
    _classCallCheck(this, Tab);

    this.header = header;
    this.contentItem = contentItem;
    this.element = jquery__WEBPACK_IMPORTED_MODULE_3___default()(_template);
    this.titleElement = this.element.find('.lm_title');
    this.closeElement = this.element.find('.lm_close_tab');
    this.closeElement[contentItem.config.isClosable ? 'show' : 'hide']();
    this.isActive = false;
    this.setTitle(contentItem.config.title);
    this.contentItem.on('titleChanged', this.setTitle, this);
    this._layoutManager = this.contentItem.layoutManager;

    if (this._layoutManager.config.settings.reorderEnabled === true && contentItem.config.reorderEnabled === true) {
      this._dragListener = new _utils_DragListener__WEBPACK_IMPORTED_MODULE_0__["default"](this.element);

      this._dragListener.on('dragStart', this._onDragStart, this);

      this.contentItem.on('destroy', this._dragListener.destroy, this._dragListener);
    }

    this._onTabClickFn = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(this._onTabClick, this);
    this._onCloseClickFn = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fnBind"])(this._onCloseClick, this);
    this.element.on('mousedown touchstart', this._onTabClickFn);

    if (this.contentItem.config.isClosable) {
      this.closeElement.on('click touchstart', this._onCloseClickFn);
      this.closeElement.on('mousedown', this._onCloseMousedown);
    } else {
      this.closeElement.remove();
    }

    this.contentItem.tab = this;
    this.contentItem.emit('tab', this);
    this.contentItem.layoutManager.emit('tabCreated', this);

    if (this.contentItem.isComponent) {
      this.contentItem.container.tab = this;
      this.contentItem.container.emit('tab', this);
    }
  }
  /**
   * Sets the tab's title to the provided string and sets
   * its title attribute to a pure text representation (without
   * html tags) of the same string.
   *
   * @public
   * @param {String} title can contain html
   */


  _createClass(Tab, [{
    key: "setTitle",
    value: function setTitle(title) {
      this.element.attr('title', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["stripTags"])(title));
      this.titleElement.html(title);
    }
    /**
     * Sets this tab's active state. To programmatically
     * switch tabs, use header.setActiveContentItem( item ) instead.
     *
     * @public
     * @param {Boolean} isActive
     */

  }, {
    key: "setActive",
    value: function setActive(isActive) {
      if (isActive === this.isActive) {
        return;
      }

      this.isActive = isActive;

      if (isActive) {
        this.element.addClass('lm_active');
      } else {
        this.element.removeClass('lm_active');
      }
    }
    /**
     * Destroys the tab
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_$destroy",
    value: function _$destroy() {
      this.element.off('mousedown touchstart', this._onTabClickFn);
      this.closeElement.off('click touchstart', this._onCloseClickFn);

      if (this._dragListener) {
        this.contentItem.off('destroy', this._dragListener.destroy, this._dragListener);

        this._dragListener.off('dragStart', this._onDragStart);

        this._dragListener = null;
      }

      this.element.remove();
    }
    /**
     * Callback for the DragListener
     *
     * @param   {Number} x The tabs absolute x position
     * @param   {Number} y The tabs absolute y position
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_onDragStart",
    value: function _onDragStart(x, y) {
      if (!this.header._canDestroy) return null;

      if (this.contentItem.parent.isMaximised === true) {
        this.contentItem.parent.toggleMaximise();
      }

      new _controls_DragProxy__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, this._dragListener, this._layoutManager, this.contentItem, this.header.parent);
    }
    /**
     * Callback when the tab is clicked
     *
     * @param {jQuery DOM event} event
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_onTabClick",
    value: function _onTabClick(event) {
      // left mouse button or tap
      if (event.button === 0 || event.type === 'touchstart') {
        this.header.parent.setActiveContentItem(this.contentItem); // middle mouse button
      } else if (event.button === 1 && this.contentItem.config.isClosable) {
        this._onCloseClick(event);
      }
    }
    /**
     * Callback when the tab's close button is
     * clicked
     *
     * @param   {jQuery DOM event} event
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_onCloseClick",
    value: function _onCloseClick(event) {
      event.stopPropagation();
      if (!this.header._canDestroy) return;
      this.header.parent.removeChild(this.contentItem);
    }
    /**
     * Callback to capture tab close button mousedown
     * to prevent tab from activating.
     *
     * @param (jQuery DOM event) event
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_onCloseMousedown",
    value: function _onCloseMousedown(event) {
      event.stopPropagation();
    }
  }]);

  return Tab;
}();



/***/ }),

/***/ "./src/js_es6/controls/TransitionIndicator.js":
/*!****************************************************!*\
  !*** ./src/js_es6/controls/TransitionIndicator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionIndicator; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TransitionIndicator = /*#__PURE__*/function () {
  function TransitionIndicator() {
    _classCallCheck(this, TransitionIndicator);

    this._element = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="lm_transition_indicator"></div>');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.body).append(this._element);
    this._toElement = null;
    this._fromDimensions = null;
    this._totalAnimationDuration = 200;
    this._animationStartTime = null;
  }

  _createClass(TransitionIndicator, [{
    key: "destroy",
    value: function destroy() {
      this._element.remove();
    }
  }, {
    key: "transitionElements",
    value: function transitionElements(fromElement, toElement) {
      /**
       * TODO - This is not quite as cool as expected. Review.
       */
      return; // this._toElement = toElement;
      // this._animationStartTime = now();
      // this._fromDimensions = this._measure(fromElement);
      // this._fromDimensions.opacity = 0.8;
      // this._element.show().css(this._fromDimensions);
      // animFrame(fnBind(this._nextAnimationFrame, this));
    }
  }, {
    key: "_nextAnimationFrame",
    value: function _nextAnimationFrame() {
      var toDimensions = this._measure(this._toElement),
          animationProgress = (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])() - this._animationStartTime) / this._totalAnimationDuration,
          currentFrameStyles = {},
          cssProperty;

      if (animationProgress >= 1) {
        this._element.hide();

        return;
      }

      toDimensions.opacity = 0;

      for (cssProperty in this._fromDimensions) {
        currentFrameStyles[cssProperty] = this._fromDimensions[cssProperty] + (toDimensions[cssProperty] - this._fromDimensions[cssProperty]) * animationProgress;
      }

      this._element.css(currentFrameStyles);

      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["animFrame"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fnBind"])(this._nextAnimationFrame, this));
    }
  }, {
    key: "_measure",
    value: function _measure(element) {
      var offset = element.offset();
      return {
        left: offset.left,
        top: offset.top,
        width: element.outerWidth(),
        height: element.outerHeight()
      };
    }
  }]);

  return TransitionIndicator;
}();



/***/ }),

/***/ "./src/js_es6/errors/ConfigurationError.js":
/*!*************************************************!*\
  !*** ./src/js_es6/errors/ConfigurationError.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigurationError; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ConfigurationError = /*#__PURE__*/function (_Error) {
  _inherits(ConfigurationError, _Error);

  var _super = _createSuper(ConfigurationError);

  function ConfigurationError(message, node) {
    var _this;

    _classCallCheck(this, ConfigurationError);

    _this = _super.call(this);
    _this.name = 'Configuration Error';
    _this.message = message;
    _this.node = node;
    return _this;
  }

  return ConfigurationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));



/***/ }),

/***/ "./src/js_es6/items/AbstractContentItem.js":
/*!*************************************************!*\
  !*** ./src/js_es6/items/AbstractContentItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractContentItem; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_BubblingEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/BubblingEvent */ "./src/js_es6/utils/BubblingEvent.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root */ "./src/js_es6/items/Root.js");
/* harmony import */ var _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/ConfigurationError */ "./src/js_es6/errors/ConfigurationError.js");
/* harmony import */ var _config_ItemDefaultConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/ItemDefaultConfig */ "./src/js_es6/config/ItemDefaultConfig.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








/**
 * This is the baseclass that all content items inherit from.
 * Most methods provide a subset of what the sub-classes do.
 *
 * It also provides a number of functions for tree traversal
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {item node configuration} config
 * @param {lm.item} parent
 *
 * @event stateChanged
 * @event beforeItemDestroyed
 * @event itemDestroyed
 * @event itemCreated
 * @event componentCreated
 * @event rowCreated
 * @event columnCreated
 * @event stackCreated
 *
 * @constructor
 */

var AbstractContentItem = /*#__PURE__*/function (_EventEmitter) {
  _inherits(AbstractContentItem, _EventEmitter);

  var _super = _createSuper(AbstractContentItem);

  function AbstractContentItem(layoutManager, config, parent) {
    var _this;

    _classCallCheck(this, AbstractContentItem);

    _this = _super.call(this);
    _this.config = _this._extendItemNode(config);
    _this.type = config.type;
    _this.contentItems = [];
    _this.parent = parent;
    _this.isInitialised = false;
    _this.isMaximised = false;
    _this.isRoot = false;
    _this.isRow = false;
    _this.isColumn = false;
    _this.isStack = false;
    _this.isComponent = false;
    _this.layoutManager = layoutManager;
    _this._pendingEventPropagations = {};
    _this._throttledEvents = ['stateChanged'];

    _this.on(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["ALL_EVENT"], _this._propagateEvent, _assertThisInitialized(_this));

    if (config.content) {
      _this._createContentItems(config);
    }

    return _this;
  }
  /**
   * Set the size of the component and its children, called recursively
   *
   * @abstract
   * @returns void
   */


  _createClass(AbstractContentItem, [{
    key: "setSize",
    value: function setSize() {
      throw new Error('Abstract Method');
    }
    /**
     * Calls a method recursively downwards on the tree
     *
     * @param   {String} functionName      the name of the function to be called
     * @param   {[Array]}functionArguments optional arguments that are passed to every function
     * @param   {[bool]} bottomUp          Call methods from bottom to top, defaults to false
     * @param   {[bool]} skipSelf          Don't invoke the method on the class that calls it, defaults to false
     *
     * @returns {void}
     */

  }, {
    key: "callDownwards",
    value: function callDownwards(functionName, functionArguments, bottomUp, skipSelf) {
      var i;

      if (bottomUp !== true && skipSelf !== true) {
        this[functionName].apply(this, functionArguments || []);
      }

      for (i = 0; i < this.contentItems.length; i++) {
        this.contentItems[i].callDownwards(functionName, functionArguments, bottomUp);
      }

      if (bottomUp === true && skipSelf !== true) {
        this[functionName].apply(this, functionArguments || []);
      }
    }
    /**
     * Removes a child node (and its children) from the tree
     *
     * @param   {ContentItem} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "removeChild",
    value: function removeChild(contentItem, keepChild) {
      /*
       * Get the position of the item that's to be removed within all content items this node contains
       */
      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(contentItem, this.contentItems);
      /*
       * Make sure the content item to be removed is actually a child of this item
       */

      if (index === -1) {
        throw new Error('Can\'t remove child item. Unknown content item');
      }
      /**
      * Call ._$destroy on the content item. 
      * Then use 'callDownwards' to destroy any children
      */


      if (keepChild !== true) {
        this.contentItems[index]._$destroy();

        this.contentItems[index].callDownwards('_$destroy', [], true, true);
      }
      /**
       * Remove the content item from this nodes array of children
       */


      this.contentItems.splice(index, 1);
      /**
       * Remove the item from the configuration
       */

      this.config.content.splice(index, 1);
      /**
       * If this node still contains other content items, adjust their size
       */

      if (this.contentItems.length > 0) {
        this.callDownwards('setSize');
        /**
         * If this was the last content item, remove this node as well
         */
      } else if (!(this instanceof _Root__WEBPACK_IMPORTED_MODULE_2__["default"]) && this.config.isClosable === true) {
        this.parent.removeChild(this);
      }
    }
    /**
     * Hides a child node (and its children) from the tree reclaiming its space in the layout
     *
     * @param   {ContentItem} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "undisplayChild",
    value: function undisplayChild(contentItem) {
      /*
       * Get the position of the item that's to be removed within all content items this node contains
       */
      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(contentItem, this.contentItems);
      /*
       * Make sure the content item to be removed is actually a child of this item
       */

      if (index === -1) {
        throw new Error('Can\'t remove child item. Unknown content item');
      }

      if (!(this instanceof _Root__WEBPACK_IMPORTED_MODULE_2__["default"]) && this.config.isClosable === true) {
        this.parent.undisplayChild(this);
      }
    }
    /**
     * Sets up the tree structure for the newly added child
     * The responsibility for the actual DOM manipulations lies
     * with the concrete item
     *
     * @param {AbstractContentItem} contentItem
     * @param {[Int]} index If omitted item will be appended
     */

  }, {
    key: "addChild",
    value: function addChild(contentItem, index) {
      if (index === undefined) {
        index = this.contentItems.length;
      }

      this.contentItems.splice(index, 0, contentItem);

      if (this.config.content === undefined) {
        this.config.content = [];
      }

      this.config.content.splice(index, 0, contentItem.config);
      contentItem.parent = this;

      if (contentItem.parent.isInitialised === true && contentItem.isInitialised === false) {
        contentItem._$init();
      }
    }
    /**
     * Replaces oldChild with newChild. This used to use jQuery.replaceWith... which for
     * some reason removes all event listeners, so isn't really an option.
     *
     * @param   {AbstractContentItem} oldChild
     * @param   {AbstractContentItem} newChild
     *
     * @returns {void}
     */

  }, {
    key: "replaceChild",
    value: function replaceChild(oldChild, newChild, _$destroyOldChild) {
      newChild = this.layoutManager._$normalizeContentItem(newChild);
      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(oldChild, this.contentItems),
          parentNode = oldChild.element[0].parentNode;

      if (index === -1) {
        throw new Error('Can\'t replace child. oldChild is not child of this');
      }

      parentNode.replaceChild(newChild.element[0], oldChild.element[0]);
      /*
       * Optionally destroy the old content item
       */

      if (_$destroyOldChild === true) {
        oldChild.parent = null;

        oldChild._$destroy();
      }
      /*
       * Wire the new contentItem into the tree
       */


      this.contentItems[index] = newChild;
      newChild.parent = this;
      /*
       * Update tab reference
       */

      if (this.isStack) {
        this.header.tabs[index].contentItem = newChild;
      } //TODO This doesn't update the config... refactor to leave item nodes untouched after creation


      if (newChild.parent.isInitialised === true && newChild.isInitialised === false) {
        newChild._$init();
      }

      this.callDownwards('setSize');
    }
    /**
     * Convenience method.
     * Shorthand for this.parent.removeChild( this )
     *
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove() {
      this.parent.removeChild(this);
    }
    /**
     * Removes the component from the layout and creates a new
     * browser window with the component and its children inside
     *
     * @returns {BrowserPopout}
     */

  }, {
    key: "popout",
    value: function popout() {
      var browserPopout = this.layoutManager.createPopout(this);
      this.emitBubblingEvent('stateChanged');
      return browserPopout;
    }
    /**
     * Maximises the Item or minimises it if it is already maximised
     *
     * @returns {void}
     */

  }, {
    key: "toggleMaximise",
    value: function toggleMaximise(e) {
      e && e.preventDefault();

      if (this.isMaximised === true) {
        this.layoutManager._$minimiseItem(this);
      } else {
        this.layoutManager._$maximiseItem(this);
      }

      this.isMaximised = !this.isMaximised;
      this.emitBubblingEvent('stateChanged');
    }
    /**
     * Selects the item if it is not already selected
     *
     * @returns {void}
     */

  }, {
    key: "select",
    value: function select() {
      if (this.layoutManager.selectedItem !== this) {
        this.layoutManager.selectItem(this, true);
        this.element.addClass('lm_selected');
      }
    }
    /**
     * De-selects the item if it is selected
     *
     * @returns {void}
     */

  }, {
    key: "deselect",
    value: function deselect() {
      if (this.layoutManager.selectedItem === this) {
        this.layoutManager.selectedItem = null;
        this.element.removeClass('lm_selected');
      }
    }
    /**
     * Set this component's title
     *
     * @public
     * @param {String} title
     *
     * @returns {void}
     */

  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.config.title = title;
      this.emit('titleChanged', title);
      this.emit('stateChanged');
    }
    /**
     * Checks whether a provided id is present
     *
     * @public
     * @param   {String}  id
     *
     * @returns {Boolean} isPresent
     */

  }, {
    key: "hasId",
    value: function hasId(id) {
      if (!this.config.id) {
        return false;
      } else if (typeof this.config.id === 'string') {
        return this.config.id === id;
      } else if (this.config.id instanceof Array) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(id, this.config.id) !== -1;
      }
    }
    /**
     * Adds an id. Adds it as a string if the component doesn't
     * have an id yet or creates/uses an array
     *
     * @public
     * @param {String} id
     *
     * @returns {void}
     */

  }, {
    key: "addId",
    value: function addId(id) {
      if (this.hasId(id)) {
        return;
      }

      if (!this.config.id) {
        this.config.id = id;
      } else if (typeof this.config.id === 'string') {
        this.config.id = [this.config.id, id];
      } else if (this.config.id instanceof Array) {
        this.config.id.push(id);
      }
    }
    /**
     * Removes an existing id. Throws an error
     * if the id is not present
     *
     * @public
     * @param   {String} id
     *
     * @returns {void}
     */

  }, {
    key: "removeId",
    value: function removeId(id) {
      if (!this.hasId(id)) {
        throw new Error('Id not found');
      }

      if (typeof this.config.id === 'string') {
        delete this.config.id;
      } else if (this.config.id instanceof Array) {
        var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(id, this.config.id);
        this.config.id.splice(index, 1);
      }
    }
    /****************************************
     * SELECTOR
     ****************************************/

  }, {
    key: "getItemsByFilter",
    value: function getItemsByFilter(filter) {
      var result = [],
          next = function next(contentItem) {
        for (var i = 0; i < contentItem.contentItems.length; i++) {
          if (filter(contentItem.contentItems[i]) === true) {
            result.push(contentItem.contentItems[i]);
          }

          next(contentItem.contentItems[i]);
        }
      };

      next(this);
      return result;
    }
  }, {
    key: "getItemsById",
    value: function getItemsById(id) {
      return this.getItemsByFilter(function (item) {
        if (item.config.id instanceof Array) {
          return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(id, item.config.id) !== -1;
        } else {
          return item.config.id === id;
        }
      });
    }
  }, {
    key: "getItemsByType",
    value: function getItemsByType(type) {
      return this._$getItemsByProperty('type', type);
    }
  }, {
    key: "getComponentsByName",
    value: function getComponentsByName(componentName) {
      var components = this._$getItemsByProperty('componentName', componentName),
          instances = [],
          i;

      for (i = 0; i < components.length; i++) {
        instances.push(components[i].instance);
      }

      return instances;
    }
    /****************************************
     * PACKAGE PRIVATE
     ****************************************/

  }, {
    key: "_$getItemsByProperty",
    value: function _$getItemsByProperty(key, value) {
      return this.getItemsByFilter(function (item) {
        return item[key] === value;
      });
    }
  }, {
    key: "_$setParent",
    value: function _$setParent(parent) {
      this.parent = parent;
    }
  }, {
    key: "_$highlightDropZone",
    value: function _$highlightDropZone(x, y, area) {
      this.layoutManager.dropTargetIndicator.highlightArea(area);
    }
  }, {
    key: "_$onDrop",
    value: function _$onDrop(contentItem) {
      this.addChild(contentItem);
    }
  }, {
    key: "_$hide",
    value: function _$hide() {
      this._callOnActiveComponents('hide');

      this.element.hide();
      this.layoutManager.updateSize();
    }
  }, {
    key: "_$show",
    value: function _$show() {
      this._callOnActiveComponents('show');

      this.element.show();
      this.layoutManager.updateSize();
    }
  }, {
    key: "_callOnActiveComponents",
    value: function _callOnActiveComponents(methodName) {
      var stacks = this.getItemsByType('stack'),
          activeContentItem,
          i;

      for (i = 0; i < stacks.length; i++) {
        activeContentItem = stacks[i].getActiveContentItem();

        if (activeContentItem && activeContentItem.isComponent) {
          activeContentItem.container[methodName]();
        }
      }
    }
    /**
     * Destroys this item ands its children
     *
     * @returns {void}
     */

  }, {
    key: "_$destroy",
    value: function _$destroy() {
      this.emitBubblingEvent('beforeItemDestroyed');
      this.element.remove();
      this.emitBubblingEvent('itemDestroyed');
    }
    /**
     * Returns the area the component currently occupies in the format
     *
     * {
     *		x1: int
     *		xy: int
     *		y1: int
     *		y2: int
     *		contentItem: contentItem
     * }
     */

  }, {
    key: "_$getArea",
    value: function _$getArea(element) {
      element = element || this.element;
      var offset = element.offset(),
          width = element.width(),
          height = element.height();
      return {
        x1: offset.left,
        y1: offset.top,
        x2: offset.left + width,
        y2: offset.top + height,
        surface: width * height,
        contentItem: this
      };
    }
    /**
     * The tree of content items is created in two steps: First all content items are instantiated,
     * then init is called recursively from top to bottem. This is the basic init function,
     * it can be used, extended or overwritten by the content items
     *
     * Its behaviour depends on the content item
     *
     * @package private
     *
     * @returns {void}
     */

  }, {
    key: "_$init",
    value: function _$init() {
      var i;
      this.setSize();

      for (i = 0; i < this.contentItems.length; i++) {
        this.childElementContainer.append(this.contentItems[i].element);
      }

      this.isInitialised = true;
      this.emitBubblingEvent('itemCreated');
      this.emitBubblingEvent(this.type + 'Created');
    }
    /**
     * Emit an event that bubbles up the item tree.
     *
     * @param   {String} name The name of the event
     *
     * @returns {void}
     */

  }, {
    key: "emitBubblingEvent",
    value: function emitBubblingEvent(name) {
      var event = new _utils_BubblingEvent__WEBPACK_IMPORTED_MODULE_1__["default"](name, this);
      this.emit(name, event);
    }
    /**
     * Private method, creates all content items for this node at initialisation time
     * PLEASE NOTE, please see addChild for adding contentItems add runtime
     * @private
     * @param   {configuration item node} config
     *
     * @returns {void}
     */

  }, {
    key: "_createContentItems",
    value: function _createContentItems(config) {
      var oContentItem, i;

      if (!(config.content instanceof Array)) {
        throw new _errors_ConfigurationError__WEBPACK_IMPORTED_MODULE_3__["default"]('content must be an Array', config);
      }

      for (i = 0; i < config.content.length; i++) {
        oContentItem = this.layoutManager.createContentItem(config.content[i], this);
        this.contentItems.push(oContentItem);
      }
    }
    /**
     * Extends an item configuration node with default settings
     * @private
     * @param   {configuration item node} config
     *
     * @returns {configuration item node} extended config
     */

  }, {
    key: "_extendItemNode",
    value: function _extendItemNode(config) {
      for (var key in _config_ItemDefaultConfig__WEBPACK_IMPORTED_MODULE_4__["default"]) {
        if (config[key] === undefined) {
          config[key] = _config_ItemDefaultConfig__WEBPACK_IMPORTED_MODULE_4__["default"][key];
        }
      }

      return config;
    }
    /**
     * Called for every event on the item tree. Decides whether the event is a bubbling
     * event and propagates it to its parent
     *
     * @param    {String} name the name of the event
     * @param   {BubblingEvent} event
     *
     * @returns {void}
     */

  }, {
    key: "_propagateEvent",
    value: function _propagateEvent(name, event) {
      if (event instanceof _utils_BubblingEvent__WEBPACK_IMPORTED_MODULE_1__["default"] && event.isPropagationStopped === false && this.isInitialised === true) {
        /**
         * In some cases (e.g. if an element is created from a DragSource) it
         * doesn't have a parent and is not below root. If that's the case
         * propagate the bubbling event from the top level of the substree directly
         * to the layoutManager
         */
        if (this.isRoot === false && this.parent) {
          this.parent.emit.apply(this.parent, Array.prototype.slice.call(arguments, 0));
        } else {
          this._scheduleEventPropagationToLayoutManager(name, event);
        }
      }
    }
    /**
     * All raw events bubble up to the root element. Some events that
     * are propagated to - and emitted by - the layoutManager however are
     * only string-based, batched and sanitized to make them more usable
     *
     * @param {String} name the name of the event
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_scheduleEventPropagationToLayoutManager",
    value: function _scheduleEventPropagationToLayoutManager(name, event) {
      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["indexOf"])(name, this._throttledEvents) === -1) {
        this.layoutManager.emit(name, event.origin);
      } else {
        if (this._pendingEventPropagations[name] !== true) {
          this._pendingEventPropagations[name] = true;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["animFrame"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["fnBind"])(this._propagateEventToLayoutManager, this, [name, event]));
        }
      }
    }
    /**
     * Callback for events scheduled by _scheduleEventPropagationToLayoutManager
     *
     * @param {String} name the name of the event
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_propagateEventToLayoutManager",
    value: function _propagateEventToLayoutManager(name, event) {
      this._pendingEventPropagations[name] = false;
      this.layoutManager.emit(name, event);
    }
  }]);

  return AbstractContentItem;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/items/Component.js":
/*!***************************************!*\
  !*** ./src/js_es6/items/Component.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/AbstractContentItem */ "./src/js_es6/items/AbstractContentItem.js");
/* harmony import */ var _container_ItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/ItemContainer */ "./src/js_es6/container/ItemContainer.js");
/* harmony import */ var _utils_ReactComponentHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ReactComponentHandler */ "./src/js_es6/utils/ReactComponentHandler.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * @param {[type]} layoutManager [description]
 * @param {[type]} config      [description]
 * @param {[type]} parent        [description]
 */

var Component = /*#__PURE__*/function (_AbstractContentItem) {
  _inherits(Component, _AbstractContentItem);

  var _super = _createSuper(Component);

  function Component(layoutManager, config, parent) {
    var _this;

    _classCallCheck(this, Component);

    _this = _super.call(this, layoutManager, config, parent);
    var ComponentConstructor = layoutManager.isReactConfig(config) ? _utils_ReactComponentHandler__WEBPACK_IMPORTED_MODULE_2__["default"] : layoutManager.getComponent(config),
        componentConfig = jquery__WEBPACK_IMPORTED_MODULE_3___default.a.extend(true, {}, _this.config.componentState || {});
    componentConfig.componentName = _this.config.componentName;
    _this.componentName = _this.config.componentName;

    if (_this.config.title === '') {
      _this.config.title = _this.config.componentName;
    }

    _this.isComponent = true;
    _this.container = new _container_ItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"](_this.config, _assertThisInitialized(_this), layoutManager);
    _this.instance = new ComponentConstructor(_this.container, componentConfig);
    _this.element = _this.container._element;
    return _this;
  }

  _createClass(Component, [{
    key: "close",
    value: function close() {
      this.parent.removeChild(this);
    }
  }, {
    key: "setSize",
    value: function setSize() {
      if (this.element.css('display') !== 'none') {
        // Do not update size of hidden components to prevent unwanted reflows
        this.container._$setSize(this.element.width(), this.element.height());
      }
    }
  }, {
    key: "_$init",
    value: function _$init() {
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$init.call(this);

      this.container.emit('open');
    }
  }, {
    key: "_$hide",
    value: function _$hide() {
      this.container.hide();

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$hide.call(this);
    }
  }, {
    key: "_$show",
    value: function _$show() {
      this.container.show();

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$show.call(this);
    }
  }, {
    key: "_$shown",
    value: function _$shown() {
      this.container.shown();

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$shown.call(this);
    }
  }, {
    key: "_$destroy",
    value: function _$destroy() {
      this.container.emit('destroy', this);

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$destroy.call(this);
    }
    /**
     * Dragging onto a component directly is not an option
     *
     * @returns null
     */

  }, {
    key: "_$getArea",
    value: function _$getArea() {
      return null;
    }
  }]);

  return Component;
}(_items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/items/Root.js":
/*!**********************************!*\
  !*** ./src/js_es6/items/Root.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Root; });
/* harmony import */ var _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/AbstractContentItem */ "./src/js_es6/items/AbstractContentItem.js");
/* harmony import */ var _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/RowOrColumn */ "./src/js_es6/items/RowOrColumn.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Root = /*#__PURE__*/function (_AbstractContentItem) {
  _inherits(Root, _AbstractContentItem);

  var _super = _createSuper(Root);

  function Root(layoutManager, config, containerElement) {
    var _this;

    _classCallCheck(this, Root);

    _this = _super.call(this, layoutManager, config, null);
    _this.isRoot = true;
    _this.type = 'root';
    _this.element = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="lm_goldenlayout lm_item lm_root"></div>');
    _this.childElementContainer = _this.element;
    _this._containerElement = containerElement;

    _this._containerElement.append(_this.element);

    return _this;
  }

  _createClass(Root, [{
    key: "addChild",
    value: function addChild(contentItem) {
      if (this.contentItems.length > 0) {
        throw new Error('Root node can only have a single child');
      }

      contentItem = this.layoutManager._$normalizeContentItem(contentItem, this);
      this.childElementContainer.append(contentItem.element);
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addChild.call(this, contentItem);
      this.callDownwards('setSize');
      this.emitBubblingEvent('stateChanged');
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      width = typeof width === 'undefined' ? this._containerElement.width() : width;
      height = typeof height === 'undefined' ? this._containerElement.height() : height;
      this.element.width(width);
      this.element.height(height);
      /*
       * Root can be empty
       */

      if (this.contentItems[0]) {
        this.contentItems[0].element.width(width);
        this.contentItems[0].element.height(height);
      }
    }
  }, {
    key: "_$highlightDropZone",
    value: function _$highlightDropZone(x, y, area) {
      this.layoutManager.tabDropPlaceholder.remove();

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$highlightDropZone.apply(this, arguments);
    }
  }, {
    key: "_$onDrop",
    value: function _$onDrop(contentItem, area) {
      var stack;

      if (contentItem.isComponent) {
        stack = this.layoutManager.createContentItem({
          type: 'stack',
          header: contentItem.config.header || {}
        }, this);

        stack._$init();

        stack.addChild(contentItem);
        contentItem = stack;
      }

      if (!this.contentItems.length) {
        this.addChild(contentItem);
      } else {
        /*
         * If the contentItem that's being dropped is not dropped on a Stack (cases which just passed above and 
         * which would wrap the contentItem in a Stack) we need to check whether contentItem is a RowOrColumn.
         * If it is, we need to re-wrap it in a Stack like it was when it was dragged by its Tab (it was dragged!).
         */
        if (contentItem.config.type === 'row' || contentItem.config.type === 'column') {
          stack = this.layoutManager.createContentItem({
            type: 'stack'
          }, this);
          stack.addChild(contentItem);
          contentItem = stack;
        }

        var type = area.side[0] == 'x' ? 'row' : 'column';
        var dimension = area.side[0] == 'x' ? 'width' : 'height';
        var insertBefore = area.side[1] == '2';
        var column = this.contentItems[0];

        if (!(column instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) || column.type != type) {
          var rowOrColumn = this.layoutManager.createContentItem({
            type: type
          }, this);
          this.replaceChild(column, rowOrColumn);
          rowOrColumn.addChild(contentItem, insertBefore ? 0 : undefined, true);
          rowOrColumn.addChild(column, insertBefore ? undefined : 0, true);
          column.config[dimension] = 50;
          contentItem.config[dimension] = 50;
          rowOrColumn.callDownwards('setSize');
        } else {
          var sibbling = column.contentItems[insertBefore ? 0 : column.contentItems.length - 1];
          column.addChild(contentItem, insertBefore ? 0 : undefined, true);
          sibbling.config[dimension] *= 0.5;
          contentItem.config[dimension] = sibbling.config[dimension];
          column.callDownwards('setSize');
        }
      }
    }
  }]);

  return Root;
}(_items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/items/RowOrColumn.js":
/*!*****************************************!*\
  !*** ./src/js_es6/items/RowOrColumn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowOrColumn; });
/* harmony import */ var _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/AbstractContentItem */ "./src/js_es6/items/AbstractContentItem.js");
/* harmony import */ var _items_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/Stack */ "./src/js_es6/items/Stack.js");
/* harmony import */ var _controls_Splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/Splitter */ "./src/js_es6/controls/Splitter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var RowOrColumn = /*#__PURE__*/function (_AbstractContentItem) {
  _inherits(RowOrColumn, _AbstractContentItem);

  var _super = _createSuper(RowOrColumn);

  function RowOrColumn(isColumn, layoutManager, config, parent) {
    var _this;

    _classCallCheck(this, RowOrColumn);

    _this = _super.call(this, layoutManager, config, parent);
    _this.isRow = !isColumn;
    _this.isColumn = isColumn;
    _this.element = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div class="lm_item lm_' + (isColumn ? 'column' : 'row') + '"></div>');
    _this.childElementContainer = _this.element;
    _this._splitterSize = layoutManager.config.dimensions.borderWidth;
    _this._splitterGrabSize = layoutManager.config.dimensions.borderGrabWidth;
    _this._isColumn = isColumn;
    _this._dimension = isColumn ? 'height' : 'width';
    _this._splitter = [];
    _this._splitterPosition = null;
    _this._splitterMinPosition = null;
    _this._splitterMaxPosition = null;
    return _this;
  }
  /**
   * Add a new contentItem to the Row or Column
   *
   * @param {AbstractContentItem} contentItem
   * @param {[int]} index The position of the new item within the Row or Column.
   *                      If no index is provided the item will be added to the end
   * @param {[bool]} _$suspendResize If true the items won't be resized. This will leave the item in
   *                                 an inconsistent state and is only intended to be used if multiple
   *                                 children need to be added in one go and resize is called afterwards
   *
   * @returns {void}
   */


  _createClass(RowOrColumn, [{
    key: "addChild",
    value: function addChild(contentItem, index, _$suspendResize) {
      var newItemSize, itemSize, i, splitterElement;
      contentItem = this.layoutManager._$normalizeContentItem(contentItem, this);

      if (index === undefined) {
        index = this.contentItems.length;
      }

      if (this.contentItems.length > 0) {
        splitterElement = this._createSplitter(Math.max(0, index - 1)).element;

        if (index > 0) {
          this.contentItems[index - 1].element.after(splitterElement);
          splitterElement.after(contentItem.element);

          if (this._isDocked(index - 1)) {
            this._splitter[index - 1].element.hide();

            this._splitter[index].element.show();
          }
        } else {
          this.contentItems[0].element.before(splitterElement);
          splitterElement.before(contentItem.element);
        }
      } else {
        this.childElementContainer.append(contentItem.element);
      }

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addChild.call(this, contentItem, index);
      newItemSize = 1 / this.contentItems.length * 100;

      if (_$suspendResize === true) {
        this.emitBubblingEvent('stateChanged');
        return;
      }

      for (i = 0; i < this.contentItems.length; i++) {
        if (this.contentItems[i] === contentItem) {
          contentItem.config[this._dimension] = newItemSize;
        } else {
          itemSize = this.contentItems[i].config[this._dimension] *= (100 - newItemSize) / 100;
          this.contentItems[i].config[this._dimension] = itemSize;
        }
      }

      this.callDownwards('setSize');
      this.emitBubblingEvent('stateChanged');

      this._validateDocking();
    }
    /**
     * Undisplays a child of this element
     *
     * @param   {AbstractContentItem} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "undisplayChild",
    value: function undisplayChild(contentItem) {
      var undisplayedItemSize = contentItem.config[this._dimension],
          index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems),
          splitterIndex = Math.max(index - 1, 0),
          i,
          childItem;

      if (index === -1) {
        throw new Error('Can\'t undisplay child. ContentItem is not child of this Row or Column');
      }
      /**
       * Hide the splitter before the item or after if the item happens
       * to be the first in the row/column
       */


      if (this._splitter[splitterIndex]) {
        this._splitter[splitterIndex].element.hide();
      }

      if (splitterIndex < this._splitter.length) {
        if (this._isDocked(splitterIndex)) this._splitter[splitterIndex].element.hide();
      }
      /**
       * Allocate the space that the hidden item occupied to the remaining items
       */


      var docked = this._isDocked();

      for (i = 0; i < this.contentItems.length; i++) {
        if (this.contentItems[i] !== contentItem) {
          if (!this._isDocked(i)) this.contentItems[i].config[this._dimension] += undisplayedItemSize / (this.contentItems.length - 1 - docked);
        } else {
          this.contentItems[i].config[this._dimension] = 0;
        }
      }

      if (this.contentItems.length === 1) {
        _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.undisplayChild.call(this, contentItem);
      }

      this.callDownwards('setSize');
      this.emitBubblingEvent('stateChanged');
    }
    /**
     * Removes a child of this element
     *
     * @param   {AbstractContentItem} contentItem
     * @param   {boolean} keepChild   If true the child will be removed, but not destroyed
     *
     * @returns {void}
     */

  }, {
    key: "removeChild",
    value: function removeChild(contentItem, keepChild) {
      var removedItemSize = contentItem.config[this._dimension],
          index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems),
          splitterIndex = Math.max(index - 1, 0),
          i,
          childItem;

      if (index === -1) {
        throw new Error('Can\'t remove child. ContentItem is not child of this Row or Column');
      }
      /**
       * Remove the splitter before the item or after if the item happens
       * to be the first in the row/column
       */


      if (this._splitter[splitterIndex]) {
        this._splitter[splitterIndex]._$destroy();

        this._splitter.splice(splitterIndex, 1);
      }

      if (splitterIndex < this._splitter.length) {
        if (this._isDocked(splitterIndex)) this._splitter[splitterIndex].element.hide();
      }
      /**
       * Allocate the space that the removed item occupied to the remaining items
       */


      var docked = this._isDocked();

      for (i = 0; i < this.contentItems.length; i++) {
        if (this.contentItems[i] !== contentItem) {
          if (!this._isDocked(i)) this.contentItems[i].config[this._dimension] += removedItemSize / (this.contentItems.length - 1 - docked);
        }
      }

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeChild.call(this, contentItem, keepChild);

      if (this.contentItems.length === 1 && this.config.isClosable === true) {
        childItem = this.contentItems[0];
        this.contentItems = [];
        this.parent.replaceChild(this, childItem, true);

        this._validateDocking(this.parent);
      } else {
        this.callDownwards('setSize');
        this.emitBubblingEvent('stateChanged');

        this._validateDocking();
      }
    }
    /**
     * Replaces a child of this Row or Column with another contentItem
     *
     * @param   {AbstractContentItem} oldChild
     * @param   {AbstractContentItem} newChild
     *
     * @returns {void}
     */

  }, {
    key: "replaceChild",
    value: function replaceChild(oldChild, newChild) {
      var size = oldChild.config[this._dimension];
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.replaceChild.call(this, oldChild, newChild);
      newChild.config[this._dimension] = size;
      this.callDownwards('setSize');
      this.emitBubblingEvent('stateChanged');
    }
    /**
     * Called whenever the dimensions of this item or one of its parents change
     *
     * @returns {void}
     */

  }, {
    key: "setSize",
    value: function setSize() {
      if (this.contentItems.length > 0) {
        this._calculateRelativeSizes();

        this._setAbsoluteSizes();
      }

      this.emitBubblingEvent('stateChanged');
      this.emit('resize');
    }
    /**
     * Dock or undock a child if it posiible
     *
     * @param   {AbstractContentItem} contentItem
     * @param   {Boolean} mode or toggle if undefined
     * @param   {Boolean} collapsed after docking
     *
     * @returns {void}
     */

  }, {
    key: "dock",
    value: function dock(contentItem, mode, collapsed) {
      if (this.contentItems.length === 1) throw new Error('Can\'t dock child when it single');
      var removedItemSize = contentItem.config[this._dimension],
          headerSize = this.layoutManager.config.dimensions.headerHeight,
          index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems),
          splitterIndex = Math.max(index - 1, 0);

      if (index === -1) {
        throw new Error('Can\'t dock child. ContentItem is not child of this Row or Column');
      }

      var isDocked = contentItem._docker && contentItem._docker.docked;
      var i;
      if (typeof mode != 'undefined') if (mode == isDocked) return;

      if (isDocked) {
        // undock it
        this._splitter[splitterIndex].element.show();

        for (i = 0; i < this.contentItems.length; i++) {
          var newItemSize = contentItem._docker.size;

          if (this.contentItems[i] === contentItem) {
            contentItem.config[this._dimension] = newItemSize;
          } else {
            itemSize = this.contentItems[i].config[this._dimension] *= (100 - newItemSize) / 100;
            this.contentItems[i].config[this._dimension] = itemSize;
          }
        }

        contentItem._docker = {
          docked: false
        };
      } else {
        // dock
        if (this.contentItems.length - this._isDocked() < 2) throw new Error('Can\'t dock child when it is last in ' + this.config.type);
        var autoside = {
          column: {
            first: 'top',
            last: 'bottom'
          },
          row: {
            first: 'left',
            last: 'right'
          }
        };
        var required = autoside[this.config.type][index ? 'last' : 'first'];
        if (contentItem.header.position() != required) contentItem.header.position(required);

        if (this._splitter[splitterIndex]) {
          this._splitter[splitterIndex].element.hide();
        }

        var docked = this._isDocked();

        for (i = 0; i < this.contentItems.length; i++) {
          if (this.contentItems[i] !== contentItem) {
            if (!this._isDocked(i)) this.contentItems[i].config[this._dimension] += removedItemSize / (this.contentItems.length - 1 - docked);
          } else this.contentItems[i].config[this._dimension] = 0;
        }

        contentItem._docker = {
          dimension: this._dimension,
          size: removedItemSize,
          realSize: contentItem.element[this._dimension]() - headerSize,
          docked: true
        };
        if (collapsed) contentItem.childElementContainer[this._dimension](0);
      }

      contentItem.element.toggleClass('lm_docked', contentItem._docker.docked);
      this.callDownwards('setSize');
      this.emitBubblingEvent('stateChanged');

      this._validateDocking();
    }
    /**
     * Invoked recursively by the layout manager. AbstractContentItem.init appends
     * the contentItem's DOM elements to the container, RowOrColumn init adds splitters
     * in between them
     *
     * @package private
     * @override AbstractContentItem._$init
     * @returns {void}
     */

  }, {
    key: "_$init",
    value: function _$init() {
      if (this.isInitialised === true) return;
      var i;

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$init.call(this);

      for (i = 0; i < this.contentItems.length - 1; i++) {
        this.contentItems[i].element.after(this._createSplitter(i).element);
      }

      for (i = 0; i < this.contentItems.length; i++) {
        if (this.contentItems[i]._header && this.contentItems[i]._header.docked) this.dock(this.contentItems[i], true, true);
      }
    }
    /**
     * Turns the relative sizes calculated by _calculateRelativeSizes into
     * absolute pixel values and applies them to the children's DOM elements
     *
     * Assigns additional pixels to counteract Math.floor
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_setAbsoluteSizes",
    value: function _setAbsoluteSizes() {
      var i,
          sizeData = this._calculateAbsoluteSizes();

      for (i = 0; i < this.contentItems.length; i++) {
        if (sizeData.additionalPixel - i > 0) {
          sizeData.itemSizes[i]++;
        }

        if (this._isColumn) {
          this.contentItems[i].element.width(sizeData.totalWidth);
          this.contentItems[i].element.height(sizeData.itemSizes[i]);
        } else {
          this.contentItems[i].element.width(sizeData.itemSizes[i]);
          this.contentItems[i].element.height(sizeData.totalHeight);
        }
      }
    }
    /**
     * Calculates the absolute sizes of all of the children of this Item.
     * @returns {object} - Set with absolute sizes and additional pixels.
     */

  }, {
    key: "_calculateAbsoluteSizes",
    value: function _calculateAbsoluteSizes() {
      var i,
          totalSplitterSize = (this.contentItems.length - 1) * this._splitterSize,
          headerSize = this.layoutManager.config.dimensions.headerHeight,
          totalWidth = this.element.width(),
          totalHeight = this.element.height(),
          totalAssigned = 0,
          additionalPixel,
          itemSize,
          itemSizes = [];

      if (this._isColumn) {
        totalHeight -= totalSplitterSize;
      } else {
        totalWidth -= totalSplitterSize;
      }

      for (i = 0; i < this.contentItems.length; i++) {
        if (this._isDocked(i)) if (this._isColumn) {
          totalHeight -= headerSize - this._splitterSize;
        } else {
          totalWidth -= headerSize - this._splitterSize;
        }
      }

      for (i = 0; i < this.contentItems.length; i++) {
        if (this._isColumn) {
          itemSize = Math.floor(totalHeight * (this.contentItems[i].config.height / 100));
        } else {
          itemSize = Math.floor(totalWidth * (this.contentItems[i].config.width / 100));
        }

        if (this._isDocked(i)) itemSize = headerSize;
        totalAssigned += itemSize;
        itemSizes.push(itemSize);
      }

      additionalPixel = Math.floor((this._isColumn ? totalHeight : totalWidth) - totalAssigned);
      return {
        itemSizes: itemSizes,
        additionalPixel: additionalPixel,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      };
    }
    /**
     * Calculates the relative sizes of all children of this Item. The logic
     * is as follows:
     *
     * - Add up the total size of all items that have a configured size
     *
     * - If the total == 100 (check for floating point errors)
     *        Excellent, job done
     *
     * - If the total is > 100,
     *        set the size of items without set dimensions to 1/3 and add this to the total
     *        set the size off all items so that the total is hundred relative to their original size
     *
     * - If the total is < 100
     *        If there are items without set dimensions, distribute the remainder to 100 evenly between them
     *        If there are no items without set dimensions, increase all items sizes relative to
     *        their original size so that they add up to 100
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_calculateRelativeSizes",
    value: function _calculateRelativeSizes() {
      var i,
          total = 0,
          itemsWithoutSetDimension = [],
          dimension = this._isColumn ? 'height' : 'width';

      for (i = 0; i < this.contentItems.length; i++) {
        if (this.contentItems[i].config[dimension] !== undefined) {
          total += this.contentItems[i].config[dimension];
        } else {
          itemsWithoutSetDimension.push(this.contentItems[i]);
        }
      }
      /**
       * Everything adds up to hundred, all good :-)
       */


      if (Math.round(total) === 100) {
        this._respectMinItemWidth();

        return;
      }
      /**
       * Allocate the remaining size to the items without a set dimension
       */


      if (Math.round(total) < 100 && itemsWithoutSetDimension.length > 0) {
        for (i = 0; i < itemsWithoutSetDimension.length; i++) {
          itemsWithoutSetDimension[i].config[dimension] = (100 - total) / itemsWithoutSetDimension.length;
        }

        this._respectMinItemWidth();

        return;
      }
      /**
       * If the total is > 100, but there are also items without a set dimension left, assing 50
       * as their dimension and add it to the total
       *
       * This will be reset in the next step
       */


      if (Math.round(total) > 100) {
        for (i = 0; i < itemsWithoutSetDimension.length; i++) {
          itemsWithoutSetDimension[i].config[dimension] = 50;
          total += 50;
        }
      }
      /**
       * Set every items size relative to 100 relative to its size to total
       */


      for (i = 0; i < this.contentItems.length; i++) {
        this.contentItems[i].config[dimension] = this.contentItems[i].config[dimension] / total * 100;
      }

      this._respectMinItemWidth();
    }
    /**
     * Adjusts the column widths to respect the dimensions minItemWidth if set.
     * @returns {}
     */

  }, {
    key: "_respectMinItemWidth",
    value: function _respectMinItemWidth() {
      var minItemWidth = this.layoutManager.config.dimensions ? this.layoutManager.config.dimensions.minItemWidth || 0 : 0,
          sizeData = null,
          entriesOverMin = [],
          totalOverMin = 0,
          totalUnderMin = 0,
          remainingWidth = 0,
          itemSize = 0,
          contentItem = null,
          reducePercent,
          reducedWidth,
          allEntries = [],
          entry;

      if (this._isColumn || !minItemWidth || this.contentItems.length <= 1) {
        return;
      }

      sizeData = this._calculateAbsoluteSizes();
      /**
       * Figure out how much we are under the min item size total and how much room we have to use.
       */

      for (var i = 0; i < this.contentItems.length; i++) {
        contentItem = this.contentItems[i];
        itemSize = sizeData.itemSizes[i];

        if (itemSize < minItemWidth) {
          totalUnderMin += minItemWidth - itemSize;
          entry = {
            width: minItemWidth
          };
        } else {
          totalOverMin += itemSize - minItemWidth;
          entry = {
            width: itemSize
          };
          entriesOverMin.push(entry);
        }

        allEntries.push(entry);
      }
      /**
       * If there is nothing under min, or there is not enough over to make up the difference, do nothing.
       */


      if (totalUnderMin === 0 || totalUnderMin > totalOverMin) {
        return;
      }
      /**
       * Evenly reduce all columns that are over the min item width to make up the difference.
       */


      reducePercent = totalUnderMin / totalOverMin;
      remainingWidth = totalUnderMin;

      for (i = 0; i < entriesOverMin.length; i++) {
        entry = entriesOverMin[i];
        reducedWidth = Math.round((entry.width - minItemWidth) * reducePercent);
        remainingWidth -= reducedWidth;
        entry.width -= reducedWidth;
      }
      /**
       * Take anything remaining from the last item.
       */


      if (remainingWidth !== 0) {
        allEntries[allEntries.length - 1].width -= remainingWidth;
      }
      /**
       * Set every items size relative to 100 relative to its size to total
       */


      for (i = 0; i < this.contentItems.length; i++) {
        this.contentItems[i].config.width = allEntries[i].width / sizeData.totalWidth * 100;
      }
    }
    /**
     * Instantiates a new Splitter, binds events to it and adds
     * it to the array of splitters at the position specified as the index argument
     *
     * What it doesn't do though is append the splitter to the DOM
     *
     * @param   {Int} index The position of the splitter
     *
     * @returns {Splitter}
     */

  }, {
    key: "_createSplitter",
    value: function _createSplitter(index) {
      var splitter;
      splitter = new _controls_Splitter__WEBPACK_IMPORTED_MODULE_2__["default"](this._isColumn, this._splitterSize, this._splitterGrabSize);
      splitter.on('drag', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this._onSplitterDrag, this, [splitter]), this);
      splitter.on('dragStop', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this._onSplitterDragStop, this, [splitter]), this);
      splitter.on('dragStart', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this._onSplitterDragStart, this, [splitter]), this);

      this._splitter.splice(index, 0, splitter);

      return splitter;
    }
    /**
     * Locates the instance of Splitter in the array of
     * registered splitters and returns a map containing the contentItem
     * before and after the splitters, both of which are affected if the
     * splitter is moved
     *
     * @param   {Splitter} splitter
     *
     * @returns {Object} A map of contentItems that the splitter affects
     */

  }, {
    key: "_getItemsForSplitter",
    value: function _getItemsForSplitter(splitter) {
      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(splitter, this._splitter);
      return {
        before: this.contentItems[index],
        after: this.contentItems[index + 1]
      };
    }
    /**
     * Gets docking information
     * @private
     */

  }, {
    key: "_isDocked",
    value: function _isDocked(index) {
      if (typeof index == 'undefined') {
        var count = 0;

        for (var i = 0; i < this.contentItems.length; ++i) {
          if (this._isDocked(i)) count++;
        }

        return count;
      }

      if (index < this.contentItems.length) return this.contentItems[index]._docker && this.contentItems[index]._docker.docked;
    }
    /**
     * Validate if row or column has ability to dock
     * @private
     */

  }, {
    key: "_validateDocking",
    value: function _validateDocking(that) {
      that = that || this;
      var can = that.contentItems.length - that._isDocked() > 1;

      for (var i = 0; i < that.contentItems.length; ++i) {
        if (that.contentItems[i] instanceof _items_Stack__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          that.contentItems[i].header._setDockable(that._isDocked(i) || can);

          that.contentItems[i].header._$setClosable(can);
        }
      }
    }
    /**
     * Gets the minimum dimensions for the given item configuration array
     * @param item
     * @private
     */

  }, {
    key: "_getMinimumDimensions",
    value: function _getMinimumDimensions(arr) {
      var minWidth = 0,
          minHeight = 0;

      for (var i = 0; i < arr.length; ++i) {
        minWidth = Math.max(arr[i].minWidth || 0, minWidth);
        minHeight = Math.max(arr[i].minHeight || 0, minHeight);
      }

      return {
        horizontal: minWidth,
        vertical: minHeight
      };
    }
    /**
     * Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
     * movement area once (so that it doesn't need calculating on every mousemove event)
     *
     * @param   {Splitter} splitter
     *
     * @returns {void}
     */

  }, {
    key: "_onSplitterDragStart",
    value: function _onSplitterDragStart(splitter) {
      var items = this._getItemsForSplitter(splitter),
          minSize = this.layoutManager.config.dimensions[this._isColumn ? 'minItemHeight' : 'minItemWidth'];

      var beforeMinDim = this._getMinimumDimensions(items.before.config.content);

      var beforeMinSize = this._isColumn ? beforeMinDim.vertical : beforeMinDim.horizontal;

      var afterMinDim = this._getMinimumDimensions(items.after.config.content);

      var afterMinSize = this._isColumn ? afterMinDim.vertical : afterMinDim.horizontal;
      this._splitterPosition = 0;
      this._splitterMinPosition = -1 * (items.before.element[this._dimension]() - (beforeMinSize || minSize));
      this._splitterMaxPosition = items.after.element[this._dimension]() - (afterMinSize || minSize);
    }
    /**
     * Invoked when a splitter's DragListener fires drag. Updates the splitters DOM position,
     * but not the sizes of the elements the splitter controls in order to minimize resize events
     *
     * @param   {Splitter} splitter
     * @param   {Int} offsetX  Relative pixel values to the splitters original position. Can be negative
     * @param   {Int} offsetY  Relative pixel values to the splitters original position. Can be negative
     *
     * @returns {void}
     */

  }, {
    key: "_onSplitterDrag",
    value: function _onSplitterDrag(splitter, offsetX, offsetY) {
      var offset = this._isColumn ? offsetY : offsetX;

      if (offset > this._splitterMinPosition && offset < this._splitterMaxPosition) {
        this._splitterPosition = offset;
        splitter.element.css(this._isColumn ? 'top' : 'left', offset);
      }
    }
    /**
     * Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
     * and applies the new sizes to the elements before and after the splitter and their children
     * on the next animation frame
     *
     * @param   {Splitter} splitter
     *
     * @returns {void}
     */

  }, {
    key: "_onSplitterDragStop",
    value: function _onSplitterDragStop(splitter) {
      var items = this._getItemsForSplitter(splitter),
          sizeBefore = items.before.element[this._dimension](),
          sizeAfter = items.after.element[this._dimension](),
          splitterPositionInRange = (this._splitterPosition + sizeBefore) / (sizeBefore + sizeAfter),
          totalRelativeSize = items.before.config[this._dimension] + items.after.config[this._dimension];

      items.before.config[this._dimension] = splitterPositionInRange * totalRelativeSize;
      items.after.config[this._dimension] = (1 - splitterPositionInRange) * totalRelativeSize;
      splitter.element.css({
        'top': 0,
        'left': 0
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["animFrame"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(this.callDownwards, this, ['setSize']));
    }
  }]);

  return RowOrColumn;
}(_items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/items/Stack.js":
/*!***********************************!*\
  !*** ./src/js_es6/items/Stack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stack; });
/* harmony import */ var _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/AbstractContentItem */ "./src/js_es6/items/AbstractContentItem.js");
/* harmony import */ var _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/RowOrColumn */ "./src/js_es6/items/RowOrColumn.js");
/* harmony import */ var _controls_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/Header */ "./src/js_es6/controls/Header.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Stack = /*#__PURE__*/function (_AbstractContentItem) {
  _inherits(Stack, _AbstractContentItem);

  var _super = _createSuper(Stack);

  function Stack(layoutManager, config, parent) {
    var _this;

    _classCallCheck(this, Stack);

    _this = _super.call(this, layoutManager, config, parent);
    _this.element = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div class="lm_item lm_stack"></div>');
    _this._activeContentItem = null;
    var cfg = layoutManager.config;
    _this._header = {
      // defaults' reconstruction from old configuration style
      show: cfg.settings.hasHeaders === true && config.hasHeaders !== false,
      popout: cfg.settings.showPopoutIcon && cfg.labels.popout,
      maximise: cfg.settings.showMaximiseIcon && cfg.labels.maximise,
      close: cfg.settings.showCloseIcon && cfg.labels.close,
      minimise: cfg.labels.minimise
    };
    if (cfg.header) // load simplified version of header configuration (https://github.com/deepstreamIO/golden-layout/pull/245)
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["copy"])(_this._header, cfg.header);
    if (config.header) // load from stack
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["copy"])(_this._header, config.header);
    if (config.content && config.content[0] && config.content[0].header) // load from component if stack omitted
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["copy"])(_this._header, config.content[0].header);
    _this._dropZones = {};
    _this._dropSegment = null;
    _this._contentAreaDimensions = null;
    _this._dropIndex = null;
    _this.isStack = true;
    _this.childElementContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div class="lm_items"></div>');
    _this.header = new _controls_Header__WEBPACK_IMPORTED_MODULE_2__["default"](layoutManager, _assertThisInitialized(_this));

    _this.element.on("mouseleave mouseenter", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["fnBind"])(function (event) {
      if (this._docker && this._docker.docked) this.childElementContainer[this._docker.dimension](event.type == "mouseenter" ? this._docker.realSize : 0);
    }, _assertThisInitialized(_this)));

    _this.element.append(_this.header.element);

    _this.element.append(_this.childElementContainer);

    _this._setupHeaderPosition();

    _this._$validateClosability();

    return _this;
  }

  _createClass(Stack, [{
    key: "dock",
    value: function dock(mode) {
      if (this._header.dock) if (this.parent instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) this.parent.dock(this, mode);
    }
  }, {
    key: "setSize",
    value: function setSize() {
      if (this.element.css("display") === "none") return;
      var isDocked = this._docker && this._docker.docked,
          content = {
        width: this.element.width(),
        height: this.element.height()
      };
      if (this._header.show) content[this._sided ? "width" : "height"] -= this.layoutManager.config.dimensions.headerHeight;
      if (isDocked) content[this._docker.dimension] = this._docker.realSize;
      if (!isDocked || this._docker.dimension == "height") this.childElementContainer.width(content.width);
      if (!isDocked || this._docker.dimension == "width") this.childElementContainer.height(content.height);

      for (var i = 0; i < this.contentItems.length; i++) {
        this.contentItems[i].element.width(content.width);
        this.contentItems[i].element.height(content.height);
      }

      this.emit("resize");
      this.emitBubblingEvent("stateChanged");
    }
  }, {
    key: "_$init",
    value: function _$init() {
      var i, initialItem;
      if (this.isInitialised === true) return;

      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$init.call(this);

      for (i = 0; i < this.contentItems.length; i++) {
        this.header.createTab(this.contentItems[i]);

        this.contentItems[i]._$hide();
      }

      if (this.contentItems.length > 0) {
        initialItem = this.contentItems[this.config.activeItemIndex || 0];

        if (!initialItem) {
          initialItem = this.contentItems[0]; //Default to index 0 if 'Configured activeItemIndex out of bounds'
        }

        this.setActiveContentItem(initialItem);
      }

      this._$validateClosability();

      if (this.parent instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        this.parent._validateDocking();
      }
    }
  }, {
    key: "setActiveContentItem",
    value: function setActiveContentItem(contentItem) {
      if (this._activeContentItem === contentItem) return;

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems) === -1) {
        throw new Error("contentItem is not a child of this stack");
      }

      if (this._activeContentItem !== null) {
        this._activeContentItem._$hide();
      }

      this._activeContentItem = contentItem;
      this.header.setActiveContentItem(contentItem);

      contentItem._$show();

      this.emit("activeContentItemChanged", contentItem);
      this.layoutManager.emit("activeContentItemChanged", contentItem);
      this.emitBubblingEvent("stateChanged");
    }
  }, {
    key: "getActiveContentItem",
    value: function getActiveContentItem() {
      return this.header.activeContentItem;
    }
  }, {
    key: "addChild",
    value: function addChild(contentItem, index) {
      if (index > this.contentItems.length) {
        /*
         * UGLY PATCH: PR #428, commit a4e84ec5 fixed a bug appearing on touchscreens during the drag of a panel.
         * The bug was caused by the physical removal of the element on drag: partial documentation is at issue #425.
         * The fix introduced the function undisplayChild() (called 'undisplay' to differentiate it from jQuery.hide),
         * which doesn't remove the element but only hides it: that's why when a tab is dragged & dropped into its
         * original container (at the end), the index here could be off by one.
         */
        index -= 1;
      }

      contentItem = this.layoutManager._$normalizeContentItem(contentItem, this);
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addChild.call(this, contentItem, index);
      this.childElementContainer.append(contentItem.element);
      this.header.createTab(contentItem, index);
      this.setActiveContentItem(contentItem);
      this.callDownwards("setSize");

      this._$validateClosability();

      if (this.parent instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) this.parent._validateDocking();
      this.emitBubblingEvent("stateChanged");
    }
  }, {
    key: "removeChild",
    value: function removeChild(contentItem, keepChild) {
      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems);
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeChild.call(this, contentItem, keepChild);
      this.header.removeTab(contentItem);

      if (this.header.activeContentItem === contentItem) {
        if (this.contentItems.length > 0) {
          this.setActiveContentItem(this.contentItems[Math.max(index - 1, 0)]);
        } else {
          this._activeContentItem = null;
        }
      } else if (this.config.activeItemIndex >= this.contentItems.length) {
        if (this.contentItems.length > 0) {
          var activeIndex = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(this.getActiveContentItem(), this.contentItems);
          this.config.activeItemIndex = Math.max(activeIndex, 0);
        }
      }

      this._$validateClosability();

      if (this.parent instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) this.parent._validateDocking();
      this.emitBubblingEvent("stateChanged");
    }
  }, {
    key: "undisplayChild",
    value: function undisplayChild(contentItem) {
      if (this.contentItems.length > 1) {
        var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(contentItem, this.contentItems);
        contentItem._$hide && contentItem._$hide();
        this.setActiveContentItem(this.contentItems[index === 0 ? index + 1 : index - 1]);
      } else {
        this.header.hideTab(contentItem);
        contentItem._$hide && contentItem._$hide();
        _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.undisplayChild.call(this, contentItem);
        if (this.parent instanceof _items_RowOrColumn__WEBPACK_IMPORTED_MODULE_1__["default"]) this.parent._validateDocking();
      }

      this.emitBubblingEvent("stateChanged");
    }
    /**
     * Validates that the stack is still closable or not. If a stack is able
     * to close, but has a non closable component added to it, the stack is no
     * longer closable until all components are closable.
     *
     * @returns {void}
     */

  }, {
    key: "_$validateClosability",
    value: function _$validateClosability() {
      var contentItem, isClosable, len, i;
      isClosable = this.header._isClosable();

      for (i = 0, len = this.contentItems.length; i < len; i++) {
        if (!isClosable) {
          break;
        }

        isClosable = this.contentItems[i].config.isClosable;
      }

      this.header._$setClosable(isClosable);
    }
  }, {
    key: "_$destroy",
    value: function _$destroy() {
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$destroy.call(this);

      this.header._$destroy();

      this.element.off("mouseenter mouseleave");
    }
    /**
     * Ok, this one is going to be the tricky one: The user has dropped {contentItem} onto this stack.
     *
     * It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
     * (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
     * is relatively clear: We add the item to the existing stack... job done (might be good to have
     * tab reordering at some point, but lets not sweat it right now)
     *
     * If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
     * top or bottom region we need to create a new column and place the items accordingly.
     * Unless, of course if the stack is already within a column... in which case we want
     * to add the newly created item to the existing column...
     * either prepend or append it, depending on wether its top or bottom.
     *
     * Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
     * (left, top, right, bottom) * is child of the right parent (row, column) + header drop
     *
     * @param    {lm.item} contentItem
     *
     * @returns {void}
     */

  }, {
    key: "_$onDrop",
    value: function _$onDrop(contentItem) {
      /*
       * The item was dropped on the header area. Just add it as a child of this stack and
       * get the hell out of this logic
       */
      if (this._dropSegment === "header") {
        this._resetHeaderDropZone();

        this.addChild(contentItem, this._dropIndex);
        return;
      }
      /*
       * The stack is empty. Let's just add the element.
       */


      if (this._dropSegment === "body") {
        this.addChild(contentItem);
        return;
      }
      /*
       * The item was dropped on the top-, left-, bottom- or right- part of the content. Let's
       * aggregate some conditions to make the if statements later on more readable
       */


      var isVertical = this._dropSegment === "top" || this._dropSegment === "bottom",
          isHorizontal = this._dropSegment === "left" || this._dropSegment === "right",
          insertBefore = this._dropSegment === "top" || this._dropSegment === "left",
          hasCorrectParent = isVertical && this.parent.isColumn || isHorizontal && this.parent.isRow,
          type = isVertical ? "column" : "row",
          dimension = isVertical ? "height" : "width",
          index,
          stack,
          rowOrColumn;
      /*
       * The content item can be either a component or a stack. If it is a component, wrap it into a stack
       */

      if (contentItem.isComponent) {
        stack = this.layoutManager.createContentItem({
          type: "stack",
          header: contentItem.config.header || {}
        }, this);

        stack._$init();

        stack.addChild(contentItem);
        contentItem = stack;
      }
      /*
       * If the contentItem that's being dropped is not dropped on a Stack (cases which just passed above and
       * which would wrap the contentItem in a Stack) we need to check whether contentItem is a RowOrColumn.
       * If it is, we need to re-wrap it in a Stack like it was when it was dragged by its Tab (it was dragged!).
       */


      if (contentItem.config.type === "row" || contentItem.config.type === "column") {
        stack = this.layoutManager.createContentItem({
          type: "stack"
        }, this);
        stack.addChild(contentItem);
        contentItem = stack;
      }
      /*
       * If the item is dropped on top or bottom of a column or left and right of a row, it's already
       * layd out in the correct way. Just add it as a child
       */


      if (hasCorrectParent) {
        index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["indexOf"])(this, this.parent.contentItems);
        this.parent.addChild(contentItem, insertBefore ? index : index + 1, true);
        this.config[dimension] *= 0.5;
        contentItem.config[dimension] = this.config[dimension];
        this.parent.callDownwards("setSize");
        /*
         * This handles items that are dropped on top or bottom of a row or left / right of a column. We need
         * to create the appropriate contentItem for them to live in
         */
      } else {
        type = isVertical ? "column" : "row";
        rowOrColumn = this.layoutManager.createContentItem({
          type: type
        }, this);
        this.parent.replaceChild(this, rowOrColumn);
        rowOrColumn.addChild(contentItem, insertBefore ? 0 : undefined, true);
        rowOrColumn.addChild(this, insertBefore ? undefined : 0, true);
        this.config[dimension] = 50;
        contentItem.config[dimension] = 50;
        rowOrColumn.callDownwards("setSize");
      }

      this.parent._validateDocking();
    }
    /**
     * If the user hovers above the header part of the stack, indicate drop positions for tabs.
     * otherwise indicate which segment of the body the dragged item would be dropped on
     *
     * @param    {Int} x Absolute Screen X
     * @param    {Int} y Absolute Screen Y
     *
     * @returns {void}
     */

  }, {
    key: "_$highlightDropZone",
    value: function _$highlightDropZone(x, y) {
      var segment, area;

      for (segment in this._contentAreaDimensions) {
        area = this._contentAreaDimensions[segment].hoverArea;

        if (area.x1 < x && area.x2 > x && area.y1 < y && area.y2 > y) {
          if (segment === "header") {
            this._dropSegment = "header";

            this._highlightHeaderDropZone(this._sided ? y : x);
          } else {
            this._resetHeaderDropZone();

            this._highlightBodyDropZone(segment);
          }

          return;
        }
      }
    }
  }, {
    key: "_$getArea",
    value: function _$getArea() {
      if (this.element.css("display") === "none") {
        return null;
      }

      var getArea = _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._$getArea,
          headerArea = getArea.call(this, this.header.element),
          contentArea = getArea.call(this, this.childElementContainer),
          contentWidth = contentArea.x2 - contentArea.x1,
          contentHeight = contentArea.y2 - contentArea.y1;
      this._contentAreaDimensions = {
        header: {
          hoverArea: {
            x1: headerArea.x1,
            y1: headerArea.y1,
            x2: headerArea.x2,
            y2: headerArea.y2
          },
          highlightArea: {
            x1: headerArea.x1,
            y1: headerArea.y1,
            x2: headerArea.x2,
            y2: headerArea.y2
          }
        }
      };
      /**
       * If this Stack is a parent to rows, columns or other stacks only its
       * header is a valid dropzone.
       */

      if (this._activeContentItem && this._activeContentItem.isComponent === false) {
        return headerArea;
      }
      /**
       * Highlight the entire body if the stack is empty
       */


      if (this.contentItems.length === 0) {
        this._contentAreaDimensions.body = {
          hoverArea: {
            x1: contentArea.x1,
            y1: contentArea.y1,
            x2: contentArea.x2,
            y2: contentArea.y2
          },
          highlightArea: {
            x1: contentArea.x1,
            y1: contentArea.y1,
            x2: contentArea.x2,
            y2: contentArea.y2
          }
        };
        return getArea.call(this, this.element);
      }

      this._contentAreaDimensions.left = {
        hoverArea: {
          x1: contentArea.x1,
          y1: contentArea.y1,
          x2: contentArea.x1 + contentWidth * 0.25,
          y2: contentArea.y2
        },
        highlightArea: {
          x1: contentArea.x1,
          y1: contentArea.y1,
          x2: contentArea.x1 + contentWidth * 0.5,
          y2: contentArea.y2
        }
      };
      this._contentAreaDimensions.top = {
        hoverArea: {
          x1: contentArea.x1 + contentWidth * 0.25,
          y1: contentArea.y1,
          x2: contentArea.x1 + contentWidth * 0.75,
          y2: contentArea.y1 + contentHeight * 0.5
        },
        highlightArea: {
          x1: contentArea.x1,
          y1: contentArea.y1,
          x2: contentArea.x2,
          y2: contentArea.y1 + contentHeight * 0.5
        }
      };
      this._contentAreaDimensions.right = {
        hoverArea: {
          x1: contentArea.x1 + contentWidth * 0.75,
          y1: contentArea.y1,
          x2: contentArea.x2,
          y2: contentArea.y2
        },
        highlightArea: {
          x1: contentArea.x1 + contentWidth * 0.5,
          y1: contentArea.y1,
          x2: contentArea.x2,
          y2: contentArea.y2
        }
      };
      this._contentAreaDimensions.bottom = {
        hoverArea: {
          x1: contentArea.x1 + contentWidth * 0.25,
          y1: contentArea.y1 + contentHeight * 0.5,
          x2: contentArea.x1 + contentWidth * 0.75,
          y2: contentArea.y2
        },
        highlightArea: {
          x1: contentArea.x1,
          y1: contentArea.y1 + contentHeight * 0.5,
          x2: contentArea.x2,
          y2: contentArea.y2
        }
      };
      return getArea.call(this, this.element);
    }
  }, {
    key: "_highlightHeaderDropZone",
    value: function _highlightHeaderDropZone(x) {
      var i,
          tabElement,
          tabsLength = this.header.tabs.length,
          isAboveTab = false,
          tabTop,
          tabLeft,
          offset,
          placeHolderLeft,
          headerOffset,
          tabWidth,
          halfX; // Empty stack

      if (tabsLength === 0) {
        headerOffset = this.header.element.offset();
        this.layoutManager.dropTargetIndicator.highlightArea({
          x1: headerOffset.left,
          x2: headerOffset.left + 100,
          y1: headerOffset.top + this.header.element.height() - 20,
          y2: headerOffset.top + this.header.element.height()
        });
        return;
      }

      for (i = 0; i < tabsLength; i++) {
        tabElement = this.header.tabs[i].element;
        offset = tabElement.offset();

        if (this._sided) {
          tabLeft = offset.top;
          tabTop = offset.left;
          tabWidth = tabElement.height();
        } else {
          tabLeft = offset.left;
          tabTop = offset.top;
          tabWidth = tabElement.width();
        }

        if (x > tabLeft && x < tabLeft + tabWidth) {
          isAboveTab = true;
          break;
        }
      }

      if (isAboveTab === false && x < tabLeft) {
        return;
      }

      halfX = tabLeft + tabWidth / 2;

      if (x < halfX) {
        this._dropIndex = i;
        tabElement.before(this.layoutManager.tabDropPlaceholder);
      } else {
        this._dropIndex = Math.min(i + 1, tabsLength);
        tabElement.after(this.layoutManager.tabDropPlaceholder);
      }

      if (this._sided) {
        var placeHolderTop = this.layoutManager.tabDropPlaceholder.offset().top;
        this.layoutManager.dropTargetIndicator.highlightArea({
          x1: tabTop,
          x2: tabTop + tabElement.innerHeight(),
          y1: placeHolderTop,
          y2: placeHolderTop + this.layoutManager.tabDropPlaceholder.width()
        });
        return;
      }

      placeHolderLeft = this.layoutManager.tabDropPlaceholder.offset().left;
      this.layoutManager.dropTargetIndicator.highlightArea({
        x1: placeHolderLeft,
        x2: placeHolderLeft + this.layoutManager.tabDropPlaceholder.width(),
        y1: tabTop,
        y2: tabTop + tabElement.innerHeight()
      });
    }
  }, {
    key: "_resetHeaderDropZone",
    value: function _resetHeaderDropZone() {
      this.layoutManager.tabDropPlaceholder.remove();
    }
  }, {
    key: "toggleMaximise",
    value: function toggleMaximise(e) {
      if (!this.isMaximised) this.dock(false);
      _items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleMaximise.call(this, e);
    }
  }, {
    key: "_setupHeaderPosition",
    value: function _setupHeaderPosition() {
      var side = ["right", "left", "bottom"].indexOf(this._header.show) >= 0 && this._header.show;

      this.header.element.toggle(!!this._header.show);
      this._side = side;
      this._sided = ["right", "left"].indexOf(this._side) >= 0;
      this.element.removeClass("lm_left lm_right lm_bottom");
      if (this._side) this.element.addClass("lm_" + this._side);

      if (this.element.find(".lm_header").length && this.childElementContainer) {
        var headerPosition = ["right", "bottom"].indexOf(this._side) >= 0 ? "before" : "after";
        this.header.element[headerPosition](this.childElementContainer);
        this.callDownwards("setSize");
      }
    }
  }, {
    key: "_highlightBodyDropZone",
    value: function _highlightBodyDropZone(segment) {
      var highlightArea = this._contentAreaDimensions[segment].highlightArea;
      this.layoutManager.dropTargetIndicator.highlightArea(highlightArea);
      this._dropSegment = segment;
    }
  }]);

  return Stack;
}(_items_AbstractContentItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/utils/BubblingEvent.js":
/*!*******************************************!*\
  !*** ./src/js_es6/utils/BubblingEvent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubblingEvent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BubblingEvent = /*#__PURE__*/function () {
  function BubblingEvent(name, origin) {
    _classCallCheck(this, BubblingEvent);

    this.name = name;
    this.origin = origin;
    this.isPropagationStopped = false;
  }

  _createClass(BubblingEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this.isPropagationStopped = true;
    }
  }]);

  return BubblingEvent;
}();



/***/ }),

/***/ "./src/js_es6/utils/ConfigMinifier.js":
/*!********************************************!*\
  !*** ./src/js_es6/utils/ConfigMinifier.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigMinifier; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Minifies and unminifies configs by replacing frequent keys
 * and values with one letter substitutes. Config options must
 * retain array position/index, add new options at the end.
 *
 * @constructor
 */

var ConfigMinifier = /*#__PURE__*/function () {
  function ConfigMinifier() {
    _classCallCheck(this, ConfigMinifier);

    this._keys = ['settings', 'hasHeaders', 'constrainDragToContainer', 'selectionEnabled', 'dimensions', 'borderWidth', 'minItemHeight', 'minItemWidth', 'headerHeight', 'dragProxyWidth', 'dragProxyHeight', 'labels', 'close', 'maximise', 'minimise', 'popout', 'content', 'componentName', 'componentState', 'id', 'width', 'type', 'height', 'isClosable', 'title', 'popoutWholeStack', 'openPopouts', 'parentId', 'activeItemIndex', 'reorderEnabled', 'borderGrabWidth' //Maximum 36 entries, do not cross this line!
    ];

    if (this._keys.length > 36) {
      throw new Error('Too many keys in config minifier map');
    }

    this._values = [true, false, 'row', 'column', 'stack', 'component', 'close', 'maximise', 'minimise', 'open in new window'];
  }
  /**
   * Takes a GoldenLayout configuration object and
   * replaces its keys and values recursively with
   * one letter counterparts
   *
   * @param   {Object} config A GoldenLayout config object
   *
   * @returns {Object} minified config
   */


  _createClass(ConfigMinifier, [{
    key: "minifyConfig",
    value: function minifyConfig(config) {
      var min = {};

      this._nextLevel(config, min, '_min');

      return min;
    }
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     *
     * @param   {Object} minifiedConfig
     *
     * @returns {Object} the original configuration
     */

  }, {
    key: "unminifyConfig",
    value: function unminifyConfig(minifiedConfig) {
      var orig = {};

      this._nextLevel(minifiedConfig, orig, '_max');

      return orig;
    }
    /**
     * Recursive function, called for every level of the config structure
     *
     * @param   {Array|Object} orig
     * @param   {Array|Object} min
     * @param    {String} translationFn
     *
     * @returns {void}
     */

  }, {
    key: "_nextLevel",
    value: function _nextLevel(from, to, translationFn) {
      var key, minKey;

      for (key in from) {
        /**
         * For in returns array indices as keys, so let's cast them to numbers
         */
        if (from instanceof Array) key = parseInt(key, 10);
        /**
         * In case something has extended Object prototypes
         */

        if (!from.hasOwnProperty(key)) continue;
        /**
         * Translate the key to a one letter substitute
         */

        minKey = this[translationFn](key, this._keys);
        /**
         * For Arrays and Objects, create a new Array/Object
         * on the minified object and recurse into it
         */

        if (_typeof(from[key]) === 'object') {
          to[minKey] = from[key] instanceof Array ? [] : {};

          this._nextLevel(from[key], to[minKey], translationFn);
          /**
           * For primitive values (Strings, Numbers, Boolean etc.)
           * minify the value
           */

        } else {
          to[minKey] = this[translationFn](from[key], this._values);
        }
      }
    }
    /**
     * Minifies value based on a dictionary
     *
     * @param   {String|Boolean} value
     * @param   {Array<String|Boolean>} dictionary
     *
     * @returns {String} The minified version
     */

  }, {
    key: "_min",
    value: function _min(value, dictionary) {
      /**
       * If a value actually is a single character, prefix it
       * with ___ to avoid mistaking it for a minification code
       */
      if (typeof value === 'string' && value.length === 1) {
        return '___' + value;
      }

      var index = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(value, dictionary);
      /**
       * value not found in the dictionary, return it unmodified
       */

      if (index === -1) {
        return value;
        /**
         * value found in dictionary, return its base36 counterpart
         */
      } else {
        return index.toString(36);
      }
    }
  }, {
    key: "_max",
    value: function _max(value, dictionary) {
      /**
       * value is a single character. Assume that it's a translation
       * and return the original value from the dictionary
       */
      if (typeof value === 'string' && value.length === 1) {
        return dictionary[parseInt(value, 36)];
      }
      /**
       * value originally was a single character and was prefixed with ___
       * to avoid mistaking it for a translation. Remove the prefix
       * and return the original character
       */


      if (typeof value === 'string' && value.substr(0, 3) === '___') {
        return value[3];
      }
      /**
       * value was not minified
       */


      return value;
    }
  }]);

  return ConfigMinifier;
}();



/***/ }),

/***/ "./src/js_es6/utils/DragListener.js":
/*!******************************************!*\
  !*** ./src/js_es6/utils/DragListener.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragListener; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var DragListener = /*#__PURE__*/function (_EventEmitter) {
  _inherits(DragListener, _EventEmitter);

  var _super = _createSuper(DragListener);

  function DragListener(eElement, nButtonCode) {
    var _this;

    _classCallCheck(this, DragListener);

    _this = _super.call(this);
    _this._timeout = null;
    _this._eElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()(eElement);
    _this._oDocument = jquery__WEBPACK_IMPORTED_MODULE_2___default()(document);
    _this._eBody = jquery__WEBPACK_IMPORTED_MODULE_2___default()(document.body);
    _this._nButtonCode = nButtonCode || 0;
    /**
     * The delay after which to start the drag in milliseconds
     */

    _this._nDelay = 200;
    /**
     * The distance the mouse needs to be moved to qualify as a drag
     */

    _this._nDistance = 10; //TODO - works better with delay only

    _this._nX = 0;
    _this._nY = 0;
    _this._nOriginalX = 0;
    _this._nOriginalY = 0;
    _this._bDragging = false;
    _this._fMove = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(_this.onMouseMove, _assertThisInitialized(_this));
    _this._fUp = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(_this.onMouseUp, _assertThisInitialized(_this));
    _this._fDown = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(_this.onMouseDown, _assertThisInitialized(_this));

    _this._eElement.on('mousedown touchstart', _this._fDown);

    return _this;
  }

  _createClass(DragListener, [{
    key: "destroy",
    value: function destroy() {
      this._eElement.unbind('mousedown touchstart', this._fDown);

      this._oDocument.unbind('mouseup touchend', this._fUp);

      this._eElement = null;
      this._oDocument = null;
      this._eBody = null;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(oEvent) {
      oEvent.preventDefault();

      if (oEvent.button == 0 || oEvent.type === "touchstart") {
        var coordinates = this._getCoordinates(oEvent);

        this._nOriginalX = coordinates.x;
        this._nOriginalY = coordinates.y;

        this._oDocument.on('mousemove touchmove', this._fMove);

        this._oDocument.one('mouseup touchend', this._fUp);

        this._timeout = setTimeout(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(this._startDrag, this), this._nDelay);
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(oEvent) {
      if (this._timeout != null) {
        oEvent.preventDefault();

        var coordinates = this._getCoordinates(oEvent);

        this._nX = coordinates.x - this._nOriginalX;
        this._nY = coordinates.y - this._nOriginalY;

        if (this._bDragging === false) {
          if (Math.abs(this._nX) > this._nDistance || Math.abs(this._nY) > this._nDistance) {
            clearTimeout(this._timeout);

            this._startDrag();
          }
        }

        if (this._bDragging) {
          this.emit('drag', this._nX, this._nY, oEvent);
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(oEvent) {
      if (this._timeout != null) {
        clearTimeout(this._timeout);

        this._eBody.removeClass('lm_dragging');

        this._eElement.removeClass('lm_dragging');

        this._oDocument.find('iframe').css('pointer-events', '');

        this._oDocument.unbind('mousemove touchmove', this._fMove);

        this._oDocument.unbind('mouseup touchend', this._fUp);

        if (this._bDragging === true) {
          this._bDragging = false;
          this.emit('dragStop', oEvent, this._nOriginalX + this._nX);
        }
      }
    }
  }, {
    key: "_startDrag",
    value: function _startDrag() {
      this._bDragging = true;

      this._eBody.addClass('lm_dragging');

      this._eElement.addClass('lm_dragging');

      this._oDocument.find('iframe').css('pointer-events', 'none');

      this.emit('dragStart', this._nOriginalX, this._nOriginalY);
    }
  }, {
    key: "_getCoordinates",
    value: function _getCoordinates(event) {
      event = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTouchEvent"])(event);
      return {
        x: event.pageX,
        y: event.pageY
      };
    }
  }]);

  return DragListener;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/utils/EventEmitter.js":
/*!******************************************!*\
  !*** ./src/js_es6/utils/EventEmitter.js ***!
  \******************************************/
/*! exports provided: ALL_EVENT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_EVENT", function() { return ALL_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * The name of the event that's triggered for every other event
 *
 * usage
 *
 * myEmitter.on( EventEmitter.ALL_EVENT, function( eventName, argsArray ){
 *  //do stuff
 * });
 *
 * @type {String}
 */

var ALL_EVENT = '__all';
/**
 * A generic and very fast EventEmitter
 * implementation. On top of emitting the
 * actual event it emits an
 *
 * EventEmitter.ALL_EVENT
 *
 * event for every event triggered. This allows
 * to hook into it and proxy events forwards
 *
 * @constructor
 */

var EventEmitter = function EventEmitter() {
  _classCallCheck(this, EventEmitter);

  this._mSubscriptions = {};
  this._mSubscriptions[ALL_EVENT] = [];
  /**
   * Listen for events
   *
   * @param   {String} sEvent    The name of the event to listen to
   * @param   {Function} fCallback The callback to execute when the event occurs
   * @param   {[Object]} oContext The value of the this pointer within the callback function
   *
   * @returns {void}
   */

  this.on = function (sEvent, fCallback, oContext) {
    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(fCallback)) {
      throw new Error('Tried to listen to event ' + sEvent + ' with non-function callback ' + fCallback);
    }

    if (!this._mSubscriptions[sEvent]) {
      this._mSubscriptions[sEvent] = [];
    }

    this._mSubscriptions[sEvent].push({
      fn: fCallback,
      ctx: oContext
    });
  };
  /**
   * Emit an event and notify listeners
   *
   * @param   {String} sEvent The name of the event
   * @param    {Mixed}  various additional arguments that will be passed to the listener
   *
   * @returns {void}
   */


  this.emit = function (sEvent) {
    var i, ctx, args;
    args = Array.prototype.slice.call(arguments, 1);
    var subs = this._mSubscriptions[sEvent];

    if (subs) {
      subs = subs.slice();

      for (i = 0; i < subs.length; i++) {
        ctx = subs[i].ctx || {};
        subs[i].fn.apply(ctx, args);
      }
    }

    args.unshift(sEvent);

    var allEventSubs = this._mSubscriptions[ALL_EVENT].slice();

    for (i = 0; i < allEventSubs.length; i++) {
      ctx = allEventSubs[i].ctx || {};
      allEventSubs[i].fn.apply(ctx, args);
    }
  };
  /**
   * Removes a listener for an event, or all listeners if no callback and context is provided.
   *
   * @param   {String} sEvent    The name of the event
   * @param   {Function} fCallback The previously registered callback method (optional)
   * @param   {Object} oContext  The previously registered context (optional)
   *
   * @returns {void}
   */


  this.unbind = function (sEvent, fCallback, oContext) {
    if (!this._mSubscriptions[sEvent]) {
      throw new Error('No subscribtions to unsubscribe for event ' + sEvent);
    }

    var i,
        bUnbound = false;

    for (i = 0; i < this._mSubscriptions[sEvent].length; i++) {
      if ((!fCallback || this._mSubscriptions[sEvent][i].fn === fCallback) && (!oContext || oContext === this._mSubscriptions[sEvent][i].ctx)) {
        this._mSubscriptions[sEvent].splice(i, 1);

        bUnbound = true;
      }
    }

    if (bUnbound === false) {
      throw new Error('Nothing to unbind for ' + sEvent);
    }
  };
  /**
   * Alias for unbind
   */


  this.off = this.unbind;
  /**
   * Alias for emit
   */

  this.trigger = this.emit;
};



/***/ }),

/***/ "./src/js_es6/utils/EventHub.js":
/*!**************************************!*\
  !*** ./src/js_es6/utils/EventHub.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHub; });
/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ "./src/js_es6/utils/EventEmitter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js_es6/utils/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * An EventEmitter singleton that propagates events
 * across multiple windows. This is a little bit trickier since
 * windows are allowed to open childWindows in their own right
 *
 * This means that we deal with a tree of windows. Hence the rules for event propagation are:
 *
 * - Propagate events from this layout to both parents and children
 * - Propagate events from parent to this and children
 * - Propagate events from children to the other children (but not the emitting one) and the parent
 *
 * @constructor
 *
 * @param {lm.LayoutManager} layoutManager
 */

var EventHub = /*#__PURE__*/function (_EventEmitter) {
  _inherits(EventHub, _EventEmitter);

  var _super = _createSuper(EventHub);

  function EventHub(layoutManager) {
    var _this;

    _classCallCheck(this, EventHub);

    _this = _super.call(this);
    _this._layoutManager = layoutManager;
    _this._dontPropagateToParent = null;
    _this._childEventSource = null;

    _this.on(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["ALL_EVENT"], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(_this._onEventFromThis, _assertThisInitialized(_this)));

    _this._boundOnEventFromChild = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fnBind"])(_this._onEventFromChild, _assertThisInitialized(_this));
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('gl_child_event', _this._boundOnEventFromChild);
    return _this;
  }
  /**
   * Called on every event emitted on this eventHub, regardles of origin.
   *
   * @private
   *
   * @param {Mixed}
   *
   * @returns {void}
   */


  _createClass(EventHub, [{
    key: "_onEventFromThis",
    value: function _onEventFromThis() {
      var args = Array.prototype.slice.call(arguments);

      if (this._layoutManager.isSubWindow && args[0] !== this._dontPropagateToParent) {
        this._propagateToParent(args);
      }

      this._propagateToChildren(args); //Reset


      this._dontPropagateToParent = null;
      this._childEventSource = null;
    }
    /**
     * Called by the parent layout.
     *
     * @param   {Array} args Event name + arguments
     *
     * @returns {void}
     */

  }, {
    key: "_$onEventFromParent",
    value: function _$onEventFromParent(args) {
      this._dontPropagateToParent = args[0];
      this.emit.apply(this, args);
    }
    /**
     * Callback for child events raised on the window
     *
     * @param   {DOMEvent} event
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_onEventFromChild",
    value: function _onEventFromChild(event) {
      this._childEventSource = event.originalEvent.__gl;
      this.emit.apply(this, event.originalEvent.__glArgs);
    }
    /**
     * Propagates the event to the parent by emitting
     * it on the parent's DOM window
     *
     * @param   {Array} args Event name + arguments
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_propagateToParent",
    value: function _propagateToParent(args) {
      var event,
          eventName = 'gl_child_event';

      if (document.createEvent) {
        event = window.opener.document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
      } else {
        event = window.opener.document.createEventObject();
        event.eventType = eventName;
      }

      event.eventName = eventName;
      event.__glArgs = args;
      event.__gl = this._layoutManager;

      if (document.createEvent) {
        window.opener.dispatchEvent(event);
      } else {
        window.opener.fireEvent('on' + event.eventType, event);
      }
    }
    /**
     * Propagate events to children
     *
     * @param   {Array} args Event name + arguments
     * @private
     *
     * @returns {void}
     */

  }, {
    key: "_propagateToChildren",
    value: function _propagateToChildren(args) {
      var childGl, i;

      for (i = 0; i < this._layoutManager.openPopouts.length; i++) {
        childGl = this._layoutManager.openPopouts[i].getGlInstance();

        if (childGl && childGl !== this._childEventSource) {
          childGl.eventHub._$onEventFromParent(args);
        }
      }
    }
    /**
     * Destroys the EventHub
     *
     * @public
     * @returns {void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).off('gl_child_event', this._boundOnEventFromChild);
    }
  }]);

  return EventHub;
}(_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js_es6/utils/ReactComponentHandler.js":
/*!***************************************************!*\
  !*** ./src/js_es6/utils/ReactComponentHandler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactComponentHandler; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * A specialised GoldenLayout component that binds GoldenLayout container
 * lifecycle events to react components
 *
 * @constructor
 *
 * @param {ItemContainer} container
 * @param {Object} state state is not required for react components
 */

var ReactComponentHandler = /*#__PURE__*/function () {
  function ReactComponentHandler(container, state) {
    _classCallCheck(this, ReactComponentHandler);

    this._reactComponent = null;
    this._originalComponentWillUpdate = null;
    this._container = container;
    this._initialState = state;
    this._reactClass = this._getReactClass();

    this._container.on('open', this._render, this);

    this._container.on('destroy', this._destroy, this);
  }
  /**
   * Creates the react class and component and hydrates it with
   * the initial state - if one is present
   *
   * By default, react's getInitialState will be used
   *
   * @private
   * @returns {void}
   */


  _createClass(ReactComponentHandler, [{
    key: "_render",
    value: function _render() {
      ReactDOM.render(this._getReactComponent(), this._container.getElement()[0]);
    }
    /**
     * Fired by react when the component is created.  Also fired upon destruction (where component is null).
     * <p>
     * Note: This callback is used instead of the return from `ReactDOM.render` because
     *	   of https://github.com/facebook/react/issues/10309.
     * </p>
     *
     * @private
     * @arg {React.Ref} component The component instance created by the `ReactDOM.render` call in the `_render` method.
     * @returns {void}
     */

  }, {
    key: "_gotReactComponent",
    value: function _gotReactComponent(component) {
      if (component !== null) {
        this._reactComponent = component;

        this._originalComponentWillUpdate = this._reactComponent.componentWillUpdate || function () {};

        this._reactComponent.componentWillUpdate = this._onUpdate.bind(this);

        if (this._container.getState()) {
          this._reactComponent.setState(this._container.getState());
        }
      }
    }
    /**
     * Removes the component from the DOM and thus invokes React's unmount lifecycle
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      ReactDOM.unmountComponentAtNode(this._container.getElement()[0]);

      this._container.off('open', this._render, this);

      this._container.off('destroy', this._destroy, this);
    }
    /**
     * Hooks into React's state management and applies the componentstate
     * to GoldenLayout
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "_onUpdate",
    value: function _onUpdate(nextProps, nextState) {
      this._container.setState(nextState);

      this._originalComponentWillUpdate.call(this._reactComponent, nextProps, nextState);
    }
    /**
     * Retrieves the react class from GoldenLayout's registry
     *
     * @private
     * @returns {React.Class}
     */

  }, {
    key: "_getReactClass",
    value: function _getReactClass() {
      var componentName = this._container._config.component;
      var reactClass;

      if (!componentName) {
        throw new Error('No react component name. type: react-component needs a field `component`');
      }

      reactClass = this._container.layoutManager.getComponent(this._container._config);

      if (!reactClass) {
        throw new Error('React component "' + componentName + '" not found. ' + 'Please register all components with GoldenLayout using `registerComponent(name, component)`');
      }

      return reactClass;
    }
    /**
     * Copies and extends the properties array and returns the React element
     *
     * @private
     * @returns {React.Element}
     */

  }, {
    key: "_getReactComponent",
    value: function _getReactComponent() {
      var defaultProps = {
        glEventHub: this._container.layoutManager.eventHub,
        glContainer: this._container,
        ref: this._gotReactComponent.bind(this)
      };
      var props = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(defaultProps, this._container._config.props);
      return React.createElement(this._reactClass, props);
    }
  }]);

  return ReactComponentHandler;
}();



/***/ }),

/***/ "./src/js_es6/utils/utils.js":
/*!***********************************!*\
  !*** ./src/js_es6/utils/utils.js ***!
  \***********************************/
/*! exports provided: F, getTouchEvent, extend, createObject, objectKeys, getHashValue, getQueryStringParam, copy, animFrame, indexOf, isFunction, fnBind, removeFromArray, now, getUniqueId, filterXss, stripTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchEvent", function() { return getTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObject", function() { return createObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectKeys", function() { return objectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashValue", function() { return getHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryStringParam", function() { return getQueryStringParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animFrame", function() { return animFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnBind", function() { return fnBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueId", function() { return getUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterXss", function() { return filterXss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTags", function() { return stripTags; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function F() {}
function getTouchEvent(event) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.zepto) {
    return event.touches ? event.targetTouches[0] : event;
  } else {
    return event.originalEvent && event.originalEvent.touches ? event.originalEvent.touches[0] : event;
  }
}
function extend(subClass, superClass) {
  subClass.prototype = createObject(superClass.prototype);
  subClass.prototype.contructor = subClass;
}
function createObject(prototype) {
  if (typeof Object.create === 'function') {
    return Object.create(prototype);
  } else {
    F.prototype = prototype;
    return new F();
  }
}
function objectKeys(object) {
  var keys, key;

  if (typeof Object.keys === 'function') {
    return Object.keys(object);
  } else {
    keys = [];

    for (key in object) {
      keys.push(key);
    }

    return keys;
  }
}
function getHashValue(key) {
  var matches = location.hash.match(new RegExp(key + '=([^&]*)'));
  return matches ? matches[1] : null;
}
function getQueryStringParam(param) {
  if (window.location.hash) {
    return getHashValue(param);
  } else if (!window.location.search) {
    return null;
  }

  var keyValuePairs = window.location.search.substr(1).split('&'),
      params = {},
      pair,
      i;

  for (i = 0; i < keyValuePairs.length; i++) {
    pair = keyValuePairs[i].split('=');
    params[pair[0]] = pair[1];
  }

  return params[param] || null;
}
function copy(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }

  return target;
}
/**
 * This is based on Paul Irish's shim, but looks quite odd in comparison. Why?
 * Because
 * a) it shouldn't affect the global requestAnimationFrame function
 * b) it shouldn't pass on the time that has passed
 *
 * @param   {Function} fn
 *
 * @returns {void}
 */

function animFrame(fn) {
  return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  })(function () {
    fn();
  });
}
function indexOf(needle, haystack) {
  if (!(haystack instanceof Array)) {
    throw new Error('Haystack is not an Array');
  }

  if (haystack.indexOf) {
    return haystack.indexOf(needle);
  } else {
    for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        return i;
      }
    }

    return -1;
  }
}
var isFunction =  true && (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) != 'object' ? function isFunction(obj) {
  return typeof obj == 'function' || false;
} : function isFunction(obj) {
  return toString.call(obj) === '[object Function]';
};
function fnBind(fn, context, boundArgs) {
  if (Function.prototype.bind !== undefined) {
    return Function.prototype.bind.apply(fn, [context].concat(boundArgs || []));
  }

  var bound = function bound() {
    // Join the already applied arguments to the now called ones (after converting to an array again).
    var args = (boundArgs || []).concat(Array.prototype.slice.call(arguments, 0)); // If not being called as a constructor

    if (!(this instanceof bound)) {
      // return the result of the function called bound to target and partially applied.
      return fn.apply(context, args);
    } // If being called as a constructor, apply the function bound to self.


    fn.apply(this, args);
  }; // Attach the prototype of the function to our newly created function.


  bound.prototype = fn.prototype;
  return bound;
}
function removeFromArray(item, array) {
  var index = indexOf(item, array);

  if (index === -1) {
    throw new Error('Can\'t remove item from array. Item is not in the array');
  }

  array.splice(index, 1);
}
function now() {
  if (typeof Date.now === 'function') {
    return Date.now();
  } else {
    return new Date().getTime();
  }
}
function getUniqueId() {
  return (Math.random() * 1000000000000000).toString(36).replace('.', '');
}
/**
 * A basic XSS filter. It is ultimately up to the
 * implementing developer to make sure their particular
 * applications and usecases are save from cross site scripting attacks
 *
 * @param   {String} input
 * @param    {Boolean} keepTags
 *
 * @returns {String} filtered input
 */

function filterXss(input, keepTags) {
  var output = input.replace(/javascript/gi, 'j&#97;vascript').replace(/expression/gi, 'expr&#101;ssion').replace(/onload/gi, 'onlo&#97;d').replace(/script/gi, '&#115;cript').replace(/onerror/gi, 'on&#101;rror');

  if (keepTags === true) {
    return output;
  } else {
    return output.replace(/>/g, '&gt;').replace(/</g, '&lt;');
  }
}
/**
 * Removes html tags from a string
 *
 * @param   {String} input
 *
 * @returns {String} input without tags
 */

function stripTags(input) {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(input.replace(/(<([^>]+)>)/ig, ''));
}

/***/ }),

/***/ "jquery":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"jquery","commonjs2":"jquery","amd":"jquery","root":"$"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dvbGRlbkxheW91dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi9MYXlvdXRNYW5hZ2VyLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvY29uZmlnL0l0ZW1EZWZhdWx0Q29uZmlnLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvY29uZmlnL2RlZmF1bHRDb25maWcuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi9jb250YWluZXIvSXRlbUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2NvbnRyb2xzL0Jyb3dzZXJQb3BvdXQuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi9jb250cm9scy9EcmFnUHJveHkuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi9jb250cm9scy9EcmFnU291cmNlLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvY29udHJvbHMvRHJvcFRhcmdldEluZGljYXRvci5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2NvbnRyb2xzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2NvbnRyb2xzL0hlYWRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2NvbnRyb2xzL1NwbGl0dGVyLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvY29udHJvbHMvVGFiLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvY29udHJvbHMvVHJhbnNpdGlvbkluZGljYXRvci5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2Vycm9ycy9Db25maWd1cmF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi9pdGVtcy9BYnN0cmFjdENvbnRlbnRJdGVtLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvaXRlbXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvaXRlbXMvUm9vdC5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L2l0ZW1zL1Jvd09yQ29sdW1uLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvaXRlbXMvU3RhY2suanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi91dGlscy9CdWJibGluZ0V2ZW50LmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC8uL3NyYy9qc19lczYvdXRpbHMvQ29uZmlnTWluaWZpZXIuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi91dGlscy9EcmFnTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi91dGlscy9FdmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vR29sZGVuTGF5b3V0Ly4vc3JjL2pzX2VzNi91dGlscy9FdmVudEh1Yi5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L3V0aWxzL1JlYWN0Q29tcG9uZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Hb2xkZW5MYXlvdXQvLi9zcmMvanNfZXM2L3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL0dvbGRlbkxheW91dC9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcIiRcIn0iXSwibmFtZXMiOlsiUkVBQ1RfQ09NUE9ORU5UX0lEIiwiTGF5b3V0TWFuYWdlciIsImNvbmZpZyIsImNvbnRhaW5lciIsImlzSW5pdGlhbGlzZWQiLCJfaXNGdWxsUGFnZSIsIl9yZXNpemVUaW1lb3V0SWQiLCJfY29tcG9uZW50cyIsIl9pdGVtQXJlYXMiLCJfcmVzaXplRnVuY3Rpb24iLCJmbkJpbmQiLCJfb25SZXNpemUiLCJfdW5sb2FkRnVuY3Rpb24iLCJfb25VbmxvYWQiLCJfbWF4aW1pc2VkSXRlbSIsIl9tYXhpbWlzZVBsYWNlaG9sZGVyIiwiJCIsIl9jcmVhdGlvblRpbWVvdXRQYXNzZWQiLCJfc3ViV2luZG93c0NyZWF0ZWQiLCJfZHJhZ1NvdXJjZXMiLCJfdXBkYXRpbmdDb2x1bW5zUmVzcG9uc2l2ZSIsIl9maXJzdExvYWQiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJvcGVuUG9wb3V0cyIsInNlbGVjdGVkSXRlbSIsImlzU3ViV2luZG93IiwiZXZlbnRIdWIiLCJFdmVudEh1YiIsIl9jcmVhdGVDb25maWciLCJkcm9wVGFyZ2V0SW5kaWNhdG9yIiwidHJhbnNpdGlvbkluZGljYXRvciIsInRhYkRyb3BQbGFjZWhvbGRlciIsImNzcyIsIl90eXBlVG9JdGVtIiwiUm93T3JDb2x1bW4iLCJTdGFjayIsIkNvbXBvbmVudCIsIkNvbmZpZ01pbmlmaWVyIiwibWluaWZ5Q29uZmlnIiwidW5taW5pZnlDb25maWciLCJuYW1lIiwiY29uc3RydWN0b3IiLCJFcnJvciIsInVuZGVmaW5lZCIsImNhbGxiYWNrIiwiX2NvbXBvbmVudEZ1bmN0aW9uIiwiY29uc29sZSIsIndhcm4iLCJuZXh0IiwiaSIsIkFic3RyYWN0Q29udGVudEl0ZW0iLCJzZXR0aW5ncyIsImNvcHkiLCJkaW1lbnNpb25zIiwibGFiZWxzIiwiY29udGVudCIsImNvbmZpZ05vZGUiLCJpdGVtIiwia2V5IiwiY29udGVudEl0ZW1zIiwibGVuZ3RoIiwiXyRyZWNvbmNpbGVQb3BvdXRXaW5kb3dzIiwicHVzaCIsInRvQ29uZmlnIiwibWF4aW1pc2VkSXRlbUlkIiwiZ2V0Q29tcG9uZW50TmFtZUZyb21Db25maWciLCJjb21wb25lbnRUb1VzZSIsIkNvbmZpZ3VyYXRpb25FcnJvciIsIl9jcmVhdGVTdWJXaW5kb3dzIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiYm9keSIsInJlYWR5IiwiaW5pdCIsInNldFRpbWVvdXQiLCJfYWRqdXN0VG9XaW5kb3dNb2RlIiwiX3NldENvbnRhaW5lciIsIkRyb3BUYXJnZXRJbmRpY2F0b3IiLCJUcmFuc2l0aW9uSW5kaWNhdG9yIiwidXBkYXRlU2l6ZSIsIl9jcmVhdGUiLCJfYmluZEV2ZW50cyIsIl9hZGp1c3RDb2x1bW5zUmVzcG9uc2l2ZSIsImVtaXQiLCJhcmd1bWVudHMiLCJjYWxsRG93bndhcmRzIiwiZWxlbWVudCIsIndpbmRvdyIsIm9mZiIsInJlbW92ZSIsImRlc3Ryb3kiLCJmb3JFYWNoIiwiZHJhZ1NvdXJjZSIsIl9kcmFnTGlzdGVuZXIiLCJfZWxlbWVudCIsIl9pdGVtQ29uZmlnIiwidHlwZSIsImNvbXBvbmVudE5hbWUiLCJpc1JlYWN0Q29uZmlnIiwiY29tcG9uZW50IiwicGFyZW50IiwidHlwZUVycm9yTXNnIiwiY29udGVudEl0ZW0iLCJvYmplY3RLZXlzIiwiam9pbiIsIlJvb3QiLCJjb25maWdPckNvbnRlbnRJdGVtIiwicGFyZW50SWQiLCJpbmRleEluUGFyZW50IiwiaXNJdGVtIiwic2VsZiIsIndpbmRvd0xlZnQiLCJ3aW5kb3dUb3AiLCJvZmZzZXQiLCJjaGlsZCIsImJyb3dzZXJQb3BvdXQiLCJnZXRVbmlxdWVJZCIsImlzUm9vdCIsImFkZElkIiwiaXNOYU4iLCJpbmRleE9mIiwiQXJyYXkiLCJzY3JlZW5YIiwic2NyZWVuTGVmdCIsInNjcmVlblkiLCJzY3JlZW5Ub3AiLCJsZWZ0IiwidG9wIiwiQnJvd3NlclBvcG91dCIsIm9uIiwiaXRlbUNvbmZpZyIsImNvbnN0cmFpbkRyYWdUb0NvbnRhaW5lciIsIkRyYWdTb3VyY2UiLCJsbSIsInV0aWxzIiwicmVtb3ZlRnJvbUFycmF5IiwiXyRzaWxlbnQiLCJzZWxlY3Rpb25FbmFibGVkIiwiZGVzZWxlY3QiLCJzZWxlY3QiLCJfJG1pbmltaXNlSXRlbSIsIl8kY2xlYW51cEJlZm9yZU1heGltaXNlZEl0ZW1EZXN0cm95ZWQiLCJhZGRDbGFzcyIsImFmdGVyIiwicHJlcGVuZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlSWQiLCJldmVudCIsIm9yaWdpbiIsImNsb3NlIiwieCIsInkiLCJhcmVhIiwic21hbGxlc3RTdXJmYWNlIiwiSW5maW5pdHkiLCJtYXRoaW5nQXJlYSIsIngxIiwieDIiLCJ5MSIsInkyIiwic3VyZmFjZSIsImFyZWFTaXplIiwic2lkZXMiLCJzaWRlIiwiXyRnZXRBcmVhIiwiYWxsQ29udGVudEl0ZW1zIiwiX2dldEFsbENvbnRlbnRJdGVtcyIsIl8kY3JlYXRlUm9vdEl0ZW1BcmVhcyIsImlzU3RhY2siLCJjb25jYXQiLCJoZWFkZXIiLCJfY29udGVudEFyZWFEaW1lbnNpb25zIiwiaGlnaGxpZ2h0QXJlYSIsImNvbnRlbnRJdGVtT3JDb25maWciLCJpc0Z1bmN0aW9uIiwiaXNQbGFpbk9iamVjdCIsIm5ld0NvbnRlbnRJdGVtIiwiY3JlYXRlQ29udGVudEl0ZW0iLCJnZXRXaW5kb3ciLCJjbG9zZWQiLCJhZGRDaGlsZHJlbiIsInJlc2l6ZSIsImNsZWFyVGltZW91dCIsIndpbmRvd0NvbmZpZ0tleSIsImdldFF1ZXJ5U3RyaW5nUGFyYW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicmVtb3ZlSXRlbSIsImV4dGVuZCIsImRlZmF1bHRDb25maWciLCJuZXh0Tm9kZSIsIm5vZGUiLCJoYXNIZWFkZXJzIiwiaGVhZGVySGVpZ2h0IiwicG9wSW5CdXR0b24iLCJwb3BpbiIsImNsaWNrIiwidGl0bGUiLCJzdHJpcFRhZ3MiLCJhcHBlbmQiLCJodG1sIiwib2Zmc2V0SGVpZ2h0IiwiX19nbEluc3RhbmNlIiwicG9wb3V0IiwiY3JlYXRlUG9wb3V0IiwibWFyZ2luIiwicGFkZGluZyIsIm92ZXJmbG93IiwiZXJyb3JNc2ciLCJnZXRJdGVtc0J5SWQiLCJ0b2dnbGVNYXhpbWlzZSIsImNsb3NlUG9wb3V0c09uVW5sb2FkIiwiX3VzZVJlc3BvbnNpdmVMYXlvdXQiLCJtaW5JdGVtV2lkdGgiLCJpc1JvdyIsImNvbHVtbkNvdW50IiwidG90YWxNaW5XaWR0aCIsImZpbmFsQ29sdW1uQ291bnQiLCJNYXRoIiwibWF4IiwiZmxvb3IiLCJzdGFja0NvbHVtbkNvdW50Iiwicm9vdENvbnRlbnRJdGVtIiwiZmlyc3RTdGFja0NvbnRhaW5lciIsIl9maW5kQWxsU3RhY2tDb250YWluZXJzIiwiY29sdW1uIiwiX2FkZENoaWxkQ29udGVudEl0ZW1zVG9Db250YWluZXIiLCJyZXNwb25zaXZlTW9kZSIsImFkZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzdGFja0NvbnRhaW5lcnMiLCJfZmluZEFsbFN0YWNrQ29udGFpbmVyc1JlY3Vyc2l2ZSIsImlzQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiaXRlbURlZmF1bHRDb25maWciLCJpc0Nsb3NhYmxlIiwicmVvcmRlckVuYWJsZWQiLCJwb3BvdXRXaG9sZVN0YWNrIiwiYmxvY2tlZFBvcG91dHNUaHJvd0Vycm9yIiwic2hvd1BvcG91dEljb24iLCJzaG93TWF4aW1pc2VJY29uIiwic2hvd0Nsb3NlSWNvbiIsInRhYk92ZXJsYXBBbGxvd2FuY2UiLCJyZW9yZGVyT25UYWJNZW51Q2xpY2siLCJ0YWJDb250cm9sT2Zmc2V0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJHcmFiV2lkdGgiLCJtaW5JdGVtSGVpZ2h0IiwiZHJhZ1Byb3h5V2lkdGgiLCJkcmFnUHJveHlIZWlnaHQiLCJtYXhpbWlzZSIsIm1pbmltaXNlIiwidGFiRHJvcGRvd24iLCJJdGVtQ29udGFpbmVyIiwibGF5b3V0TWFuYWdlciIsImlzSGlkZGVuIiwiX2NvbmZpZyIsIl9jb250ZW50RWxlbWVudCIsImZpbmQiLCJoaWRlIiwic2hvdyIsInJvd09yQ29sdW1uIiwicm93T3JDb2x1bW5DaGlsZCIsInRvdGFsUGl4ZWwiLCJwZXJjZW50YWdlIiwiZGlyZWN0aW9uIiwibmV3U2l6ZSIsImRlbHRhIiwiaXNDb2x1bW4iLCJjb21wb25lbnRTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImVtaXRCdWJibGluZ0V2ZW50Iiwic2V0VGl0bGUiLCJ6ZXB0byIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIl9kaW1lbnNpb25zIiwiX3BhcmVudElkIiwiX2luZGV4SW5QYXJlbnQiLCJfbGF5b3V0TWFuYWdlciIsIl9wb3BvdXRXaW5kb3ciLCJfaWQiLCJfY3JlYXRlV2luZG93IiwiZ2V0R2xJbnN0YW5jZSIsIl8kY2xvc2VXaW5kb3ciLCJlIiwiY2hpbGRDb25maWciLCJwYXJlbnRJdGVtIiwiaW5kZXgiLCJjaGVja1JlYWR5SW50ZXJ2YWwiLCJ1cmwiLCJfY3JlYXRlVXJsIiwicmFuZG9tIiwidG9TdHJpbmciLCJvcHRpb25zIiwiX3NlcmlhbGl6ZVdpbmRvd09wdGlvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJtZW51YmFyIiwidG9vbGJhciIsImxvY2F0aW9uIiwicGVyc29uYWxiYXIiLCJyZXNpemFibGUiLCJzY3JvbGxiYXJzIiwic3RhdHVzIiwib3BlbiIsImVycm9yIiwiX3Bvc2l0aW9uV2luZG93IiwiX29uQ2xvc2UiLCJzZXRJbnRlcnZhbCIsIl9vbkluaXRpYWxpc2VkIiwiY2xlYXJJbnRlcnZhbCIsIndpbmRvd09wdGlvbnMiLCJ3aW5kb3dPcHRpb25zU3RyaW5nIiwic3RvcmFnZUtleSIsInVybFBhcnRzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhyZWYiLCJzcGxpdCIsIm1vdmVUbyIsImZvY3VzIiwicG9wSW4iLCJfdGVtcGxhdGUiLCJEcmFnUHJveHkiLCJkcmFnTGlzdGVuZXIiLCJvcmlnaW5hbFBhcmVudCIsIl9jb250ZW50SXRlbSIsIl9vcmlnaW5hbFBhcmVudCIsIl9hcmVhIiwiX2xhc3RWYWxpZEFyZWEiLCJfb25EcmFnIiwiX29uRHJvcCIsIl9zaWRlIiwiX3NpZGVkIiwiYXR0ciIsImNoaWxkRWxlbWVudENvbnRhaW5lciIsIl91bmRpc3BsYXlUcmVlIiwiXyRjYWxjdWxhdGVJdGVtQXJlYXMiLCJfc2V0RGltZW5zaW9ucyIsIl9taW5YIiwiX21pblkiLCJfbWF4WCIsIl9tYXhZIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9zZXREcm9wUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImdldFRvdWNoRXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiaXNXaXRoaW5Db250YWluZXIiLCJfJGhpZ2hsaWdodERyb3Bab25lIiwiX3VwZGF0ZVRyZWUiLCJfJG9uRHJvcCIsIl8kZGVzdHJveSIsInVuZGlzcGxheUNoaWxkIiwiXyRzZXRQYXJlbnQiLCJfY3JlYXRlRHJhZ0xpc3RlbmVyIiwiX3JlbW92ZURyYWdMaXN0ZW5lciIsIkRyYWdMaXN0ZW5lciIsIl9vbkRyYWdTdGFydCIsIl8kbm9ybWFsaXplQ29udGVudEl0ZW0iLCJkcmFnUHJveHkiLCJ0cmFuc2l0aW9uRWxlbWVudHMiLCJIZWFkZXIiLCJfb25IZWFkZXJDbGljayIsInRhYnNDb250YWluZXIiLCJ0YWJEcm9wZG93bkNvbnRhaW5lciIsImNvbnRyb2xzQ29udGFpbmVyIiwiX3VwZGF0ZVRhYlNpemVzIiwidGFicyIsInRhYnNNYXJrZWRGb3JSZW1vdmFsIiwiYWN0aXZlQ29udGVudEl0ZW0iLCJjbG9zZUJ1dHRvbiIsImRvY2tCdXR0b24iLCJ0YWJEcm9wZG93bkJ1dHRvbiIsImhpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duIiwiX2hpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duIiwibW91c2V1cCIsIl9sYXN0VmlzaWJsZVRhYkluZGV4IiwiX3RhYkNvbnRyb2xPZmZzZXQiLCJfY3JlYXRlQ29udHJvbHMiLCJ0YWIiLCJUYWIiLCJiZWZvcmUiLCJzcGxpY2UiLCJqIiwiaXNBY3RpdmUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmUiLCJhY3RpdmVJdGVtSW5kZXgiLCJwb3NpdGlvbiIsInByZXZpb3VzIiwiX2hlYWRlciIsIl9kb2NrZXIiLCJkb2NrZWQiLCJfc2V0dXBIZWFkZXJQb3NpdGlvbiIsIl9jYW5EZXN0cm95IiwiX2lzQ2xvc2FibGUiLCJpc0RvY2thYmxlIiwiZG9jayIsInRvZ2dsZSIsImNsb3NlU3RhY2siLCJsYWJlbCIsIm1heGltaXNlTGFiZWwiLCJtaW5pbWlzZUxhYmVsIiwibWF4aW1pc2VCdXR0b24iLCJ0YWJEcm9wZG93bkxhYmVsIiwic2hvd1RhYkRyb3Bkb3duIiwiX3Nob3dBZGRpdGlvbmFsVGFic0Ryb3Bkb3duIiwiSGVhZGVyQnV0dG9uIiwiYnV0dG9uIiwiX2dldEhlYWRlclNldHRpbmciLCJfb25Qb3BvdXRDbGljayIsInRhcmdldCIsInNob3dUYWJNZW51Iiwic2l6ZSIsInZhbCIsImF2YWlsYWJsZVdpZHRoIiwiY3VtdWxhdGl2ZVRhYldpZHRoIiwidmlzaWJsZVRhYldpZHRoIiwidGFiRWxlbWVudCIsIm1hcmdpbkxlZnQiLCJvdmVybGFwIiwidGFiV2lkdGgiLCJ0YWJPdmVybGFwQWxsb3dhbmNlRXhjZWVkZWQiLCJhY3RpdmVJbmRleCIsInBhcnNlSW50IiwiY3NzQ2xhc3MiLCJhY3Rpb24iLCJfYWN0aW9uIiwiU3BsaXR0ZXIiLCJpc1ZlcnRpY2FsIiwiZ3JhYlNpemUiLCJfaXNWZXJ0aWNhbCIsIl9zaXplIiwiX2dyYWJTaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZHJhZ0hhbmRsZSIsImhhbmRsZUV4Y2Vzc1NpemUiLCJoYW5kbGVFeGNlc3NQb3MiLCJ0aXRsZUVsZW1lbnQiLCJjbG9zZUVsZW1lbnQiLCJfb25UYWJDbGlja0ZuIiwiX29uVGFiQ2xpY2siLCJfb25DbG9zZUNsaWNrRm4iLCJfb25DbG9zZUNsaWNrIiwiX29uQ2xvc2VNb3VzZWRvd24iLCJpc01heGltaXNlZCIsInNldEFjdGl2ZUNvbnRlbnRJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwiX3RvRWxlbWVudCIsIl9mcm9tRGltZW5zaW9ucyIsIl90b3RhbEFuaW1hdGlvbkR1cmF0aW9uIiwiX2FuaW1hdGlvblN0YXJ0VGltZSIsImZyb21FbGVtZW50IiwidG9FbGVtZW50IiwidG9EaW1lbnNpb25zIiwiX21lYXN1cmUiLCJhbmltYXRpb25Qcm9ncmVzcyIsIm5vdyIsImN1cnJlbnRGcmFtZVN0eWxlcyIsImNzc1Byb3BlcnR5Iiwib3BhY2l0eSIsImFuaW1GcmFtZSIsIl9uZXh0QW5pbWF0aW9uRnJhbWUiLCJtZXNzYWdlIiwiX2V4dGVuZEl0ZW1Ob2RlIiwiX3BlbmRpbmdFdmVudFByb3BhZ2F0aW9ucyIsIl90aHJvdHRsZWRFdmVudHMiLCJBTExfRVZFTlQiLCJfcHJvcGFnYXRlRXZlbnQiLCJfY3JlYXRlQ29udGVudEl0ZW1zIiwiZnVuY3Rpb25OYW1lIiwiZnVuY3Rpb25Bcmd1bWVudHMiLCJib3R0b21VcCIsInNraXBTZWxmIiwiYXBwbHkiLCJrZWVwQ2hpbGQiLCJfJGluaXQiLCJvbGRDaGlsZCIsIm5ld0NoaWxkIiwiXyRkZXN0cm95T2xkQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwicHJldmVudERlZmF1bHQiLCJfJG1heGltaXNlSXRlbSIsInNlbGVjdEl0ZW0iLCJpZCIsImhhc0lkIiwiZmlsdGVyIiwicmVzdWx0IiwiZ2V0SXRlbXNCeUZpbHRlciIsIl8kZ2V0SXRlbXNCeVByb3BlcnR5IiwiY29tcG9uZW50cyIsImluc3RhbmNlcyIsImluc3RhbmNlIiwidmFsdWUiLCJfY2FsbE9uQWN0aXZlQ29tcG9uZW50cyIsIm1ldGhvZE5hbWUiLCJzdGFja3MiLCJnZXRJdGVtc0J5VHlwZSIsImdldEFjdGl2ZUNvbnRlbnRJdGVtIiwic2V0U2l6ZSIsIkJ1YmJsaW5nRXZlbnQiLCJvQ29udGVudEl0ZW0iLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsIl9zY2hlZHVsZUV2ZW50UHJvcGFnYXRpb25Ub0xheW91dE1hbmFnZXIiLCJfcHJvcGFnYXRlRXZlbnRUb0xheW91dE1hbmFnZXIiLCJDb21wb25lbnRDb25zdHJ1Y3RvciIsIlJlYWN0Q29tcG9uZW50SGFuZGxlciIsImdldENvbXBvbmVudCIsImNvbXBvbmVudENvbmZpZyIsIl8kc2V0U2l6ZSIsIl8kaGlkZSIsIl8kc2hvdyIsInNob3duIiwiXyRzaG93biIsImNvbnRhaW5lckVsZW1lbnQiLCJfY29udGFpbmVyRWxlbWVudCIsInN0YWNrIiwiZGltZW5zaW9uIiwiaW5zZXJ0QmVmb3JlIiwic2liYmxpbmciLCJfc3BsaXR0ZXJTaXplIiwiX3NwbGl0dGVyR3JhYlNpemUiLCJfaXNDb2x1bW4iLCJfZGltZW5zaW9uIiwiX3NwbGl0dGVyIiwiX3NwbGl0dGVyUG9zaXRpb24iLCJfc3BsaXR0ZXJNaW5Qb3NpdGlvbiIsIl9zcGxpdHRlck1heFBvc2l0aW9uIiwiXyRzdXNwZW5kUmVzaXplIiwibmV3SXRlbVNpemUiLCJpdGVtU2l6ZSIsInNwbGl0dGVyRWxlbWVudCIsIl9jcmVhdGVTcGxpdHRlciIsIl9pc0RvY2tlZCIsIl92YWxpZGF0ZURvY2tpbmciLCJ1bmRpc3BsYXllZEl0ZW1TaXplIiwic3BsaXR0ZXJJbmRleCIsImNoaWxkSXRlbSIsInJlbW92ZWRJdGVtU2l6ZSIsIl9jYWxjdWxhdGVSZWxhdGl2ZVNpemVzIiwiX3NldEFic29sdXRlU2l6ZXMiLCJtb2RlIiwiY29sbGFwc2VkIiwiaGVhZGVyU2l6ZSIsImlzRG9ja2VkIiwiYXV0b3NpZGUiLCJmaXJzdCIsImxhc3QiLCJyb3ciLCJyZXF1aXJlZCIsInJlYWxTaXplIiwidG9nZ2xlQ2xhc3MiLCJzaXplRGF0YSIsIl9jYWxjdWxhdGVBYnNvbHV0ZVNpemVzIiwiYWRkaXRpb25hbFBpeGVsIiwiaXRlbVNpemVzIiwidG90YWxXaWR0aCIsInRvdGFsSGVpZ2h0IiwidG90YWxTcGxpdHRlclNpemUiLCJ0b3RhbEFzc2lnbmVkIiwidG90YWwiLCJpdGVtc1dpdGhvdXRTZXREaW1lbnNpb24iLCJyb3VuZCIsIl9yZXNwZWN0TWluSXRlbVdpZHRoIiwiZW50cmllc092ZXJNaW4iLCJ0b3RhbE92ZXJNaW4iLCJ0b3RhbFVuZGVyTWluIiwicmVtYWluaW5nV2lkdGgiLCJyZWR1Y2VQZXJjZW50IiwicmVkdWNlZFdpZHRoIiwiYWxsRW50cmllcyIsImVudHJ5Iiwic3BsaXR0ZXIiLCJfb25TcGxpdHRlckRyYWciLCJfb25TcGxpdHRlckRyYWdTdG9wIiwiX29uU3BsaXR0ZXJEcmFnU3RhcnQiLCJjb3VudCIsInRoYXQiLCJjYW4iLCJfc2V0RG9ja2FibGUiLCJfJHNldENsb3NhYmxlIiwiYXJyIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpdGVtcyIsIl9nZXRJdGVtc0ZvclNwbGl0dGVyIiwibWluU2l6ZSIsImJlZm9yZU1pbkRpbSIsIl9nZXRNaW5pbXVtRGltZW5zaW9ucyIsImJlZm9yZU1pblNpemUiLCJhZnRlck1pbkRpbSIsImFmdGVyTWluU2l6ZSIsInNpemVCZWZvcmUiLCJzaXplQWZ0ZXIiLCJzcGxpdHRlclBvc2l0aW9uSW5SYW5nZSIsInRvdGFsUmVsYXRpdmVTaXplIiwiX2FjdGl2ZUNvbnRlbnRJdGVtIiwiY2ZnIiwiX2Ryb3Bab25lcyIsIl9kcm9wU2VnbWVudCIsIl9kcm9wSW5kZXgiLCJfJHZhbGlkYXRlQ2xvc2FiaWxpdHkiLCJpbml0aWFsSXRlbSIsImNyZWF0ZVRhYiIsInJlbW92ZVRhYiIsImhpZGVUYWIiLCJsZW4iLCJfcmVzZXRIZWFkZXJEcm9wWm9uZSIsImlzSG9yaXpvbnRhbCIsImhhc0NvcnJlY3RQYXJlbnQiLCJzZWdtZW50IiwiaG92ZXJBcmVhIiwiX2hpZ2hsaWdodEhlYWRlckRyb3Bab25lIiwiX2hpZ2hsaWdodEJvZHlEcm9wWm9uZSIsImdldEFyZWEiLCJoZWFkZXJBcmVhIiwiY29udGVudEFyZWEiLCJjb250ZW50V2lkdGgiLCJjb250ZW50SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJ0YWJzTGVuZ3RoIiwiaXNBYm92ZVRhYiIsInRhYlRvcCIsInRhYkxlZnQiLCJwbGFjZUhvbGRlckxlZnQiLCJoZWFkZXJPZmZzZXQiLCJoYWxmWCIsIm1pbiIsInBsYWNlSG9sZGVyVG9wIiwiaGVhZGVyUG9zaXRpb24iLCJfa2V5cyIsIl92YWx1ZXMiLCJfbmV4dExldmVsIiwibWluaWZpZWRDb25maWciLCJvcmlnIiwiZnJvbSIsInRvIiwidHJhbnNsYXRpb25GbiIsIm1pbktleSIsImhhc093blByb3BlcnR5IiwiZGljdGlvbmFyeSIsInN1YnN0ciIsImVFbGVtZW50IiwibkJ1dHRvbkNvZGUiLCJfdGltZW91dCIsIl9lRWxlbWVudCIsIl9vRG9jdW1lbnQiLCJfZUJvZHkiLCJfbkJ1dHRvbkNvZGUiLCJfbkRlbGF5IiwiX25EaXN0YW5jZSIsIl9uWCIsIl9uWSIsIl9uT3JpZ2luYWxYIiwiX25PcmlnaW5hbFkiLCJfYkRyYWdnaW5nIiwiX2ZNb3ZlIiwib25Nb3VzZU1vdmUiLCJfZlVwIiwib25Nb3VzZVVwIiwiX2ZEb3duIiwib25Nb3VzZURvd24iLCJ1bmJpbmQiLCJvRXZlbnQiLCJjb29yZGluYXRlcyIsIl9nZXRDb29yZGluYXRlcyIsIm9uZSIsIl9zdGFydERyYWciLCJhYnMiLCJfbVN1YnNjcmlwdGlvbnMiLCJzRXZlbnQiLCJmQ2FsbGJhY2siLCJvQ29udGV4dCIsImZuIiwiY3R4IiwiYXJncyIsInN1YnMiLCJ1bnNoaWZ0IiwiYWxsRXZlbnRTdWJzIiwiYlVuYm91bmQiLCJ0cmlnZ2VyIiwiX2RvbnRQcm9wYWdhdGVUb1BhcmVudCIsIl9jaGlsZEV2ZW50U291cmNlIiwiX29uRXZlbnRGcm9tVGhpcyIsIl9ib3VuZE9uRXZlbnRGcm9tQ2hpbGQiLCJfb25FdmVudEZyb21DaGlsZCIsIl9wcm9wYWdhdGVUb1BhcmVudCIsIl9wcm9wYWdhdGVUb0NoaWxkcmVuIiwib3JpZ2luYWxFdmVudCIsIl9fZ2wiLCJfX2dsQXJncyIsImV2ZW50TmFtZSIsImNyZWF0ZUV2ZW50Iiwib3BlbmVyIiwiaW5pdEV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJldmVudFR5cGUiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUV2ZW50IiwiY2hpbGRHbCIsIl8kb25FdmVudEZyb21QYXJlbnQiLCJfcmVhY3RDb21wb25lbnQiLCJfb3JpZ2luYWxDb21wb25lbnRXaWxsVXBkYXRlIiwiX2NvbnRhaW5lciIsIl9pbml0aWFsU3RhdGUiLCJfcmVhY3RDbGFzcyIsIl9nZXRSZWFjdENsYXNzIiwiX3JlbmRlciIsIl9kZXN0cm95IiwiUmVhY3RET00iLCJyZW5kZXIiLCJfZ2V0UmVhY3RDb21wb25lbnQiLCJnZXRFbGVtZW50IiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIl9vblVwZGF0ZSIsImJpbmQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicmVhY3RDbGFzcyIsImRlZmF1bHRQcm9wcyIsImdsRXZlbnRIdWIiLCJnbENvbnRhaW5lciIsInJlZiIsIl9nb3RSZWFjdENvbXBvbmVudCIsInByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRiIsInRvdWNoZXMiLCJ0YXJnZXRUb3VjaGVzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlT2JqZWN0IiwiY29udHJ1Y3RvciIsIk9iamVjdCIsImNyZWF0ZSIsIm9iamVjdCIsImtleXMiLCJnZXRIYXNoVmFsdWUiLCJtYXRjaGVzIiwiaGFzaCIsIm1hdGNoIiwiUmVnRXhwIiwicGFyYW0iLCJzZWFyY2giLCJrZXlWYWx1ZVBhaXJzIiwicGFyYW1zIiwicGFpciIsInNvdXJjZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5lZWRsZSIsImhheXN0YWNrIiwiSW50OEFycmF5Iiwib2JqIiwiYm91bmRBcmdzIiwiRnVuY3Rpb24iLCJib3VuZCIsImFycmF5IiwiRGF0ZSIsImdldFRpbWUiLCJy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Y0FMYixDQUFiOztBQU9BLE1BQUlHLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQixXQUFPQyxNQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsV0FBT0EsTUFBTSxDQUNSSixPQURFLENBQ00sSUFETixFQUNZLE1BRFosRUFFRkEsT0FGRSxDQUVNLElBRk4sRUFFWSxNQUZaLENBQVA7QUFHSDtBQUNKO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3BrQixTQUFULENBQW1Cc2tCLEtBQW5CLEVBQTBCO0FBQzdCLFNBQU9od0IsNkNBQUMsQ0FBQ213QixJQUFGLENBQU9ILEtBQUssQ0FBQ0YsT0FBTixDQUFjLGVBQWQsRUFBK0IsRUFBL0IsQ0FBUCxDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUMzTUQsb0QiLCJmaWxlIjoiZ29sZGVuLWxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR29sZGVuTGF5b3V0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHb2xkZW5MYXlvdXRcIl0gPSBmYWN0b3J5KHJvb3RbXCIkXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gaGVscGVyIGZpbGUgZm9yIHdlYnBhY2sgYnVpbGQgc3lzdGVtXG4vLyB3aGF0ZXZlciBpcyBpbXBvcnRlZC9leHBvcnRlZCBoZXJlIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkXG4vL2ltcG9ydCAnbGVzcy90ZXN0Lmxlc3MnXG4vL2ltcG9ydCAnLi9sZXNzL2dvbGRlbmxheW91dC1iYXNlLmxlc3MnXG4vL2ltcG9ydCAnLi9sZXNzL2dvbGRlbmxheW91dC1kYXJrLXRoZW1lLmxlc3MnXG4vL1xuLy8gTGF5b3V0XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9qc19lczYvTGF5b3V0TWFuYWdlcidcbi8vXG4vLyBjb250YWluZXJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbUNvbnRhaW5lciB9IGZyb20gJy4vanNfZXM2L2NvbnRhaW5lci9JdGVtQ29udGFpbmVyJ1xuLy9cbi8vIGNvbnRyb2xzXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyb3dzZXJQb3BvdXQgfSBmcm9tICcuL2pzX2VzNi9jb250cm9scy9Ccm93c2VyUG9wb3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL2pzX2VzNi9jb250cm9scy9IZWFkZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlckJ1dHRvbiB9IGZyb20gJy4vanNfZXM2L2NvbnRyb2xzL0hlYWRlckJ1dHRvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiIH0gZnJvbSAnLi9qc19lczYvY29udHJvbHMvVGFiJ1xuLy9cbi8vIGl0ZW1zXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vanNfZXM2L2l0ZW1zL0NvbXBvbmVudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm9vdCB9IGZyb20gJy4vanNfZXM2L2l0ZW1zL1Jvb3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvd09yQ29sdW1uIH0gZnJvbSAnLi9qc19lczYvaXRlbXMvUm93T3JDb2x1bW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YWNrIH0gZnJvbSAnLi9qc19lczYvaXRlbXMvU3RhY2snXG4vL1xuLy8gdXRpbHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnViYmxpbmdFdmVudCB9IGZyb20gJy4vanNfZXM2L3V0aWxzL0J1YmJsaW5nRXZlbnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbmZpZ01pbmlmaWVyIH0gZnJvbSAnLi9qc19lczYvdXRpbHMvQ29uZmlnTWluaWZpZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIERyYWdMaXN0ZW5lciB9IGZyb20gJy4vanNfZXM2L3V0aWxzL0RyYWdMaXN0ZW5lcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9qc19lczYvdXRpbHMvRXZlbnRFbWl0dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudEh1YiB9IGZyb20gJy4vanNfZXM2L3V0aWxzL0V2ZW50SHViJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2pzX2VzNi91dGlscy9SZWFjdENvbXBvbmVudEhhbmRsZXInXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vdXRpbHMvRXZlbnRFbWl0dGVyJ1xuaW1wb3J0IENvbmZpZ01pbmlmaWVyIGZyb20gJy4vdXRpbHMvQ29uZmlnTWluaWZpZXInXG5pbXBvcnQgRXZlbnRIdWIgZnJvbSAnLi91dGlscy9FdmVudEh1YidcblxuaW1wb3J0IFJvb3QgZnJvbSAnLi9pdGVtcy9Sb290J1xuaW1wb3J0IFJvd09yQ29sdW1uIGZyb20gJy4vaXRlbXMvUm93T3JDb2x1bW4nXG5pbXBvcnQgU3RhY2sgZnJvbSAnLi9pdGVtcy9TdGFjaydcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9pdGVtcy9Db21wb25lbnQnXG5pbXBvcnQgQWJzdHJhY3RDb250ZW50SXRlbSBmcm9tICcuL2l0ZW1zL0Fic3RyYWN0Q29udGVudEl0ZW0nXG5cbmltcG9ydCBCcm93c2VyUG9wb3V0IGZyb20gJy4vY29udHJvbHMvQnJvd3NlclBvcG91dCdcbmltcG9ydCBEcmFnU291cmNlIGZyb20gJy4vY29udHJvbHMvRHJhZ1NvdXJjZSdcbmltcG9ydCBEcm9wVGFyZ2V0SW5kaWNhdG9yIGZyb20gJy4vY29udHJvbHMvRHJvcFRhcmdldEluZGljYXRvcidcbmltcG9ydCBUcmFuc2l0aW9uSW5kaWNhdG9yIGZyb20gJy4vY29udHJvbHMvVHJhbnNpdGlvbkluZGljYXRvcidcblxuaW1wb3J0IENvbmZpZ3VyYXRpb25FcnJvciBmcm9tICcuL2Vycm9ycy9Db25maWd1cmF0aW9uRXJyb3InXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2NvbmZpZy9kZWZhdWx0Q29uZmlnJ1xuXG5pbXBvcnQge1xuICAgIGZuQmluZCxcbiAgICBvYmplY3RLZXlzLFxuICAgIGNvcHksXG4gICAgZ2V0VW5pcXVlSWQsXG4gICAgaW5kZXhPZixcbiAgICBpc0Z1bmN0aW9uLFxuICAgIHN0cmlwVGFncyxcbiAgICBnZXRRdWVyeVN0cmluZ1BhcmFtXG59IGZyb20gJy4vdXRpbHMvdXRpbHMnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0NPTVBPTkVOVF9JRCA9ICdsbS1yZWFjdC1jb21wb25lbnQnXG5cbi8qKlxuICogVGhlIG1haW4gY2xhc3MgdGhhdCB3aWxsIGJlIGV4cG9zZWQgYXMgR29sZGVuTGF5b3V0LlxuICpcbiAqIEBwdWJsaWNcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtHb2xkZW5MYXlvdXQgY29uZmlnfSBjb25maWdcbiAqIEBwYXJhbSB7W0RPTSBlbGVtZW50IGNvbnRhaW5lcl19IGNvbnRhaW5lciBDYW4gYmUgYSBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nIG9yIGEgRG9tIGVsZW1lbnQuIERlZmF1bHRzIHRvIGJvZHlcbiAqXG4gKiBAcmV0dXJucyB7Vk9JRH1cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dE1hbmFnZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgY29udGFpbmVyKSB7ICAgICAgICBcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlzSW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNGdWxsUGFnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yZXNpemVUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gICAgICAgIHRoaXMuX2l0ZW1BcmVhcyA9IFtdO1xuICAgICAgICB0aGlzLl9yZXNpemVGdW5jdGlvbiA9IGZuQmluZCh0aGlzLl9vblJlc2l6ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3VubG9hZEZ1bmN0aW9uID0gZm5CaW5kKHRoaXMuX29uVW5sb2FkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbWF4aW1pc2VkSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMuX21heGltaXNlUGxhY2Vob2xkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibG1fbWF4aW1pc2VfcGxhY2VcIj48L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5fY3JlYXRpb25UaW1lb3V0UGFzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N1YldpbmRvd3NDcmVhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RyYWdTb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMuX3VwZGF0aW5nQ29sdW1uc1Jlc3BvbnNpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmlyc3RMb2FkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgICAgICB0aGlzLm9wZW5Qb3BvdXRzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1N1YldpbmRvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV2ZW50SHViID0gbmV3IEV2ZW50SHViKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5kcm9wVGFyZ2V0SW5kaWNhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uSW5kaWNhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWJEcm9wUGxhY2Vob2xkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibG1fZHJvcF90YWJfcGxhY2Vob2xkZXJcIj48L2Rpdj4nKTtcblxuICAgICAgICBpZiAodGhpcy5pc1N1YldpbmRvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3R5cGVUb0l0ZW0gPSB7XG4gICAgICAgICAgICAnY29sdW1uJzogZm5CaW5kKFJvd09yQ29sdW1uLCB0aGlzLCBbdHJ1ZV0pLFxuICAgICAgICAgICAgJ3Jvdyc6IGZuQmluZChSb3dPckNvbHVtbiwgdGhpcywgW2ZhbHNlXSksXG4gICAgICAgICAgICAnc3RhY2snOiBTdGFjayxcbiAgICAgICAgICAgICdjb21wb25lbnQnOiBDb21wb25lbnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIEdvbGRlbkxheW91dCBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAgICAgKiByZXBsYWNlcyBpdHMga2V5cyBhbmQgdmFsdWVzIHJlY3Vyc2l2ZWx5IHdpdGhcbiAgICAgKiBvbmUgbGV0dGVyIGNvZGVzXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSAgIHtPYmplY3R9IGNvbmZpZyBBIEdvbGRlbkxheW91dCBjb25maWcgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtaW5pZmllZCBjb25maWdcbiAgICAgKi9cbiAgICBtaW5pZnlDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiAobmV3IENvbmZpZ01pbmlmaWVyKCkpLm1pbmlmeUNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgY29uZmlndXJhdGlvbiBPYmplY3QgdGhhdCB3YXMgcHJldmlvdXNseSBtaW5pZmllZFxuICAgICAqIHVzaW5nIG1pbmlmeUNvbmZpZyBhbmQgcmV0dXJucyBpdHMgb3JpZ2luYWwgdmVyc2lvblxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0gICB7T2JqZWN0fSBtaW5pZmllZENvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGhlIG9yaWdpbmFsIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICB1bm1pbmlmeUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgQ29uZmlnTWluaWZpZXIoKSkudW5taW5pZnlDb25maWcoY29uZmlnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgY29tcG9uZW50IHdpdGggdGhlIGxheW91dCBtYW5hZ2VyLiBJZiBhIGNvbmZpZ3VyYXRpb24gbm9kZVxuICAgICAqIG9mIHR5cGUgY29tcG9uZW50IGlzIHJlYWNoZWQgaXQgd2lsbCBsb29rIHVwIGNvbXBvbmVudE5hbWUgYW5kIGNyZWF0ZSB0aGVcbiAgICAgKiBhc3NvY2lhdGVkIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogIHtcbiAgICAgKiAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAqICAgIGNvbXBvbmVudE5hbWU6IFwiRXF1aXR5TmV3c0ZlZWRcIixcbiAgICAgKiAgICBjb21wb25lbnRTdGF0ZTogeyBcImZlZWRUb3BpY1wiOiBcInVzLWJsdWVjaGlwc1wiIH1cbiAgICAgKiAgfVxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gICB7RnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSByZWdpc3RlciBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50c1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCAnICsgbmFtZSArICcgaXMgYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW25hbWVdID0gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBjb21wb25lbnQgZnVuY3Rpb24gd2l0aCB0aGUgbGF5b3V0IG1hbmFnZXIuIFRoaXMgZnVuY3Rpb24gc2hvdWxkXG4gICAgICogcmV0dXJuIGEgY29uc3RydWN0b3IgZm9yIGEgY29tcG9uZW50IGJhc2VkIG9uIGEgY29uZmlnLiAgSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCBcbiAgICAgKiBhbmQgbm8gY29tcG9uZW50IGhhcyBiZWVuIHJlZ2lzdGVyZWQgdW5kZXIgdGhhdCBuYW1lIHVzaW5nIHJlZ2lzdGVyQ29tcG9uZW50LCBhbiBcbiAgICAgKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0gICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZWdpc3RlckNvbXBvbmVudEZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHJlZ2lzdGVyIGEgY2FsbGJhY2sgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ011bHRpcGxlIGNvbXBvbmVudCBmdW5jdGlvbnMgYXJlIGJlaW5nIHJlZ2lzdGVyZWQuICBPbmx5IHRoZSBmaW5hbCByZWdpc3RlcmVkIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZC4nKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RnVuY3Rpb24gPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbGF5b3V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGJhc2VkIG9uIHRoZSB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEdvbGRlbkxheW91dCBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgdG9Db25maWcocm9vdCkge1xuICAgICAgICB2YXIgY29uZmlnLCBuZXh0LCBpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGlzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgY3JlYXRlIGNvbmZpZywgbGF5b3V0IG5vdCB5ZXQgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290ICYmICEocm9vdCBpbnN0YW5jZW9mIEFic3RyYWN0Q29udGVudEl0ZW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3QgbXVzdCBiZSBhIENvbnRlbnRJdGVtJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBzZXR0aW5ncyAmIGxhYmVsc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgc2V0dGluZ3M6IGNvcHkoe30sIHRoaXMuY29uZmlnLnNldHRpbmdzKSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IGNvcHkoe30sIHRoaXMuY29uZmlnLmRpbWVuc2lvbnMpLFxuICAgICAgICAgICAgbGFiZWxzOiBjb3B5KHt9LCB0aGlzLmNvbmZpZy5sYWJlbHMpXG4gICAgICAgIH07XG5cbiAgICAgICAgLypcbiAgICAgICAgICogQ29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uZmlnLmNvbnRlbnQgPSBbXTtcbiAgICAgICAgbmV4dCA9IGZ1bmN0aW9uKGNvbmZpZ05vZGUsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBrZXksIGk7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIGl0ZW0uY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ05vZGVba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5jb250ZW50SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnTm9kZS5jb250ZW50ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnTm9kZS5jb250ZW50W2ldID0ge307XG4gICAgICAgICAgICAgICAgICAgIG5leHQoY29uZmlnTm9kZS5jb250ZW50W2ldLCBpdGVtLmNvbnRlbnRJdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICBuZXh0KGNvbmZpZywge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtczogW3Jvb3RdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoY29uZmlnLCB0aGlzLnJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogUmV0cmlldmUgY29uZmlnIGZvciBzdWJ3aW5kb3dzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl8kcmVjb25jaWxlUG9wb3V0V2luZG93cygpO1xuICAgICAgICBjb25maWcub3BlblBvcG91dHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMub3BlblBvcG91dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZy5vcGVuUG9wb3V0cy5wdXNoKHRoaXMub3BlblBvcG91dHNbaV0udG9Db25maWcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBZGQgbWF4aW1pc2VkIGl0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGNvbmZpZy5tYXhpbWlzZWRJdGVtSWQgPSB0aGlzLl9tYXhpbWlzZWRJdGVtID8gJ19fZ2xNYXhpbWlzZWQnIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJldmlvdXNseSByZWdpc3RlcmVkIGNvbXBvbmVudC4gIEF0dGVtcHRzIHRvIHV0aWxpemUgcmVnaXN0ZXJlZCBcbiAgICAgKiBjb21wb25lbnQgYnkgbmFtZSBmaXJzdCwgdGhlbiBmYWxscyBiYWNrIHRvIHRoZSBjb21wb25lbnQgZnVuY3Rpb24uICBJZiBlaXRoZXJcbiAgICAgKiBsYWNrIGEgcmVzcG9uc2UgZm9yIHdoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUsIGl0IHRocm93cyBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gVGhlIGl0ZW0gY29uZmlnXG4gICAgICogXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGdldENvbXBvbmVudChjb25maWcpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0Q29tcG9uZW50TmFtZUZyb21Db25maWcoY29uZmlnKVxuICAgICAgICBsZXQgY29tcG9uZW50VG9Vc2UgPSB0aGlzLl9jb21wb25lbnRzW25hbWVdXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnRUb1VzZSA9IGNvbXBvbmVudFRvVXNlIHx8IHRoaXMuX2NvbXBvbmVudEZ1bmN0aW9uKHtjb25maWd9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wb25lbnRUb1VzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkVycm9yKCdVbmtub3duIGNvbXBvbmVudCBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50VG9Vc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYWN0dWFsIGxheW91dC4gTXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGluaXRpYWwgY29tcG9uZW50c1xuICAgICAqIGFyZSByZWdpc3RlcmVkLiBSZWN1cnNlcyB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIGFuZCBzZXRzIHVwXG4gICAgICogdGhlIGl0ZW0gdHJlZS5cbiAgICAgKlxuICAgICAqIElmIGNhbGxlZCBiZWZvcmUgdGhlIGRvY3VtZW50IGlzIHJlYWR5IGl0IGFkZHMgaXRzZWxmIGFzIGEgbGlzdGVuZXJcbiAgICAgKiB0byB0aGUgZG9jdW1lbnQucmVhZHkgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXQoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSB0aGUgcG9wb3V0IHdpbmRvd3Mgc3RyYWlnaHQgYXdheS4gSWYgcG9wb3V0cyBhcmUgYmxvY2tlZFxuICAgICAgICAgKiBhbiBlcnJvciBpcyB0aHJvd24gb24gdGhlIHNhbWUgJ3RocmVhZCcgcmF0aGVyIHRoYW4gYSB0aW1lb3V0IGFuZCBjYW5cbiAgICAgICAgICogYmUgY2F1Z2h0LiBUaGlzIGFsc28gcHJldmVudHMgYW55IGZ1cnRoZXIgaW5pdGlsaXNhdGlvbiBmcm9tIHRha2luZyBwbGFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLl9zdWJXaW5kb3dzQ3JlYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN1YldpbmRvd3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3N1YldpbmRvd3NDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBkb2N1bWVudCBpc24ndCByZWFkeSB5ZXQsIHdhaXQgZm9yIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCBkb2N1bWVudC5ib2R5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmbkJpbmQodGhpcy5pbml0LCB0aGlzKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBpcyBhIHN1YndpbmRvdywgd2FpdCBhIGZldyBtaWxsaXNlY29uZHMgZm9yIHRoZSBvcmlnaW5hbFxuICAgICAgICAgKiBwYWdlJ3MganMgY2FsbHMgdG8gYmUgZXhlY3V0ZWQsIHRoZW4gcmVwbGFjZSB0aGUgYm9kaWVzIGNvbnRlbnRcbiAgICAgICAgICogd2l0aCBHb2xkZW5MYXlvdXRcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmlzU3ViV2luZG93ID09PSB0cnVlICYmIHRoaXMuX2NyZWF0aW9uVGltZW91dFBhc3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZm5CaW5kKHRoaXMuaW5pdCwgdGhpcyksIDcpO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpb25UaW1lb3V0UGFzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU3ViV2luZG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RUb1dpbmRvd01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmRyb3BUYXJnZXRJbmRpY2F0b3IgPSBuZXcgRHJvcFRhcmdldEluZGljYXRvcih0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkluZGljYXRvciA9IG5ldyBUcmFuc2l0aW9uSW5kaWNhdG9yKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGUodGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbnNSZXNwb25zaXZlKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGlzZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsYXlvdXQgbWFuYWdlcnMgc2l6ZVxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSAgIHtbaW50XX0gd2lkdGggIGhlaWdodCBpbiBwaXhlbHNcbiAgICAgKiBAcGFyYW0gICB7W2ludF19IGhlaWdodCB3aWR0aCBpbiBwaXhlbHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHVwZGF0ZVNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jb250YWluZXIud2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpc2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuY2FsbERvd253YXJkcygnc2V0U2l6ZScsIFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4aW1pc2VkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21heGltaXNlZEl0ZW0uZWxlbWVudC53aWR0aCh0aGlzLmNvbnRhaW5lci53aWR0aCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhpbWlzZWRJdGVtLmVsZW1lbnQuaGVpZ2h0KHRoaXMuY29udGFpbmVyLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhpbWlzZWRJdGVtLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uc1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBMYXlvdXRNYW5hZ2VyIGluc3RhbmNlIGl0c2VsZiBhcyB3ZWxsIGFzIGV2ZXJ5IENvbnRlbnRJdGVtXG4gICAgICogd2l0aGluIGl0LiBBZnRlciB0aGlzIGlzIGNhbGxlZCBub3RoaW5nIHNob3VsZCBiZSBsZWZ0IG9mIHRoZSBMYXlvdXRNYW5hZ2VyLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGlzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25VbmxvYWQoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplJywgdGhpcy5fcmVzaXplRnVuY3Rpb24pO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCd1bmxvYWQgYmVmb3JldW5sb2FkJywgdGhpcy5fdW5sb2FkRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnJvb3QuY2FsbERvd253YXJkcygnXyRkZXN0cm95JywgW10sIHRydWUpO1xuICAgICAgICB0aGlzLnJvb3QuY29udGVudEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMudGFiRHJvcFBsYWNlaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmRyb3BUYXJnZXRJbmRpY2F0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25JbmRpY2F0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmV2ZW50SHViLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLl9kcmFnU291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdTb3VyY2UpIHtcbiAgICAgICAgICAgIGRyYWdTb3VyY2UuX2RyYWdMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgICAgICBkcmFnU291cmNlLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGRyYWdTb3VyY2UuX2l0ZW1Db25maWcgPSBudWxsO1xuICAgICAgICAgICAgZHJhZ1NvdXJjZS5fZHJhZ0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2RyYWdTb3VyY2VzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgY29uZmlnIGNvcnJlc3BvbmRzIHRvIGEgcmVhY3QgY29tcG9uZW50IG9yIGEgbm9ybWFsIGNvbXBvbmVudC5cbiAgICAgKiBcbiAgICAgKiBBdCBzb21lIHBvaW50IHRoZSB0eXBlIGlzIG11dGF0ZWQsIGJ1dCB0aGUgY29tcG9uZW50TmFtZSBzaG91bGQgdGhlbiBjb3JyZXNwb25kIHRvIHRoZVxuICAgICAqIFJFQUNUX0NPTVBPTkVOVF9JRC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIEl0ZW1Db25maWdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cblxuICAgIGlzUmVhY3RDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBjb25maWcudHlwZSA9PT0gJ3JlYWN0LWNvbXBvbmVudCcgfHwgY29uZmlnLmNvbXBvbmVudE5hbWUgPT09IFJFQUNUX0NPTVBPTkVOVF9JRFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGNvbmZpZywgdGFraW5nIGludG8gYWNjb3VudCB3aGV0aGVyIGl0J3MgYSByZWFjdCBjb21wb25lbnQgb3Igbm90LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgSXRlbUNvbmZpZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG5cbiAgICBnZXRDb21wb25lbnROYW1lRnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFjdENvbmZpZyhjb25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLmNvbXBvbmVudFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWcuY29tcG9uZW50TmFtZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgbmV3IGl0ZW0gdHJlZSBzdHJ1Y3R1cmVzIGJhc2VkIG9uIGEgcHJvdmlkZWRcbiAgICAgKiBJdGVtQ29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0gICB7T2JqZWN0fSBjb25maWcgSXRlbUNvbmZpZ1xuICAgICAqIEBwYXJhbSAgIHtbQ29udGVudEl0ZW1dfSBwYXJlbnQgVGhlIGl0ZW0gdGhlIG5ld2x5IGNyZWF0ZWQgaXRlbSBzaG91bGQgYmUgYSBjaGlsZCBvZlxuICAgICAqXG4gICAgICogQHJldHVybnMge0NvbnRlbnRJdGVtfVxuICAgICAqL1xuICAgIGNyZWF0ZUNvbnRlbnRJdGVtKGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHZhciB0eXBlRXJyb3JNc2csIGNvbnRlbnRJdGVtO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkVycm9yKCdNaXNzaW5nIHBhcmFtZXRlciBcXCd0eXBlXFwnJywgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzUmVhY3RDb25maWcoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnY29tcG9uZW50JztcbiAgICAgICAgICAgIGNvbmZpZy5jb21wb25lbnROYW1lID0gUkVBQ1RfQ09NUE9ORU5UX0lEO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl90eXBlVG9JdGVtW2NvbmZpZy50eXBlXSkge1xuICAgICAgICAgICAgdHlwZUVycm9yTXNnID0gJ1Vua25vd24gdHlwZSBcXCcnICsgY29uZmlnLnR5cGUgKyAnXFwnLiAnICtcbiAgICAgICAgICAgICAgICAnVmFsaWQgdHlwZXMgYXJlICcgKyBvYmplY3RLZXlzKHRoaXMuX3R5cGVUb0l0ZW0pLmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FcnJvcih0eXBlRXJyb3JNc2cpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogV2UgYWRkIGFuIGFkZGl0aW9uYWwgc3RhY2sgYXJvdW5kIGV2ZXJ5IGNvbXBvbmVudCB0aGF0J3Mgbm90IHdpdGhpbiBhIHN0YWNrIGFueXdheXMuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgY29tcG9uZW50XG4gICAgICAgICAgICBjb25maWcudHlwZSA9PT0gJ2NvbXBvbmVudCcgJiZcblxuICAgICAgICAgICAgLy8gYW5kIGl0J3Mgbm90IGFscmVhZHkgd2l0aGluIGEgc3RhY2tcbiAgICAgICAgICAgICEocGFyZW50IGluc3RhbmNlb2YgU3RhY2spICYmXG5cbiAgICAgICAgICAgIC8vIGFuZCB3ZSBoYXZlIGEgcGFyZW50XG4gICAgICAgICAgICAhIXBhcmVudCAmJlxuXG4gICAgICAgICAgICAvLyBhbmQgaXQncyBub3QgdGhlIHRvcG1vc3QgaXRlbSBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgICEodGhpcy5pc1N1YldpbmRvdyA9PT0gdHJ1ZSAmJiBwYXJlbnQgaW5zdGFuY2VvZiBSb290KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RhY2snLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtjb25maWddXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudEl0ZW0gPSBuZXcgdGhpcy5fdHlwZVRvSXRlbVtjb25maWcudHlwZV0odGhpcywgY29uZmlnLCBwYXJlbnQpO1xuICAgICAgICByZXR1cm4gY29udGVudEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvcG91dCB3aW5kb3cgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbnRlbnQgYW5kIGRpbWVuc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtPYmplY3R8bG0uaXRlbXNBYnN0cmFjdENvbnRlbnRJdGVtfSBjb25maWdPckNvbnRlbnRJdGVtXG4gICAgICogQHBhcmFtICAge1tPYmplY3RdfSBkaW1lbnNpb25zIEEgbWFwIHdpdGggd2lkdGgsIGhlaWdodCwgbGVmdCBhbmQgdG9wXG4gICAgICogQHBhcmFtICAgIHtbU3RyaW5nXX0gcGFyZW50SWQgdGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoaXMgaXRlbSB3aWxsIGJlIGFwcGVuZGVkIHRvXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcG9wSW4gaXMgY2FsbGVkXG4gICAgICogQHBhcmFtICAgIHtbTnVtYmVyXX0gaW5kZXhJblBhcmVudCBUaGUgcG9zaXRpb24gb2YgdGhpcyBpdGVtIHdpdGhpbiBpdHMgcGFyZW50IGVsZW1lbnRcbiAgICAgXG4gICAgICogQHJldHVybnMge0Jyb3dzZXJQb3BvdXR9XG4gICAgICovXG4gICAgY3JlYXRlUG9wb3V0KGNvbmZpZ09yQ29udGVudEl0ZW0sIGRpbWVuc2lvbnMsIHBhcmVudElkLCBpbmRleEluUGFyZW50KSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdPckNvbnRlbnRJdGVtLFxuICAgICAgICAgICAgaXNJdGVtID0gY29uZmlnT3JDb250ZW50SXRlbSBpbnN0YW5jZW9mIEFic3RyYWN0Q29udGVudEl0ZW0sXG4gICAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHdpbmRvd0xlZnQsXG4gICAgICAgICAgICB3aW5kb3dUb3AsXG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgIGJyb3dzZXJQb3BvdXQ7XG5cbiAgICAgICAgcGFyZW50SWQgPSBwYXJlbnRJZCB8fCBudWxsO1xuXG4gICAgICAgIGlmIChpc0l0ZW0pIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHRoaXMudG9Db25maWcoY29uZmlnT3JDb250ZW50SXRlbSkuY29udGVudDtcbiAgICAgICAgICAgIHBhcmVudElkID0gZ2V0VW5pcXVlSWQoKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGUgaXRlbSBpcyB0aGUgb25seSBjb21wb25lbnQgd2l0aGluIGEgc3RhY2sgb3IgZm9yIHNvbWVcbiAgICAgICAgICAgICAqIG90aGVyIHJlYXNvbiB0aGUgb25seSBjaGlsZCBvZiBpdHMgcGFyZW50IHRoZSBwYXJlbnQgd2lsbCBiZSBkZXN0cm95ZWRcbiAgICAgICAgICAgICAqIHdoZW4gdGhlIGNoaWxkIGlzIHJlbW92ZWQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGlzIHdlIG1vdmUgdXAgdGhlIHRyZWUgdW50aWwgd2UgZmluZCBzb21ldGhpbmdcbiAgICAgICAgICAgICAqIHRoYXQgd2lsbCByZW1haW4gYWZ0ZXIgdGhlIGl0ZW0gaXMgYmVpbmcgcG9wcGVkIG91dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXJlbnQgPSBjb25maWdPckNvbnRlbnRJdGVtLnBhcmVudDtcbiAgICAgICAgICAgIGNoaWxkID0gY29uZmlnT3JDb250ZW50SXRlbTtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQuY29udGVudEl0ZW1zLmxlbmd0aCA9PT0gMSAmJiAhcGFyZW50LmlzUm9vdCkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudC5hZGRJZChwYXJlbnRJZCk7XG4gICAgICAgICAgICBpZiAoaXNOYU4oaW5kZXhJblBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleEluUGFyZW50ID0gaW5kZXhPZihjaGlsZCwgcGFyZW50LmNvbnRlbnRJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIShjb25maWcgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBbY29uZmlnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFkaW1lbnNpb25zICYmIGlzSXRlbSkge1xuICAgICAgICAgICAgd2luZG93TGVmdCA9IHdpbmRvdy5zY3JlZW5YIHx8IHdpbmRvdy5zY3JlZW5MZWZ0O1xuICAgICAgICAgICAgd2luZG93VG9wID0gd2luZG93LnNjcmVlblkgfHwgd2luZG93LnNjcmVlblRvcDtcbiAgICAgICAgICAgIG9mZnNldCA9IGNvbmZpZ09yQ29udGVudEl0ZW0uZWxlbWVudC5vZmZzZXQoKTtcblxuICAgICAgICAgICAgZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiB3aW5kb3dMZWZ0ICsgb2Zmc2V0LmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB3aW5kb3dUb3AgKyBvZmZzZXQudG9wLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWdPckNvbnRlbnRJdGVtLmVsZW1lbnQud2lkdGgoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbmZpZ09yQ29udGVudEl0ZW0uZWxlbWVudC5oZWlnaHQoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGltZW5zaW9ucyAmJiAhaXNJdGVtKSB7XG4gICAgICAgICAgICBkaW1lbnNpb25zID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5zY3JlZW5YIHx8IHdpbmRvdy5zY3JlZW5MZWZ0ICsgMjAsXG4gICAgICAgICAgICAgICAgdG9wOiB3aW5kb3cuc2NyZWVuWSB8fCB3aW5kb3cuc2NyZWVuVG9wICsgMjAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwOVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0l0ZW0pIHtcbiAgICAgICAgICAgIGNvbmZpZ09yQ29udGVudEl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicm93c2VyUG9wb3V0ID0gbmV3IEJyb3dzZXJQb3BvdXQoY29uZmlnLCBkaW1lbnNpb25zLCBwYXJlbnRJZCwgaW5kZXhJblBhcmVudCwgdGhpcyk7XG5cbiAgICAgICAgYnJvd3NlclBvcG91dC5vbignaW5pdGlhbGlzZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZW1pdCgnd2luZG93T3BlbmVkJywgYnJvd3NlclBvcG91dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyb3dzZXJQb3BvdXQub24oJ2Nsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5fJHJlY29uY2lsZVBvcG91dFdpbmRvd3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcGVuUG9wb3V0cy5wdXNoKGJyb3dzZXJQb3BvdXQpO1xuXG4gICAgICAgIHJldHVybiBicm93c2VyUG9wb3V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIERyYWdMaXN0ZW5lciB0byBhbnkgZ2l2ZW4gRE9NIGVsZW1lbnRcbiAgICAgKiBhbmQgdHVybnMgaXQgaW50byBhIHdheSBvZiBjcmVhdGluZyBuZXcgQ29udGVudEl0ZW1zXG4gICAgICogYnkgJ2RyYWdnaW5nJyB0aGUgRE9NIGVsZW1lbnQgaW50byB0aGUgbGF5b3V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7alF1ZXJ5IERPTSBlbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICAge09iamVjdHxGdW5jdGlvbn0gaXRlbUNvbmZpZyBmb3IgdGhlIG5ldyBpdGVtIHRvIGJlIGNyZWF0ZWQsIG9yIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBwcm92aWRlIGl0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RHJhZ1NvdXJjZX0gIGFuIG9wYXF1ZSBvYmplY3QgdGhhdCBpZGVudGlmaWVzIHRoZSBET00gZWxlbWVudFxuXHQgKiAgICAgICAgICBhbmQgdGhlIGF0dGFjaGVkIGl0ZW1Db25maWcuIFRoaXMgY2FuIGJlIHVzZWQgaW5cblx0ICogICAgICAgICAgcmVtb3ZlRHJhZ1NvdXJjZSgpIGxhdGVyIHRvIGdldCByaWQgb2YgdGhlIGRyYWcgbGlzdGVuZXJzLlxuICAgICAqL1xuICAgIGNyZWF0ZURyYWdTb3VyY2UoZWxlbWVudCwgaXRlbUNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5zZXR0aW5ncy5jb25zdHJhaW5EcmFnVG9Db250YWluZXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRyYWdTb3VyY2UgPSBuZXcgRHJhZ1NvdXJjZSgkKGVsZW1lbnQpLCBpdGVtQ29uZmlnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZHJhZ1NvdXJjZXMucHVzaChkcmFnU291cmNlKTtcblxuICAgICAgICByZXR1cm4gZHJhZ1NvdXJjZTtcbiAgICB9XG5cbiAgICAvKipcblx0ICogUmVtb3ZlcyBhIERyYWdMaXN0ZW5lciBhZGRlZCBieSBjcmVhdGVEcmFnU291cmNlKCkgc28gdGhlIGNvcnJlc3BvbmRpbmdcblx0ICogRE9NIGVsZW1lbnQgaXMgbm90IGEgZHJhZyBzb3VyY2UgYW55IG1vcmUuXG5cdCAqXG5cdCAqIEBwYXJhbSAgIHtqUXVlcnkgRE9NIGVsZW1lbnR9IGVsZW1lbnRcblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRyZW1vdmVEcmFnU291cmNlKGRyYWdTb3VyY2UpIHtcblx0XHRkcmFnU291cmNlLmRlc3Ryb3koKTtcblx0XHRsbS51dGlscy5yZW1vdmVGcm9tQXJyYXkoIGRyYWdTb3VyY2UsIHRoaXMuX2RyYWdTb3VyY2VzICk7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFByb2dyYW1tYXRpY2FsbHkgc2VsZWN0cyBhbiBpdGVtLiBUaGlzIGRlc2VsZWN0c1xuICAgICAqIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgc2VsZWN0cyB0aGUgc3BlY2lmaWVkIGl0ZW1cbiAgICAgKiBhbmQgZW1pdHMgYSBzZWxlY3Rpb25DaGFuZ2VkIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gaXRlbSNcbiAgICAgKiBAcGFyYW0gICB7W0Jvb2xlYW5dfSBfJHNpbGVudCBXaGVhdGhlciB0byBub3RpZnkgdGhlIGl0ZW0gb2YgaXRzIHNlbGVjdGlvblxuICAgICAqIEBldmVudCAgICBzZWxlY3Rpb25DaGFuZ2VkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vk9JRH1cbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtKGl0ZW0sIF8kc2lsZW50KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNldHRpbmdzLnNlbGVjdGlvbkVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHNldCBzZWxlY3Rpb25FbmFibGVkIHRvIHRydWUgdG8gdXNlIHRoaXMgZmVhdHVyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbSAmJiBfJHNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbkNoYW5nZWQnLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFBBQ0tBR0UgUFJJVkFURVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIF8kbWF4aW1pc2VJdGVtKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLl9tYXhpbWlzZWRJdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl8kbWluaW1pc2VJdGVtKHRoaXMuX21heGltaXNlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21heGltaXNlZEl0ZW0gPSBjb250ZW50SXRlbTtcbiAgICAgICAgY29udGVudEl0ZW0ub24oICdiZWZvcmVJdGVtRGVzdHJveWVkJywgdGhpcy5fJGNsZWFudXBCZWZvcmVNYXhpbWlzZWRJdGVtRGVzdHJveWVkLCB0aGlzICk7XG4gICAgICAgIHRoaXMuX21heGltaXNlZEl0ZW0uYWRkSWQoJ19fZ2xNYXhpbWlzZWQnKTtcbiAgICAgICAgY29udGVudEl0ZW0uZWxlbWVudC5hZGRDbGFzcygnbG1fbWF4aW1pc2VkJyk7XG4gICAgICAgIGNvbnRlbnRJdGVtLmVsZW1lbnQuYWZ0ZXIodGhpcy5fbWF4aW1pc2VQbGFjZWhvbGRlcik7XG4gICAgICAgIHRoaXMucm9vdC5lbGVtZW50LnByZXBlbmQoY29udGVudEl0ZW0uZWxlbWVudCk7XG4gICAgICAgIGNvbnRlbnRJdGVtLmVsZW1lbnQud2lkdGgodGhpcy5jb250YWluZXIud2lkdGgoKSk7XG4gICAgICAgIGNvbnRlbnRJdGVtLmVsZW1lbnQuaGVpZ2h0KHRoaXMuY29udGFpbmVyLmhlaWdodCgpKTtcbiAgICAgICAgY29udGVudEl0ZW0uY2FsbERvd253YXJkcygnc2V0U2l6ZScpO1xuICAgICAgICB0aGlzLl9tYXhpbWlzZWRJdGVtLmVtaXQoJ21heGltaXNlZCcpO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlQ2hhbmdlZCcpO1xuICAgIH1cblxuICAgIF8kbWluaW1pc2VJdGVtKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIGNvbnRlbnRJdGVtLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xtX21heGltaXNlZCcpO1xuICAgICAgICBjb250ZW50SXRlbS5yZW1vdmVJZCgnX19nbE1heGltaXNlZCcpO1xuICAgICAgICB0aGlzLl9tYXhpbWlzZVBsYWNlaG9sZGVyLmFmdGVyKGNvbnRlbnRJdGVtLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9tYXhpbWlzZVBsYWNlaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICBjb250ZW50SXRlbS5wYXJlbnQuY2FsbERvd253YXJkcygnc2V0U2l6ZScpO1xuICAgICAgICB0aGlzLl9tYXhpbWlzZWRJdGVtID0gbnVsbDtcbiAgICAgICAgY29udGVudEl0ZW0ub2ZmKCAnYmVmb3JlSXRlbURlc3Ryb3llZCcsIHRoaXMuXyRjbGVhbnVwQmVmb3JlTWF4aW1pc2VkSXRlbURlc3Ryb3llZCwgdGhpcyApO1xuICAgICAgICBjb250ZW50SXRlbS5lbWl0KCdtaW5pbWlzZWQnKTtcbiAgICAgICAgdGhpcy5lbWl0KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICB9XG5cbiAgICBfJGNsZWFudXBCZWZvcmVNYXhpbWlzZWRJdGVtRGVzdHJveWVkKCkge1xuXHRcdGlmICh0aGlzLl9tYXhpbWlzZWRJdGVtID09PSBldmVudC5vcmlnaW4pIHtcblx0XHRcdHRoaXMuX21heGltaXNlZEl0ZW0ub2ZmKCAnYmVmb3JlSXRlbURlc3Ryb3llZCcsIHRoaXMuXyRjbGVhbnVwQmVmb3JlTWF4aW1pc2VkSXRlbURlc3Ryb3llZCwgdGhpcyApO1xuXHRcdFx0dGhpcy5fbWF4aW1pc2VkSXRlbSA9IG51bGw7XG5cdFx0fVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGdldCBhcm91bmQgc2FuZGJveGVkIGlmcmFtZSByZXN0cmljdGlvbnMuXG4gICAgICogSWYgJ2FsbG93LXRvcC1uYXZpZ2F0aW9uJyBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBpZnJhbWUncyAnc2FuZGJveCcgYXR0cmlidXRlXG4gICAgICogKGFzIGlzIHRoZSBjYXNlIHdpdGggY29kZXBlbnMpIHRoZSBwYXJlbnQgd2luZG93IGlzIGZvcmJpZGRlbiBmcm9tIGNhbGxpbmcgY2VydGFpblxuICAgICAqIG1ldGhvZHMgb24gdGhlIGNoaWxkLCBzdWNoIGFzIHdpbmRvdy5jbG9zZSgpIG9yIHNldHRpbmcgZG9jdW1lbnQubG9jYXRpb24uaHJlZi5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJldmVudGVkIEdvbGRlbkxheW91dCBwb3BvdXRzIGZyb20gcG9wcGluZyBpbiBpbiBjb2RlcGVucy4gVGhlIGZpeCBpcyB0byBjYWxsXG4gICAgICogXyRjbG9zZVdpbmRvdyBvbiB0aGUgY2hpbGQgd2luZG93J3MgZ2wgaW5zdGFuY2Ugd2hpY2ggKGFmdGVyIGEgdGltZW91dCB0byBkaXNjb25uZWN0XG4gICAgICogdGhlIGludm9raW5nIG1ldGhvZCBmcm9tIHRoZSBjbG9zZSBjYWxsKSBjbG9zZXMgaXRzZWxmLlxuICAgICAqXG4gICAgICogQHBhY2thZ2VQcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfJGNsb3NlV2luZG93KCkge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBfJGdldEFyZWEoeCwgeSkge1xuICAgICAgICB2YXIgaSwgYXJlYSwgc21hbGxlc3RTdXJmYWNlID0gSW5maW5pdHksXG4gICAgICAgICAgICBtYXRoaW5nQXJlYSA9IG51bGw7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2l0ZW1BcmVhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJlYSA9IHRoaXMuX2l0ZW1BcmVhc1tpXTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHggPiBhcmVhLngxICYmXG4gICAgICAgICAgICAgICAgeCA8IGFyZWEueDIgJiZcbiAgICAgICAgICAgICAgICB5ID4gYXJlYS55MSAmJlxuICAgICAgICAgICAgICAgIHkgPCBhcmVhLnkyICYmXG4gICAgICAgICAgICAgICAgc21hbGxlc3RTdXJmYWNlID4gYXJlYS5zdXJmYWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbWFsbGVzdFN1cmZhY2UgPSBhcmVhLnN1cmZhY2U7XG4gICAgICAgICAgICAgICAgbWF0aGluZ0FyZWEgPSBhcmVhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGhpbmdBcmVhO1xuICAgIH1cblxuICAgIF8kY3JlYXRlUm9vdEl0ZW1BcmVhcygpIHtcbiAgICAgICAgdmFyIGFyZWFTaXplID0gNTA7XG4gICAgICAgIHZhciBzaWRlcyA9IHtcbiAgICAgICAgICAgIHkyOiAneTEnLFxuICAgICAgICAgICAgeDI6ICd4MScsXG4gICAgICAgICAgICB5MTogJ3kyJyxcbiAgICAgICAgICAgIHgxOiAneDInXG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIHNpZGUgaW4gc2lkZXMpIHtcbiAgICAgICAgICAgIHZhciBhcmVhID0gdGhpcy5yb290Ll8kZ2V0QXJlYSgpO1xuICAgICAgICAgICAgYXJlYS5zaWRlID0gc2lkZTtcbiAgICAgICAgICAgIGlmIChzaWRlc1tzaWRlXVsxXSA9PT0gJzInIClcbiAgICAgICAgICAgICAgICBhcmVhW3NpZGVdID0gYXJlYVtzaWRlc1tzaWRlXV0gLSBhcmVhU2l6ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhcmVhW3NpZGVdID0gYXJlYVtzaWRlc1tzaWRlXV0gKyBhcmVhU2l6ZTtcbiAgICAgICAgICAgIGFyZWEuc3VyZmFjZSA9IChhcmVhLngyIC0gYXJlYS54MSkgKiAoYXJlYS55MiAtIGFyZWEueTEpO1xuICAgICAgICAgICAgdGhpcy5faXRlbUFyZWFzLnB1c2goYXJlYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfJGNhbGN1bGF0ZUl0ZW1BcmVhcygpIHtcbiAgICAgICAgdmFyIGksIGFyZWEsIGFsbENvbnRlbnRJdGVtcyA9IHRoaXMuX2dldEFsbENvbnRlbnRJdGVtcygpO1xuICAgICAgICB0aGlzLl9pdGVtQXJlYXMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIGxhc3QgaXRlbSBpcyBkcmFnZ2VkIG91dCwgaGlnaGxpZ2h0IHRoZSBlbnRpcmUgY29udGFpbmVyIHNpemUgdG9cbiAgICAgICAgICogYWxsb3cgdG8gcmUtZHJvcCBpdC4gYWxsQ29udGVudEl0ZW1zWyAwIF0gPT09IHRoaXMucm9vdCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAqXG4gICAgICAgICAqIERvbid0IGluY2x1ZGUgcm9vdCBpbnRvIHRoZSBwb3NzaWJsZSBkcm9wIGFyZWFzIHRob3VnaCBvdGhlcndpc2Ugc2luY2UgaXRcbiAgICAgICAgICogd2lsbCB1c2VkIGZvciBldmVyeSBnYXAgaW4gdGhlIGxheW91dCwgZS5nLiBzcGxpdHRlcnNcbiAgICAgICAgICovXG4gICAgICAgIGlmIChhbGxDb250ZW50SXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pdGVtQXJlYXMucHVzaCh0aGlzLnJvb3QuXyRnZXRBcmVhKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjcmVhdGVSb290SXRlbUFyZWFzKCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbENvbnRlbnRJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBpZiAoIShhbGxDb250ZW50SXRlbXNbaV0uaXNTdGFjaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJlYSA9IGFsbENvbnRlbnRJdGVtc1tpXS5fJGdldEFyZWEoKTtcblxuICAgICAgICAgICAgaWYgKGFyZWEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJlYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbUFyZWFzID0gdGhpcy5faXRlbUFyZWFzLmNvbmNhdChhcmVhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbUFyZWFzLnB1c2goYXJlYSk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHt9O1xuICAgICAgICAgICAgICAgIGNvcHkoaGVhZGVyLCBhcmVhKTtcbiAgICAgICAgICAgICAgICBjb3B5KGhlYWRlciwgYXJlYS5jb250ZW50SXRlbS5fY29udGVudEFyZWFEaW1lbnNpb25zLmhlYWRlci5oaWdobGlnaHRBcmVhKTtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3VyZmFjZSA9IChoZWFkZXIueDIgLSBoZWFkZXIueDEpICogKGhlYWRlci55MiAtIGhlYWRlci55MSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbUFyZWFzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgY29udGVudEl0ZW0gb3IgYSBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25hbGx5IGEgcGFyZW50XG4gICAgICogaXRlbSBhbmQgcmV0dXJucyBhbiBpbml0aWFsaXNlZCBpbnN0YW5jZSBvZiB0aGUgY29udGVudEl0ZW0uXG4gICAgICogSWYgdGhlIGNvbnRlbnRJdGVtIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGZpcnN0IGNhbGxlZFxuICAgICAqXG4gICAgICogQHBhY2thZ2VQcml2YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJ0cmFjdENvbnRlbnRJdGVtfE9iamVjdHxGdW5jdGlvbn0gY29udGVudEl0ZW1PckNvbmZpZ1xuICAgICAqIEBwYXJhbSAgIHtBYnRyYWN0Q29udGVudEl0ZW19IHBhcmVudCBPbmx5IG5lY2Vzc2FyeSB3aGVuIHBhc3NpbmcgaW4gY29uZmlnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QWJ0cmFjdENvbnRlbnRJdGVtfVxuICAgICAqL1xuICAgIF8kbm9ybWFsaXplQ29udGVudEl0ZW0oY29udGVudEl0ZW1PckNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIGlmICghY29udGVudEl0ZW1PckNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb250ZW50IGl0ZW0gZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY29udGVudEl0ZW1PckNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtT3JDb25maWcgPSBjb250ZW50SXRlbU9yQ29uZmlnKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudEl0ZW1PckNvbmZpZyBpbnN0YW5jZW9mIEFic3RyYWN0Q29udGVudEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50SXRlbU9yQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChjb250ZW50SXRlbU9yQ29uZmlnKSAmJiBjb250ZW50SXRlbU9yQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdDb250ZW50SXRlbSA9IHRoaXMuY3JlYXRlQ29udGVudEl0ZW0oY29udGVudEl0ZW1PckNvbmZpZywgcGFyZW50KTtcbiAgICAgICAgICAgIG5ld0NvbnRlbnRJdGVtLmNhbGxEb3dud2FyZHMoJ18kaW5pdCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRlbnRJdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlcyB0aHJvdWdoIHRoZSBhcnJheSBvZiBvcGVuIHBvcG91dCB3aW5kb3dzIGFuZCByZW1vdmVzIHRoZSBvbmVzXG4gICAgICogdGhhdCBhcmUgZWZmZWN0aXZlbHkgY2xvc2VkLiBUaGlzIGlzIG5lY2Vzc2FyeSBkdWUgdG8gdGhlIGxhY2sgb2YgcmVsaWFibHlcbiAgICAgKiBsaXN0ZW5pbmcgZm9yIHdpbmRvdy5jbG9zZSAvIHVubG9hZCBldmVudHMgaW4gYSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgZmFzaGlvbi5cbiAgICAgKlxuICAgICAqIEBwYWNrYWdlUHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRyZWNvbmNpbGVQb3BvdXRXaW5kb3dzKCkge1xuICAgICAgICB2YXIgb3BlblBvcG91dHMgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMub3BlblBvcG91dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Qb3BvdXRzW2ldLmdldFdpbmRvdygpLmNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBvcGVuUG9wb3V0cy5wdXNoKHRoaXMub3BlblBvcG91dHNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3dpbmRvd0Nsb3NlZCcsIHRoaXMub3BlblBvcG91dHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlblBvcG91dHMubGVuZ3RoICE9PSBvcGVuUG9wb3V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblBvcG91dHMgPSBvcGVuUG9wb3V0cztcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhdGVDaGFuZ2VkJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBQUklWQVRFXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmxhdHRlbmVkIGFycmF5IG9mIGFsbCBjb250ZW50IGl0ZW1zLFxuICAgICAqIHJlZ2FyZGxlcyBvZiBsZXZlbCBvciB0eXBlXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2dldEFsbENvbnRlbnRJdGVtcygpIHtcbiAgICAgICAgdmFyIGFsbENvbnRlbnRJdGVtcyA9IFtdO1xuXG4gICAgICAgIHZhciBhZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICBhbGxDb250ZW50SXRlbXMucHVzaChjb250ZW50SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChjb250ZW50SXRlbS5jb250ZW50SXRlbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudEl0ZW0uY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENoaWxkcmVuKGNvbnRlbnRJdGVtLmNvbnRlbnRJdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZENoaWxkcmVuKHRoaXMucm9vdCk7XG5cbiAgICAgICAgcmV0dXJuIGFsbENvbnRlbnRJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyB0byBET00vQk9NIGV2ZW50cyBvbiBpbml0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Z1bGxQYWdlKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKHRoaXMuX3Jlc2l6ZUZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykub24oJ3VubG9hZCBiZWZvcmV1bmxvYWQnLCB0aGlzLl91bmxvYWRGdW5jdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVib3VuY2VzIHJlc2l6ZSBldmVudHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25SZXNpemUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lb3V0SWQpO1xuICAgICAgICB0aGlzLl9yZXNpemVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZuQmluZCh0aGlzLnVwZGF0ZVNpemUsIHRoaXMpLCAxMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dGVuZHMgdGhlIGRlZmF1bHQgY29uZmlnIHdpdGggdGhlIHVzZXIgc3BlY2lmaWMgc2V0dGluZ3MgYW5kIGFwcGxpZXNcbiAgICAgKiBkZXJpdmF0aW9ucy4gUGxlYXNlIG5vdGUgdGhhdCB0aGVyZSdzIGEgc2VwYXJhdGUgbWV0aG9kIChBYnN0cmFjdENvbnRlbnRJdGVtLl9leHRlbmRJdGVtTm9kZSlcbiAgICAgKiB0aGF0IGRlYWxzIHdpdGggdGhlIGV4dGVuc2lvbiBvZiBpdGVtIGNvbmZpZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBfY3JlYXRlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICB2YXIgd2luZG93Q29uZmlnS2V5ID0gZ2V0UXVlcnlTdHJpbmdQYXJhbSgnZ2wtd2luZG93Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvd0NvbmZpZ0tleSkge1xuICAgICAgICAgICAgdGhpcy5pc1N1YldpbmRvdyA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh3aW5kb3dDb25maWdLZXkpO1xuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5wYXJzZShjb25maWcpO1xuICAgICAgICAgICAgY29uZmlnID0gKG5ldyBDb25maWdNaW5pZmllcigpKS51bm1pbmlmeUNvbmZpZyhjb25maWcpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0od2luZG93Q29uZmlnS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuXG4gICAgICAgIHZhciBuZXh0Tm9kZSA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdwcm9wcycgJiYgdHlwZW9mIG5vZGVba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUobm9kZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3R5cGUnICYmIHRoaXMuaXNSZWFjdENvbmZpZyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnR5cGUgPSAnY29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jb21wb25lbnROYW1lID0gUkVBQ1RfQ09NUE9ORU5UX0lEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5leHROb2RlKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5zZXR0aW5ncy5oYXNIZWFkZXJzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uZmlnLmRpbWVuc2lvbnMuaGVhZGVySGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBleGVjdXRlZCB3aGVuIEdvbGRlbkxheW91dCBkZXRlY3RzIHRoYXQgaXQgaXMgcnVuXG4gICAgICogd2l0aGluIGEgcHJldmlvdXNseSBvcGVuZWQgcG9wb3V0IHdpbmRvdy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfYWRqdXN0VG9XaW5kb3dNb2RlKCkge1xuICAgICAgICB2YXIgcG9wSW5CdXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwibG1fcG9waW5cIiB0aXRsZT1cIicgKyB0aGlzLmNvbmZpZy5sYWJlbHMucG9waW4gKyAnXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxtX2ljb25cIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG1fYmdcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nKTtcblxuICAgICAgICBwb3BJbkJ1dHRvbi5jbGljayhmbkJpbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3BvcEluJyk7XG4gICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHN0cmlwVGFncyh0aGlzLmNvbmZpZy5jb250ZW50WzBdLnRpdGxlKTtcblxuICAgICAgICAkKCdoZWFkJykuYXBwZW5kKCQoJ2JvZHkgbGluaywgYm9keSBzdHlsZSwgdGVtcGxhdGUsIC5nbF9rZWVwJykpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJCgnYm9keScpXG4gICAgICAgICAgICAuaHRtbCgnJylcbiAgICAgICAgICAgIC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAuYXBwZW5kKHBvcEluQnV0dG9uKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBUaGlzIHNlZW1zIGEgYml0IHBvaW50bGVzcywgYnV0IGFjdHVhbGx5IGNhdXNlcyBhIHJlZmxvdy9yZS1ldmFsdWF0aW9uIGdldHRpbmcgYXJvdW5kXG4gICAgICAgICAqIHNsaWNrZ3JpZCdzIFwiQ2Fubm90IGZpbmQgc3R5bGVzaGVldC5cIiBidWcgaW4gY2hyb21lXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0OyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgICAgICAvKlxuICAgICAgICAgKiBFeHBvc2UgdGhpcyBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdFxuICAgICAgICAgKiB0byBhbGxvdyB0aGUgb3BlbmluZyB3aW5kb3cgdG8gaW50ZXJhY3Qgd2l0aFxuICAgICAgICAgKiBpdFxuICAgICAgICAgKi9cbiAgICAgICAgd2luZG93Ll9fZ2xJbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBTdWJ3aW5kb3dzIChpZiB0aGVyZSBhcmUgYW55KS4gVGhyb3dzIGFuIGVycm9yXG4gICAgICogaWYgcG9wb3V0cyBhcmUgYmxvY2tlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9jcmVhdGVTdWJXaW5kb3dzKCkge1xuICAgICAgICB2YXIgaSwgcG9wb3V0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5vcGVuUG9wb3V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9wb3V0ID0gdGhpcy5jb25maWcub3BlblBvcG91dHNbaV07XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9wb3V0KFxuICAgICAgICAgICAgICAgIHBvcG91dC5jb250ZW50LFxuICAgICAgICAgICAgICAgIHBvcG91dC5kaW1lbnNpb25zLFxuICAgICAgICAgICAgICAgIHBvcG91dC5wYXJlbnRJZCxcbiAgICAgICAgICAgICAgICBwb3BvdXQuaW5kZXhJblBhcmVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hhdCBlbGVtZW50IHRoZSBsYXlvdXQgd2lsbCBiZSBjcmVhdGVkIGluXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3NldENvbnRhaW5lcigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIgfHwgJ2JvZHknKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb2xkZW5MYXlvdXQgY29udGFpbmVyIG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvbGRlbkxheW91dCBtb3JlIHRoYW4gb25lIGNvbnRhaW5lciBlbGVtZW50IHNwZWNpZmllZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lclswXSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5faXNGdWxsUGFnZSA9IHRydWU7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLaWNrcyBvZiB0aGUgaW5pdGlhbCwgcmVjdXJzaXZlIGNyZWF0aW9uIGNoYWluXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7T2JqZWN0fSBjb25maWcgR29sZGVuTGF5b3V0IENvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2NyZWF0ZShjb25maWcpIHtcbiAgICAgICAgdmFyIGVycm9yTXNnO1xuXG4gICAgICAgIGlmICghKGNvbmZpZy5jb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVycm9yTXNnID0gJ01pc3Npbmcgc2V0dGluZyBcXCdjb250ZW50XFwnIG9uIHRvcCBsZXZlbCBvZiBjb25maWd1cmF0aW9uJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNc2cgPSAnQ29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgXFwnY29udGVudFxcJyBtdXN0IGJlIGFuIGFycmF5JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FcnJvcihlcnJvck1zZywgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuY29udGVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBlcnJvck1zZyA9ICdUb3AgbGV2ZWwgY29udGVudCBjYW5cXCd0IGNvbnRhaW4gbW9yZSB0aGVuIG9uZSBlbGVtZW50Lic7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkVycm9yKGVycm9yTXNnLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFJvb3QodGhpcywge1xuICAgICAgICAgICAgY29udGVudDogY29uZmlnLmNvbnRlbnRcbiAgICAgICAgfSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLnJvb3QuY2FsbERvd253YXJkcygnXyRpbml0Jyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5tYXhpbWlzZWRJdGVtSWQgPT09ICdfX2dsTWF4aW1pc2VkJykge1xuICAgICAgICAgICAgdGhpcy5yb290LmdldEl0ZW1zQnlJZChjb25maWcubWF4aW1pc2VkSXRlbUlkKVswXS50b2dnbGVNYXhpbWlzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHdpbmRvdyBpcyBjbG9zZWQgb3IgdGhlIHVzZXIgbmF2aWdhdGVzIGF3YXlcbiAgICAgKiBmcm9tIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25VbmxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5zZXR0aW5ncy5jbG9zZVBvcG91dHNPblVubG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5Qb3BvdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUG9wb3V0c1tpXS5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgdG8gYmUgbG93ZXIgdG8gZml0IHRoZSBzY3JlZW4gYW5kIHN0aWxsIG1haW50YWluIG1pbkl0ZW1XaWR0aC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9hZGp1c3RDb2x1bW5zUmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWluIHdpZHRoIHNldCwgb3Igbm90IGNvbnRlbnQgaXRlbXMsIGRvIG5vdGhpbmcuXG4gICAgICAgIGlmICghdGhpcy5fdXNlUmVzcG9uc2l2ZUxheW91dCgpIHx8IHRoaXMuX3VwZGF0aW5nQ29sdW1uc1Jlc3BvbnNpdmUgfHwgIXRoaXMuY29uZmlnLmRpbWVuc2lvbnMgfHwgIXRoaXMuY29uZmlnLmRpbWVuc2lvbnMubWluSXRlbVdpZHRoIHx8IHRoaXMucm9vdC5jb250ZW50SXRlbXMubGVuZ3RoID09PSAwIHx8ICF0aGlzLnJvb3QuY29udGVudEl0ZW1zWzBdLmlzUm93KSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdExvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgb25lIGNvbHVtbiwgZG8gbm90aGluZy5cbiAgICAgICAgdmFyIGNvbHVtbkNvdW50ID0gdGhpcy5yb290LmNvbnRlbnRJdGVtc1swXS5jb250ZW50SXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAoY29sdW1uQ291bnQgPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhleSBhbGwgc3RpbGwgZml0LCBkbyBub3RoaW5nLlxuICAgICAgICB2YXIgbWluSXRlbVdpZHRoID0gdGhpcy5jb25maWcuZGltZW5zaW9ucy5taW5JdGVtV2lkdGg7XG4gICAgICAgIHZhciB0b3RhbE1pbldpZHRoID0gY29sdW1uQ291bnQgKiBtaW5JdGVtV2lkdGg7XG4gICAgICAgIGlmICh0b3RhbE1pbldpZHRoIDw9IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgdXBkYXRlcyB3aGlsZSBpdCBpcyBhbHJlYWR5IGhhcHBlbmluZy5cbiAgICAgICAgdGhpcy5fdXBkYXRpbmdDb2x1bW5zUmVzcG9uc2l2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gRmlndXJlIG91dCBob3cgbWFueSBjb2x1bW5zIHRvIHN0YWNrLCBhbmQgcHV0IHRoZW0gYWxsIGluIHRoZSBmaXJzdCBzdGFjayBjb250YWluZXIuXG4gICAgICAgIHZhciBmaW5hbENvbHVtbkNvdW50ID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gbWluSXRlbVdpZHRoKSwgMSk7XG4gICAgICAgIHZhciBzdGFja0NvbHVtbkNvdW50ID0gY29sdW1uQ291bnQgLSBmaW5hbENvbHVtbkNvdW50O1xuXG4gICAgICAgIHZhciByb290Q29udGVudEl0ZW0gPSB0aGlzLnJvb3QuY29udGVudEl0ZW1zWzBdO1xuICAgICAgICB2YXIgZmlyc3RTdGFja0NvbnRhaW5lciA9IHRoaXMuX2ZpbmRBbGxTdGFja0NvbnRhaW5lcnMoKVswXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFja0NvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIFN0YWNrIGZyb20gcmlnaHQuXG4gICAgICAgICAgICB2YXIgY29sdW1uID0gcm9vdENvbnRlbnRJdGVtLmNvbnRlbnRJdGVtc1tyb290Q29udGVudEl0ZW0uY29udGVudEl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGRDb250ZW50SXRlbXNUb0NvbnRhaW5lcihmaXJzdFN0YWNrQ29udGFpbmVyLCBjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXBkYXRpbmdDb2x1bW5zUmVzcG9uc2l2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgcmVzcG9uc2l2ZSBsYXlvdXQgc2hvdWxkIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbH0gLSBUcnVlIGlmIHJlc3BvbnNpdmUgbGF5b3V0IHNob3VsZCBiZSB1c2VkOyBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgX3VzZVJlc3BvbnNpdmVMYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZXR0aW5ncyAmJiAodGhpcy5jb25maWcuc2V0dGluZ3MucmVzcG9uc2l2ZU1vZGUgPT0gJ2Fsd2F5cycgfHwgKHRoaXMuY29uZmlnLnNldHRpbmdzLnJlc3BvbnNpdmVNb2RlID09ICdvbmxvYWQnICYmIHRoaXMuX2ZpcnN0TG9hZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGNoaWxkcmVuIG9mIGEgbm9kZSB0byBhbm90aGVyIGNvbnRhaW5lciByZWN1cnNpdmVseS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGFpbmVyIC0gQ29udGFpbmVyIHRvIGFkZCBjaGlsZCBjb250ZW50IGl0ZW1zIHRvLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBub2RlIC0gTm9kZSB0byBzZWFyY2ggZm9yIGNvbnRlbnQgaXRlbXMuXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2FkZENoaWxkQ29udGVudEl0ZW1zVG9Db250YWluZXIoY29udGFpbmVyLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdzdGFjaycpIHtcbiAgICAgICAgICAgIG5vZGUuY29udGVudEl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnRJdGVtcy5mb3JFYWNoKGZuQmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGRDb250ZW50SXRlbXNUb0NvbnRhaW5lcihjb250YWluZXIsIGl0ZW0pO1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIHRoZSBzdGFjayBjb250YWluZXJzLlxuICAgICAqIEByZXR1cm5zIHthcnJheX0gLSBUaGUgZm91bmQgc3RhY2sgY29udGFpbmVycy5cbiAgICAgKi9cbiAgICBfZmluZEFsbFN0YWNrQ29udGFpbmVycygpIHtcbiAgICAgICAgdmFyIHN0YWNrQ29udGFpbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9maW5kQWxsU3RhY2tDb250YWluZXJzUmVjdXJzaXZlKHN0YWNrQ29udGFpbmVycywgdGhpcy5yb290KTtcblxuICAgICAgICByZXR1cm4gc3RhY2tDb250YWluZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCB0aGUgc3RhY2sgY29udGFpbmVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IC0gU2V0IG9mIGNvbnRhaW5lcnMgdG8gcG9wdWxhdGUuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IC0gQ3VycmVudCBub2RlIHRvIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfZmluZEFsbFN0YWNrQ29udGFpbmVyc1JlY3Vyc2l2ZShzdGFja0NvbnRhaW5lcnMsIG5vZGUpIHtcbiAgICAgICAgbm9kZS5jb250ZW50SXRlbXMuZm9yRWFjaChmbkJpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAnc3RhY2snKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tDb250YWluZXJzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpdGVtLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluZEFsbFN0YWNrQ29udGFpbmVyc1JlY3Vyc2l2ZShzdGFja0NvbnRhaW5lcnMsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEhvb2sgdGhhdCBhbGxvd3MgdG8gYWNjZXNzIHByaXZhdGUgY2xhc3Nlc1xuICovXG4vLyBMYXlvdXRNYW5hZ2VyLl9fbG0gPSBsbTtcbiIsImNvbnN0IGl0ZW1EZWZhdWx0Q29uZmlnID0ge1xuICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgcmVvcmRlckVuYWJsZWQ6IHRydWUsXG4gICAgdGl0bGU6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1EZWZhdWx0Q29uZmlnXG4iLCJjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIG9wZW5Qb3BvdXRzOiBbXSxcbiAgICBzZXR0aW5nczoge1xuICAgICAgICBoYXNIZWFkZXJzOiB0cnVlLFxuICAgICAgICBjb25zdHJhaW5EcmFnVG9Db250YWluZXI6IHRydWUsXG4gICAgICAgIHJlb3JkZXJFbmFibGVkOiB0cnVlLFxuICAgICAgICBzZWxlY3Rpb25FbmFibGVkOiBmYWxzZSxcbiAgICAgICAgcG9wb3V0V2hvbGVTdGFjazogZmFsc2UsXG4gICAgICAgIGJsb2NrZWRQb3BvdXRzVGhyb3dFcnJvcjogdHJ1ZSxcbiAgICAgICAgY2xvc2VQb3BvdXRzT25VbmxvYWQ6IHRydWUsXG4gICAgICAgIHNob3dQb3BvdXRJY29uOiB0cnVlLFxuICAgICAgICBzaG93TWF4aW1pc2VJY29uOiB0cnVlLFxuICAgICAgICBzaG93Q2xvc2VJY29uOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlTW9kZTogJ29ubG9hZCcsIC8vIENhbiBiZSBvbmxvYWQsIGFsd2F5cywgb3Igbm9uZS5cbiAgICAgICAgdGFiT3ZlcmxhcEFsbG93YW5jZTogMCwgLy8gbWF4aW11bSBwaXhlbCBvdmVybGFwIHBlciB0YWJcbiAgICAgICAgcmVvcmRlck9uVGFiTWVudUNsaWNrOiB0cnVlLFxuICAgICAgICB0YWJDb250cm9sT2Zmc2V0OiAxMFxuICAgIH0sXG4gICAgZGltZW5zaW9uczoge1xuICAgICAgICBib3JkZXJXaWR0aDogNSxcbiAgICAgICAgYm9yZGVyR3JhYldpZHRoOiAxNSxcbiAgICAgICAgbWluSXRlbUhlaWdodDogMTAsXG4gICAgICAgIG1pbkl0ZW1XaWR0aDogMTAsXG4gICAgICAgIGhlYWRlckhlaWdodDogMjAsXG4gICAgICAgIGRyYWdQcm94eVdpZHRoOiAzMDAsXG4gICAgICAgIGRyYWdQcm94eUhlaWdodDogMjAwXG4gICAgfSxcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgY2xvc2U6ICdjbG9zZScsXG4gICAgICAgIG1heGltaXNlOiAnbWF4aW1pc2UnLFxuICAgICAgICBtaW5pbWlzZTogJ21pbmltaXNlJyxcbiAgICAgICAgcG9wb3V0OiAnb3BlbiBpbiBuZXcgd2luZG93JyxcbiAgICAgICAgcG9waW46ICdwb3AgaW4nLFxuICAgICAgICB0YWJEcm9wZG93bjogJ2FkZGl0aW9uYWwgdGFicydcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDb25maWdcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtQ29udGFpbmVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHBhcmVudCwgbGF5b3V0TWFuYWdlcikge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50aXRsZSA9IGNvbmZpZy5jb21wb25lbnROYW1lO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyID0gbGF5b3V0TWFuYWdlcjtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9ICQoW1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsbV9pdGVtX2NvbnRhaW5lclwiPicsXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxtX2NvbnRlbnRcIj48L2Rpdj4nLFxuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgXS5qb2luKCcnKSk7XG5cbiAgICAgICAgdGhpcy5fY29udGVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LmZpbmQoJy5sbV9jb250ZW50Jyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlubmVyIERPTSBlbGVtZW50IHRoZSBjb250YWluZXIncyBjb250ZW50XG4gICAgICogaXMgaW50ZW5kZWQgdG8gbGl2ZSBpblxuICAgICAqXG4gICAgICogQHJldHVybnMge0RPTSBlbGVtZW50fVxuICAgICAqL1xuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50RWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIGNvbnRhaW5lci4gTm90aWZpZXMgdGhlIGNvbnRhaW5lcnMgY29udGVudCBmaXJzdFxuICAgICAqIGFuZCB0aGVuIGhpZGVzIHRoZSBET00gbm9kZS4gSWYgdGhlIGNvbnRhaW5lciBpcyBhbHJlYWR5IGhpZGRlblxuICAgICAqIHRoaXMgc2hvdWxkIGhhdmUgbm8gZWZmZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2hpZGUnKTtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaGlkZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBwcmV2aW91c2x5IGhpZGRlbiBjb250YWluZXIuIE5vdGlmaWVzIHRoZVxuICAgICAqIGNvbnRhaW5lcnMgY29udGVudCBmaXJzdCBhbmQgdGhlbiBzaG93cyB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICogSWYgdGhlIGNvbnRhaW5lciBpcyBhbHJlYWR5IHZpc2libGUgdGhpcyBoYXMgbm8gZWZmZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdzaG93Jyk7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zaG93KCk7XG4gICAgICAgIC8vIGNhbGwgc2hvd24gb25seSBpZiB0aGUgY29udGFpbmVyIGhhcyBhIHZhbGlkIHNpemVcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0ICE9IDAgfHwgdGhpcy53aWR0aCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Nob3duJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBmcm9tIHdpdGhpbiB0aGUgY29udGFpbmVyLiBUcmF2ZXJzZXMgdXBcbiAgICAgKiB0aGUgaXRlbSB0cmVlIHVudGlsIGl0IGZpbmRzIGEgcm93IG9yIGNvbHVtbiBlbGVtZW50XG4gICAgICogYW5kIHJlc2l6ZXMgaXRzIGl0ZW1zIGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogSWYgdGhpcyBjb250YWluZXIgaXNuJ3QgYSBkZXNjZW5kYW50IG9mIGEgcm93IG9yIGNvbHVtblxuICAgICAqIGl0IHJldHVybnMgZmFsc2VcbiAgICAgKiBAdG9kbyAgUmV3b3JrISEhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICBUaGUgbmV3IHdpZHRoIGluIHBpeGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCBUaGUgbmV3IGhlaWdodCBpbiBwaXhlbFxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHJlc2l6ZVN1Y2Nlc2Z1bFxuICAgICAqL1xuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgcm93T3JDb2x1bW4gPSB0aGlzLnBhcmVudCxcbiAgICAgICAgICAgIHJvd09yQ29sdW1uQ2hpbGQgPSB0aGlzLFxuICAgICAgICAgICAgdG90YWxQaXhlbCxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICBuZXdTaXplLFxuICAgICAgICAgICAgZGVsdGEsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIHdoaWxlICghcm93T3JDb2x1bW4uaXNDb2x1bW4gJiYgIXJvd09yQ29sdW1uLmlzUm93KSB7XG4gICAgICAgICAgICByb3dPckNvbHVtbkNoaWxkID0gcm93T3JDb2x1bW47XG4gICAgICAgICAgICByb3dPckNvbHVtbiA9IHJvd09yQ29sdW1uLnBhcmVudDtcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5vIHJvdyBvciBjb2x1bW4gaGFzIGJlZW4gZm91bmRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHJvd09yQ29sdW1uLmlzUm9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdGlvbiA9IHJvd09yQ29sdW1uLmlzQ29sdW1uID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIjtcbiAgICAgICAgbmV3U2l6ZSA9IGRpcmVjdGlvbiA9PT0gXCJoZWlnaHRcIiA/IGhlaWdodCA6IHdpZHRoO1xuXG4gICAgICAgIHRvdGFsUGl4ZWwgPSB0aGlzW2RpcmVjdGlvbl0gKiAoMSAvIChyb3dPckNvbHVtbkNoaWxkLmNvbmZpZ1tkaXJlY3Rpb25dIC8gMTAwKSk7XG4gICAgICAgIHBlcmNlbnRhZ2UgPSAobmV3U2l6ZSAvIHRvdGFsUGl4ZWwpICogMTAwO1xuICAgICAgICBkZWx0YSA9IChyb3dPckNvbHVtbkNoaWxkLmNvbmZpZ1tkaXJlY3Rpb25dIC0gcGVyY2VudGFnZSkgLyAocm93T3JDb2x1bW4uY29udGVudEl0ZW1zLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dPckNvbHVtbi5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyb3dPckNvbHVtbi5jb250ZW50SXRlbXNbaV0gPT09IHJvd09yQ29sdW1uQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICByb3dPckNvbHVtbi5jb250ZW50SXRlbXNbaV0uY29uZmlnW2RpcmVjdGlvbl0gPSBwZXJjZW50YWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3dPckNvbHVtbi5jb250ZW50SXRlbXNbaV0uY29uZmlnW2RpcmVjdGlvbl0gKz0gZGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb3dPckNvbHVtbi5jYWxsRG93bndhcmRzKCdzZXRTaXplJyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGNvbnRhaW5lciBpZiBpdCBpcyBjbG9zYWJsZS4gQ2FuIGJlIGNhbGxlZCBieVxuICAgICAqIGJvdGggdGhlIGNvbXBvbmVudCB3aXRoaW4gYXQgYXMgd2VsbCBhcyB0aGUgY29udGVudEl0ZW0gY29udGFpbmluZ1xuICAgICAqIGl0LiBFbWl0cyBhIGNsb3NlIGV2ZW50IGJlZm9yZSB0aGUgY29udGFpbmVyIGl0c2VsZiBpcyBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGVcbiAgICAgKi9cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jb21wb25lbnRTdGF0ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyB0aGUgcHJvdmlkZWQgc3RhdGUgaW50byB0aGUgY3VycmVudCBvbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtPYmplY3R9IHN0YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBleHRlbmRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCQuZXh0ZW5kKHRydWUsIHRoaXMuZ2V0U3RhdGUoKSwgc3RhdGUpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIHRoZSBsYXlvdXQgbWFuYWdlciBvZiBhIHN0YXRldXBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3NlcmlhbGlzYWJsZX0gc3RhdGVcbiAgICAgKi9cbiAgICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLl9jb25maWcuY29tcG9uZW50U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5wYXJlbnQuZW1pdEJ1YmJsaW5nRXZlbnQoJ3N0YXRlQ2hhbmdlZCcpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0J3MgdGhlIGNvbXBvbmVudHMgdGl0bGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZVxuICAgICAqL1xuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnNldFRpdGxlKHRpdGxlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBjb250YWluZXJzIHNpemUuIENhbGxlZCBieSB0aGUgY29udGFpbmVyJ3MgY29tcG9uZW50LlxuICAgICAqIFRvIHNldCB0aGUgc2l6ZSBwcm9ncmFtbWF0aWNhbGx5IGZyb20gd2l0aGluIHRoZSBjb250YWluZXIgcGxlYXNlXG4gICAgICogdXNlIHRoZSBwdWJsaWMgc2V0U2l6ZSBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7W0ludF19IHdpZHRoICBpbiBweFxuICAgICAqIEBwYXJhbSB7W0ludF19IGhlaWdodCBpbiBweFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLndpZHRoIHx8IGhlaWdodCAhPT0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgJC56ZXB0byA/IHRoaXMuX2NvbnRlbnRFbGVtZW50LndpZHRoKHdpZHRoKSA6IHRoaXMuX2NvbnRlbnRFbGVtZW50Lm91dGVyV2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgJC56ZXB0byA/IHRoaXMuX2NvbnRlbnRFbGVtZW50LmhlaWdodChoZWlnaHQpIDogdGhpcy5fY29udGVudEVsZW1lbnQub3V0ZXJIZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzaXplJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL3V0aWxzL0V2ZW50RW1pdHRlcidcbmltcG9ydCBDb25maWdNaW5pZmllciBmcm9tICcuLi91dGlscy9Db25maWdNaW5pZmllcidcbmltcG9ydCB7XG4gICAgZm5CaW5kLFxuICAgIGdldFVuaXF1ZUlkLFxufSBmcm9tICcuLi91dGlscy91dGlscydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBQb3BzIGEgY29udGVudCBpdGVtIG91dCBpbnRvIGEgbmV3IGJyb3dzZXIgd2luZG93LlxuICogVGhpcyBpcyBhY2hpZXZlZCBieVxuICpcbiAqICAgIC0gQ3JlYXRpbmcgYSBuZXcgY29uZmlndXJhdGlvbiB3aXRoIHRoZSBjb250ZW50IGl0ZW0gYXMgcm9vdCBlbGVtZW50XG4gKiAgICAtIFNlcmlhbGl6aW5nIGFuZCBtaW5pZnlpbmcgdGhlIGNvbmZpZ3VyYXRpb25cbiAqICAgIC0gT3BlbmluZyB0aGUgY3VycmVudCB3aW5kb3cncyBVUkwgd2l0aCB0aGUgY29uZmlndXJhdGlvbiBhcyBhIEdFVCBwYXJhbWV0ZXJcbiAqICAgIC0gR29sZGVuTGF5b3V0IHdoZW4gb3BlbmVkIGluIHRoZSBuZXcgd2luZG93IHdpbGwgbG9vayBmb3IgdGhlIEdFVCBwYXJhbWV0ZXJcbiAqICAgICAgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBHb2xkZW5MYXlvdXQgaXRlbSBjb25maWdcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIEEgbWFwIHdpdGggd2lkdGgsIGhlaWdodCwgdG9wIGFuZCBsZWZ0XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50SWQgVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoZSBpdGVtIHdpbGwgYmUgYXBwZW5kZWQgdG8gb24gcG9wSW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleEluUGFyZW50IFRoZSBwb3NpdGlvbiBvZiB0aGlzIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAqIEBwYXJhbSB7bG0uTGF5b3V0TWFuYWdlcn0gbGF5b3V0TWFuYWdlclxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlclBvcG91dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBkaW1lbnNpb25zLCBwYXJlbnRJZCwgaW5kZXhJblBhcmVudCwgbGF5b3V0TWFuYWdlcikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLl9wYXJlbnRJZCA9IHBhcmVudElkO1xuICAgICAgICB0aGlzLl9pbmRleEluUGFyZW50ID0gaW5kZXhJblBhcmVudDtcbiAgICAgICAgdGhpcy5fbGF5b3V0TWFuYWdlciA9IGxheW91dE1hbmFnZXI7XG4gICAgICAgIHRoaXMuX3BvcG91dFdpbmRvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY3JlYXRlV2luZG93KCk7XG4gICAgfVxuXG4gICAgdG9Db25maWcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGlzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgY3JlYXRlIGNvbmZpZywgbGF5b3V0IG5vdCB5ZXQgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldEdsSW5zdGFuY2UoKS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0R2xJbnN0YW5jZSgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLl9wb3BvdXRXaW5kb3cuc2NyZWVuWCB8fCB0aGlzLl9wb3BvdXRXaW5kb3cuc2NyZWVuTGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuX3BvcG91dFdpbmRvdy5zY3JlZW5ZIHx8IHRoaXMuX3BvcG91dFdpbmRvdy5zY3JlZW5Ub3BcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdldEdsSW5zdGFuY2UoKS50b0NvbmZpZygpLmNvbnRlbnQsXG4gICAgICAgICAgICBwYXJlbnRJZDogdGhpcy5fcGFyZW50SWQsXG4gICAgICAgICAgICBpbmRleEluUGFyZW50OiB0aGlzLl9pbmRleEluUGFyZW50XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0R2xJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcG91dFdpbmRvdy5fX2dsSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2V0V2luZG93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wb3V0V2luZG93O1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRHbEluc3RhbmNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2xJbnN0YW5jZSgpLl8kY2xvc2VXaW5kb3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3coKS5jbG9zZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwb3BwZWQgb3V0IGl0ZW0gdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLiBJZiB0aGUgb3JpZ2luYWxcbiAgICAgKiBwYXJlbnQgaXNuJ3QgYXZhaWxhYmxlIGFueW1vcmUgaXQgZmFsbHMgYmFjayB0byB0aGUgbGF5b3V0J3MgdG9wbW9zdCBlbGVtZW50XG4gICAgICovXG4gICAgcG9wSW4oKSB7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZyxcbiAgICAgICAgICAgIHBhcmVudEl0ZW0sXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuX2luZGV4SW5QYXJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudElkKSB7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBUaGUgJC5leHRlbmQgY2FsbCBzZWVtcyBhIGJpdCBwb2ludGxlc3MsIGJ1dCBpdCdzIGNydWNpYWwgdG9cbiAgICAgICAgICAgICAqIGNvcHkgdGhlIGNvbmZpZyByZXR1cm5lZCBieSB0aGlzLmdldEdsSW5zdGFuY2UoKS50b0NvbmZpZygpXG4gICAgICAgICAgICAgKiBvbnRvIGEgbmV3IG9iamVjdC4gSW50ZXJuZXQgRXhwbG9yZXIga2VlcHMgdGhlIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAqIHRvIG9iamVjdHMgb24gdGhlIGNoaWxkIHdpbmRvdywgcmVzdWx0aW5nIGluIHRoZSBmb2xsb3dpbmcgZXJyb3JcbiAgICAgICAgICAgICAqIG9uY2UgdGhlIGNoaWxkIHdpbmRvdyBpcyBjbG9zZWQ6XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogVGhlIGNhbGxlZSAoc2VydmVyIFtub3Qgc2VydmVyIGFwcGxpY2F0aW9uXSkgaXMgbm90IGF2YWlsYWJsZSBhbmQgZGlzYXBwZWFyZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2hpbGRDb25maWcgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5nZXRHbEluc3RhbmNlKCkudG9Db25maWcoKSkuY29udGVudFswXTtcbiAgICAgICAgICAgIHBhcmVudEl0ZW0gPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLnJvb3QuZ2V0SXRlbXNCeUlkKHRoaXMuX3BhcmVudElkKVswXTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIEZhbGxiYWNrIGlmIHBhcmVudEl0ZW0gaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIGFkZCBpdCB0byB0aGUgdG9wbW9zdFxuICAgICAgICAgICAgICogaXRlbSBvciBtYWtlIGl0IHRoZSB0b3Btb3N0IGl0ZW0gaWYgdGhlIGxheW91dCBpcyBlbXB0eVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIXBhcmVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGF5b3V0TWFuYWdlci5yb290LmNvbnRlbnRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEl0ZW0gPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLnJvb3QuY29udGVudEl0ZW1zWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEl0ZW0gPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLnJvb3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudEl0ZW0uYWRkQ2hpbGQoY2hpbGRDb25maWcsIHRoaXMuX2luZGV4SW5QYXJlbnQpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgVVJMIGFuZCB3aW5kb3cgcGFyYW1ldGVyXG4gICAgICogYW5kIG9wZW5zIGEgbmV3IHdpbmRvd1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9jcmVhdGVXaW5kb3coKSB7XG4gICAgICAgIHZhciBjaGVja1JlYWR5SW50ZXJ2YWwsXG4gICAgICAgICAgICB1cmwgPSB0aGlzLl9jcmVhdGVVcmwoKSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBCb2d1cyB0aXRsZSB0byBwcmV2ZW50IHJlLXVzYWdlIG9mIGV4aXN0aW5nIHdpbmRvdyB3aXRoIHRoZVxuICAgICAgICAgICAgICogc2FtZSB0aXRsZS4gVGhlIGFjdHVhbCB0aXRsZSB3aWxsIGJlIHNldCBieSB0aGUgbmV3IHdpbmRvdydzXG4gICAgICAgICAgICAgKiBHb2xkZW5MYXlvdXQgaW5zdGFuY2UgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IGlzIGluIHN1YldpbmRvd01vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGl0bGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKS50b1N0cmluZygzNiksXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIG9wdGlvbnMgYXMgdXNlZCBpbiB0aGUgd2luZG93Lm9wZW4gc3RyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXJpYWxpemVXaW5kb3dPcHRpb25zKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fZGltZW5zaW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg6IHRoaXMuX2RpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1lbnViYXI6ICdubycsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogJ25vJyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ25vJyxcbiAgICAgICAgICAgICAgICBwZXJzb25hbGJhcjogJ25vJyxcbiAgICAgICAgICAgICAgICByZXNpemFibGU6ICd5ZXMnLFxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcnM6ICdubycsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnbm8nXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wb3BvdXRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsIHRpdGxlLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3BvcG91dFdpbmRvdykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xheW91dE1hbmFnZXIuY29uZmlnLnNldHRpbmdzLmJsb2NrZWRQb3BvdXRzVGhyb3dFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignUG9wb3V0IGJsb2NrZWQnKTtcbiAgICAgICAgICAgICAgICBlcnJvci50eXBlID0gJ3BvcG91dEJsb2NrZWQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX3BvcG91dFdpbmRvdylcbiAgICAgICAgICAgIC5vbignbG9hZCcsIGZuQmluZCh0aGlzLl9wb3NpdGlvbldpbmRvdywgdGhpcykpXG4gICAgICAgICAgICAub24oJ3VubG9hZCBiZWZvcmV1bmxvYWQnLCBmbkJpbmQodGhpcy5fb25DbG9zZSwgdGhpcykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb2xsaW5nIHRoZSBjaGlsZHdpbmRvdyB0byBmaW5kIG91dCBpZiBHb2xkZW5MYXlvdXQgaGFzIGJlZW4gaW5pdGlhbGlzZWRcbiAgICAgICAgICogZG9lc24ndCBzZWVtIG9wdGltYWwsIGJ1dCB0aGUgYWx0ZXJuYXRpdmVzIC0gYWRkaW5nIGEgY2FsbGJhY2sgdG8gdGhlIHBhcmVudFxuICAgICAgICAgKiB3aW5kb3cgb3IgcmFpc2luZyBhbiBldmVudCBvbiB0aGUgd2luZG93IG9iamVjdCAtIGJvdGggd291bGQgaW50cm9kdWNlIGtub3dsZWRnZVxuICAgICAgICAgKiBhYm91dCB0aGUgcGFyZW50IHRvIHRoZSBjaGlsZCB3aW5kb3cgd2hpY2ggd2UnZCByYXRoZXIgYXZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrUmVhZHlJbnRlcnZhbCA9IHNldEludGVydmFsKGZuQmluZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3BvdXRXaW5kb3cuX19nbEluc3RhbmNlICYmIHRoaXMuX3BvcG91dFdpbmRvdy5fX2dsSW5zdGFuY2UuaXNJbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uSW5pdGlhbGlzZWQoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNoZWNrUmVhZHlJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXNlcyBhIG1hcCBvZiBrZXk6dmFsdWVzIHRvIGEgd2luZG93IG9wdGlvbnMgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7T2JqZWN0fSB3aW5kb3dPcHRpb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBzZXJpYWxpc2VkIHdpbmRvdyBvcHRpb25zXG4gICAgICovXG4gICAgX3NlcmlhbGl6ZVdpbmRvd09wdGlvbnMod2luZG93T3B0aW9ucykge1xuICAgICAgICB2YXIgd2luZG93T3B0aW9uc1N0cmluZyA9IFtdLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIHdpbmRvd09wdGlvbnMpIHtcbiAgICAgICAgICAgIHdpbmRvd09wdGlvbnNTdHJpbmcucHVzaChrZXkgKyAnPScgKyB3aW5kb3dPcHRpb25zW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvd09wdGlvbnNTdHJpbmcuam9pbignLCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIFVSTCBmb3IgdGhlIG5ldyB3aW5kb3csIGluY2x1ZGluZyB0aGVcbiAgICAgKiBjb25maWcgR0VUIHBhcmFtZXRlclxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVVJMXG4gICAgICovXG4gICAgX2NyZWF0ZVVybCgpIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLl9jb25maWdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yYWdlS2V5ID0gJ2dsLXdpbmRvdy1jb25maWctJyArIGdldFVuaXF1ZUlkKCksXG4gICAgICAgICAgICB1cmxQYXJ0cztcblxuICAgICAgICBjb25maWcgPSAobmV3IENvbmZpZ01pbmlmaWVyKCkpLm1pbmlmeUNvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShjb25maWcpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSB3cml0aW5nIHRvIGxvY2FsU3RvcmFnZSAnICsgZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnRzID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpO1xuXG4gICAgICAgIC8vIFVSTCBkb2Vzbid0IGNvbnRhaW4gR0VULXBhcmFtZXRlcnNcbiAgICAgICAgaWYgKHVybFBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybFBhcnRzWzBdICsgJz9nbC13aW5kb3c9JyArIHN0b3JhZ2VLZXk7XG5cbiAgICAgICAgICAgIC8vIFVSTCBjb250YWlucyBHRVQtcGFyYW1ldGVyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyAnJmdsLXdpbmRvdz0nICsgc3RvcmFnZUtleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgdGhlIG5ld2x5IGNyZWF0ZWQgd2luZG93IHJvdWdobHkgdG9cbiAgICAgKiB3aGVyZSB0aGUgY29tcG9uZW50IHVzZWQgdG8gYmUuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3Bvc2l0aW9uV2luZG93KCkge1xuICAgICAgICB0aGlzLl9wb3BvdXRXaW5kb3cubW92ZVRvKHRoaXMuX2RpbWVuc2lvbnMubGVmdCwgdGhpcy5fZGltZW5zaW9ucy50b3ApO1xuICAgICAgICB0aGlzLl9wb3BvdXRXaW5kb3cuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB3aGVuIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCBhbmQgdGhlIEdvbGRlbkxheW91dCBpbnN0YW5jZVxuICAgICAqIHdpdGhpbiBpdCBpcyBpbml0aWFsaXNlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uSW5pdGlhbGlzZWQoKSB7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0R2xJbnN0YW5jZSgpLm9uKCdwb3BJbicsIHRoaXMucG9wSW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCA1MG1zIGFmdGVyIHRoZSB3aW5kb3cgdW5sb2FkIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uQ2xvc2UoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm5CaW5kKHRoaXMuZW1pdCwgdGhpcywgWydjbG9zZWQnXSksIDUwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL3V0aWxzL0V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gICAgc3RyaXBUYWdzLFxuICAgIGdldFRvdWNoRXZlbnRcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgX3RlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJsbV9kcmFnUHJveHlcIj4nICtcbiAgICAnPGRpdiBjbGFzcz1cImxtX2hlYWRlclwiPicgK1xuICAgICc8dWwgY2xhc3M9XCJsbV90YWJzXCI+JyArXG4gICAgJzxsaSBjbGFzcz1cImxtX3RhYiBsbV9hY3RpdmVcIj48aSBjbGFzcz1cImxtX2xlZnRcIj48L2k+JyArXG4gICAgJzxzcGFuIGNsYXNzPVwibG1fdGl0bGVcIj48L3NwYW4+JyArXG4gICAgJzxpIGNsYXNzPVwibG1fcmlnaHRcIj48L2k+PC9saT4nICtcbiAgICAnPC91bD4nICtcbiAgICAnPC9kaXY+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJsbV9jb250ZW50XCI+PC9kaXY+JyArXG4gICAgJzwvZGl2Pic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgdGVtcG9yYXJ5IGNvbnRhaW5lclxuICogZm9yIHRoZSBjb21wb25lbnQgd2hpbHN0IGl0IGlzIGJlaW5nIGRyYWdnZWRcbiAqIGFuZCBoYW5kbGVzIGRyYWcgZXZlbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4ICAgICAgICAgICAgICBUaGUgaW5pdGlhbCB4IHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAgICAgICAgICAgICAgVGhlIGluaXRpYWwgeSBwb3NpdGlvblxuICogQHBhcmFtIHtEcmFnTGlzdGVuZXJ9IGRyYWdMaXN0ZW5lclxuICogQHBhcmFtIHtsbS5MYXlvdXRNYW5hZ2VyfSBsYXlvdXRNYW5hZ2VyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udGVudEl0ZW19IGNvbnRlbnRJdGVtXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udGVudEl0ZW19IG9yaWdpbmFsUGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdQcm94eSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBkcmFnTGlzdGVuZXIsIGxheW91dE1hbmFnZXIsIGNvbnRlbnRJdGVtLCBvcmlnaW5hbFBhcmVudCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyID0gZHJhZ0xpc3RlbmVyO1xuICAgICAgICB0aGlzLl9sYXlvdXRNYW5hZ2VyID0gbGF5b3V0TWFuYWdlcjtcbiAgICAgICAgdGhpcy5fY29udGVudEl0ZW0gPSBjb250ZW50SXRlbTtcbiAgICAgICAgdGhpcy5fb3JpZ2luYWxQYXJlbnQgPSBvcmlnaW5hbFBhcmVudDtcblxuICAgICAgICB0aGlzLl9hcmVhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbGFzdFZhbGlkQXJlYSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyLm9uKCdkcmFnJywgdGhpcy5fb25EcmFnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyLm9uKCdkcmFnU3RvcCcsIHRoaXMuX29uRHJvcCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChfdGVtcGxhdGUpO1xuICAgICAgICBpZiAob3JpZ2luYWxQYXJlbnQgJiYgb3JpZ2luYWxQYXJlbnQuX3NpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpZGVkID0gb3JpZ2luYWxQYXJlbnQuX3NpZGVkO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdsbV8nICsgb3JpZ2luYWxQYXJlbnQuX3NpZGUpO1xuICAgICAgICAgICAgaWYgKFsncmlnaHQnLCAnYm90dG9tJ10uaW5kZXhPZihvcmlnaW5hbFBhcmVudC5fc2lkZSkgPj0gMClcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZCgnLmxtX2NvbnRlbnQnKS5hZnRlcih0aGlzLmVsZW1lbnQuZmluZCgnLmxtX2hlYWRlcicpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICB0b3A6IHlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5maW5kKCcubG1fdGFiJykuYXR0cigndGl0bGUnLCBzdHJpcFRhZ3ModGhpcy5fY29udGVudEl0ZW0uY29uZmlnLnRpdGxlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5maW5kKCcubG1fdGl0bGUnKS5odG1sKHRoaXMuX2NvbnRlbnRJdGVtLmNvbmZpZy50aXRsZSk7XG4gICAgICAgIHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sbV9jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50SXRlbS5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLl91bmRpc3BsYXlUcmVlKCk7XG4gICAgICAgIHRoaXMuX2xheW91dE1hbmFnZXIuXyRjYWxjdWxhdGVJdGVtQXJlYXMoKTtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX2xheW91dE1hbmFnZXIuY29udGFpbmVyLm9mZnNldCgpO1xuXG4gICAgICAgIHRoaXMuX21pblggPSBvZmZzZXQubGVmdDtcbiAgICAgICAgdGhpcy5fbWluWSA9IG9mZnNldC50b3A7XG4gICAgICAgIHRoaXMuX21heFggPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLmNvbnRhaW5lci53aWR0aCgpICsgdGhpcy5fbWluWDtcbiAgICAgICAgdGhpcy5fbWF4WSA9IHRoaXMuX2xheW91dE1hbmFnZXIuY29udGFpbmVyLmhlaWdodCgpICsgdGhpcy5fbWluWTtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLmVsZW1lbnQud2lkdGgoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5lbGVtZW50LmhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX3NldERyb3BQb3NpdGlvbih4LCB5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBvbiBldmVyeSBtb3VzZU1vdmUgZXZlbnQgZHVyaW5nIGEgZHJhZy4gRGV0ZXJtaW5lcyBpZiB0aGUgZHJhZyBpc1xuICAgICAqIHN0aWxsIHdpdGhpbiB0aGUgdmFsaWQgZHJhZyBhcmVhIGFuZCBjYWxscyB0aGUgbGF5b3V0TWFuYWdlciB0byBoaWdobGlnaHQgdGhlXG4gICAgICogY3VycmVudCBkcm9wIGFyZWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9IG9mZnNldFggVGhlIGRpZmZlcmVuY2UgZnJvbSB0aGUgb3JpZ2luYWwgeCBwb3NpdGlvbiBpbiBweFxuICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9IG9mZnNldFkgVGhlIGRpZmZlcmVuY2UgZnJvbSB0aGUgb3JpZ2luYWwgeSBwb3NpdGlvbiBpbiBweFxuICAgICAqIEBwYXJhbSAgIHtqUXVlcnkgRE9NIGV2ZW50fSBldmVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9vbkRyYWcob2Zmc2V0WCwgb2Zmc2V0WSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSBnZXRUb3VjaEV2ZW50KGV2ZW50KVxuXG4gICAgICAgIHZhciB4ID0gZXZlbnQucGFnZVgsXG4gICAgICAgICAgICB5ID0gZXZlbnQucGFnZVksXG4gICAgICAgICAgICBpc1dpdGhpbkNvbnRhaW5lciA9IHggPiB0aGlzLl9taW5YICYmIHggPCB0aGlzLl9tYXhYICYmIHkgPiB0aGlzLl9taW5ZICYmIHkgPCB0aGlzLl9tYXhZO1xuXG4gICAgICAgIGlmICghaXNXaXRoaW5Db250YWluZXIgJiYgdGhpcy5fbGF5b3V0TWFuYWdlci5jb25maWcuc2V0dGluZ3MuY29uc3RyYWluRHJhZ1RvQ29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXREcm9wUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGFyZ2V0IHBvc2l0aW9uLCBoaWdobGlnaHRpbmcgdGhlIGFwcHJvcHJpYXRlIGFyZWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9IHggVGhlIHggcG9zaXRpb24gaW4gcHhcbiAgICAgKiBAcGFyYW0gICB7TnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uIGluIHB4XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3NldERyb3BQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgIHRvcDogeVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYXJlYSA9IHRoaXMuX2xheW91dE1hbmFnZXIuXyRnZXRBcmVhKHgsIHkpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hcmVhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VmFsaWRBcmVhID0gdGhpcy5fYXJlYTtcbiAgICAgICAgICAgIHRoaXMuX2FyZWEuY29udGVudEl0ZW0uXyRoaWdobGlnaHREcm9wWm9uZSh4LCB5LCB0aGlzLl9hcmVhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHdoZW4gdGhlIGRyYWcgaGFzIGZpbmlzaGVkLiBEZXRlcm1pbmVzIHRoZSBkcm9wIGFyZWFcbiAgICAgKiBhbmQgYWRkcyB0aGUgY2hpbGQgdG8gaXRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25Ecm9wKCkge1xuICAgICAgICB0aGlzLl91cGRhdGVUcmVlKClcbiAgICAgICAgdGhpcy5fbGF5b3V0TWFuYWdlci5kcm9wVGFyZ2V0SW5kaWNhdG9yLmhpZGUoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBWYWxpZCBkcm9wIGFyZWEgZm91bmRcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLl9hcmVhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9hcmVhLmNvbnRlbnRJdGVtLl8kb25Ecm9wKHRoaXMuX2NvbnRlbnRJdGVtLCB0aGlzLl9hcmVhKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBObyB2YWxpZCBkcm9wIGFyZWEgYXZhaWxhYmxlIGF0IHByZXNlbnQsIGJ1dCBvbmUgaGFzIGJlZW4gZm91bmQgYmVmb3JlLlxuICAgICAgICAgICAgICogVXNlIGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VmFsaWRBcmVhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VmFsaWRBcmVhLmNvbnRlbnRJdGVtLl8kb25Ecm9wKHRoaXMuX2NvbnRlbnRJdGVtLCB0aGlzLl9sYXN0VmFsaWRBcmVhKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBObyB2YWxpZCBkcm9wIGFyZWEgZm91bmQgZHVyaW5nIHRoZSBkdXJhdGlvbiBvZiB0aGUgZHJhZy4gUmV0dXJuXG4gICAgICAgICAgICAgKiBjb250ZW50IGl0ZW0gdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIGlmIGEgb3JpZ2luYWwgcGFyZW50IGlzIHByb3ZpZGVkLlxuICAgICAgICAgICAgICogKFdoaWNoIGlzIG5vdCB0aGUgY2FzZSBpZiB0aGUgZHJhZyBoYWQgYmVlbiBpbml0aWF0ZWQgYnkgY3JlYXRlRHJhZ1NvdXJjZSlcbiAgICAgICAgICAgICAqL1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29yaWdpbmFsUGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFBhcmVudC5hZGRDaGlsZCh0aGlzLl9jb250ZW50SXRlbSk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGRyYWcgZGlkbid0IHVsdGltYXRlbHkgZW5kIHVwIHdpdGggYWRkaW5nIHRoZSBjb250ZW50IGl0ZW0gdG9cbiAgICAgICAgICAgICAqIGFueSBjb250YWluZXIuIEluIG9yZGVyIHRvIGVuc3VyZSBjbGVhbiB1cCBoYXBwZW5zLCBkZXN0cm95IHRoZVxuICAgICAgICAgICAgICogY29udGVudCBpdGVtLlxuICAgICAgICAgICAgICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50SXRlbS5fJGRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLl9sYXlvdXRNYW5hZ2VyLmVtaXQoJ2l0ZW1Ecm9wcGVkJywgdGhpcy5fY29udGVudEl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZGlzcGxheXMgdGhlIGl0ZW0gZnJvbSBpdHMgb3JpZ2luYWwgcG9zaXRpb24gd2l0aGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3VuZGlzcGxheVRyZWUoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHBhcmVudCBpcyBudWxsIGlmIHRoZSBkcmFnIGhhZCBiZWVuIGluaXRpYXRlZCBieSBhIGV4dGVybmFsIGRyYWcgc291cmNlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5fY29udGVudEl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50SXRlbS5wYXJlbnQudW5kaXNwbGF5Q2hpbGQodGhpcy5fY29udGVudEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBmcm9tIGl0cyBvcmlnaW5hbCBwb3NpdGlvbiB3aXRoaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfdXBkYXRlVHJlZSgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogcGFyZW50IGlzIG51bGwgaWYgdGhlIGRyYWcgaGFkIGJlZW4gaW5pdGlhdGVkIGJ5IGEgZXh0ZXJuYWwgZHJhZyBzb3VyY2VcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50SXRlbS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRJdGVtLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9jb250ZW50SXRlbSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb250ZW50SXRlbS5fJHNldFBhcmVudCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBEcmFnIFByb3hpZSdzIGRpbWVuc2lvbnNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zLFxuICAgICAgICAgICAgd2lkdGggPSBkaW1lbnNpb25zLmRyYWdQcm94eVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gZGltZW5zaW9ucy5kcmFnUHJveHlIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoKHdpZHRoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodChoZWlnaHQpO1xuICAgICAgICB3aWR0aCAtPSAodGhpcy5fc2lkZWQgPyBkaW1lbnNpb25zLmhlYWRlckhlaWdodCA6IDApO1xuICAgICAgICBoZWlnaHQgLT0gKCF0aGlzLl9zaWRlZCA/IGRpbWVuc2lvbnMuaGVhZGVySGVpZ2h0IDogMCk7XG4gICAgICAgIHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyLndpZHRoKHdpZHRoKTtcbiAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRDb250YWluZXIuaGVpZ2h0KGhlaWdodCk7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRJdGVtLmVsZW1lbnQud2lkdGgod2lkdGgpO1xuICAgICAgICB0aGlzLl9jb250ZW50SXRlbS5lbGVtZW50LmhlaWdodChoZWlnaHQpO1xuICAgICAgICB0aGlzLl9jb250ZW50SXRlbS5jYWxsRG93bndhcmRzKCdfJHNob3cnKTtcbiAgICAgICAgdGhpcy5fY29udGVudEl0ZW0uY2FsbERvd253YXJkcygnc2V0U2l6ZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBEcmFnTGlzdGVuZXIgZnJvbSAnLi4vdXRpbHMvRHJhZ0xpc3RlbmVyJ1xuaW1wb3J0IERyYWdQcm94eSBmcm9tICcuLi9jb250cm9scy9EcmFnUHJveHknXG5pbXBvcnQge1xuICAgIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQWxsb3dzIGZvciBhbnkgRE9NIGl0ZW0gdG8gY3JlYXRlIGEgY29tcG9uZW50IG9uIGRyYWdcbiAqIHN0YXJ0IHRvYmUgZHJhZ2dlZCBpbnRvIHRoZSBMYXlvdXRcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeSBlbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbUNvbmZpZyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNvbnRlbnRJdGVtIHRoYXQgd2lsbCBiZSBjcmVhdGVkXG4gKiBAcGFyYW0ge0xheW91dE1hbmFnZXJ9IGxheW91dE1hbmFnZXJcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ1NvdXJjZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgaXRlbUNvbmZpZywgbGF5b3V0TWFuYWdlcikge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5faXRlbUNvbmZpZyA9IGl0ZW1Db25maWc7XG4gICAgICAgIHRoaXMuX2xheW91dE1hbmFnZXIgPSBsYXlvdXRNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9kcmFnTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZURyYWdMaXN0ZW5lcigpO1xuICAgIH1cblxuXHQvKipcblx0ICogRGlzcG9zZXMgb2YgdGhlIGRyYWcgbGlzdGVuZXJzIHNvIHRoZSBkcmFnIHNvdXJjZSBpcyBub3QgdXNhYmxlIGFueSBtb3JlLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fcmVtb3ZlRHJhZ0xpc3RlbmVyKCk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGxlZCBpbml0aWFsbHkgYW5kIGFmdGVyIGV2ZXJ5IGRyYWdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9jcmVhdGVEcmFnTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZURyYWdMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuX2RyYWdMaXN0ZW5lciA9IG5ldyBEcmFnTGlzdGVuZXIodGhpcy5fZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RyYWdMaXN0ZW5lci5vbignZHJhZ1N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9kcmFnTGlzdGVuZXIub24oJ2RyYWdTdG9wJywgdGhpcy5fY3JlYXRlRHJhZ0xpc3RlbmVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3IgdGhlIERyYWdMaXN0ZW5lcidzIGRyYWdTdGFydCBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2ludH0geCB0aGUgeCBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb24gZHJhZ1N0YXJ0XG4gICAgICogQHBhcmFtICAge2ludH0geSB0aGUgeCBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb24gZHJhZ1N0YXJ0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25EcmFnU3RhcnQoeCwgeSkge1xuICAgICAgICB2YXIgaXRlbUNvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWc7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGl0ZW1Db25maWcpKSB7XG4gICAgICAgICAgICBpdGVtQ29uZmlnID0gaXRlbUNvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZW50SXRlbSA9IHRoaXMuX2xheW91dE1hbmFnZXIuXyRub3JtYWxpemVDb250ZW50SXRlbSgkLmV4dGVuZCh0cnVlLCB7fSwgaXRlbUNvbmZpZykpLFxuICAgICAgICAgICAgZHJhZ1Byb3h5ID0gbmV3IERyYWdQcm94eSh4LCB5LCB0aGlzLl9kcmFnTGlzdGVuZXIsIHRoaXMuX2xheW91dE1hbmFnZXIsIGNvbnRlbnRJdGVtLCBudWxsKTtcblxuICAgICAgICB0aGlzLl9sYXlvdXRNYW5hZ2VyLnRyYW5zaXRpb25JbmRpY2F0b3IudHJhbnNpdGlvbkVsZW1lbnRzKHRoaXMuX2VsZW1lbnQsIGRyYWdQcm94eS5lbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcblx0ICogQ2FsbGVkIGFmdGVyIGV2ZXJ5IGRyYWcgYW5kIHdoZW4gdGhlIGRyYWcgc291cmNlIGlzIGJlaW5nIGRpc3Bvc2VkIG9mLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdF9yZW1vdmVEcmFnTGlzdGVuZXIoKSB7XG5cdFx0aWYoIHRoaXMuX2RyYWdMaXN0ZW5lciAhPT0gbnVsbCApIHtcblx0XHRcdHRoaXMuX2RyYWdMaXN0ZW5lci5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmNvbnN0IF90ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibG1fZHJvcFRhcmdldEluZGljYXRvclwiPjxkaXYgY2xhc3M9XCJsbV9pbm5lclwiPjwvZGl2PjwvZGl2PidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wVGFyZ2V0SW5kaWNhdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKF90ZW1wbGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodCh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEFyZWEoe1xuICAgICAgICAgICAgeDE6IHgxLFxuICAgICAgICAgICAgeTE6IHkxLFxuICAgICAgICAgICAgeDI6IHgyLFxuICAgICAgICAgICAgeTI6IHkyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodEFyZWEoYXJlYSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgIGxlZnQ6IGFyZWEueDEsXG4gICAgICAgICAgICB0b3A6IGFyZWEueTEsXG4gICAgICAgICAgICB3aWR0aDogYXJlYS54MiAtIGFyZWEueDEsXG4gICAgICAgICAgICBoZWlnaHQ6IGFyZWEueTIgLSBhcmVhLnkxXG4gICAgICAgIH0pLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaGlkZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFRhYiBmcm9tICcuLi9jb250cm9scy9UYWInXG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4uL2NvbnRyb2xzL0hlYWRlckJ1dHRvbidcbmltcG9ydCB7XG4gICAgZm5CaW5kXG59IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IF90ZW1wbGF0ZSA9IFtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJsbV9oZWFkZXJcIj4nLFxuICAgICAgICAnPHVsIGNsYXNzPVwibG1fdGFic1wiPjwvdWw+JyxcbiAgICAgICAgJzx1bCBjbGFzcz1cImxtX2NvbnRyb2xzXCI+PC91bD4nLFxuICAgICAgICAnPHVsIGNsYXNzPVwibG1fdGFiZHJvcGRvd25fbGlzdFwiPjwvdWw+JyxcbiAgICAgICAgJzwvZGl2PidcbiAgICBdLmpvaW4oJycpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIGhlYWRlciBhYm92ZSBhIFN0YWNrIENvbnRlbnRJdGVtLlxuICpcbiAqIEBwYXJhbSB7bG0uTGF5b3V0TWFuYWdlcn0gbGF5b3V0TWFuYWdlclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRlbnRJdGVtfSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGxheW91dE1hbmFnZXIsIHBhcmVudCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIgPSBsYXlvdXRNYW5hZ2VyO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKF90ZW1wbGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0TWFuYWdlci5jb25maWcuc2V0dGluZ3Muc2VsZWN0aW9uRW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdsbV9zZWxlY3RhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBmbkJpbmQodGhpcy5fb25IZWFkZXJDbGljaywgdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sbV90YWJzJyk7XG4gICAgICAgIHRoaXMudGFiRHJvcGRvd25Db250YWluZXIgPSB0aGlzLmVsZW1lbnQuZmluZCgnLmxtX3RhYmRyb3Bkb3duX2xpc3QnKTtcbiAgICAgICAgdGhpcy50YWJEcm9wZG93bkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIgPSB0aGlzLmVsZW1lbnQuZmluZCgnLmxtX2NvbnRyb2xzJyk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnBhcmVudC5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlVGFiU2l6ZXMsIHRoaXMpO1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy50YWJzTWFya2VkRm9yUmVtb3ZhbCA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUNvbnRlbnRJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZG9ja0J1dHRvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudGFiRHJvcGRvd25CdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLmhpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duID0gZm5CaW5kKHRoaXMuX2hpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duLCB0aGlzKTtcbiAgICAgICAgJChkb2N1bWVudCkubW91c2V1cCh0aGlzLmhpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duKTtcblxuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZVRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX3RhYkNvbnRyb2xPZmZzZXQgPSB0aGlzLmxheW91dE1hbmFnZXIuY29uZmlnLnNldHRpbmdzLnRhYkNvbnRyb2xPZmZzZXQ7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB0YWIgYW5kIGFzc29jaWF0ZXMgaXQgd2l0aCBhIGNvbnRlbnRJdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAge0Fic3RyYWN0Q29udGVudEl0ZW19IGNvbnRlbnRJdGVtXG4gICAgICogQHBhcmFtICAgIHtJbnRlZ2VyfSBpbmRleCBUaGUgcG9zaXRpb24gb2YgdGhlIHRhYlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY3JlYXRlVGFiKGNvbnRlbnRJdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgdGFiLCBpO1xuXG4gICAgICAgIC8vSWYgdGhlcmUncyBhbHJlYWR5IGEgdGFiIHJlbGF0aW5nIHRvIHRoZVxuICAgICAgICAvL2NvbnRlbnQgaXRlbSwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFic1tpXS5jb250ZW50SXRlbSA9PT0gY29udGVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YWIgPSBuZXcgVGFiKHRoaXMsIGNvbnRlbnRJdGVtKTtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICAgICAgICAgIHRoaXMudGFic0NvbnRhaW5lci5hcHBlbmQodGFiLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFic1tpbmRleCAtIDFdLmVsZW1lbnQuYWZ0ZXIodGFiLmVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWJzWzBdLmVsZW1lbnQuYmVmb3JlKHRhYi5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDAsIHRhYik7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRhYlNpemVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYSB0YWIgYmFzZWQgb24gdGhlIGNvbnRlbnRJdGVtIGl0cyBhc3NvY2lhdGVkIHdpdGggYW5kIHJlbW92ZXMgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAge0Fic3RyYWN0Q29udGVudEl0ZW19IGNvbnRlbnRJdGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVUYWIoY29udGVudEl0ZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnNbaV0uY29udGVudEl0ZW0gPT09IGNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzW2ldLl8kZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudGFic01hcmtlZEZvclJlbW92YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnNNYXJrZWRGb3JSZW1vdmFsW2ldLmNvbnRlbnRJdGVtID09PSBjb250ZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFic01hcmtlZEZvclJlbW92YWxbaV0uXyRkZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzTWFya2VkRm9yUmVtb3ZhbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRlbnRJdGVtIGlzIG5vdCBjb250cm9sbGVkIGJ5IHRoaXMgaGVhZGVyJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYSB0YWIgYmFzZWQgb24gdGhlIGNvbnRlbnRJdGVtIGl0cyBhc3NvY2lhdGVkIHdpdGggYW5kIG1hcmtzIGl0XG4gICAgICogZm9yIHJlbW92YWwsIGhpZGluZyBpdCB0b28uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAge0Fic3RyYWN0Q29udGVudEl0ZW19IGNvbnRlbnRJdGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBoaWRlVGFiKGNvbnRlbnRJdGVtKXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnNbaV0uY29udGVudEl0ZW0gPT09IGNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzW2ldLmVsZW1lbnQuaGlkZSgpXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzTWFya2VkRm9yUmVtb3ZhbC5wdXNoKHRoaXMudGFic1tpXSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZW50SXRlbSBpcyBub3QgY29udHJvbGxlZCBieSB0aGlzIGhlYWRlcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9ncmFtbWF0aWNhbCBlcXVpdmFsZW50IG9mIGNsaWNraW5nIGEgVGFiLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRlbnRJdGVtfSBjb250ZW50SXRlbVxuICAgICAqL1xuICAgIHNldEFjdGl2ZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIHZhciBpLCBqLCBpc0FjdGl2ZSwgYWN0aXZlVGFiO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbnRlbnRJdGVtID09PSBjb250ZW50SXRlbSkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gdGhpcy50YWJzW2ldLmNvbnRlbnRJdGVtID09PSBjb250ZW50SXRlbTtcbiAgICAgICAgICAgIHRoaXMudGFic1tpXS5zZXRBY3RpdmUoaXNBY3RpdmUpO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb250ZW50SXRlbSA9IGNvbnRlbnRJdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbmZpZy5hY3RpdmVJdGVtSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0TWFuYWdlci5jb25maWcuc2V0dGluZ3MucmVvcmRlck9uVGFiTWVudUNsaWNrKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHRoZSB0YWIgc2VsZWN0ZWQgd2FzIGluIHRoZSBkcm9wZG93biwgbW92ZSBldmVyeXRoaW5nIGRvd24gb25lIHRvIG1ha2Ugd2F5IGZvciB0aGlzIG9uZSB0byBiZSB0aGUgZmlyc3QuXG4gICAgICAgICAgICAgKiBUaGlzIHdpbGwgbWFrZSBzdXJlIHRoZSBtb3N0IHVzZWQgdGFicyBzdGF5IHZpc2libGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0VmlzaWJsZVRhYkluZGV4ICE9PSAtMSAmJiB0aGlzLnBhcmVudC5jb25maWcuYWN0aXZlSXRlbUluZGV4ID4gdGhpcy5fbGFzdFZpc2libGVUYWJJbmRleCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9IHRoaXMudGFic1t0aGlzLnBhcmVudC5jb25maWcuYWN0aXZlSXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSB0aGlzLnBhcmVudC5jb25maWcuYWN0aXZlSXRlbUluZGV4OyBqID4gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFic1tqXSA9IHRoaXMudGFic1tqIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGFic1swXSA9IGFjdGl2ZVRhYjtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb25maWcuYWN0aXZlSXRlbUluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVRhYlNpemVzKCk7XG4gICAgICAgIHRoaXMucGFyZW50LmVtaXRCdWJibGluZ0V2ZW50KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9ncmFtbWF0aWNhbGx5IG9wZXJhdGUgd2l0aCBoZWFkZXIgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9zaXRpb24gb25lIG9mICgndG9wJywnbGVmdCcsJ3JpZ2h0JywnYm90dG9tJykgdG8gc2V0IG9yIGVtcHR5IHRvIGdldCBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHByZXZpb3VzIGhlYWRlciBwb3NpdGlvblxuICAgICAqL1xuICAgIHBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IHRoaXMucGFyZW50Ll9oZWFkZXIuc2hvdztcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Ll9kb2NrZXIgJiYgdGhpcy5wYXJlbnQuX2RvY2tlci5kb2NrZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgY2hhbmdlIGhlYWRlciBwb3NpdGlvbiBpbiBkb2NrZWQgc3RhY2snKTtcbiAgICAgICAgaWYgKHByZXZpb3VzICYmICF0aGlzLnBhcmVudC5fc2lkZSlcbiAgICAgICAgICAgIHByZXZpb3VzID0gJ3RvcCc7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGFyZW50Ll9oZWFkZXIuc2hvdyAhPSBwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX2hlYWRlci5zaG93ID0gcG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5jb25maWcuaGVhZGVyID8gdGhpcy5wYXJlbnQuY29uZmlnLmhlYWRlci5zaG93ID0gcG9zaXRpb24gOiB0aGlzLnBhcmVudC5jb25maWcuaGVhZGVyID0geyBzaG93OiBwb3NpdGlvbiB9O1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3NldHVwSGVhZGVyUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvZ3JhbW1hdGljYWxseSBzZXQgY2xvc2FiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFja2FnZSBwcml2YXRlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpc0Nsb3NhYmxlIFdoZXRoZXIgdG8gZW5hYmxlL2Rpc2FibGUgY2xvc2FiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYWN0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICovXG4gICAgXyRzZXRDbG9zYWJsZShpc0Nsb3NhYmxlKSB7XG4gICAgICAgIHRoaXMuX2NhbkRlc3Ryb3kgPSBpc0Nsb3NhYmxlIHx8IHRoaXMudGFicy5sZW5ndGggPiAxO1xuICAgICAgICBpZiAodGhpcy5jbG9zZUJ1dHRvbiAmJiB0aGlzLl9pc0Nsb3NhYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VCdXR0b24uZWxlbWVudFtpc0Nsb3NhYmxlID8gXCJzaG93XCIgOiBcImhpZGVcIl0oKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2dyYW1tYXRpY2FsbHkgc2V0IGFiaWxpdHkgdG8gZG9jay5cbiAgICAgKlxuICAgICAqIEBwYWNrYWdlIHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzRG9ja2FibGUgV2hldGhlciB0byBlbmFibGUvZGlzYWJsZSBhYmlsaXR5IHRvIGRvY2suXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYWN0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICovXG4gICAgX3NldERvY2thYmxlKGlzRG9ja2FibGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9ja0J1dHRvbiAmJiB0aGlzLnBhcmVudC5faGVhZGVyICYmIHRoaXMucGFyZW50Ll9oZWFkZXIuZG9jaykge1xuICAgICAgICAgICAgdGhpcy5kb2NrQnV0dG9uLmVsZW1lbnQudG9nZ2xlKCEhaXNEb2NrYWJsZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIGVudGlyZSBoZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYWNrYWdlIHByaXZhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF8kZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFic1tpXS5fJGRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ21vdXNldXAnLCB0aGlzLmhpZGVBZGRpdGlvbmFsVGFic0Ryb3Bkb3duKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBzZXR0aW5ncyBmcm9tIGhlYWRlclxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gd2hlbiBleGlzdHNcbiAgICAgKi9cbiAgICBfZ2V0SGVhZGVyU2V0dGluZyhuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lIGluIHRoaXMucGFyZW50Ll9oZWFkZXIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX2hlYWRlcltuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBwb3BvdXQsIG1heGltaXNlIGFuZCBjbG9zZSBidXR0b25zIGluIHRoZSBoZWFkZXIncyB0b3AgcmlnaHQgY29ybmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfY3JlYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIHZhciBjbG9zZVN0YWNrLFxuICAgICAgICAgICAgcG9wb3V0LFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBtYXhpbWlzZUxhYmVsLFxuICAgICAgICAgICAgbWluaW1pc2VMYWJlbCxcbiAgICAgICAgICAgIG1heGltaXNlLFxuICAgICAgICAgICAgbWF4aW1pc2VCdXR0b24sXG4gICAgICAgICAgICB0YWJEcm9wZG93bkxhYmVsLFxuICAgICAgICAgICAgc2hvd1RhYkRyb3Bkb3duO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wZG93biB0byBzaG93IGFkZGl0aW9uYWwgdGFicy5cbiAgICAgICAgICovXG4gICAgICAgIHNob3dUYWJEcm9wZG93biA9IGZuQmluZCh0aGlzLl9zaG93QWRkaXRpb25hbFRhYnNEcm9wZG93biwgdGhpcyk7XG4gICAgICAgIHRhYkRyb3Bkb3duTGFiZWwgPSB0aGlzLmxheW91dE1hbmFnZXIuY29uZmlnLmxhYmVscy50YWJEcm9wZG93bjtcbiAgICAgICAgdGhpcy50YWJEcm9wZG93bkJ1dHRvbiA9IG5ldyBIZWFkZXJCdXR0b24odGhpcywgdGFiRHJvcGRvd25MYWJlbCwgJ2xtX3RhYmRyb3Bkb3duJywgc2hvd1RhYkRyb3Bkb3duKTtcbiAgICAgICAgdGhpcy50YWJEcm9wZG93bkJ1dHRvbi5lbGVtZW50LmhpZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuX2hlYWRlciAmJiB0aGlzLnBhcmVudC5faGVhZGVyLmRvY2spIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBmbkJpbmQodGhpcy5wYXJlbnQuZG9jaywgdGhpcy5wYXJlbnQpO1xuICAgICAgICAgICAgbGFiZWwgPSB0aGlzLl9nZXRIZWFkZXJTZXR0aW5nKCdkb2NrJyk7XG4gICAgICAgICAgICB0aGlzLmRvY2tCdXR0b24gPSBuZXcgSGVhZGVyQnV0dG9uKHRoaXMsIGxhYmVsLCAnbG1fZG9jaycsIGJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUG9wb3V0IGNvbnRyb2wgdG8gbGF1bmNoIGNvbXBvbmVudCBpbiBuZXcgd2luZG93LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuX2dldEhlYWRlclNldHRpbmcoJ3BvcG91dCcpKSB7XG4gICAgICAgICAgICBwb3BvdXQgPSBmbkJpbmQodGhpcy5fb25Qb3BvdXRDbGljaywgdGhpcyk7XG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMuX2dldEhlYWRlclNldHRpbmcoJ3BvcG91dCcpO1xuICAgICAgICAgICAgbmV3IEhlYWRlckJ1dHRvbih0aGlzLCBsYWJlbCwgJ2xtX3BvcG91dCcsIHBvcG91dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWF4aW1pc2UgY29udHJvbCAtIHNldCB0aGUgY29tcG9uZW50IHRvIHRoZSBmdWxsIHNpemUgb2YgdGhlIGxheW91dFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuX2dldEhlYWRlclNldHRpbmcoJ21heGltaXNlJykpIHtcbiAgICAgICAgICAgIG1heGltaXNlID0gZm5CaW5kKHRoaXMucGFyZW50LnRvZ2dsZU1heGltaXNlLCB0aGlzLnBhcmVudCk7XG4gICAgICAgICAgICBtYXhpbWlzZUxhYmVsID0gdGhpcy5fZ2V0SGVhZGVyU2V0dGluZygnbWF4aW1pc2UnKTtcbiAgICAgICAgICAgIG1pbmltaXNlTGFiZWwgPSB0aGlzLl9nZXRIZWFkZXJTZXR0aW5nKCdtaW5pbWlzZScpO1xuICAgICAgICAgICAgbWF4aW1pc2VCdXR0b24gPSBuZXcgSGVhZGVyQnV0dG9uKHRoaXMsIG1heGltaXNlTGFiZWwsICdsbV9tYXhpbWlzZScsIG1heGltaXNlKTtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnQub24oJ21heGltaXNlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1heGltaXNlQnV0dG9uLmVsZW1lbnQuYXR0cigndGl0bGUnLCBtaW5pbWlzZUxhYmVsKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5vbignbWluaW1pc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWF4aW1pc2VCdXR0b24uZWxlbWVudC5hdHRyKCd0aXRsZScsIG1heGltaXNlTGFiZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xvc2UgYnV0dG9uXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5faXNDbG9zYWJsZSgpKSB7XG4gICAgICAgICAgICBjbG9zZVN0YWNrID0gZm5CaW5kKHRoaXMucGFyZW50LnJlbW92ZSwgdGhpcy5wYXJlbnQpO1xuICAgICAgICAgICAgbGFiZWwgPSB0aGlzLl9nZXRIZWFkZXJTZXR0aW5nKCdjbG9zZScpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG5ldyBIZWFkZXJCdXR0b24odGhpcywgbGFiZWwsICdsbV9jbG9zZScsIGNsb3NlU3RhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgZHJvcCBkb3duIGZvciBhZGRpdGlvbmFsIHRhYnMgd2hlbiB0aGVyZSBhcmUgdG9vIG1hbnkgdG8gZGlzcGxheS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9zaG93QWRkaXRpb25hbFRhYnNEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy50YWJEcm9wZG93bkNvbnRhaW5lci5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgZHJvcCBkb3duIGZvciBhZGRpdGlvbmFsIHRhYnMgd2hlbiB0aGVyZSBhcmUgdG9vIG1hbnkgdG8gZGlzcGxheS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9oaWRlQWRkaXRpb25hbFRhYnNEcm9wZG93bihlKSB7XG4gICAgICAgIHRoaXMudGFiRHJvcGRvd25Db250YWluZXIuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBoZWFkZXIgaXMgY2xvc2FibGUgYmFzZWQgb24gdGhlIHBhcmVudCBjb25maWcgYW5kXG4gICAgICogdGhlIGdsb2JhbCBjb25maWcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgaGVhZGVyIGlzIGNsb3NhYmxlLlxuICAgICAqL1xuICAgIF9pc0Nsb3NhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY29uZmlnLmlzQ2xvc2FibGUgJiYgdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5zZXR0aW5ncy5zaG93Q2xvc2VJY29uO1xuICAgIH1cblxuICAgIF9vblBvcG91dENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5zZXR0aW5ncy5wb3BvdXRXaG9sZVN0YWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5wb3BvdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29udGVudEl0ZW0ucG9wb3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGhlYWRlcidzIGJhY2tncm91bmQgaXMgY2xpY2tlZCAobm90IGl0J3MgdGFicyBvciBjb250cm9scylcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICB7alF1ZXJ5IERPTSBldmVudH0gZXZlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9vbkhlYWRlckNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudFswXSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoZXMgdGhlIHRhYnMgdG8gdGhlIHRhYiBkcm9wZG93biBpZiB0aGUgYXZhaWxhYmxlIHNwYWNlIGlzIG5vdCBzdWZmaWNpZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfdXBkYXRlVGFiU2l6ZXMoc2hvd1RhYk1lbnUpIHtcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU2hvdyB0aGUgbWVudSBiYXNlZCBvbiBmdW5jdGlvbiBhcmd1bWVudFxuICAgICAgICB0aGlzLnRhYkRyb3Bkb3duQnV0dG9uLmVsZW1lbnQudG9nZ2xlKHNob3dUYWJNZW51ID09PSB0cnVlKTtcblxuICAgICAgICB2YXIgc2l6ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNzcyhzaXplKCF0aGlzLnBhcmVudC5fc2lkZWQpLCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudFtzaXplKHRoaXMucGFyZW50Ll9zaWRlZCldKHRoaXMubGF5b3V0TWFuYWdlci5jb25maWcuZGltZW5zaW9ucy5oZWFkZXJIZWlnaHQpO1xuICAgICAgICB2YXIgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpIC0gdGhpcy5jb250cm9sc0NvbnRhaW5lci5vdXRlcldpZHRoKCkgLSB0aGlzLl90YWJDb250cm9sT2Zmc2V0LFxuICAgICAgICAgICAgY3VtdWxhdGl2ZVRhYldpZHRoID0gMCxcbiAgICAgICAgICAgIHZpc2libGVUYWJXaWR0aCA9IDAsXG4gICAgICAgICAgICB0YWJFbGVtZW50LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBtYXJnaW5MZWZ0LFxuICAgICAgICAgICAgb3ZlcmxhcCA9IDAsXG4gICAgICAgICAgICB0YWJXaWR0aCxcbiAgICAgICAgICAgIHRhYk92ZXJsYXBBbGxvd2FuY2UgPSB0aGlzLmxheW91dE1hbmFnZXIuY29uZmlnLnNldHRpbmdzLnRhYk92ZXJsYXBBbGxvd2FuY2UsXG4gICAgICAgICAgICB0YWJPdmVybGFwQWxsb3dhbmNlRXhjZWVkZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gKHRoaXMuYWN0aXZlQ29udGVudEl0ZW0gPyB0aGlzLnRhYnMuaW5kZXhPZih0aGlzLmFjdGl2ZUNvbnRlbnRJdGVtLnRhYikgOiAwKSxcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9IHRoaXMudGFic1thY3RpdmVJbmRleF07XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5fc2lkZWQpXG4gICAgICAgICAgICBhdmFpbGFibGVXaWR0aCA9IHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpIC0gdGhpcy5jb250cm9sc0NvbnRhaW5lci5vdXRlckhlaWdodCgpIC0gdGhpcy5fdGFiQ29udHJvbE9mZnNldDtcbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVUYWJJbmRleCA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhYkVsZW1lbnQgPSB0aGlzLnRhYnNbaV0uZWxlbWVudDtcblxuICAgICAgICAgICAgLy9QdXQgdGhlIHRhYiBpbiB0aGUgdGFiQ29udGFpbmVyIHNvIGl0cyB0cnVlIHdpZHRoIGNhbiBiZSBjaGVja2VkXG4gICAgICAgICAgICB0aGlzLnRhYnNDb250YWluZXIuYXBwZW5kKHRhYkVsZW1lbnQpO1xuICAgICAgICAgICAgdGFiV2lkdGggPSB0YWJFbGVtZW50Lm91dGVyV2lkdGgoKSArIHBhcnNlSW50KHRhYkVsZW1lbnQuY3NzKCdtYXJnaW4tcmlnaHQnKSwgMTApO1xuXG4gICAgICAgICAgICBjdW11bGF0aXZlVGFiV2lkdGggKz0gdGFiV2lkdGg7XG5cbiAgICAgICAgICAgIC8vSW5jbHVkZSB0aGUgYWN0aXZlIHRhYidzIHdpZHRoIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgIC8vVGhpcyBpcyB0byBlbnN1cmUgdGhlcmUgaXMgcm9vbSB0byBzaG93IHRoZSBhY3RpdmUgdGFiXG4gICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPD0gaSkge1xuICAgICAgICAgICAgICAgIHZpc2libGVUYWJXaWR0aCA9IGN1bXVsYXRpdmVUYWJXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZVRhYldpZHRoID0gY3VtdWxhdGl2ZVRhYldpZHRoICsgYWN0aXZlVGFiLmVsZW1lbnQub3V0ZXJXaWR0aCgpICsgcGFyc2VJbnQoYWN0aXZlVGFiLmVsZW1lbnQuY3NzKCdtYXJnaW4tcmlnaHQnKSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdGFicyB3b24ndCBmaXQsIGNoZWNrIHRoZSBvdmVybGFwIGFsbG93YW5jZS5cbiAgICAgICAgICAgIGlmICh2aXNpYmxlVGFiV2lkdGggPiBhdmFpbGFibGVXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgLy9PbmNlIGFsbG93YW5jZSBpcyBleGNlZWRlZCwgYWxsIHJlbWFpbmluZyB0YWJzIGdvIHRvIG1lbnUuXG4gICAgICAgICAgICAgICAgaWYgKCF0YWJPdmVybGFwQWxsb3dhbmNlRXhjZWVkZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL05vIG92ZXJsYXAgZm9yIGZpcnN0IHRhYiBvciBhY3RpdmUgdGFiXG4gICAgICAgICAgICAgICAgICAgIC8vT3ZlcmxhcCBzcHJlYWRzIGFtb25nIG5vbi1hY3RpdmUsIG5vbi1maXJzdCB0YWJzXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA+IDAgJiYgYWN0aXZlSW5kZXggPD0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9ICh2aXNpYmxlVGFiV2lkdGggLSBhdmFpbGFibGVXaWR0aCkgLyAoaSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9ICh2aXNpYmxlVGFiV2lkdGggLSBhdmFpbGFibGVXaWR0aCkgLyBpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBvdmVybGFwIGFnYWluc3QgYWxsb3dhbmNlLlxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCA8IHRhYk92ZXJsYXBBbGxvd2FuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IChqICE9PSBhY3RpdmVJbmRleCAmJiBqICE9PSAwKSA/ICctJyArIG92ZXJsYXAgKyAncHgnIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJzW2pdLmVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiBpIC0gaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogbWFyZ2luTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFZpc2libGVUYWJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYnNDb250YWluZXIuYXBwZW5kKHRhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiT3ZlcmxhcEFsbG93YW5jZUV4Y2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvL0FjdGl2ZSB0YWIgc2hvdWxkIHNob3cgZXZlbiBpZiBhbGxvd2FuY2UgZXhjZWVkZWQuIChXZSBsZWZ0IHJvb20uKVxuICAgICAgICAgICAgICAgICAgICB0YWJFbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYnNDb250YWluZXIuYXBwZW5kKHRhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YWJPdmVybGFwQWxsb3dhbmNlRXhjZWVkZWQgJiYgaSAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dUYWJNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RhYiBtZW51IGFscmVhZHkgc2hvd24sIHNvIHdlIGp1c3QgYWRkIHRvIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiRHJvcGRvd25Db250YWluZXIuYXBwZW5kKHRhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9XZSBub3cga25vdyB0aGUgdGFiIG1lbnUgbXVzdCBiZSBzaG93biwgc28gd2UgaGF2ZSB0byByZWNhbGN1bGF0ZSBldmVyeXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2l6ZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFZpc2libGVUYWJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgdGFiRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNDb250YWluZXIuYXBwZW5kKHRhYkVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlciwgbGFiZWwsIGNzc0NsYXNzLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKCc8bGkgY2xhc3M9XCInICsgY3NzQ2xhc3MgKyAnXCIgdGl0bGU9XCInICsgbGFiZWwgKyAnXCI+PC9saT4nKTtcbiAgICAgICAgdGhpcy5faGVhZGVyLm9uKCdkZXN0cm95JywgdGhpcy5fJGRlc3Ryb3ksIHRoaXMpO1xuICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2sgdG91Y2hzdGFydCcsIHRoaXMuX2FjdGlvbik7XG4gICAgICAgIHRoaXMuX2hlYWRlci5jb250cm9sc0NvbnRhaW5lci5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBfJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vZmYoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBEcmFnTGlzdGVuZXIgZnJvbSAnLi4vdXRpbHMvRHJhZ0xpc3RlbmVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdHRlciB7XG4gICAgY29uc3RydWN0b3IoaXNWZXJ0aWNhbCwgc2l6ZSwgZ3JhYlNpemUpIHtcbiAgICAgICAgdGhpcy5faXNWZXJ0aWNhbCA9IGlzVmVydGljYWw7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9ncmFiU2l6ZSA9IGdyYWJTaXplIDwgc2l6ZSA/IHNpemUgOiBncmFiU2l6ZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2RyYWdMaXN0ZW5lciA9IG5ldyBEcmFnTGlzdGVuZXIodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBvbihldmVudCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyLm9uKGV2ZW50LCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgXyRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBkcmFnSGFuZGxlID0gJCgnPGRpdiBjbGFzcz1cImxtX2RyYWdfaGFuZGxlXCI+PC9kaXY+Jyk7XG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnPGRpdiBjbGFzcz1cImxtX3NwbGl0dGVyXCI+PC9kaXY+Jyk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGRyYWdIYW5kbGUpO1xuXG4gICAgICAgIHZhciBoYW5kbGVFeGNlc3NTaXplID0gdGhpcy5fZ3JhYlNpemUgLSB0aGlzLl9zaXplO1xuICAgICAgICB2YXIgaGFuZGxlRXhjZXNzUG9zID0gaGFuZGxlRXhjZXNzU2l6ZSAvIDI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGRyYWdIYW5kbGUuY3NzKCd0b3AnLCAtaGFuZGxlRXhjZXNzUG9zKTtcbiAgICAgICAgICAgIGRyYWdIYW5kbGUuY3NzKCdoZWlnaHQnLCB0aGlzLl9zaXplICsgaGFuZGxlRXhjZXNzU2l6ZSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdsbV92ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgZWxlbWVudFsnaGVpZ2h0J10odGhpcy5fc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmFnSGFuZGxlLmNzcygnbGVmdCcsIC1oYW5kbGVFeGNlc3NQb3MpO1xuICAgICAgICAgICAgZHJhZ0hhbmRsZS5jc3MoJ3dpZHRoJywgdGhpcy5fc2l6ZSArIGhhbmRsZUV4Y2Vzc1NpemUpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnbG1faG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgZWxlbWVudFsnd2lkdGgnXSh0aGlzLl9zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBEcmFnTGlzdGVuZXIgZnJvbSAnLi4vdXRpbHMvRHJhZ0xpc3RlbmVyJ1xuaW1wb3J0IERyYWdQcm94eSBmcm9tICcuLi9jb250cm9scy9EcmFnUHJveHknXG5pbXBvcnQge1xuICAgIGZuQmluZCxcbiAgICBzdHJpcFRhZ3Ncbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbmRpdmlkdWFsIHRhYiB3aXRoaW4gYSBTdGFjaydzIGhlYWRlclxuICpcbiAqIEBwYXJhbSB7SGVhZGVyfSBoZWFkZXJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250ZW50SXRlbX0gY29udGVudEl0ZW1cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5jb25zdCBfdGVtcGxhdGUgPSAnPGxpIGNsYXNzPVwibG1fdGFiXCI+PGkgY2xhc3M9XCJsbV9sZWZ0XCI+PC9pPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJsbV90aXRsZVwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwibG1fY2xvc2VfdGFiXCI+PC9kaXY+JyArXG4gICAgICAgICc8aSBjbGFzcz1cImxtX3JpZ2h0XCI+PC9pPjwvbGk+J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIge1xuXG4gICAgY29uc3RydWN0b3IoaGVhZGVyLCBjb250ZW50SXRlbSkge1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5jb250ZW50SXRlbSA9IGNvbnRlbnRJdGVtO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKF90ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sbV90aXRsZScpO1xuICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5maW5kKCcubG1fY2xvc2VfdGFiJyk7XG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50W2NvbnRlbnRJdGVtLmNvbmZpZy5pc0Nsb3NhYmxlID8gJ3Nob3cnIDogJ2hpZGUnXSgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZXRUaXRsZShjb250ZW50SXRlbS5jb25maWcudGl0bGUpO1xuICAgICAgICB0aGlzLmNvbnRlbnRJdGVtLm9uKCd0aXRsZUNoYW5nZWQnLCB0aGlzLnNldFRpdGxlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl9sYXlvdXRNYW5hZ2VyID0gdGhpcy5jb250ZW50SXRlbS5sYXlvdXRNYW5hZ2VyO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2xheW91dE1hbmFnZXIuY29uZmlnLnNldHRpbmdzLnJlb3JkZXJFbmFibGVkID09PSB0cnVlICYmXG4gICAgICAgICAgICBjb250ZW50SXRlbS5jb25maWcucmVvcmRlckVuYWJsZWQgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmFnTGlzdGVuZXIgPSBuZXcgRHJhZ0xpc3RlbmVyKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnTGlzdGVuZXIub24oJ2RyYWdTdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW0ub24oJ2Rlc3Ryb3knLCB0aGlzLl9kcmFnTGlzdGVuZXIuZGVzdHJveSwgdGhpcy5fZHJhZ0xpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uVGFiQ2xpY2tGbiA9IGZuQmluZCh0aGlzLl9vblRhYkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fb25DbG9zZUNsaWNrRm4gPSBmbkJpbmQodGhpcy5fb25DbG9zZUNsaWNrLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgdGhpcy5fb25UYWJDbGlja0ZuKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbS5jb25maWcuaXNDbG9zYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCB0aGlzLl9vbkNsb3NlQ2xpY2tGbik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRWxlbWVudC5vbignbW91c2Vkb3duJywgdGhpcy5fb25DbG9zZU1vdXNlZG93bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudEl0ZW0udGFiID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZW50SXRlbS5lbWl0KCd0YWInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb250ZW50SXRlbS5sYXlvdXRNYW5hZ2VyLmVtaXQoJ3RhYkNyZWF0ZWQnLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbS5jb250YWluZXIudGFiID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW0uY29udGFpbmVyLmVtaXQoJ3RhYicsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0YWIncyB0aXRsZSB0byB0aGUgcHJvdmlkZWQgc3RyaW5nIGFuZCBzZXRzXG4gICAgICogaXRzIHRpdGxlIGF0dHJpYnV0ZSB0byBhIHB1cmUgdGV4dCByZXByZXNlbnRhdGlvbiAod2l0aG91dFxuICAgICAqIGh0bWwgdGFncykgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBjYW4gY29udGFpbiBodG1sXG4gICAgICovXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgc3RyaXBUYWdzKHRpdGxlKSk7XG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50Lmh0bWwodGl0bGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB0YWIncyBhY3RpdmUgc3RhdGUuIFRvIHByb2dyYW1tYXRpY2FsbHlcbiAgICAgKiBzd2l0Y2ggdGFicywgdXNlIGhlYWRlci5zZXRBY3RpdmVDb250ZW50SXRlbSggaXRlbSApIGluc3RlYWQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpc0FjdGl2ZVxuICAgICAqL1xuICAgIHNldEFjdGl2ZShpc0FjdGl2ZSkge1xuICAgICAgICBpZiAoaXNBY3RpdmUgPT09IHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xtX2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsbV9hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSB0YWJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQub2ZmKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIHRoaXMuX29uVGFiQ2xpY2tGbik7XG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50Lm9mZignY2xpY2sgdG91Y2hzdGFydCcsIHRoaXMuX29uQ2xvc2VDbGlja0ZuKTtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbS5vZmYoJ2Rlc3Ryb3knLCB0aGlzLl9kcmFnTGlzdGVuZXIuZGVzdHJveSwgdGhpcy5fZHJhZ0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdMaXN0ZW5lci5vZmYoJ2RyYWdTdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB0aGUgRHJhZ0xpc3RlbmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7TnVtYmVyfSB4IFRoZSB0YWJzIGFic29sdXRlIHggcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gICB7TnVtYmVyfSB5IFRoZSB0YWJzIGFic29sdXRlIHkgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uRHJhZ1N0YXJ0KHgsIHkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlci5fY2FuRGVzdHJveSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbS5wYXJlbnQuaXNNYXhpbWlzZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW0ucGFyZW50LnRvZ2dsZU1heGltaXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3IERyYWdQcm94eShcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyLFxuICAgICAgICAgICAgdGhpcy5fbGF5b3V0TWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW0sXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5wYXJlbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB3aGVuIHRoZSB0YWIgaXMgY2xpY2tlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnkgRE9NIGV2ZW50fSBldmVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25UYWJDbGljayhldmVudCkge1xuICAgICAgICAvLyBsZWZ0IG1vdXNlIGJ1dHRvbiBvciB0YXBcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCB8fCBldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnBhcmVudC5zZXRBY3RpdmVDb250ZW50SXRlbSggdGhpcy5jb250ZW50SXRlbSApO1xuXG4gICAgICAgICAgICAvLyBtaWRkbGUgbW91c2UgYnV0dG9uXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSAxICYmIHRoaXMuY29udGVudEl0ZW0uY29uZmlnLmlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VDbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB3aGVuIHRoZSB0YWIncyBjbG9zZSBidXR0b24gaXNcbiAgICAgKiBjbGlja2VkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7alF1ZXJ5IERPTSBldmVudH0gZXZlbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uQ2xvc2VDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlci5fY2FuRGVzdHJveSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5oZWFkZXIucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGVudEl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGNhcHR1cmUgdGFiIGNsb3NlIGJ1dHRvbiBtb3VzZWRvd25cbiAgICAgKiB0byBwcmV2ZW50IHRhYiBmcm9tIGFjdGl2YXRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gKGpRdWVyeSBET00gZXZlbnQpIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9vbkNsb3NlTW91c2Vkb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgbm93LFxuICAgIGFuaW1GcmFtZSxcbiAgICBmbkJpbmRcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbkluZGljYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSAkKCc8ZGl2IGNsYXNzPVwibG1fdHJhbnNpdGlvbl9pbmRpY2F0b3JcIj48L2Rpdj4nKTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5fdG9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZnJvbURpbWVuc2lvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLl90b3RhbEFuaW1hdGlvbkR1cmF0aW9uID0gMjAwO1xuICAgICAgICB0aGlzLl9hbmltYXRpb25TdGFydFRpbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbkVsZW1lbnRzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRPRE8gLSBUaGlzIGlzIG5vdCBxdWl0ZSBhcyBjb29sIGFzIGV4cGVjdGVkLiBSZXZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRoaXMuX3RvRWxlbWVudCA9IHRvRWxlbWVudDtcbiAgICAgICAgLy8gdGhpcy5fYW5pbWF0aW9uU3RhcnRUaW1lID0gbm93KCk7XG4gICAgICAgIC8vIHRoaXMuX2Zyb21EaW1lbnNpb25zID0gdGhpcy5fbWVhc3VyZShmcm9tRWxlbWVudCk7XG4gICAgICAgIC8vIHRoaXMuX2Zyb21EaW1lbnNpb25zLm9wYWNpdHkgPSAwLjg7XG4gICAgICAgIC8vIHRoaXMuX2VsZW1lbnQuc2hvdygpLmNzcyh0aGlzLl9mcm9tRGltZW5zaW9ucyk7XG4gICAgICAgIC8vIGFuaW1GcmFtZShmbkJpbmQodGhpcy5fbmV4dEFuaW1hdGlvbkZyYW1lLCB0aGlzKSk7XG4gICAgfVxuXG4gICAgX25leHRBbmltYXRpb25GcmFtZSgpIHtcbiAgICAgICAgdmFyIHRvRGltZW5zaW9ucyA9IHRoaXMuX21lYXN1cmUodGhpcy5fdG9FbGVtZW50KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblByb2dyZXNzID0gKG5vdygpIC0gdGhpcy5fYW5pbWF0aW9uU3RhcnRUaW1lKSAvIHRoaXMuX3RvdGFsQW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBjdXJyZW50RnJhbWVTdHlsZXMgPSB7fSxcbiAgICAgICAgICAgIGNzc1Byb3BlcnR5O1xuXG4gICAgICAgIGlmIChhbmltYXRpb25Qcm9ncmVzcyA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmhpZGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvRGltZW5zaW9ucy5vcGFjaXR5ID0gMDtcblxuICAgICAgICBmb3IgKGNzc1Byb3BlcnR5IGluIHRoaXMuX2Zyb21EaW1lbnNpb25zKSB7XG4gICAgICAgICAgICBjdXJyZW50RnJhbWVTdHlsZXNbY3NzUHJvcGVydHldID0gdGhpcy5fZnJvbURpbWVuc2lvbnNbY3NzUHJvcGVydHldICtcbiAgICAgICAgICAgICAgICAodG9EaW1lbnNpb25zW2Nzc1Byb3BlcnR5XSAtIHRoaXMuX2Zyb21EaW1lbnNpb25zW2Nzc1Byb3BlcnR5XSkgKlxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblByb2dyZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jc3MoY3VycmVudEZyYW1lU3R5bGVzKTtcbiAgICAgICAgYW5pbUZyYW1lKGZuQmluZCh0aGlzLl9uZXh0QW5pbWF0aW9uRnJhbWUsIHRoaXMpKTtcbiAgICB9XG5cbiAgICBfbWVhc3VyZShlbGVtZW50KSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBlbGVtZW50Lm9mZnNldCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcbiAgICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCxcbiAgICAgICAgICAgIHdpZHRoOiBlbGVtZW50Lm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vdXRlckhlaWdodCgpXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBub2RlKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gJ0NvbmZpZ3VyYXRpb24gRXJyb3InO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgXG4gIEFMTF9FVkVOVFxufSBmcm9tICcuLi91dGlscy9FdmVudEVtaXR0ZXInXG5cbmltcG9ydCBCdWJibGluZ0V2ZW50IGZyb20gJy4uL3V0aWxzL0J1YmJsaW5nRXZlbnQnXG5pbXBvcnQgUm9vdCBmcm9tICcuL1Jvb3QnXG5pbXBvcnQgQ29uZmlndXJhdGlvbkVycm9yIGZyb20gJy4uL2Vycm9ycy9Db25maWd1cmF0aW9uRXJyb3InXG5pbXBvcnQgaXRlbURlZmF1bHRDb25maWcgZnJvbSAnLi4vY29uZmlnL0l0ZW1EZWZhdWx0Q29uZmlnJ1xuXG5pbXBvcnQge1xuICAgIGZuQmluZCxcbiAgICBhbmltRnJhbWUsXG4gICAgaW5kZXhPZlxufSBmcm9tICcuLi91dGlscy91dGlscydcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlY2xhc3MgdGhhdCBhbGwgY29udGVudCBpdGVtcyBpbmhlcml0IGZyb20uXG4gKiBNb3N0IG1ldGhvZHMgcHJvdmlkZSBhIHN1YnNldCBvZiB3aGF0IHRoZSBzdWItY2xhc3NlcyBkby5cbiAqXG4gKiBJdCBhbHNvIHByb3ZpZGVzIGEgbnVtYmVyIG9mIGZ1bmN0aW9ucyBmb3IgdHJlZSB0cmF2ZXJzYWxcbiAqXG4gKiBAcGFyYW0ge2xtLkxheW91dE1hbmFnZXJ9IGxheW91dE1hbmFnZXJcbiAqIEBwYXJhbSB7aXRlbSBub2RlIGNvbmZpZ3VyYXRpb259IGNvbmZpZ1xuICogQHBhcmFtIHtsbS5pdGVtfSBwYXJlbnRcbiAqXG4gKiBAZXZlbnQgc3RhdGVDaGFuZ2VkXG4gKiBAZXZlbnQgYmVmb3JlSXRlbURlc3Ryb3llZFxuICogQGV2ZW50IGl0ZW1EZXN0cm95ZWRcbiAqIEBldmVudCBpdGVtQ3JlYXRlZFxuICogQGV2ZW50IGNvbXBvbmVudENyZWF0ZWRcbiAqIEBldmVudCByb3dDcmVhdGVkXG4gKiBAZXZlbnQgY29sdW1uQ3JlYXRlZFxuICogQGV2ZW50IHN0YWNrQ3JlYXRlZFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RDb250ZW50SXRlbSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IobGF5b3V0TWFuYWdlciwgY29uZmlnLCBwYXJlbnQpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZXh0ZW5kSXRlbU5vZGUoY29uZmlnKTtcbiAgICAgICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTWF4aW1pc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSb290ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbHVtbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGF5b3V0TWFuYWdlciA9IGxheW91dE1hbmFnZXI7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdFdmVudFByb3BhZ2F0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLl90aHJvdHRsZWRFdmVudHMgPSBbJ3N0YXRlQ2hhbmdlZCddO1xuXG4gICAgICAgIHRoaXMub24oQUxMX0VWRU5ULCB0aGlzLl9wcm9wYWdhdGVFdmVudCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDb250ZW50SXRlbXMoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4sIGNhbGxlZCByZWN1cnNpdmVseVxuICAgICAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFNpemUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWJzdHJhY3QgTWV0aG9kJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBtZXRob2QgcmVjdXJzaXZlbHkgZG93bndhcmRzIG9uIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7U3RyaW5nfSBmdW5jdGlvbk5hbWUgICAgICB0aGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gICAgICogQHBhcmFtICAge1tBcnJheV19ZnVuY3Rpb25Bcmd1bWVudHMgb3B0aW9uYWwgYXJndW1lbnRzIHRoYXQgYXJlIHBhc3NlZCB0byBldmVyeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAgIHtbYm9vbF19IGJvdHRvbVVwICAgICAgICAgIENhbGwgbWV0aG9kcyBmcm9tIGJvdHRvbSB0byB0b3AsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICogQHBhcmFtICAge1tib29sXX0gc2tpcFNlbGYgICAgICAgICAgRG9uJ3QgaW52b2tlIHRoZSBtZXRob2Qgb24gdGhlIGNsYXNzIHRoYXQgY2FsbHMgaXQsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBjYWxsRG93bndhcmRzKGZ1bmN0aW9uTmFtZSwgZnVuY3Rpb25Bcmd1bWVudHMsIGJvdHRvbVVwLCBza2lwU2VsZikge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAoYm90dG9tVXAgIT09IHRydWUgJiYgc2tpcFNlbGYgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXNbZnVuY3Rpb25OYW1lXS5hcHBseSh0aGlzLCBmdW5jdGlvbkFyZ3VtZW50cyB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5jYWxsRG93bndhcmRzKGZ1bmN0aW9uTmFtZSwgZnVuY3Rpb25Bcmd1bWVudHMsIGJvdHRvbVVwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tVXAgPT09IHRydWUgJiYgc2tpcFNlbGYgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXNbZnVuY3Rpb25OYW1lXS5hcHBseSh0aGlzLCBmdW5jdGlvbkFyZ3VtZW50cyB8fCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hpbGQgbm9kZSAoYW5kIGl0cyBjaGlsZHJlbikgZnJvbSB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NvbnRlbnRJdGVtfSBjb250ZW50SXRlbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGQoY29udGVudEl0ZW0sIGtlZXBDaGlsZCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRoYXQncyB0byBiZSByZW1vdmVkIHdpdGhpbiBhbGwgY29udGVudCBpdGVtcyB0aGlzIG5vZGUgY29udGFpbnNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBpbmRleCA9IGluZGV4T2YoY29udGVudEl0ZW0sIHRoaXMuY29udGVudEl0ZW1zKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBNYWtlIHN1cmUgdGhlIGNvbnRlbnQgaXRlbSB0byBiZSByZW1vdmVkIGlzIGFjdHVhbGx5IGEgY2hpbGQgb2YgdGhpcyBpdGVtXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcmVtb3ZlIGNoaWxkIGl0ZW0uIFVua25vd24gY29udGVudCBpdGVtJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcblx0XHQgKiBDYWxsIC5fJGRlc3Ryb3kgb24gdGhlIGNvbnRlbnQgaXRlbS4gXG5cdFx0ICogVGhlbiB1c2UgJ2NhbGxEb3dud2FyZHMnIHRvIGRlc3Ryb3kgYW55IGNoaWxkcmVuXG5cdFx0ICovXG4gICAgICAgIGlmIChrZWVwQ2hpbGQgIT09IHRydWUpIHtcblx0XHRcdHRoaXMuY29udGVudEl0ZW1zW2luZGV4XS5fJGRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29udGVudEl0ZW1zW2luZGV4XS5jYWxsRG93bndhcmRzKCdfJGRlc3Ryb3knLCBbXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBjb250ZW50IGl0ZW0gZnJvbSB0aGlzIG5vZGVzIGFycmF5IG9mIGNoaWxkcmVuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRlbnRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgY29uZmlndXJhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb25maWcuY29udGVudC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIG5vZGUgc3RpbGwgY29udGFpbnMgb3RoZXIgY29udGVudCBpdGVtcywgYWRqdXN0IHRoZWlyIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGlzIHdhcyB0aGUgbGFzdCBjb250ZW50IGl0ZW0sIHJlbW92ZSB0aGlzIG5vZGUgYXMgd2VsbFxuICAgICAgICAgICAgICovXG4gICAgICAgIH0gZWxzZSBpZiAoISh0aGlzIGluc3RhbmNlb2YgUm9vdCkgJiYgdGhpcy5jb25maWcuaXNDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBhIGNoaWxkIG5vZGUgKGFuZCBpdHMgY2hpbGRyZW4pIGZyb20gdGhlIHRyZWUgcmVjbGFpbWluZyBpdHMgc3BhY2UgaW4gdGhlIGxheW91dFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NvbnRlbnRJdGVtfSBjb250ZW50SXRlbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgdW5kaXNwbGF5Q2hpbGQoY29udGVudEl0ZW0pIHtcbiAgICAgICAgLypcbiAgICAgICAgICogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB0aGF0J3MgdG8gYmUgcmVtb3ZlZCB3aXRoaW4gYWxsIGNvbnRlbnQgaXRlbXMgdGhpcyBub2RlIGNvbnRhaW5zXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5kZXggPSBpbmRleE9mKGNvbnRlbnRJdGVtLCB0aGlzLmNvbnRlbnRJdGVtcyk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogTWFrZSBzdXJlIHRoZSBjb250ZW50IGl0ZW0gdG8gYmUgcmVtb3ZlZCBpcyBhY3R1YWxseSBhIGNoaWxkIG9mIHRoaXMgaXRlbVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IHJlbW92ZSBjaGlsZCBpdGVtLiBVbmtub3duIGNvbnRlbnQgaXRlbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJvb3QpICYmIHRoaXMuY29uZmlnLmlzQ2xvc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnVuZGlzcGxheUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgdHJlZSBzdHJ1Y3R1cmUgZm9yIHRoZSBuZXdseSBhZGRlZCBjaGlsZFxuICAgICAqIFRoZSByZXNwb25zaWJpbGl0eSBmb3IgdGhlIGFjdHVhbCBET00gbWFuaXB1bGF0aW9ucyBsaWVzXG4gICAgICogd2l0aCB0aGUgY29uY3JldGUgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRlbnRJdGVtfSBjb250ZW50SXRlbVxuICAgICAqIEBwYXJhbSB7W0ludF19IGluZGV4IElmIG9taXR0ZWQgaXRlbSB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICovXG4gICAgYWRkQ2hpbGQoY29udGVudEl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudEl0ZW1zLnNwbGljZShpbmRleCwgMCwgY29udGVudEl0ZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnQgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnQuc3BsaWNlKGluZGV4LCAwLCBjb250ZW50SXRlbS5jb25maWcpO1xuICAgICAgICBjb250ZW50SXRlbS5wYXJlbnQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChjb250ZW50SXRlbS5wYXJlbnQuaXNJbml0aWFsaXNlZCA9PT0gdHJ1ZSAmJiBjb250ZW50SXRlbS5pc0luaXRpYWxpc2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29udGVudEl0ZW0uXyRpbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBvbGRDaGlsZCB3aXRoIG5ld0NoaWxkLiBUaGlzIHVzZWQgdG8gdXNlIGpRdWVyeS5yZXBsYWNlV2l0aC4uLiB3aGljaCBmb3JcbiAgICAgKiBzb21lIHJlYXNvbiByZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnMsIHNvIGlzbid0IHJlYWxseSBhbiBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gb2xkQ2hpbGRcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gbmV3Q2hpbGRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlcGxhY2VDaGlsZChvbGRDaGlsZCwgbmV3Q2hpbGQsIF8kZGVzdHJveU9sZENoaWxkKSB7XG5cbiAgICAgICAgbmV3Q2hpbGQgPSB0aGlzLmxheW91dE1hbmFnZXIuXyRub3JtYWxpemVDb250ZW50SXRlbShuZXdDaGlsZCk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gaW5kZXhPZihvbGRDaGlsZCwgdGhpcy5jb250ZW50SXRlbXMpLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IG9sZENoaWxkLmVsZW1lbnRbMF0ucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcmVwbGFjZSBjaGlsZC4gb2xkQ2hpbGQgaXMgbm90IGNoaWxkIG9mIHRoaXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0NoaWxkLmVsZW1lbnRbMF0sIG9sZENoaWxkLmVsZW1lbnRbMF0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9wdGlvbmFsbHkgZGVzdHJveSB0aGUgb2xkIGNvbnRlbnQgaXRlbVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKF8kZGVzdHJveU9sZENoaWxkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBvbGRDaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgb2xkQ2hpbGQuXyRkZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBXaXJlIHRoZSBuZXcgY29udGVudEl0ZW0gaW50byB0aGUgdHJlZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaW5kZXhdID0gbmV3Q2hpbGQ7XG4gICAgICAgIG5ld0NoaWxkLnBhcmVudCA9IHRoaXM7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogVXBkYXRlIHRhYiByZWZlcmVuY2VcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmlzU3RhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnRhYnNbaW5kZXhdLmNvbnRlbnRJdGVtID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE8gVGhpcyBkb2Vzbid0IHVwZGF0ZSB0aGUgY29uZmlnLi4uIHJlZmFjdG9yIHRvIGxlYXZlIGl0ZW0gbm9kZXMgdW50b3VjaGVkIGFmdGVyIGNyZWF0aW9uXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnQuaXNJbml0aWFsaXNlZCA9PT0gdHJ1ZSAmJiBuZXdDaGlsZC5pc0luaXRpYWxpc2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbmV3Q2hpbGQuXyRpbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QuXG4gICAgICogU2hvcnRoYW5kIGZvciB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCggdGhpcyApXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBsYXlvdXQgYW5kIGNyZWF0ZXMgYSBuZXdcbiAgICAgKiBicm93c2VyIHdpbmRvdyB3aXRoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBpbnNpZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCcm93c2VyUG9wb3V0fVxuICAgICAqL1xuICAgIHBvcG91dCgpIHtcbiAgICAgICAgdmFyIGJyb3dzZXJQb3BvdXQgPSB0aGlzLmxheW91dE1hbmFnZXIuY3JlYXRlUG9wb3V0KHRoaXMpO1xuICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJQb3BvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWF4aW1pc2VzIHRoZSBJdGVtIG9yIG1pbmltaXNlcyBpdCBpZiBpdCBpcyBhbHJlYWR5IG1heGltaXNlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgdG9nZ2xlTWF4aW1pc2UoZSkge1xuICAgICAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNYXhpbWlzZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0TWFuYWdlci5fJG1pbmltaXNlSXRlbSh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0TWFuYWdlci5fJG1heGltaXNlSXRlbSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNNYXhpbWlzZWQgPSAhdGhpcy5pc01heGltaXNlZDtcbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudCgnc3RhdGVDaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgaXRlbSBpZiBpdCBpcyBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgc2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRNYW5hZ2VyLnNlbGVjdGVkSXRlbSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyLnNlbGVjdEl0ZW0odGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xtX3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZS1zZWxlY3RzIHRoZSBpdGVtIGlmIGl0IGlzIHNlbGVjdGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkZXNlbGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0TWFuYWdlci5zZWxlY3RlZEl0ZW0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0TWFuYWdlci5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsbV9zZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgY29tcG9uZW50J3MgdGl0bGVcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZW1pdCgndGl0bGVDaGFuZ2VkJywgdGl0bGUpO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlQ2hhbmdlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvdmlkZWQgaWQgaXMgcHJlc2VudFxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBpZFxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IGlzUHJlc2VudFxuICAgICAqL1xuICAgIGhhc0lkKGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcuaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaWQgPT09IGlkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmlkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleE9mKGlkLCB0aGlzLmNvbmZpZy5pZCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpZC4gQWRkcyBpdCBhcyBhIHN0cmluZyBpZiB0aGUgY29tcG9uZW50IGRvZXNuJ3RcbiAgICAgKiBoYXZlIGFuIGlkIHlldCBvciBjcmVhdGVzL3VzZXMgYW4gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZElkKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0lkKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pZCkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuaWQgPSBpZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcuaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5pZCA9IFt0aGlzLmNvbmZpZy5pZCwgaWRdO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmlkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmlkLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBleGlzdGluZyBpZC4gVGhyb3dzIGFuIGVycm9yXG4gICAgICogaWYgdGhlIGlkIGlzIG5vdCBwcmVzZW50XG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtICAge1N0cmluZ30gaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUlkKGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNJZChpZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWQgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLmlkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmlkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4T2YoaWQsIHRoaXMuY29uZmlnLmlkKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmlkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFNFTEVDVE9SXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0SXRlbXNCeUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50SXRlbS5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKGNvbnRlbnRJdGVtLmNvbnRlbnRJdGVtc1tpXSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbnRlbnRJdGVtLmNvbnRlbnRJdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0KGNvbnRlbnRJdGVtLmNvbnRlbnRJdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBuZXh0KHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldEl0ZW1zQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtc0J5RmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbmZpZy5pZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2YoaWQsIGl0ZW0uY29uZmlnLmlkKSAhPT0gLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbmZpZy5pZCA9PT0gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEl0ZW1zQnlUeXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRnZXRJdGVtc0J5UHJvcGVydHkoJ3R5cGUnLCB0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRzQnlOYW1lKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudHMgPSB0aGlzLl8kZ2V0SXRlbXNCeVByb3BlcnR5KCdjb21wb25lbnROYW1lJywgY29tcG9uZW50TmFtZSksXG4gICAgICAgICAgICBpbnN0YW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKGNvbXBvbmVudHNbaV0uaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFBBQ0tBR0UgUFJJVkFURVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIF8kZ2V0SXRlbXNCeVByb3BlcnR5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXNCeUZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtrZXldID09PSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXyRzZXRQYXJlbnQocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIF8kaGlnaGxpZ2h0RHJvcFpvbmUoeCwgeSwgYXJlYSkge1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIuZHJvcFRhcmdldEluZGljYXRvci5oaWdobGlnaHRBcmVhKGFyZWEpO1xuICAgIH1cblxuICAgIF8kb25Ecm9wKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY29udGVudEl0ZW0pO1xuICAgIH1cblxuICAgIF8kaGlkZSgpIHtcbiAgICAgICAgdGhpcy5fY2FsbE9uQWN0aXZlQ29tcG9uZW50cygnaGlkZScpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaGlkZSgpO1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIudXBkYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIF8kc2hvdygpIHtcbiAgICAgICAgdGhpcy5fY2FsbE9uQWN0aXZlQ29tcG9uZW50cygnc2hvdycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvdygpO1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIudXBkYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIF9jYWxsT25BY3RpdmVDb21wb25lbnRzKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHN0YWNrcyA9IHRoaXMuZ2V0SXRlbXNCeVR5cGUoJ3N0YWNrJyksXG4gICAgICAgICAgICBhY3RpdmVDb250ZW50SXRlbSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWN0aXZlQ29udGVudEl0ZW0gPSBzdGFja3NbaV0uZ2V0QWN0aXZlQ29udGVudEl0ZW0oKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUNvbnRlbnRJdGVtICYmIGFjdGl2ZUNvbnRlbnRJdGVtLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGVudEl0ZW0uY29udGFpbmVyW21ldGhvZE5hbWVdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGlzIGl0ZW0gYW5kcyBpdHMgY2hpbGRyZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF8kZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudCgnYmVmb3JlSXRlbURlc3Ryb3llZCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoJ2l0ZW1EZXN0cm95ZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhcmVhIHRoZSBjb21wb25lbnQgY3VycmVudGx5IG9jY3VwaWVzIGluIHRoZSBmb3JtYXRcbiAgICAgKlxuICAgICAqIHtcbiAgICAgKlx0XHR4MTogaW50XG4gICAgICpcdFx0eHk6IGludFxuICAgICAqXHRcdHkxOiBpbnRcbiAgICAgKlx0XHR5MjogaW50XG4gICAgICpcdFx0Y29udGVudEl0ZW06IGNvbnRlbnRJdGVtXG4gICAgICogfVxuICAgICAqL1xuICAgIF8kZ2V0QXJlYShlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZWxlbWVudDtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC53aWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDE6IG9mZnNldC5sZWZ0LFxuICAgICAgICAgICAgeTE6IG9mZnNldC50b3AsXG4gICAgICAgICAgICB4Mjogb2Zmc2V0LmxlZnQgKyB3aWR0aCxcbiAgICAgICAgICAgIHkyOiBvZmZzZXQudG9wICsgaGVpZ2h0LFxuICAgICAgICAgICAgc3VyZmFjZTogd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgICBjb250ZW50SXRlbTogdGhpc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0cmVlIG9mIGNvbnRlbnQgaXRlbXMgaXMgY3JlYXRlZCBpbiB0d28gc3RlcHM6IEZpcnN0IGFsbCBjb250ZW50IGl0ZW1zIGFyZSBpbnN0YW50aWF0ZWQsXG4gICAgICogdGhlbiBpbml0IGlzIGNhbGxlZCByZWN1cnNpdmVseSBmcm9tIHRvcCB0byBib3R0ZW0uIFRoaXMgaXMgdGhlIGJhc2ljIGluaXQgZnVuY3Rpb24sXG4gICAgICogaXQgY2FuIGJlIHVzZWQsIGV4dGVuZGVkIG9yIG92ZXJ3cml0dGVuIGJ5IHRoZSBjb250ZW50IGl0ZW1zXG4gICAgICpcbiAgICAgKiBJdHMgYmVoYXZpb3VyIGRlcGVuZHMgb24gdGhlIGNvbnRlbnQgaXRlbVxuICAgICAqXG4gICAgICogQHBhY2thZ2UgcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRpbml0KCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lci5hcHBlbmQodGhpcy5jb250ZW50SXRlbXNbaV0uZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzSW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KCdpdGVtQ3JlYXRlZCcpO1xuICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KHRoaXMudHlwZSArICdDcmVhdGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCBhbiBldmVudCB0aGF0IGJ1YmJsZXMgdXAgdGhlIGl0ZW0gdHJlZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBlbWl0QnViYmxpbmdFdmVudChuYW1lKSB7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBCdWJibGluZ0V2ZW50KG5hbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmVtaXQobmFtZSwgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaXZhdGUgbWV0aG9kLCBjcmVhdGVzIGFsbCBjb250ZW50IGl0ZW1zIGZvciB0aGlzIG5vZGUgYXQgaW5pdGlhbGlzYXRpb24gdGltZVxuICAgICAqIFBMRUFTRSBOT1RFLCBwbGVhc2Ugc2VlIGFkZENoaWxkIGZvciBhZGRpbmcgY29udGVudEl0ZW1zIGFkZCBydW50aW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gICB7Y29uZmlndXJhdGlvbiBpdGVtIG5vZGV9IGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2NyZWF0ZUNvbnRlbnRJdGVtcyhjb25maWcpIHtcbiAgICAgICAgdmFyIG9Db250ZW50SXRlbSwgaTtcblxuICAgICAgICBpZiAoIShjb25maWcuY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FcnJvcignY29udGVudCBtdXN0IGJlIGFuIEFycmF5JywgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWcuY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb0NvbnRlbnRJdGVtID0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNyZWF0ZUNvbnRlbnRJdGVtKGNvbmZpZy5jb250ZW50W2ldLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zLnB1c2gob0NvbnRlbnRJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dGVuZHMgYW4gaXRlbSBjb25maWd1cmF0aW9uIG5vZGUgd2l0aCBkZWZhdWx0IHNldHRpbmdzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gICB7Y29uZmlndXJhdGlvbiBpdGVtIG5vZGV9IGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge2NvbmZpZ3VyYXRpb24gaXRlbSBub2RlfSBleHRlbmRlZCBjb25maWdcbiAgICAgKi9cbiAgICBfZXh0ZW5kSXRlbU5vZGUoY29uZmlnKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGl0ZW1EZWZhdWx0Q29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gaXRlbURlZmF1bHRDb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGZvciBldmVyeSBldmVudCBvbiB0aGUgaXRlbSB0cmVlLiBEZWNpZGVzIHdoZXRoZXIgdGhlIGV2ZW50IGlzIGEgYnViYmxpbmdcbiAgICAgKiBldmVudCBhbmQgcHJvcGFnYXRlcyBpdCB0byBpdHMgcGFyZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAge1N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gICB7QnViYmxpbmdFdmVudH0gZXZlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9wcm9wYWdhdGVFdmVudChuYW1lLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBCdWJibGluZ0V2ZW50ICYmXG4gICAgICAgICAgICBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHRoaXMuaXNJbml0aWFsaXNlZCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluIHNvbWUgY2FzZXMgKGUuZy4gaWYgYW4gZWxlbWVudCBpcyBjcmVhdGVkIGZyb20gYSBEcmFnU291cmNlKSBpdFxuICAgICAgICAgICAgICogZG9lc24ndCBoYXZlIGEgcGFyZW50IGFuZCBpcyBub3QgYmVsb3cgcm9vdC4gSWYgdGhhdCdzIHRoZSBjYXNlXG4gICAgICAgICAgICAgKiBwcm9wYWdhdGUgdGhlIGJ1YmJsaW5nIGV2ZW50IGZyb20gdGhlIHRvcCBsZXZlbCBvZiB0aGUgc3Vic3RyZWUgZGlyZWN0bHlcbiAgICAgICAgICAgICAqIHRvIHRoZSBsYXlvdXRNYW5hZ2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLmlzUm9vdCA9PT0gZmFsc2UgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5lbWl0LmFwcGx5KHRoaXMucGFyZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVFdmVudFByb3BhZ2F0aW9uVG9MYXlvdXRNYW5hZ2VyKG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbCByYXcgZXZlbnRzIGJ1YmJsZSB1cCB0byB0aGUgcm9vdCBlbGVtZW50LiBTb21lIGV2ZW50cyB0aGF0XG4gICAgICogYXJlIHByb3BhZ2F0ZWQgdG8gLSBhbmQgZW1pdHRlZCBieSAtIHRoZSBsYXlvdXRNYW5hZ2VyIGhvd2V2ZXIgYXJlXG4gICAgICogb25seSBzdHJpbmctYmFzZWQsIGJhdGNoZWQgYW5kIHNhbml0aXplZCB0byBtYWtlIHRoZW0gbW9yZSB1c2FibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfc2NoZWR1bGVFdmVudFByb3BhZ2F0aW9uVG9MYXlvdXRNYW5hZ2VyKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGlmIChpbmRleE9mKG5hbWUsIHRoaXMuX3Rocm90dGxlZEV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIuZW1pdChuYW1lLCBldmVudC5vcmlnaW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdFdmVudFByb3BhZ2F0aW9uc1tuYW1lXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdFdmVudFByb3BhZ2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYW5pbUZyYW1lKGZuQmluZCh0aGlzLl9wcm9wYWdhdGVFdmVudFRvTGF5b3V0TWFuYWdlciwgdGhpcywgW25hbWUsIGV2ZW50XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3IgZXZlbnRzIHNjaGVkdWxlZCBieSBfc2NoZWR1bGVFdmVudFByb3BhZ2F0aW9uVG9MYXlvdXRNYW5hZ2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3Byb3BhZ2F0ZUV2ZW50VG9MYXlvdXRNYW5hZ2VyKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdFdmVudFByb3BhZ2F0aW9uc1tuYW1lXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIuZW1pdChuYW1lLCBldmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0Q29udGVudEl0ZW0gZnJvbSAnLi4vaXRlbXMvQWJzdHJhY3RDb250ZW50SXRlbSdcbmltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lci9JdGVtQ29udGFpbmVyJ1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50SGFuZGxlciBmcm9tICcuLi91dGlscy9SZWFjdENvbXBvbmVudEhhbmRsZXInXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG4vKipcbiAqIEBwYXJhbSB7W3R5cGVdfSBsYXlvdXRNYW5hZ2VyIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSB7W3R5cGVdfSBjb25maWcgICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0ge1t0eXBlXX0gcGFyZW50ICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbnRlbnRJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihsYXlvdXRNYW5hZ2VyLCBjb25maWcsIHBhcmVudCkge1xuXG4gICAgICAgIHN1cGVyKGxheW91dE1hbmFnZXIsIGNvbmZpZywgcGFyZW50KTtcblxuICAgICAgICB2YXIgQ29tcG9uZW50Q29uc3RydWN0b3IgPSBsYXlvdXRNYW5hZ2VyLmlzUmVhY3RDb25maWcoY29uZmlnKSA/IFJlYWN0Q29tcG9uZW50SGFuZGxlciA6IGxheW91dE1hbmFnZXIuZ2V0Q29tcG9uZW50KGNvbmZpZyksXG4gICAgICAgICAgICBjb21wb25lbnRDb25maWcgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5jb25maWcuY29tcG9uZW50U3RhdGUgfHwge30pO1xuXG4gICAgICAgIGNvbXBvbmVudENvbmZpZy5jb21wb25lbnROYW1lID0gdGhpcy5jb25maWcuY29tcG9uZW50TmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnROYW1lID0gdGhpcy5jb25maWcuY29tcG9uZW50TmFtZTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcudGl0bGUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy50aXRsZSA9IHRoaXMuY29uZmlnLmNvbXBvbmVudE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgSXRlbUNvbnRhaW5lcih0aGlzLmNvbmZpZywgdGhpcywgbGF5b3V0TWFuYWdlcik7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50Q29uc3RydWN0b3IodGhpcy5jb250YWluZXIsIGNvbXBvbmVudENvbmZpZyk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGFpbmVyLl9lbGVtZW50O1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdCB1cGRhdGUgc2l6ZSBvZiBoaWRkZW4gY29tcG9uZW50cyB0byBwcmV2ZW50IHVud2FudGVkIHJlZmxvd3NcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl8kc2V0U2l6ZSh0aGlzLmVsZW1lbnQud2lkdGgoKSwgdGhpcy5lbGVtZW50LmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF8kaW5pdCgpIHtcbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUuXyRpbml0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmVtaXQoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBfJGhpZGUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUuXyRoaWRlLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgXyRzaG93KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLl8kc2hvdy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIF8kc2hvd24oKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNob3duKCk7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLl8kc2hvd24uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBfJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUuXyRkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZ2dpbmcgb250byBhIGNvbXBvbmVudCBkaXJlY3RseSBpcyBub3QgYW4gb3B0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBudWxsXG4gICAgICovXG4gICAgXyRnZXRBcmVhKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RDb250ZW50SXRlbSBmcm9tICcuLi9pdGVtcy9BYnN0cmFjdENvbnRlbnRJdGVtJ1xuaW1wb3J0IFJvd09yQ29sdW1uIGZyb20gJy4uL2l0ZW1zL1Jvd09yQ29sdW1uJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3QgZXh0ZW5kcyBBYnN0cmFjdENvbnRlbnRJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihsYXlvdXRNYW5hZ2VyLCBjb25maWcsIGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIFxuICAgICAgICBzdXBlcihsYXlvdXRNYW5hZ2VyLCBjb25maWcsIG51bGwpO1xuXG4gICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3Jvb3QnO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IGNsYXNzPVwibG1fZ29sZGVubGF5b3V0IGxtX2l0ZW0gbG1fcm9vdFwiPjwvZGl2PicpO1xuICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoY29udGVudEl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUm9vdCBub2RlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgY2hpbGQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRJdGVtID0gdGhpcy5sYXlvdXRNYW5hZ2VyLl8kbm9ybWFsaXplQ29udGVudEl0ZW0oY29udGVudEl0ZW0sIHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lci5hcHBlbmQoY29udGVudEl0ZW0uZWxlbWVudCk7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgY29udGVudEl0ZW0pO1xuXG4gICAgICAgIHRoaXMuY2FsbERvd253YXJkcygnc2V0U2l6ZScpO1xuICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICB9XG5cbiAgICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGggPSAodHlwZW9mIHdpZHRoID09PSAndW5kZWZpbmVkJykgPyB0aGlzLl9jb250YWluZXJFbGVtZW50LndpZHRoKCkgOiB3aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuaGVpZ2h0KCkgOiBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoKHdpZHRoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFJvb3QgY2FuIGJlIGVtcHR5XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXNbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zWzBdLmVsZW1lbnQud2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbMF0uZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF8kaGlnaGxpZ2h0RHJvcFpvbmUoeCwgeSwgYXJlYSkge1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIudGFiRHJvcFBsYWNlaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICBBYnN0cmFjdENvbnRlbnRJdGVtLnByb3RvdHlwZS5fJGhpZ2hsaWdodERyb3Bab25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgXyRvbkRyb3AoY29udGVudEl0ZW0sIGFyZWEpIHtcbiAgICAgICAgdmFyIHN0YWNrO1xuXG4gICAgICAgIGlmIChjb250ZW50SXRlbS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgc3RhY2sgPSB0aGlzLmxheW91dE1hbmFnZXIuY3JlYXRlQ29udGVudEl0ZW0oe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdGFjaycsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBjb250ZW50SXRlbS5jb25maWcuaGVhZGVyIHx8IHt9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHN0YWNrLl8kaW5pdCgpO1xuICAgICAgICAgICAgc3RhY2suYWRkQ2hpbGQoY29udGVudEl0ZW0pO1xuICAgICAgICAgICAgY29udGVudEl0ZW0gPSBzdGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNvbnRlbnRJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBJZiB0aGUgY29udGVudEl0ZW0gdGhhdCdzIGJlaW5nIGRyb3BwZWQgaXMgbm90IGRyb3BwZWQgb24gYSBTdGFjayAoY2FzZXMgd2hpY2gganVzdCBwYXNzZWQgYWJvdmUgYW5kIFxuICAgICAgICAgICAgICogd2hpY2ggd291bGQgd3JhcCB0aGUgY29udGVudEl0ZW0gaW4gYSBTdGFjaykgd2UgbmVlZCB0byBjaGVjayB3aGV0aGVyIGNvbnRlbnRJdGVtIGlzIGEgUm93T3JDb2x1bW4uXG4gICAgICAgICAgICAgKiBJZiBpdCBpcywgd2UgbmVlZCB0byByZS13cmFwIGl0IGluIGEgU3RhY2sgbGlrZSBpdCB3YXMgd2hlbiBpdCB3YXMgZHJhZ2dlZCBieSBpdHMgVGFiIChpdCB3YXMgZHJhZ2dlZCEpLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZihjb250ZW50SXRlbS5jb25maWcudHlwZSA9PT0gJ3JvdycgfHwgY29udGVudEl0ZW0uY29uZmlnLnR5cGUgPT09ICdjb2x1bW4nKXtcbiAgICAgICAgICAgICAgICBzdGFjayA9IHRoaXMubGF5b3V0TWFuYWdlci5jcmVhdGVDb250ZW50SXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdGFjaydcbiAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICAgICAgICAgIHN0YWNrLmFkZENoaWxkKGNvbnRlbnRJdGVtKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtID0gc3RhY2tcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBhcmVhLnNpZGVbMF0gPT0gJ3gnID8gJ3JvdycgOiAnY29sdW1uJztcbiAgICAgICAgICAgIHZhciBkaW1lbnNpb24gPSBhcmVhLnNpZGVbMF0gPT0gJ3gnID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgICAgICAgICAgdmFyIGluc2VydEJlZm9yZSA9IGFyZWEuc2lkZVsxXSA9PSAnMic7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5jb250ZW50SXRlbXNbMF07XG4gICAgICAgICAgICBpZiAoIShjb2x1bW4gaW5zdGFuY2VvZiBSb3dPckNvbHVtbikgfHwgY29sdW1uLnR5cGUgIT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciByb3dPckNvbHVtbiA9IHRoaXMubGF5b3V0TWFuYWdlci5jcmVhdGVDb250ZW50SXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZChjb2x1bW4sIHJvd09yQ29sdW1uKTtcbiAgICAgICAgICAgICAgICByb3dPckNvbHVtbi5hZGRDaGlsZChjb250ZW50SXRlbSwgaW5zZXJ0QmVmb3JlID8gMCA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcm93T3JDb2x1bW4uYWRkQ2hpbGQoY29sdW1uLCBpbnNlcnRCZWZvcmUgPyB1bmRlZmluZWQgOiAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY29uZmlnW2RpbWVuc2lvbl0gPSA1MDtcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbS5jb25maWdbZGltZW5zaW9uXSA9IDUwO1xuICAgICAgICAgICAgICAgIHJvd09yQ29sdW1uLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpYmJsaW5nID0gY29sdW1uLmNvbnRlbnRJdGVtc1tpbnNlcnRCZWZvcmUgPyAwIDogY29sdW1uLmNvbnRlbnRJdGVtcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGNvbHVtbi5hZGRDaGlsZChjb250ZW50SXRlbSwgaW5zZXJ0QmVmb3JlID8gMCA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2liYmxpbmcuY29uZmlnW2RpbWVuc2lvbl0gKj0gMC41O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtLmNvbmZpZ1tkaW1lbnNpb25dID0gc2liYmxpbmcuY29uZmlnW2RpbWVuc2lvbl07XG4gICAgICAgICAgICAgICAgY29sdW1uLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdENvbnRlbnRJdGVtIGZyb20gJy4uL2l0ZW1zL0Fic3RyYWN0Q29udGVudEl0ZW0nXG5pbXBvcnQgU3RhY2sgZnJvbSAnLi4vaXRlbXMvU3RhY2snXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vY29udHJvbHMvU3BsaXR0ZXInXG5pbXBvcnQge1xuICAgIGZuQmluZCxcbiAgICBhbmltRnJhbWUsXG4gICAgaW5kZXhPZlxufSBmcm9tICcuLi91dGlscy91dGlscydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd09yQ29sdW1uIGV4dGVuZHMgQWJzdHJhY3RDb250ZW50SXRlbSB7XG4gICAgY29uc3RydWN0b3IoaXNDb2x1bW4sIGxheW91dE1hbmFnZXIsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICBcbiAgICAgICAgc3VwZXIobGF5b3V0TWFuYWdlciwgY29uZmlnLCBwYXJlbnQpO1xuXG4gICAgICAgIHRoaXMuaXNSb3cgPSAhaXNDb2x1bW47XG4gICAgICAgIHRoaXMuaXNDb2x1bW4gPSBpc0NvbHVtbjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IGNsYXNzPVwibG1faXRlbSBsbV8nICsgKGlzQ29sdW1uID8gJ2NvbHVtbicgOiAncm93JykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyID0gdGhpcy5lbGVtZW50O1xuICAgICAgICB0aGlzLl9zcGxpdHRlclNpemUgPSBsYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zLmJvcmRlcldpZHRoO1xuICAgICAgICB0aGlzLl9zcGxpdHRlckdyYWJTaXplID0gbGF5b3V0TWFuYWdlci5jb25maWcuZGltZW5zaW9ucy5ib3JkZXJHcmFiV2lkdGg7XG4gICAgICAgIHRoaXMuX2lzQ29sdW1uID0gaXNDb2x1bW47XG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbiA9IGlzQ29sdW1uID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgICB0aGlzLl9zcGxpdHRlciA9IFtdO1xuICAgICAgICB0aGlzLl9zcGxpdHRlclBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3BsaXR0ZXJNaW5Qb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NwbGl0dGVyTWF4UG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGNvbnRlbnRJdGVtIHRvIHRoZSBSb3cgb3IgQ29sdW1uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Fic3RyYWN0Q29udGVudEl0ZW19IGNvbnRlbnRJdGVtXG4gICAgICogQHBhcmFtIHtbaW50XX0gaW5kZXggVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbSB3aXRoaW4gdGhlIFJvdyBvciBDb2x1bW4uXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgSWYgbm8gaW5kZXggaXMgcHJvdmlkZWQgdGhlIGl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kXG4gICAgICogQHBhcmFtIHtbYm9vbF19IF8kc3VzcGVuZFJlc2l6ZSBJZiB0cnVlIHRoZSBpdGVtcyB3b24ndCBiZSByZXNpemVkLiBUaGlzIHdpbGwgbGVhdmUgdGhlIGl0ZW0gaW5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuIGluY29uc2lzdGVudCBzdGF0ZSBhbmQgaXMgb25seSBpbnRlbmRlZCB0byBiZSB1c2VkIGlmIG11bHRpcGxlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiBuZWVkIHRvIGJlIGFkZGVkIGluIG9uZSBnbyBhbmQgcmVzaXplIGlzIGNhbGxlZCBhZnRlcndhcmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRDaGlsZChjb250ZW50SXRlbSwgaW5kZXgsIF8kc3VzcGVuZFJlc2l6ZSkge1xuXG4gICAgICAgIHZhciBuZXdJdGVtU2l6ZSwgaXRlbVNpemUsIGksIHNwbGl0dGVyRWxlbWVudDtcblxuICAgICAgICBjb250ZW50SXRlbSA9IHRoaXMubGF5b3V0TWFuYWdlci5fJG5vcm1hbGl6ZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtLCB0aGlzKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc3BsaXR0ZXJFbGVtZW50ID0gdGhpcy5fY3JlYXRlU3BsaXR0ZXIoTWF0aC5tYXgoMCwgaW5kZXggLSAxKSkuZWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zW2luZGV4IC0gMV0uZWxlbWVudC5hZnRlcihzcGxpdHRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHNwbGl0dGVyRWxlbWVudC5hZnRlcihjb250ZW50SXRlbS5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNEb2NrZWQoaW5kZXggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGxpdHRlcltpbmRleCAtIDFdLmVsZW1lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGxpdHRlcltpbmRleF0uZWxlbWVudC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1swXS5lbGVtZW50LmJlZm9yZShzcGxpdHRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHNwbGl0dGVyRWxlbWVudC5iZWZvcmUoY29udGVudEl0ZW0uZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lci5hcHBlbmQoY29udGVudEl0ZW0uZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBBYnN0cmFjdENvbnRlbnRJdGVtLnByb3RvdHlwZS5hZGRDaGlsZC5jYWxsKHRoaXMsIGNvbnRlbnRJdGVtLCBpbmRleCk7XG5cbiAgICAgICAgbmV3SXRlbVNpemUgPSAoMSAvIHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCkgKiAxMDA7XG5cbiAgICAgICAgaWYgKF8kc3VzcGVuZFJlc2l6ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudCgnc3RhdGVDaGFuZ2VkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRJdGVtc1tpXSA9PT0gY29udGVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbS5jb25maWdbdGhpcy5fZGltZW5zaW9uXSA9IG5ld0l0ZW1TaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtU2l6ZSA9IHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dICo9ICgxMDAgLSBuZXdJdGVtU2l6ZSkgLyAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gPSBpdGVtU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbERvd253YXJkcygnc2V0U2l6ZScpO1xuICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVEb2NraW5nKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBVbmRpc3BsYXlzIGEgY2hpbGQgb2YgdGhpcyBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gY29udGVudEl0ZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHVuZGlzcGxheUNoaWxkKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIHZhciB1bmRpc3BsYXllZEl0ZW1TaXplID0gY29udGVudEl0ZW0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0sXG4gICAgICAgICAgICBpbmRleCA9IGluZGV4T2YoY29udGVudEl0ZW0sIHRoaXMuY29udGVudEl0ZW1zKSxcbiAgICAgICAgICAgIHNwbGl0dGVySW5kZXggPSBNYXRoLm1heChpbmRleCAtIDEsIDApLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGNoaWxkSXRlbTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgdW5kaXNwbGF5IGNoaWxkLiBDb250ZW50SXRlbSBpcyBub3QgY2hpbGQgb2YgdGhpcyBSb3cgb3IgQ29sdW1uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgc3BsaXR0ZXIgYmVmb3JlIHRoZSBpdGVtIG9yIGFmdGVyIGlmIHRoZSBpdGVtIGhhcHBlbnNcbiAgICAgICAgICogdG8gYmUgdGhlIGZpcnN0IGluIHRoZSByb3cvY29sdW1uXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5fc3BsaXR0ZXJbc3BsaXR0ZXJJbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NwbGl0dGVyW3NwbGl0dGVySW5kZXhdLmVsZW1lbnQuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVySW5kZXggPCB0aGlzLl9zcGxpdHRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0RvY2tlZChzcGxpdHRlckluZGV4KSlcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGxpdHRlcltzcGxpdHRlckluZGV4XS5lbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGxvY2F0ZSB0aGUgc3BhY2UgdGhhdCB0aGUgaGlkZGVuIGl0ZW0gb2NjdXBpZWQgdG8gdGhlIHJlbWFpbmluZyBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRvY2tlZCA9IHRoaXMuX2lzRG9ja2VkKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zW2ldICE9PSBjb250ZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNEb2NrZWQoaSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dICs9IHVuZGlzcGxheWVkSXRlbVNpemUgLyAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoIC0gMSAtIGRvY2tlZCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUudW5kaXNwbGF5Q2hpbGQuY2FsbCh0aGlzLCBjb250ZW50SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudCgnc3RhdGVDaGFuZ2VkJyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hpbGQgb2YgdGhpcyBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gY29udGVudEl0ZW1cbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0ga2VlcENoaWxkICAgSWYgdHJ1ZSB0aGUgY2hpbGQgd2lsbCBiZSByZW1vdmVkLCBidXQgbm90IGRlc3Ryb3llZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGQoY29udGVudEl0ZW0sIGtlZXBDaGlsZCkge1xuICAgICAgICB2YXIgcmVtb3ZlZEl0ZW1TaXplID0gY29udGVudEl0ZW0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0sXG4gICAgICAgICAgICBpbmRleCA9IGluZGV4T2YoY29udGVudEl0ZW0sIHRoaXMuY29udGVudEl0ZW1zKSxcbiAgICAgICAgICAgIHNwbGl0dGVySW5kZXggPSBNYXRoLm1heChpbmRleCAtIDEsIDApLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGNoaWxkSXRlbTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IHJlbW92ZSBjaGlsZC4gQ29udGVudEl0ZW0gaXMgbm90IGNoaWxkIG9mIHRoaXMgUm93IG9yIENvbHVtbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgc3BsaXR0ZXIgYmVmb3JlIHRoZSBpdGVtIG9yIGFmdGVyIGlmIHRoZSBpdGVtIGhhcHBlbnNcbiAgICAgICAgICogdG8gYmUgdGhlIGZpcnN0IGluIHRoZSByb3cvY29sdW1uXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5fc3BsaXR0ZXJbc3BsaXR0ZXJJbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NwbGl0dGVyW3NwbGl0dGVySW5kZXhdLl8kZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fc3BsaXR0ZXIuc3BsaWNlKHNwbGl0dGVySW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVySW5kZXggPCB0aGlzLl9zcGxpdHRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0RvY2tlZChzcGxpdHRlckluZGV4KSlcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGxpdHRlcltzcGxpdHRlckluZGV4XS5lbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsb2NhdGUgdGhlIHNwYWNlIHRoYXQgdGhlIHJlbW92ZWQgaXRlbSBvY2N1cGllZCB0byB0aGUgcmVtYWluaW5nIGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZG9ja2VkID0gdGhpcy5faXNEb2NrZWQoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXNbaV0gIT09IGNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0RvY2tlZChpKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gKz0gcmVtb3ZlZEl0ZW1TaXplIC8gKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCAtIDEgLSBkb2NrZWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBBYnN0cmFjdENvbnRlbnRJdGVtLnByb3RvdHlwZS5yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIGNvbnRlbnRJdGVtLCBrZWVwQ2hpbGQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGggPT09IDEgJiYgdGhpcy5jb25maWcuaXNDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hpbGRJdGVtID0gdGhpcy5jb250ZW50SXRlbXNbMF07XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVwbGFjZUNoaWxkKHRoaXMsIGNoaWxkSXRlbSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZURvY2tpbmcodGhpcy5wYXJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxsRG93bndhcmRzKCdzZXRTaXplJyk7XG4gICAgICAgICAgICB0aGlzLmVtaXRCdWJibGluZ0V2ZW50KCdzdGF0ZUNoYW5nZWQnKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlRG9ja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCBvZiB0aGlzIFJvdyBvciBDb2x1bW4gd2l0aCBhbm90aGVyIGNvbnRlbnRJdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gb2xkQ2hpbGRcbiAgICAgKiBAcGFyYW0gICB7QWJzdHJhY3RDb250ZW50SXRlbX0gbmV3Q2hpbGRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlcGxhY2VDaGlsZChvbGRDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgdmFyIHNpemUgPSBvbGRDaGlsZC5jb25maWdbdGhpcy5fZGltZW5zaW9uXTtcbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLmNhbGwodGhpcywgb2xkQ2hpbGQsIG5ld0NoaWxkKTtcbiAgICAgICAgbmV3Q2hpbGQuY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gPSBzaXplO1xuICAgICAgICB0aGlzLmNhbGxEb3dud2FyZHMoJ3NldFNpemUnKTtcbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudCgnc3RhdGVDaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIHRoZSBkaW1lbnNpb25zIG9mIHRoaXMgaXRlbSBvciBvbmUgb2YgaXRzIHBhcmVudHMgY2hhbmdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsY3VsYXRlUmVsYXRpdmVTaXplcygpO1xuICAgICAgICAgICAgdGhpcy5fc2V0QWJzb2x1dGVTaXplcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoJ3N0YXRlQ2hhbmdlZCcpO1xuICAgICAgICB0aGlzLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvY2sgb3IgdW5kb2NrIGEgY2hpbGQgaWYgaXQgcG9zaWlibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBYnN0cmFjdENvbnRlbnRJdGVtfSBjb250ZW50SXRlbVxuICAgICAqIEBwYXJhbSAgIHtCb29sZWFufSBtb2RlIG9yIHRvZ2dsZSBpZiB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gICB7Qm9vbGVhbn0gY29sbGFwc2VkIGFmdGVyIGRvY2tpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRvY2soY29udGVudEl0ZW0sIG1vZGUsIGNvbGxhcHNlZCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGRvY2sgY2hpbGQgd2hlbiBpdCBzaW5nbGUnKTtcblxuICAgICAgICB2YXIgcmVtb3ZlZEl0ZW1TaXplID0gY29udGVudEl0ZW0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0sXG4gICAgICAgICAgICBoZWFkZXJTaXplID0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXhPZihjb250ZW50SXRlbSwgdGhpcy5jb250ZW50SXRlbXMpLFxuICAgICAgICAgICAgc3BsaXR0ZXJJbmRleCA9IE1hdGgubWF4KGluZGV4IC0gMSwgMCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGRvY2sgY2hpbGQuIENvbnRlbnRJdGVtIGlzIG5vdCBjaGlsZCBvZiB0aGlzIFJvdyBvciBDb2x1bW4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNEb2NrZWQgPSBjb250ZW50SXRlbS5fZG9ja2VyICYmIGNvbnRlbnRJdGVtLl9kb2NrZXIuZG9ja2VkO1xuICAgICAgICB2YXIgaVxuICAgICAgICBpZiAodHlwZW9mIG1vZGUgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBpZiAobW9kZSA9PSBpc0RvY2tlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChpc0RvY2tlZCkgeyAvLyB1bmRvY2sgaXRcbiAgICAgICAgICAgIHRoaXMuX3NwbGl0dGVyW3NwbGl0dGVySW5kZXhdLmVsZW1lbnQuc2hvdygpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0l0ZW1TaXplID0gY29udGVudEl0ZW0uX2RvY2tlci5zaXplO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRJdGVtc1tpXSA9PT0gY29udGVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEl0ZW0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gPSBuZXdJdGVtU2l6ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtU2l6ZSA9IHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dICo9ICgxMDAgLSBuZXdJdGVtU2l6ZSkgLyAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dID0gaXRlbVNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudEl0ZW0uX2RvY2tlciA9IHtcbiAgICAgICAgICAgICAgICBkb2NrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgeyAvLyBkb2NrXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoIC0gdGhpcy5faXNEb2NrZWQoKSA8IDIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGRvY2sgY2hpbGQgd2hlbiBpdCBpcyBsYXN0IGluICcgKyB0aGlzLmNvbmZpZy50eXBlKTtcbiAgICAgICAgICAgIHZhciBhdXRvc2lkZSA9IHtcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBsYXN0OiAnYm90dG9tJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm93OiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGxhc3Q6ICdyaWdodCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVkID0gYXV0b3NpZGVbdGhpcy5jb25maWcudHlwZV1baW5kZXggPyAnbGFzdCcgOiAnZmlyc3QnXTtcbiAgICAgICAgICAgIGlmIChjb250ZW50SXRlbS5oZWFkZXIucG9zaXRpb24oKSAhPSByZXF1aXJlZClcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbS5oZWFkZXIucG9zaXRpb24ocmVxdWlyZWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BsaXR0ZXJbc3BsaXR0ZXJJbmRleF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGxpdHRlcltzcGxpdHRlckluZGV4XS5lbGVtZW50LmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb2NrZWQgPSB0aGlzLl9pc0RvY2tlZCgpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zW2ldICE9PSBjb250ZW50SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzRG9ja2VkKGkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gKz0gcmVtb3ZlZEl0ZW1TaXplIC8gKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCAtIDEgLSBkb2NrZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5jb25maWdbdGhpcy5fZGltZW5zaW9uXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50SXRlbS5fZG9ja2VyID0ge1xuICAgICAgICAgICAgICAgIGRpbWVuc2lvbjogdGhpcy5fZGltZW5zaW9uLFxuICAgICAgICAgICAgICAgIHNpemU6IHJlbW92ZWRJdGVtU2l6ZSxcbiAgICAgICAgICAgICAgICByZWFsU2l6ZTogY29udGVudEl0ZW0uZWxlbWVudFt0aGlzLl9kaW1lbnNpb25dKCkgLSBoZWFkZXJTaXplLFxuICAgICAgICAgICAgICAgIGRvY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY29sbGFwc2VkKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtLmNoaWxkRWxlbWVudENvbnRhaW5lclt0aGlzLl9kaW1lbnNpb25dKDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRJdGVtLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2xtX2RvY2tlZCcsIGNvbnRlbnRJdGVtLl9kb2NrZXIuZG9ja2VkKTtcbiAgICAgICAgdGhpcy5jYWxsRG93bndhcmRzKCdzZXRTaXplJyk7XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoJ3N0YXRlQ2hhbmdlZCcpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZURvY2tpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHJlY3Vyc2l2ZWx5IGJ5IHRoZSBsYXlvdXQgbWFuYWdlci4gQWJzdHJhY3RDb250ZW50SXRlbS5pbml0IGFwcGVuZHNcbiAgICAgKiB0aGUgY29udGVudEl0ZW0ncyBET00gZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lciwgUm93T3JDb2x1bW4gaW5pdCBhZGRzIHNwbGl0dGVyc1xuICAgICAqIGluIGJldHdlZW4gdGhlbVxuICAgICAqXG4gICAgICogQHBhY2thZ2UgcHJpdmF0ZVxuICAgICAqIEBvdmVycmlkZSBBYnN0cmFjdENvbnRlbnRJdGVtLl8kaW5pdFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF8kaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXNlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLl8kaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zW2ldLmVsZW1lbnQuYWZ0ZXIodGhpcy5fY3JlYXRlU3BsaXR0ZXIoaSkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXNbaV0uX2hlYWRlciAmJiB0aGlzLmNvbnRlbnRJdGVtc1tpXS5faGVhZGVyLmRvY2tlZClcbiAgICAgICAgICAgICAgICB0aGlzLmRvY2sodGhpcy5jb250ZW50SXRlbXNbaV0sIHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHVybnMgdGhlIHJlbGF0aXZlIHNpemVzIGNhbGN1bGF0ZWQgYnkgX2NhbGN1bGF0ZVJlbGF0aXZlU2l6ZXMgaW50b1xuICAgICAqIGFic29sdXRlIHBpeGVsIHZhbHVlcyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBjaGlsZHJlbidzIERPTSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQXNzaWducyBhZGRpdGlvbmFsIHBpeGVscyB0byBjb3VudGVyYWN0IE1hdGguZmxvb3JcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX3NldEFic29sdXRlU2l6ZXMoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgc2l6ZURhdGEgPSB0aGlzLl9jYWxjdWxhdGVBYnNvbHV0ZVNpemVzKCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2l6ZURhdGEuYWRkaXRpb25hbFBpeGVsIC0gaSA+IDApIHtcbiAgICAgICAgICAgICAgICBzaXplRGF0YS5pdGVtU2l6ZXNbaV0rKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uZWxlbWVudC53aWR0aChzaXplRGF0YS50b3RhbFdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5lbGVtZW50LmhlaWdodChzaXplRGF0YS5pdGVtU2l6ZXNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5lbGVtZW50LndpZHRoKHNpemVEYXRhLml0ZW1TaXplc1tpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uZWxlbWVudC5oZWlnaHQoc2l6ZURhdGEudG90YWxIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgYWJzb2x1dGUgc2l6ZXMgb2YgYWxsIG9mIHRoZSBjaGlsZHJlbiBvZiB0aGlzIEl0ZW0uXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBTZXQgd2l0aCBhYnNvbHV0ZSBzaXplcyBhbmQgYWRkaXRpb25hbCBwaXhlbHMuXG4gICAgICovXG4gICAgX2NhbGN1bGF0ZUFic29sdXRlU2l6ZXMoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgdG90YWxTcGxpdHRlclNpemUgPSAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoIC0gMSkgKiB0aGlzLl9zcGxpdHRlclNpemUsXG4gICAgICAgICAgICBoZWFkZXJTaXplID0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgIHRvdGFsV2lkdGggPSB0aGlzLmVsZW1lbnQud2lkdGgoKSxcbiAgICAgICAgICAgIHRvdGFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50LmhlaWdodCgpLFxuICAgICAgICAgICAgdG90YWxBc3NpZ25lZCA9IDAsXG4gICAgICAgICAgICBhZGRpdGlvbmFsUGl4ZWwsXG4gICAgICAgICAgICBpdGVtU2l6ZSxcbiAgICAgICAgICAgIGl0ZW1TaXplcyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0NvbHVtbikge1xuICAgICAgICAgICAgdG90YWxIZWlnaHQgLT0gdG90YWxTcGxpdHRlclNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3RhbFdpZHRoIC09IHRvdGFsU3BsaXR0ZXJTaXplO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRG9ja2VkKGkpKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0NvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlaWdodCAtPSBoZWFkZXJTaXplIC0gdGhpcy5fc3BsaXR0ZXJTaXplO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsV2lkdGggLT0gaGVhZGVyU2l6ZSAtIHRoaXMuX3NwbGl0dGVyU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0NvbHVtbikge1xuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gTWF0aC5mbG9vcih0b3RhbEhlaWdodCAqICh0aGlzLmNvbnRlbnRJdGVtc1tpXS5jb25maWcuaGVpZ2h0IC8gMTAwKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gTWF0aC5mbG9vcih0b3RhbFdpZHRoICogKHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZy53aWR0aCAvIDEwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRG9ja2VkKGkpKVxuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gaGVhZGVyU2l6ZTtcblxuICAgICAgICAgICAgdG90YWxBc3NpZ25lZCArPSBpdGVtU2l6ZTtcbiAgICAgICAgICAgIGl0ZW1TaXplcy5wdXNoKGl0ZW1TaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZGl0aW9uYWxQaXhlbCA9IE1hdGguZmxvb3IoKHRoaXMuX2lzQ29sdW1uID8gdG90YWxIZWlnaHQgOiB0b3RhbFdpZHRoKSAtIHRvdGFsQXNzaWduZWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtU2l6ZXM6IGl0ZW1TaXplcyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQaXhlbDogYWRkaXRpb25hbFBpeGVsLFxuICAgICAgICAgICAgdG90YWxXaWR0aDogdG90YWxXaWR0aCxcbiAgICAgICAgICAgIHRvdGFsSGVpZ2h0OiB0b3RhbEhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHJlbGF0aXZlIHNpemVzIG9mIGFsbCBjaGlsZHJlbiBvZiB0aGlzIEl0ZW0uIFRoZSBsb2dpY1xuICAgICAqIGlzIGFzIGZvbGxvd3M6XG4gICAgICpcbiAgICAgKiAtIEFkZCB1cCB0aGUgdG90YWwgc2l6ZSBvZiBhbGwgaXRlbXMgdGhhdCBoYXZlIGEgY29uZmlndXJlZCBzaXplXG4gICAgICpcbiAgICAgKiAtIElmIHRoZSB0b3RhbCA9PSAxMDAgKGNoZWNrIGZvciBmbG9hdGluZyBwb2ludCBlcnJvcnMpXG4gICAgICogICAgICAgIEV4Y2VsbGVudCwgam9iIGRvbmVcbiAgICAgKlxuICAgICAqIC0gSWYgdGhlIHRvdGFsIGlzID4gMTAwLFxuICAgICAqICAgICAgICBzZXQgdGhlIHNpemUgb2YgaXRlbXMgd2l0aG91dCBzZXQgZGltZW5zaW9ucyB0byAxLzMgYW5kIGFkZCB0aGlzIHRvIHRoZSB0b3RhbFxuICAgICAqICAgICAgICBzZXQgdGhlIHNpemUgb2ZmIGFsbCBpdGVtcyBzbyB0aGF0IHRoZSB0b3RhbCBpcyBodW5kcmVkIHJlbGF0aXZlIHRvIHRoZWlyIG9yaWdpbmFsIHNpemVcbiAgICAgKlxuICAgICAqIC0gSWYgdGhlIHRvdGFsIGlzIDwgMTAwXG4gICAgICogICAgICAgIElmIHRoZXJlIGFyZSBpdGVtcyB3aXRob3V0IHNldCBkaW1lbnNpb25zLCBkaXN0cmlidXRlIHRoZSByZW1haW5kZXIgdG8gMTAwIGV2ZW5seSBiZXR3ZWVuIHRoZW1cbiAgICAgKiAgICAgICAgSWYgdGhlcmUgYXJlIG5vIGl0ZW1zIHdpdGhvdXQgc2V0IGRpbWVuc2lvbnMsIGluY3JlYXNlIGFsbCBpdGVtcyBzaXplcyByZWxhdGl2ZSB0b1xuICAgICAqICAgICAgICB0aGVpciBvcmlnaW5hbCBzaXplIHNvIHRoYXQgdGhleSBhZGQgdXAgdG8gMTAwXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9jYWxjdWxhdGVSZWxhdGl2ZVNpemVzKCkge1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgdG90YWwgPSAwLFxuICAgICAgICAgICAgaXRlbXNXaXRob3V0U2V0RGltZW5zaW9uID0gW10sXG4gICAgICAgICAgICBkaW1lbnNpb24gPSB0aGlzLl9pc0NvbHVtbiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRJdGVtc1tpXS5jb25maWdbZGltZW5zaW9uXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gdGhpcy5jb250ZW50SXRlbXNbaV0uY29uZmlnW2RpbWVuc2lvbl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1zV2l0aG91dFNldERpbWVuc2lvbi5wdXNoKHRoaXMuY29udGVudEl0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVyeXRoaW5nIGFkZHMgdXAgdG8gaHVuZHJlZCwgYWxsIGdvb2QgOi0pXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoTWF0aC5yb3VuZCh0b3RhbCkgPT09IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzcGVjdE1pbkl0ZW1XaWR0aCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbG9jYXRlIHRoZSByZW1haW5pbmcgc2l6ZSB0byB0aGUgaXRlbXMgd2l0aG91dCBhIHNldCBkaW1lbnNpb25cbiAgICAgICAgICovXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHRvdGFsKSA8IDEwMCAmJiBpdGVtc1dpdGhvdXRTZXREaW1lbnNpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zV2l0aG91dFNldERpbWVuc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zV2l0aG91dFNldERpbWVuc2lvbltpXS5jb25maWdbZGltZW5zaW9uXSA9ICgxMDAgLSB0b3RhbCkgLyBpdGVtc1dpdGhvdXRTZXREaW1lbnNpb24ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVzcGVjdE1pbkl0ZW1XaWR0aCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSB0b3RhbCBpcyA+IDEwMCwgYnV0IHRoZXJlIGFyZSBhbHNvIGl0ZW1zIHdpdGhvdXQgYSBzZXQgZGltZW5zaW9uIGxlZnQsIGFzc2luZyA1MFxuICAgICAgICAgKiBhcyB0aGVpciBkaW1lbnNpb24gYW5kIGFkZCBpdCB0byB0aGUgdG90YWxcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIHJlc2V0IGluIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgICovXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHRvdGFsKSA+IDEwMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zV2l0aG91dFNldERpbWVuc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zV2l0aG91dFNldERpbWVuc2lvbltpXS5jb25maWdbZGltZW5zaW9uXSA9IDUwO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IDUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBldmVyeSBpdGVtcyBzaXplIHJlbGF0aXZlIHRvIDEwMCByZWxhdGl2ZSB0byBpdHMgc2l6ZSB0byB0b3RhbFxuICAgICAgICAgKi9cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5jb25maWdbZGltZW5zaW9uXSA9ICh0aGlzLmNvbnRlbnRJdGVtc1tpXS5jb25maWdbZGltZW5zaW9uXSAvIHRvdGFsKSAqIDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Jlc3BlY3RNaW5JdGVtV2lkdGgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBjb2x1bW4gd2lkdGhzIHRvIHJlc3BlY3QgdGhlIGRpbWVuc2lvbnMgbWluSXRlbVdpZHRoIGlmIHNldC5cbiAgICAgKiBAcmV0dXJucyB7fVxuICAgICAqL1xuICAgIF9yZXNwZWN0TWluSXRlbVdpZHRoKCkge1xuICAgICAgICB2YXIgbWluSXRlbVdpZHRoID0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zID8gKHRoaXMubGF5b3V0TWFuYWdlci5jb25maWcuZGltZW5zaW9ucy5taW5JdGVtV2lkdGggfHwgMCkgOiAwLFxuICAgICAgICAgICAgc2l6ZURhdGEgPSBudWxsLFxuICAgICAgICAgICAgZW50cmllc092ZXJNaW4gPSBbXSxcbiAgICAgICAgICAgIHRvdGFsT3Zlck1pbiA9IDAsXG4gICAgICAgICAgICB0b3RhbFVuZGVyTWluID0gMCxcbiAgICAgICAgICAgIHJlbWFpbmluZ1dpZHRoID0gMCxcbiAgICAgICAgICAgIGl0ZW1TaXplID0gMCxcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtID0gbnVsbCxcbiAgICAgICAgICAgIHJlZHVjZVBlcmNlbnQsXG4gICAgICAgICAgICByZWR1Y2VkV2lkdGgsXG4gICAgICAgICAgICBhbGxFbnRyaWVzID0gW10sXG4gICAgICAgICAgICBlbnRyeTtcblxuICAgICAgICBpZiAodGhpcy5faXNDb2x1bW4gfHwgIW1pbkl0ZW1XaWR0aCB8fCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2l6ZURhdGEgPSB0aGlzLl9jYWxjdWxhdGVBYnNvbHV0ZVNpemVzKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZ3VyZSBvdXQgaG93IG11Y2ggd2UgYXJlIHVuZGVyIHRoZSBtaW4gaXRlbSBzaXplIHRvdGFsIGFuZCBob3cgbXVjaCByb29tIHdlIGhhdmUgdG8gdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb250ZW50SXRlbSA9IHRoaXMuY29udGVudEl0ZW1zW2ldO1xuICAgICAgICAgICAgaXRlbVNpemUgPSBzaXplRGF0YS5pdGVtU2l6ZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChpdGVtU2l6ZSA8IG1pbkl0ZW1XaWR0aCkge1xuICAgICAgICAgICAgICAgIHRvdGFsVW5kZXJNaW4gKz0gbWluSXRlbVdpZHRoIC0gaXRlbVNpemU7XG4gICAgICAgICAgICAgICAgZW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtaW5JdGVtV2lkdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvdGFsT3Zlck1pbiArPSBpdGVtU2l6ZSAtIG1pbkl0ZW1XaWR0aDtcbiAgICAgICAgICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGl0ZW1TaXplXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlbnRyaWVzT3Zlck1pbi5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWxsRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGVyZSBpcyBub3RoaW5nIHVuZGVyIG1pbiwgb3IgdGhlcmUgaXMgbm90IGVub3VnaCBvdmVyIHRvIG1ha2UgdXAgdGhlIGRpZmZlcmVuY2UsIGRvIG5vdGhpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodG90YWxVbmRlck1pbiA9PT0gMCB8fCB0b3RhbFVuZGVyTWluID4gdG90YWxPdmVyTWluKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbmx5IHJlZHVjZSBhbGwgY29sdW1ucyB0aGF0IGFyZSBvdmVyIHRoZSBtaW4gaXRlbSB3aWR0aCB0byBtYWtlIHVwIHRoZSBkaWZmZXJlbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVkdWNlUGVyY2VudCA9IHRvdGFsVW5kZXJNaW4gLyB0b3RhbE92ZXJNaW47XG4gICAgICAgIHJlbWFpbmluZ1dpZHRoID0gdG90YWxVbmRlck1pbjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVudHJpZXNPdmVyTWluLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGVudHJpZXNPdmVyTWluW2ldO1xuICAgICAgICAgICAgcmVkdWNlZFdpZHRoID0gTWF0aC5yb3VuZCgoZW50cnkud2lkdGggLSBtaW5JdGVtV2lkdGgpICogcmVkdWNlUGVyY2VudCk7XG4gICAgICAgICAgICByZW1haW5pbmdXaWR0aCAtPSByZWR1Y2VkV2lkdGg7XG4gICAgICAgICAgICBlbnRyeS53aWR0aCAtPSByZWR1Y2VkV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFrZSBhbnl0aGluZyByZW1haW5pbmcgZnJvbSB0aGUgbGFzdCBpdGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHJlbWFpbmluZ1dpZHRoICE9PSAwKSB7XG4gICAgICAgICAgICBhbGxFbnRyaWVzW2FsbEVudHJpZXMubGVuZ3RoIC0gMV0ud2lkdGggLT0gcmVtYWluaW5nV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IGV2ZXJ5IGl0ZW1zIHNpemUgcmVsYXRpdmUgdG8gMTAwIHJlbGF0aXZlIHRvIGl0cyBzaXplIHRvIHRvdGFsXG4gICAgICAgICAqL1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZy53aWR0aCA9IChhbGxFbnRyaWVzW2ldLndpZHRoIC8gc2l6ZURhdGEudG90YWxXaWR0aCkgKiAxMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBuZXcgU3BsaXR0ZXIsIGJpbmRzIGV2ZW50cyB0byBpdCBhbmQgYWRkc1xuICAgICAqIGl0IHRvIHRoZSBhcnJheSBvZiBzcGxpdHRlcnMgYXQgdGhlIHBvc2l0aW9uIHNwZWNpZmllZCBhcyB0aGUgaW5kZXggYXJndW1lbnRcbiAgICAgKlxuICAgICAqIFdoYXQgaXQgZG9lc24ndCBkbyB0aG91Z2ggaXMgYXBwZW5kIHRoZSBzcGxpdHRlciB0byB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SW50fSBpbmRleCBUaGUgcG9zaXRpb24gb2YgdGhlIHNwbGl0dGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7U3BsaXR0ZXJ9XG4gICAgICovXG4gICAgX2NyZWF0ZVNwbGl0dGVyKGluZGV4KSB7XG4gICAgICAgIHZhciBzcGxpdHRlcjtcbiAgICAgICAgc3BsaXR0ZXIgPSBuZXcgU3BsaXR0ZXIodGhpcy5faXNDb2x1bW4sIHRoaXMuX3NwbGl0dGVyU2l6ZSwgdGhpcy5fc3BsaXR0ZXJHcmFiU2l6ZSk7XG4gICAgICAgIHNwbGl0dGVyLm9uKCdkcmFnJywgZm5CaW5kKHRoaXMuX29uU3BsaXR0ZXJEcmFnLCB0aGlzLCBbc3BsaXR0ZXJdKSwgdGhpcyk7XG4gICAgICAgIHNwbGl0dGVyLm9uKCdkcmFnU3RvcCcsIGZuQmluZCh0aGlzLl9vblNwbGl0dGVyRHJhZ1N0b3AsIHRoaXMsIFtzcGxpdHRlcl0pLCB0aGlzKTtcbiAgICAgICAgc3BsaXR0ZXIub24oJ2RyYWdTdGFydCcsIGZuQmluZCh0aGlzLl9vblNwbGl0dGVyRHJhZ1N0YXJ0LCB0aGlzLCBbc3BsaXR0ZXJdKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3NwbGl0dGVyLnNwbGljZShpbmRleCwgMCwgc3BsaXR0ZXIpO1xuICAgICAgICByZXR1cm4gc3BsaXR0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYXRlcyB0aGUgaW5zdGFuY2Ugb2YgU3BsaXR0ZXIgaW4gdGhlIGFycmF5IG9mXG4gICAgICogcmVnaXN0ZXJlZCBzcGxpdHRlcnMgYW5kIHJldHVybnMgYSBtYXAgY29udGFpbmluZyB0aGUgY29udGVudEl0ZW1cbiAgICAgKiBiZWZvcmUgYW5kIGFmdGVyIHRoZSBzcGxpdHRlcnMsIGJvdGggb2Ygd2hpY2ggYXJlIGFmZmVjdGVkIGlmIHRoZVxuICAgICAqIHNwbGl0dGVyIGlzIG1vdmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7U3BsaXR0ZXJ9IHNwbGl0dGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBIG1hcCBvZiBjb250ZW50SXRlbXMgdGhhdCB0aGUgc3BsaXR0ZXIgYWZmZWN0c1xuICAgICAqL1xuICAgIF9nZXRJdGVtc0ZvclNwbGl0dGVyKHNwbGl0dGVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGluZGV4T2Yoc3BsaXR0ZXIsIHRoaXMuX3NwbGl0dGVyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmVmb3JlOiB0aGlzLmNvbnRlbnRJdGVtc1tpbmRleF0sXG4gICAgICAgICAgICBhZnRlcjogdGhpcy5jb250ZW50SXRlbXNbaW5kZXggKyAxXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZG9ja2luZyBpbmZvcm1hdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2lzRG9ja2VkKGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0RvY2tlZChpKSlcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLmNvbnRlbnRJdGVtcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50SXRlbXNbaW5kZXhdLl9kb2NrZXIgJiYgdGhpcy5jb250ZW50SXRlbXNbaW5kZXhdLl9kb2NrZXIuZG9ja2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGlmIHJvdyBvciBjb2x1bW4gaGFzIGFiaWxpdHkgdG8gZG9ja1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3ZhbGlkYXRlRG9ja2luZyh0aGF0KSB7XG4gICAgICAgIHRoYXQgPSB0aGF0IHx8IHRoaXM7XG4gICAgICAgIHZhciBjYW4gPSB0aGF0LmNvbnRlbnRJdGVtcy5sZW5ndGggLSB0aGF0Ll9pc0RvY2tlZCgpID4gMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRJdGVtcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmICh0aGF0LmNvbnRlbnRJdGVtc1tpXSBpbnN0YW5jZW9mIFN0YWNrKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5jb250ZW50SXRlbXNbaV0uaGVhZGVyLl9zZXREb2NrYWJsZSh0aGF0Ll9pc0RvY2tlZChpKSB8fCBjYW4pO1xuICAgICAgICAgICAgICAgIHRoYXQuY29udGVudEl0ZW1zW2ldLmhlYWRlci5fJHNldENsb3NhYmxlKGNhbik7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbWluaW11bSBkaW1lbnNpb25zIGZvciB0aGUgZ2l2ZW4gaXRlbSBjb25maWd1cmF0aW9uIGFycmF5XG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRNaW5pbXVtRGltZW5zaW9ucyhhcnIpIHtcbiAgICAgICAgdmFyIG1pbldpZHRoID0gMCxcbiAgICAgICAgICAgIG1pbkhlaWdodCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoYXJyW2ldLm1pbldpZHRoIHx8IDAsIG1pbldpZHRoKTtcbiAgICAgICAgICAgIG1pbkhlaWdodCA9IE1hdGgubWF4KGFycltpXS5taW5IZWlnaHQgfHwgMCwgbWluSGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBtaW5XaWR0aCxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBtaW5IZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gYSBzcGxpdHRlcidzIGRyYWdMaXN0ZW5lciBmaXJlcyBkcmFnU3RhcnQuIENhbGN1bGF0ZXMgdGhlIHNwbGl0dGVyc1xuICAgICAqIG1vdmVtZW50IGFyZWEgb25jZSAoc28gdGhhdCBpdCBkb2Vzbid0IG5lZWQgY2FsY3VsYXRpbmcgb24gZXZlcnkgbW91c2Vtb3ZlIGV2ZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1NwbGl0dGVyfSBzcGxpdHRlclxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uU3BsaXR0ZXJEcmFnU3RhcnQoc3BsaXR0ZXIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JTcGxpdHRlcihzcGxpdHRlciksXG4gICAgICAgICAgICBtaW5TaXplID0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zW3RoaXMuX2lzQ29sdW1uID8gJ21pbkl0ZW1IZWlnaHQnIDogJ21pbkl0ZW1XaWR0aCddO1xuXG4gICAgICAgIHZhciBiZWZvcmVNaW5EaW0gPSB0aGlzLl9nZXRNaW5pbXVtRGltZW5zaW9ucyhpdGVtcy5iZWZvcmUuY29uZmlnLmNvbnRlbnQpO1xuICAgICAgICB2YXIgYmVmb3JlTWluU2l6ZSA9IHRoaXMuX2lzQ29sdW1uID8gYmVmb3JlTWluRGltLnZlcnRpY2FsIDogYmVmb3JlTWluRGltLmhvcml6b250YWw7XG5cbiAgICAgICAgdmFyIGFmdGVyTWluRGltID0gdGhpcy5fZ2V0TWluaW11bURpbWVuc2lvbnMoaXRlbXMuYWZ0ZXIuY29uZmlnLmNvbnRlbnQpO1xuICAgICAgICB2YXIgYWZ0ZXJNaW5TaXplID0gdGhpcy5faXNDb2x1bW4gPyBhZnRlck1pbkRpbS52ZXJ0aWNhbCA6IGFmdGVyTWluRGltLmhvcml6b250YWw7XG5cbiAgICAgICAgdGhpcy5fc3BsaXR0ZXJQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuX3NwbGl0dGVyTWluUG9zaXRpb24gPSAtMSAqIChpdGVtcy5iZWZvcmUuZWxlbWVudFt0aGlzLl9kaW1lbnNpb25dKCkgLSAoYmVmb3JlTWluU2l6ZSB8fCBtaW5TaXplKSk7XG4gICAgICAgIHRoaXMuX3NwbGl0dGVyTWF4UG9zaXRpb24gPSBpdGVtcy5hZnRlci5lbGVtZW50W3RoaXMuX2RpbWVuc2lvbl0oKSAtIChhZnRlck1pblNpemUgfHwgbWluU2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIGEgc3BsaXR0ZXIncyBEcmFnTGlzdGVuZXIgZmlyZXMgZHJhZy4gVXBkYXRlcyB0aGUgc3BsaXR0ZXJzIERPTSBwb3NpdGlvbixcbiAgICAgKiBidXQgbm90IHRoZSBzaXplcyBvZiB0aGUgZWxlbWVudHMgdGhlIHNwbGl0dGVyIGNvbnRyb2xzIGluIG9yZGVyIHRvIG1pbmltaXplIHJlc2l6ZSBldmVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtTcGxpdHRlcn0gc3BsaXR0ZXJcbiAgICAgKiBAcGFyYW0gICB7SW50fSBvZmZzZXRYICBSZWxhdGl2ZSBwaXhlbCB2YWx1ZXMgdG8gdGhlIHNwbGl0dGVycyBvcmlnaW5hbCBwb3NpdGlvbi4gQ2FuIGJlIG5lZ2F0aXZlXG4gICAgICogQHBhcmFtICAge0ludH0gb2Zmc2V0WSAgUmVsYXRpdmUgcGl4ZWwgdmFsdWVzIHRvIHRoZSBzcGxpdHRlcnMgb3JpZ2luYWwgcG9zaXRpb24uIENhbiBiZSBuZWdhdGl2ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX29uU3BsaXR0ZXJEcmFnKHNwbGl0dGVyLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9pc0NvbHVtbiA/IG9mZnNldFkgOiBvZmZzZXRYO1xuXG4gICAgICAgIGlmIChvZmZzZXQgPiB0aGlzLl9zcGxpdHRlck1pblBvc2l0aW9uICYmIG9mZnNldCA8IHRoaXMuX3NwbGl0dGVyTWF4UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NwbGl0dGVyUG9zaXRpb24gPSBvZmZzZXQ7XG4gICAgICAgICAgICBzcGxpdHRlci5lbGVtZW50LmNzcyh0aGlzLl9pc0NvbHVtbiA/ICd0b3AnIDogJ2xlZnQnLCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIGEgc3BsaXR0ZXIncyBEcmFnTGlzdGVuZXIgZmlyZXMgZHJhZ1N0b3AuIFJlc2V0cyB0aGUgc3BsaXR0ZXJzIERPTSBwb3NpdGlvbixcbiAgICAgKiBhbmQgYXBwbGllcyB0aGUgbmV3IHNpemVzIHRvIHRoZSBlbGVtZW50cyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBzcGxpdHRlciBhbmQgdGhlaXIgY2hpbGRyZW5cbiAgICAgKiBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtTcGxpdHRlcn0gc3BsaXR0ZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9vblNwbGl0dGVyRHJhZ1N0b3Aoc3BsaXR0ZXIpIHtcblxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0ZvclNwbGl0dGVyKHNwbGl0dGVyKSxcbiAgICAgICAgICAgIHNpemVCZWZvcmUgPSBpdGVtcy5iZWZvcmUuZWxlbWVudFt0aGlzLl9kaW1lbnNpb25dKCksXG4gICAgICAgICAgICBzaXplQWZ0ZXIgPSBpdGVtcy5hZnRlci5lbGVtZW50W3RoaXMuX2RpbWVuc2lvbl0oKSxcbiAgICAgICAgICAgIHNwbGl0dGVyUG9zaXRpb25JblJhbmdlID0gKHRoaXMuX3NwbGl0dGVyUG9zaXRpb24gKyBzaXplQmVmb3JlKSAvIChzaXplQmVmb3JlICsgc2l6ZUFmdGVyKSxcbiAgICAgICAgICAgIHRvdGFsUmVsYXRpdmVTaXplID0gaXRlbXMuYmVmb3JlLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dICsgaXRlbXMuYWZ0ZXIuY29uZmlnW3RoaXMuX2RpbWVuc2lvbl07XG5cbiAgICAgICAgaXRlbXMuYmVmb3JlLmNvbmZpZ1t0aGlzLl9kaW1lbnNpb25dID0gc3BsaXR0ZXJQb3NpdGlvbkluUmFuZ2UgKiB0b3RhbFJlbGF0aXZlU2l6ZTtcbiAgICAgICAgaXRlbXMuYWZ0ZXIuY29uZmlnW3RoaXMuX2RpbWVuc2lvbl0gPSAoMSAtIHNwbGl0dGVyUG9zaXRpb25JblJhbmdlKSAqIHRvdGFsUmVsYXRpdmVTaXplO1xuXG4gICAgICAgIHNwbGl0dGVyLmVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICd0b3AnOiAwLFxuICAgICAgICAgICAgJ2xlZnQnOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFuaW1GcmFtZShmbkJpbmQodGhpcy5jYWxsRG93bndhcmRzLCB0aGlzLCBbJ3NldFNpemUnXSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdENvbnRlbnRJdGVtIGZyb20gXCIuLi9pdGVtcy9BYnN0cmFjdENvbnRlbnRJdGVtXCI7XG5pbXBvcnQgUm93T3JDb2x1bW4gZnJvbSBcIi4uL2l0ZW1zL1Jvd09yQ29sdW1uXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb250cm9scy9IZWFkZXJcIjtcblxuaW1wb3J0IHsgZm5CaW5kLCBjb3B5LCBpbmRleE9mIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrIGV4dGVuZHMgQWJzdHJhY3RDb250ZW50SXRlbSB7XG4gICAgY29uc3RydWN0b3IobGF5b3V0TWFuYWdlciwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIobGF5b3V0TWFuYWdlciwgY29uZmlnLCBwYXJlbnQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgY2xhc3M9XCJsbV9pdGVtIGxtX3N0YWNrXCI+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUNvbnRlbnRJdGVtID0gbnVsbDtcbiAgICAgICAgdmFyIGNmZyA9IGxheW91dE1hbmFnZXIuY29uZmlnO1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0cycgcmVjb25zdHJ1Y3Rpb24gZnJvbSBvbGQgY29uZmlndXJhdGlvbiBzdHlsZVxuICAgICAgICAgICAgc2hvdzpcbiAgICAgICAgICAgICAgICBjZmcuc2V0dGluZ3MuaGFzSGVhZGVycyA9PT0gdHJ1ZSAmJiBjb25maWcuaGFzSGVhZGVycyAhPT0gZmFsc2UsXG4gICAgICAgICAgICBwb3BvdXQ6IGNmZy5zZXR0aW5ncy5zaG93UG9wb3V0SWNvbiAmJiBjZmcubGFiZWxzLnBvcG91dCxcbiAgICAgICAgICAgIG1heGltaXNlOiBjZmcuc2V0dGluZ3Muc2hvd01heGltaXNlSWNvbiAmJiBjZmcubGFiZWxzLm1heGltaXNlLFxuICAgICAgICAgICAgY2xvc2U6IGNmZy5zZXR0aW5ncy5zaG93Q2xvc2VJY29uICYmIGNmZy5sYWJlbHMuY2xvc2UsXG4gICAgICAgICAgICBtaW5pbWlzZTogY2ZnLmxhYmVscy5taW5pbWlzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNmZy5oZWFkZXIpXG4gICAgICAgICAgICAvLyBsb2FkIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiBoZWFkZXIgY29uZmlndXJhdGlvbiAoaHR0cHM6Ly9naXRodWIuY29tL2RlZXBzdHJlYW1JTy9nb2xkZW4tbGF5b3V0L3B1bGwvMjQ1KVxuICAgICAgICAgICAgY29weSh0aGlzLl9oZWFkZXIsIGNmZy5oZWFkZXIpO1xuICAgICAgICBpZiAoY29uZmlnLmhlYWRlcilcbiAgICAgICAgICAgIC8vIGxvYWQgZnJvbSBzdGFja1xuICAgICAgICAgICAgY29weSh0aGlzLl9oZWFkZXIsIGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICBpZiAoY29uZmlnLmNvbnRlbnQgJiYgY29uZmlnLmNvbnRlbnRbMF0gJiYgY29uZmlnLmNvbnRlbnRbMF0uaGVhZGVyKVxuICAgICAgICAgICAgLy8gbG9hZCBmcm9tIGNvbXBvbmVudCBpZiBzdGFjayBvbWl0dGVkXG4gICAgICAgICAgICBjb3B5KHRoaXMuX2hlYWRlciwgY29uZmlnLmNvbnRlbnRbMF0uaGVhZGVyKTtcblxuICAgICAgICB0aGlzLl9kcm9wWm9uZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fZHJvcFNlZ21lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcm9wSW5kZXggPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaXNTdGFjayA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwibG1faXRlbXNcIj48L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKGxheW91dE1hbmFnZXIsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcbiAgICAgICAgICAgIFwibW91c2VsZWF2ZSBtb3VzZWVudGVyXCIsXG4gICAgICAgICAgICBmbkJpbmQoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RvY2tlciAmJiB0aGlzLl9kb2NrZXIuZG9ja2VkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lclt0aGlzLl9kb2NrZXIuZGltZW5zaW9uXShcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnR5cGUgPT0gXCJtb3VzZWVudGVyXCIgPyB0aGlzLl9kb2NrZXIucmVhbFNpemUgOiAwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaGVhZGVyLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5fc2V0dXBIZWFkZXJQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLl8kdmFsaWRhdGVDbG9zYWJpbGl0eSgpO1xuICAgIH1cblxuICAgIGRvY2sobW9kZSkge1xuICAgICAgICBpZiAodGhpcy5faGVhZGVyLmRvY2spXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgaW5zdGFuY2VvZiBSb3dPckNvbHVtbilcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kb2NrKHRoaXMsIG1vZGUpO1xuICAgIH1cblxuICAgIHNldFNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgICAgdmFyIGlzRG9ja2VkID0gdGhpcy5fZG9ja2VyICYmIHRoaXMuX2RvY2tlci5kb2NrZWQsXG4gICAgICAgICAgICBjb250ZW50ID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuX2hlYWRlci5zaG93KVxuICAgICAgICAgICAgY29udGVudFtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWRlZCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJcbiAgICAgICAgICAgIF0gLT0gdGhpcy5sYXlvdXRNYW5hZ2VyLmNvbmZpZy5kaW1lbnNpb25zLmhlYWRlckhlaWdodDtcbiAgICAgICAgaWYgKGlzRG9ja2VkKSBjb250ZW50W3RoaXMuX2RvY2tlci5kaW1lbnNpb25dID0gdGhpcy5fZG9ja2VyLnJlYWxTaXplO1xuICAgICAgICBpZiAoIWlzRG9ja2VkIHx8IHRoaXMuX2RvY2tlci5kaW1lbnNpb24gPT0gXCJoZWlnaHRcIilcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyLndpZHRoKGNvbnRlbnQud2lkdGgpO1xuICAgICAgICBpZiAoIWlzRG9ja2VkIHx8IHRoaXMuX2RvY2tlci5kaW1lbnNpb24gPT0gXCJ3aWR0aFwiKVxuICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRDb250YWluZXIuaGVpZ2h0KGNvbnRlbnQuaGVpZ2h0KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tpXS5lbGVtZW50LndpZHRoKGNvbnRlbnQud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uZWxlbWVudC5oZWlnaHQoY29udGVudC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdChcInJlc2l6ZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudChcInN0YXRlQ2hhbmdlZFwiKTtcbiAgICB9XG5cbiAgICBfJGluaXQoKSB7XG4gICAgICAgIHZhciBpLCBpbml0aWFsSXRlbTtcblxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpc2VkID09PSB0cnVlKSByZXR1cm47XG5cbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUuXyRpbml0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jcmVhdGVUYWIodGhpcy5jb250ZW50SXRlbXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaV0uXyRoaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW5pdGlhbEl0ZW0gPSB0aGlzLmNvbnRlbnRJdGVtc1t0aGlzLmNvbmZpZy5hY3RpdmVJdGVtSW5kZXggfHwgMF07XG5cbiAgICAgICAgICAgIGlmICghaW5pdGlhbEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsSXRlbSA9IHRoaXMuY29udGVudEl0ZW1zWzBdOyAvL0RlZmF1bHQgdG8gaW5kZXggMCBpZiAnQ29uZmlndXJlZCBhY3RpdmVJdGVtSW5kZXggb3V0IG9mIGJvdW5kcydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVDb250ZW50SXRlbShpbml0aWFsSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJHZhbGlkYXRlQ2xvc2FiaWxpdHkoKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50IGluc3RhbmNlb2YgUm93T3JDb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll92YWxpZGF0ZURvY2tpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVDb250ZW50SXRlbSA9PT0gY29udGVudEl0ZW0pIHJldHVybjtcblxuICAgICAgICBpZiAoaW5kZXhPZihjb250ZW50SXRlbSwgdGhpcy5jb250ZW50SXRlbXMpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29udGVudEl0ZW0gaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBzdGFja1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVDb250ZW50SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlQ29udGVudEl0ZW0uXyRoaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hY3RpdmVDb250ZW50SXRlbSA9IGNvbnRlbnRJdGVtO1xuICAgICAgICB0aGlzLmhlYWRlci5zZXRBY3RpdmVDb250ZW50SXRlbShjb250ZW50SXRlbSk7XG4gICAgICAgIGNvbnRlbnRJdGVtLl8kc2hvdygpO1xuICAgICAgICB0aGlzLmVtaXQoXCJhY3RpdmVDb250ZW50SXRlbUNoYW5nZWRcIiwgY29udGVudEl0ZW0pO1xuICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIuZW1pdChcImFjdGl2ZUNvbnRlbnRJdGVtQ2hhbmdlZFwiLCBjb250ZW50SXRlbSk7XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoXCJzdGF0ZUNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlQ29udGVudEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5hY3RpdmVDb250ZW50SXRlbTtcbiAgICB9XG5cbiAgICBhZGRDaGlsZChjb250ZW50SXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogVUdMWSBQQVRDSDogUFIgIzQyOCwgY29tbWl0IGE0ZTg0ZWM1IGZpeGVkIGEgYnVnIGFwcGVhcmluZyBvbiB0b3VjaHNjcmVlbnMgZHVyaW5nIHRoZSBkcmFnIG9mIGEgcGFuZWwuXG4gICAgICAgICAgICAgKiBUaGUgYnVnIHdhcyBjYXVzZWQgYnkgdGhlIHBoeXNpY2FsIHJlbW92YWwgb2YgdGhlIGVsZW1lbnQgb24gZHJhZzogcGFydGlhbCBkb2N1bWVudGF0aW9uIGlzIGF0IGlzc3VlICM0MjUuXG4gICAgICAgICAgICAgKiBUaGUgZml4IGludHJvZHVjZWQgdGhlIGZ1bmN0aW9uIHVuZGlzcGxheUNoaWxkKCkgKGNhbGxlZCAndW5kaXNwbGF5JyB0byBkaWZmZXJlbnRpYXRlIGl0IGZyb20galF1ZXJ5LmhpZGUpLFxuICAgICAgICAgICAgICogd2hpY2ggZG9lc24ndCByZW1vdmUgdGhlIGVsZW1lbnQgYnV0IG9ubHkgaGlkZXMgaXQ6IHRoYXQncyB3aHkgd2hlbiBhIHRhYiBpcyBkcmFnZ2VkICYgZHJvcHBlZCBpbnRvIGl0c1xuICAgICAgICAgICAgICogb3JpZ2luYWwgY29udGFpbmVyIChhdCB0aGUgZW5kKSwgdGhlIGluZGV4IGhlcmUgY291bGQgYmUgb2ZmIGJ5IG9uZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5kZXggLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50SXRlbSA9IHRoaXMubGF5b3V0TWFuYWdlci5fJG5vcm1hbGl6ZUNvbnRlbnRJdGVtKFxuICAgICAgICAgICAgY29udGVudEl0ZW0sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgY29udGVudEl0ZW0sIGluZGV4KTtcbiAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRJdGVtLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmhlYWRlci5jcmVhdGVUYWIoY29udGVudEl0ZW0sIGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDb250ZW50SXRlbShjb250ZW50SXRlbSk7XG4gICAgICAgIHRoaXMuY2FsbERvd253YXJkcyhcInNldFNpemVcIik7XG4gICAgICAgIHRoaXMuXyR2YWxpZGF0ZUNsb3NhYmlsaXR5KCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCBpbnN0YW5jZW9mIFJvd09yQ29sdW1uKSB0aGlzLnBhcmVudC5fdmFsaWRhdGVEb2NraW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoXCJzdGF0ZUNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY29udGVudEl0ZW0sIGtlZXBDaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBpbmRleE9mKGNvbnRlbnRJdGVtLCB0aGlzLmNvbnRlbnRJdGVtcyk7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLnJlbW92ZUNoaWxkLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgY29udGVudEl0ZW0sXG4gICAgICAgICAgICBrZWVwQ2hpbGRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5oZWFkZXIucmVtb3ZlVGFiKGNvbnRlbnRJdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmFjdGl2ZUNvbnRlbnRJdGVtID09PSBjb250ZW50SXRlbSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUNvbnRlbnRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRJdGVtc1tNYXRoLm1heChpbmRleCAtIDEsIDApXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUNvbnRlbnRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5hY3RpdmVJdGVtSW5kZXggPj0gdGhpcy5jb250ZW50SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVJbmRleCA9IGluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZlQ29udGVudEl0ZW0oKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjdGl2ZUl0ZW1JbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuXyR2YWxpZGF0ZUNsb3NhYmlsaXR5KCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCBpbnN0YW5jZW9mIFJvd09yQ29sdW1uKSB0aGlzLnBhcmVudC5fdmFsaWRhdGVEb2NraW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdEJ1YmJsaW5nRXZlbnQoXCJzdGF0ZUNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgdW5kaXNwbGF5Q2hpbGQoY29udGVudEl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4T2YoY29udGVudEl0ZW0sIHRoaXMuY29udGVudEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLl8kaGlkZSAmJiBjb250ZW50SXRlbS5fJGhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQ29udGVudEl0ZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50SXRlbXNbaW5kZXggPT09IDAgPyBpbmRleCArIDEgOiBpbmRleCAtIDFdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIuaGlkZVRhYihjb250ZW50SXRlbSk7XG4gICAgICAgICAgICBjb250ZW50SXRlbS5fJGhpZGUgJiYgY29udGVudEl0ZW0uXyRoaWRlKCk7XG4gICAgICAgICAgICBBYnN0cmFjdENvbnRlbnRJdGVtLnByb3RvdHlwZS51bmRpc3BsYXlDaGlsZC5jYWxsKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgaW5zdGFuY2VvZiBSb3dPckNvbHVtbilcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5fdmFsaWRhdGVEb2NraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0QnViYmxpbmdFdmVudChcInN0YXRlQ2hhbmdlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhhdCB0aGUgc3RhY2sgaXMgc3RpbGwgY2xvc2FibGUgb3Igbm90LiBJZiBhIHN0YWNrIGlzIGFibGVcbiAgICAgKiB0byBjbG9zZSwgYnV0IGhhcyBhIG5vbiBjbG9zYWJsZSBjb21wb25lbnQgYWRkZWQgdG8gaXQsIHRoZSBzdGFjayBpcyBub1xuICAgICAqIGxvbmdlciBjbG9zYWJsZSB1bnRpbCBhbGwgY29tcG9uZW50cyBhcmUgY2xvc2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfJHZhbGlkYXRlQ2xvc2FiaWxpdHkoKSB7XG4gICAgICAgIHZhciBjb250ZW50SXRlbSwgaXNDbG9zYWJsZSwgbGVuLCBpO1xuXG4gICAgICAgIGlzQ2xvc2FibGUgPSB0aGlzLmhlYWRlci5faXNDbG9zYWJsZSgpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNDbG9zYWJsZSA9IHRoaXMuY29udGVudEl0ZW1zW2ldLmNvbmZpZy5pc0Nsb3NhYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWFkZXIuXyRzZXRDbG9zYWJsZShpc0Nsb3NhYmxlKTtcbiAgICB9XG5cbiAgICBfJGRlc3Ryb3koKSB7XG4gICAgICAgIEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLl8kZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmhlYWRlci5fJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPaywgdGhpcyBvbmUgaXMgZ29pbmcgdG8gYmUgdGhlIHRyaWNreSBvbmU6IFRoZSB1c2VyIGhhcyBkcm9wcGVkIHtjb250ZW50SXRlbX0gb250byB0aGlzIHN0YWNrLlxuICAgICAqXG4gICAgICogSXQgd2FzIGRyb3BwZWQgb24gZWl0aGVyIHRoZSBzdGFja3MgaGVhZGVyIG9yIHRoZSB0b3AsIHJpZ2h0LCBib3R0b20gb3IgbGVmdCBiaXQgb2YgdGhlIGNvbnRlbnQgYXJlYVxuICAgICAqICh3aGljaCBvbmUgb2YgdGhvc2UgaXMgc3RvcmVkIGluIHRoaXMuX2Ryb3BTZWdtZW50KS4gTm93LCBpZiB0aGUgdXNlciBoYXMgZHJvcHBlZCBvbiB0aGUgaGVhZGVyIHRoZSBjYXNlXG4gICAgICogaXMgcmVsYXRpdmVseSBjbGVhcjogV2UgYWRkIHRoZSBpdGVtIHRvIHRoZSBleGlzdGluZyBzdGFjay4uLiBqb2IgZG9uZSAobWlnaHQgYmUgZ29vZCB0byBoYXZlXG4gICAgICogdGFiIHJlb3JkZXJpbmcgYXQgc29tZSBwb2ludCwgYnV0IGxldHMgbm90IHN3ZWF0IGl0IHJpZ2h0IG5vdylcbiAgICAgKlxuICAgICAqIElmIHRoZSBpdGVtIHdhcyBkcm9wcGVkIG9uIHRoZSBjb250ZW50IHBhcnQgdGhpbmdzIGFyZSBhIGJpdCBtb3JlIGNvbXBsaWNhdGVkLiBJZiBpdCB3YXMgZHJvcHBlZCBvbiBlaXRoZXIgdGhlXG4gICAgICogdG9wIG9yIGJvdHRvbSByZWdpb24gd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgY29sdW1uIGFuZCBwbGFjZSB0aGUgaXRlbXMgYWNjb3JkaW5nbHkuXG4gICAgICogVW5sZXNzLCBvZiBjb3Vyc2UgaWYgdGhlIHN0YWNrIGlzIGFscmVhZHkgd2l0aGluIGEgY29sdW1uLi4uIGluIHdoaWNoIGNhc2Ugd2Ugd2FudFxuICAgICAqIHRvIGFkZCB0aGUgbmV3bHkgY3JlYXRlZCBpdGVtIHRvIHRoZSBleGlzdGluZyBjb2x1bW4uLi5cbiAgICAgKiBlaXRoZXIgcHJlcGVuZCBvciBhcHBlbmQgaXQsIGRlcGVuZGluZyBvbiB3ZXRoZXIgaXRzIHRvcCBvciBib3R0b20uXG4gICAgICpcbiAgICAgKiBTYW1lIHRoaW5nIGZvciByb3dzIGFuZCBsZWZ0IC8gcmlnaHQgZHJvcCBzZWdtZW50cy4uLiBzbyBpbiB0b3RhbCB0aGVyZSBhcmUgOSB0aGluZ3MgdGhhdCBjYW4gcG90ZW50aWFsbHkgaGFwcGVuXG4gICAgICogKGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSkgKiBpcyBjaGlsZCBvZiB0aGUgcmlnaHQgcGFyZW50IChyb3csIGNvbHVtbikgKyBoZWFkZXIgZHJvcFxuICAgICAqXG4gICAgICogQHBhcmFtICAgIHtsbS5pdGVtfSBjb250ZW50SXRlbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRvbkRyb3AoY29udGVudEl0ZW0pIHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGl0ZW0gd2FzIGRyb3BwZWQgb24gdGhlIGhlYWRlciBhcmVhLiBKdXN0IGFkZCBpdCBhcyBhIGNoaWxkIG9mIHRoaXMgc3RhY2sgYW5kXG4gICAgICAgICAqIGdldCB0aGUgaGVsbCBvdXQgb2YgdGhpcyBsb2dpY1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuX2Ryb3BTZWdtZW50ID09PSBcImhlYWRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNldEhlYWRlckRyb3Bab25lKCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNvbnRlbnRJdGVtLCB0aGlzLl9kcm9wSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIHN0YWNrIGlzIGVtcHR5LiBMZXQncyBqdXN0IGFkZCB0aGUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLl9kcm9wU2VnbWVudCA9PT0gXCJib2R5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY29udGVudEl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGl0ZW0gd2FzIGRyb3BwZWQgb24gdGhlIHRvcC0sIGxlZnQtLCBib3R0b20tIG9yIHJpZ2h0LSBwYXJ0IG9mIHRoZSBjb250ZW50LiBMZXQnc1xuICAgICAgICAgKiBhZ2dyZWdhdGUgc29tZSBjb25kaXRpb25zIHRvIG1ha2UgdGhlIGlmIHN0YXRlbWVudHMgbGF0ZXIgb24gbW9yZSByZWFkYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGlzVmVydGljYWwgPVxuICAgICAgICAgICAgICAgIHRoaXMuX2Ryb3BTZWdtZW50ID09PSBcInRvcFwiIHx8IHRoaXMuX2Ryb3BTZWdtZW50ID09PSBcImJvdHRvbVwiLFxuICAgICAgICAgICAgaXNIb3Jpem9udGFsID1cbiAgICAgICAgICAgICAgICB0aGlzLl9kcm9wU2VnbWVudCA9PT0gXCJsZWZ0XCIgfHwgdGhpcy5fZHJvcFNlZ21lbnQgPT09IFwicmlnaHRcIixcbiAgICAgICAgICAgIGluc2VydEJlZm9yZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJvcFNlZ21lbnQgPT09IFwidG9wXCIgfHwgdGhpcy5fZHJvcFNlZ21lbnQgPT09IFwibGVmdFwiLFxuICAgICAgICAgICAgaGFzQ29ycmVjdFBhcmVudCA9XG4gICAgICAgICAgICAgICAgKGlzVmVydGljYWwgJiYgdGhpcy5wYXJlbnQuaXNDb2x1bW4pIHx8XG4gICAgICAgICAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiB0aGlzLnBhcmVudC5pc1JvdyksXG4gICAgICAgICAgICB0eXBlID0gaXNWZXJ0aWNhbCA/IFwiY29sdW1uXCIgOiBcInJvd1wiLFxuICAgICAgICAgICAgZGltZW5zaW9uID0gaXNWZXJ0aWNhbCA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCIsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHN0YWNrLFxuICAgICAgICAgICAgcm93T3JDb2x1bW47XG5cbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGNvbnRlbnQgaXRlbSBjYW4gYmUgZWl0aGVyIGEgY29tcG9uZW50IG9yIGEgc3RhY2suIElmIGl0IGlzIGEgY29tcG9uZW50LCB3cmFwIGl0IGludG8gYSBzdGFja1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNvbnRlbnRJdGVtLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBzdGFjayA9IHRoaXMubGF5b3V0TWFuYWdlci5jcmVhdGVDb250ZW50SXRlbShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBjb250ZW50SXRlbS5jb25maWcuaGVhZGVyIHx8IHt9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN0YWNrLl8kaW5pdCgpO1xuICAgICAgICAgICAgc3RhY2suYWRkQ2hpbGQoY29udGVudEl0ZW0pO1xuICAgICAgICAgICAgY29udGVudEl0ZW0gPSBzdGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHRoZSBjb250ZW50SXRlbSB0aGF0J3MgYmVpbmcgZHJvcHBlZCBpcyBub3QgZHJvcHBlZCBvbiBhIFN0YWNrIChjYXNlcyB3aGljaCBqdXN0IHBhc3NlZCBhYm92ZSBhbmRcbiAgICAgICAgICogd2hpY2ggd291bGQgd3JhcCB0aGUgY29udGVudEl0ZW0gaW4gYSBTdGFjaykgd2UgbmVlZCB0byBjaGVjayB3aGV0aGVyIGNvbnRlbnRJdGVtIGlzIGEgUm93T3JDb2x1bW4uXG4gICAgICAgICAqIElmIGl0IGlzLCB3ZSBuZWVkIHRvIHJlLXdyYXAgaXQgaW4gYSBTdGFjayBsaWtlIGl0IHdhcyB3aGVuIGl0IHdhcyBkcmFnZ2VkIGJ5IGl0cyBUYWIgKGl0IHdhcyBkcmFnZ2VkISkuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb250ZW50SXRlbS5jb25maWcudHlwZSA9PT0gXCJyb3dcIiB8fFxuICAgICAgICAgICAgY29udGVudEl0ZW0uY29uZmlnLnR5cGUgPT09IFwiY29sdW1uXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdGFjayA9IHRoaXMubGF5b3V0TWFuYWdlci5jcmVhdGVDb250ZW50SXRlbShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdGFjay5hZGRDaGlsZChjb250ZW50SXRlbSk7XG4gICAgICAgICAgICBjb250ZW50SXRlbSA9IHN0YWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogSWYgdGhlIGl0ZW0gaXMgZHJvcHBlZCBvbiB0b3Agb3IgYm90dG9tIG9mIGEgY29sdW1uIG9yIGxlZnQgYW5kIHJpZ2h0IG9mIGEgcm93LCBpdCdzIGFscmVhZHlcbiAgICAgICAgICogbGF5ZCBvdXQgaW4gdGhlIGNvcnJlY3Qgd2F5LiBKdXN0IGFkZCBpdCBhcyBhIGNoaWxkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaGFzQ29ycmVjdFBhcmVudCkge1xuICAgICAgICAgICAgaW5kZXggPSBpbmRleE9mKHRoaXMsIHRoaXMucGFyZW50LmNvbnRlbnRJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbSxcbiAgICAgICAgICAgICAgICBpbnNlcnRCZWZvcmUgPyBpbmRleCA6IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5jb25maWdbZGltZW5zaW9uXSAqPSAwLjU7XG4gICAgICAgICAgICBjb250ZW50SXRlbS5jb25maWdbZGltZW5zaW9uXSA9IHRoaXMuY29uZmlnW2RpbWVuc2lvbl07XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5jYWxsRG93bndhcmRzKFwic2V0U2l6ZVwiKTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBUaGlzIGhhbmRsZXMgaXRlbXMgdGhhdCBhcmUgZHJvcHBlZCBvbiB0b3Agb3IgYm90dG9tIG9mIGEgcm93IG9yIGxlZnQgLyByaWdodCBvZiBhIGNvbHVtbi4gV2UgbmVlZFxuICAgICAgICAgICAgICogdG8gY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBjb250ZW50SXRlbSBmb3IgdGhlbSB0byBsaXZlIGluXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGUgPSBpc1ZlcnRpY2FsID8gXCJjb2x1bW5cIiA6IFwicm93XCI7XG4gICAgICAgICAgICByb3dPckNvbHVtbiA9IHRoaXMubGF5b3V0TWFuYWdlci5jcmVhdGVDb250ZW50SXRlbShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVwbGFjZUNoaWxkKHRoaXMsIHJvd09yQ29sdW1uKTtcblxuICAgICAgICAgICAgcm93T3JDb2x1bW4uYWRkQ2hpbGQoXG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm93T3JDb2x1bW4uYWRkQ2hpbGQodGhpcywgaW5zZXJ0QmVmb3JlID8gdW5kZWZpbmVkIDogMCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29uZmlnW2RpbWVuc2lvbl0gPSA1MDtcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLmNvbmZpZ1tkaW1lbnNpb25dID0gNTA7XG4gICAgICAgICAgICByb3dPckNvbHVtbi5jYWxsRG93bndhcmRzKFwic2V0U2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudC5fdmFsaWRhdGVEb2NraW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHVzZXIgaG92ZXJzIGFib3ZlIHRoZSBoZWFkZXIgcGFydCBvZiB0aGUgc3RhY2ssIGluZGljYXRlIGRyb3AgcG9zaXRpb25zIGZvciB0YWJzLlxuICAgICAqIG90aGVyd2lzZSBpbmRpY2F0ZSB3aGljaCBzZWdtZW50IG9mIHRoZSBib2R5IHRoZSBkcmFnZ2VkIGl0ZW0gd291bGQgYmUgZHJvcHBlZCBvblxuICAgICAqXG4gICAgICogQHBhcmFtICAgIHtJbnR9IHggQWJzb2x1dGUgU2NyZWVuIFhcbiAgICAgKiBAcGFyYW0gICAge0ludH0geSBBYnNvbHV0ZSBTY3JlZW4gWVxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgXyRoaWdobGlnaHREcm9wWm9uZSh4LCB5KSB7XG4gICAgICAgIHZhciBzZWdtZW50LCBhcmVhO1xuXG4gICAgICAgIGZvciAoc2VnbWVudCBpbiB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgIGFyZWEgPSB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnNbc2VnbWVudF0uaG92ZXJBcmVhO1xuXG4gICAgICAgICAgICBpZiAoYXJlYS54MSA8IHggJiYgYXJlYS54MiA+IHggJiYgYXJlYS55MSA8IHkgJiYgYXJlYS55MiA+IHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudCA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcm9wU2VnbWVudCA9IFwiaGVhZGVyXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodEhlYWRlckRyb3Bab25lKHRoaXMuX3NpZGVkID8geSA6IHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0SGVhZGVyRHJvcFpvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0Qm9keURyb3Bab25lKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF8kZ2V0QXJlYSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0QXJlYSA9IEFic3RyYWN0Q29udGVudEl0ZW0ucHJvdG90eXBlLl8kZ2V0QXJlYSxcbiAgICAgICAgICAgIGhlYWRlckFyZWEgPSBnZXRBcmVhLmNhbGwodGhpcywgdGhpcy5oZWFkZXIuZWxlbWVudCksXG4gICAgICAgICAgICBjb250ZW50QXJlYSA9IGdldEFyZWEuY2FsbCh0aGlzLCB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lciksXG4gICAgICAgICAgICBjb250ZW50V2lkdGggPSBjb250ZW50QXJlYS54MiAtIGNvbnRlbnRBcmVhLngxLFxuICAgICAgICAgICAgY29udGVudEhlaWdodCA9IGNvbnRlbnRBcmVhLnkyIC0gY29udGVudEFyZWEueTE7XG5cbiAgICAgICAgdGhpcy5fY29udGVudEFyZWFEaW1lbnNpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgIHgxOiBoZWFkZXJBcmVhLngxLFxuICAgICAgICAgICAgICAgICAgICB5MTogaGVhZGVyQXJlYS55MSxcbiAgICAgICAgICAgICAgICAgICAgeDI6IGhlYWRlckFyZWEueDIsXG4gICAgICAgICAgICAgICAgICAgIHkyOiBoZWFkZXJBcmVhLnkyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICB4MTogaGVhZGVyQXJlYS54MSxcbiAgICAgICAgICAgICAgICAgICAgeTE6IGhlYWRlckFyZWEueTEsXG4gICAgICAgICAgICAgICAgICAgIHgyOiBoZWFkZXJBcmVhLngyLFxuICAgICAgICAgICAgICAgICAgICB5MjogaGVhZGVyQXJlYS55MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBTdGFjayBpcyBhIHBhcmVudCB0byByb3dzLCBjb2x1bW5zIG9yIG90aGVyIHN0YWNrcyBvbmx5IGl0c1xuICAgICAgICAgKiBoZWFkZXIgaXMgYSB2YWxpZCBkcm9wem9uZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUNvbnRlbnRJdGVtICYmXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVDb250ZW50SXRlbS5pc0NvbXBvbmVudCA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyQXJlYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIaWdobGlnaHQgdGhlIGVudGlyZSBib2R5IGlmIHRoZSBzdGFjayBpcyBlbXB0eVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuY29udGVudEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudEFyZWFEaW1lbnNpb25zLmJvZHkgPSB7XG4gICAgICAgICAgICAgICAgaG92ZXJBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgIHgxOiBjb250ZW50QXJlYS54MSxcbiAgICAgICAgICAgICAgICAgICAgeTE6IGNvbnRlbnRBcmVhLnkxLFxuICAgICAgICAgICAgICAgICAgICB4MjogY29udGVudEFyZWEueDIsXG4gICAgICAgICAgICAgICAgICAgIHkyOiBjb250ZW50QXJlYS55MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodEFyZWE6IHtcbiAgICAgICAgICAgICAgICAgICAgeDE6IGNvbnRlbnRBcmVhLngxLFxuICAgICAgICAgICAgICAgICAgICB5MTogY29udGVudEFyZWEueTEsXG4gICAgICAgICAgICAgICAgICAgIHgyOiBjb250ZW50QXJlYS54MixcbiAgICAgICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0QXJlYS5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnMubGVmdCA9IHtcbiAgICAgICAgICAgIGhvdmVyQXJlYToge1xuICAgICAgICAgICAgICAgIHgxOiBjb250ZW50QXJlYS54MSxcbiAgICAgICAgICAgICAgICB5MTogY29udGVudEFyZWEueTEsXG4gICAgICAgICAgICAgICAgeDI6IGNvbnRlbnRBcmVhLngxICsgY29udGVudFdpZHRoICogMC4yNSxcbiAgICAgICAgICAgICAgICB5MjogY29udGVudEFyZWEueTIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlnaGxpZ2h0QXJlYToge1xuICAgICAgICAgICAgICAgIHgxOiBjb250ZW50QXJlYS54MSxcbiAgICAgICAgICAgICAgICB5MTogY29udGVudEFyZWEueTEsXG4gICAgICAgICAgICAgICAgeDI6IGNvbnRlbnRBcmVhLngxICsgY29udGVudFdpZHRoICogMC41LFxuICAgICAgICAgICAgICAgIHkyOiBjb250ZW50QXJlYS55MixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY29udGVudEFyZWFEaW1lbnNpb25zLnRvcCA9IHtcbiAgICAgICAgICAgIGhvdmVyQXJlYToge1xuICAgICAgICAgICAgICAgIHgxOiBjb250ZW50QXJlYS54MSArIGNvbnRlbnRXaWR0aCAqIDAuMjUsXG4gICAgICAgICAgICAgICAgeTE6IGNvbnRlbnRBcmVhLnkxLFxuICAgICAgICAgICAgICAgIHgyOiBjb250ZW50QXJlYS54MSArIGNvbnRlbnRXaWR0aCAqIDAuNzUsXG4gICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkxICsgY29udGVudEhlaWdodCAqIDAuNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdobGlnaHRBcmVhOiB7XG4gICAgICAgICAgICAgICAgeDE6IGNvbnRlbnRBcmVhLngxLFxuICAgICAgICAgICAgICAgIHkxOiBjb250ZW50QXJlYS55MSxcbiAgICAgICAgICAgICAgICB4MjogY29udGVudEFyZWEueDIsXG4gICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkxICsgY29udGVudEhlaWdodCAqIDAuNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY29udGVudEFyZWFEaW1lbnNpb25zLnJpZ2h0ID0ge1xuICAgICAgICAgICAgaG92ZXJBcmVhOiB7XG4gICAgICAgICAgICAgICAgeDE6IGNvbnRlbnRBcmVhLngxICsgY29udGVudFdpZHRoICogMC43NSxcbiAgICAgICAgICAgICAgICB5MTogY29udGVudEFyZWEueTEsXG4gICAgICAgICAgICAgICAgeDI6IGNvbnRlbnRBcmVhLngyLFxuICAgICAgICAgICAgICAgIHkyOiBjb250ZW50QXJlYS55MixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdobGlnaHRBcmVhOiB7XG4gICAgICAgICAgICAgICAgeDE6IGNvbnRlbnRBcmVhLngxICsgY29udGVudFdpZHRoICogMC41LFxuICAgICAgICAgICAgICAgIHkxOiBjb250ZW50QXJlYS55MSxcbiAgICAgICAgICAgICAgICB4MjogY29udGVudEFyZWEueDIsXG4gICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnMuYm90dG9tID0ge1xuICAgICAgICAgICAgaG92ZXJBcmVhOiB7XG4gICAgICAgICAgICAgICAgeDE6IGNvbnRlbnRBcmVhLngxICsgY29udGVudFdpZHRoICogMC4yNSxcbiAgICAgICAgICAgICAgICB5MTogY29udGVudEFyZWEueTEgKyBjb250ZW50SGVpZ2h0ICogMC41LFxuICAgICAgICAgICAgICAgIHgyOiBjb250ZW50QXJlYS54MSArIGNvbnRlbnRXaWR0aCAqIDAuNzUsXG4gICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hsaWdodEFyZWE6IHtcbiAgICAgICAgICAgICAgICB4MTogY29udGVudEFyZWEueDEsXG4gICAgICAgICAgICAgICAgeTE6IGNvbnRlbnRBcmVhLnkxICsgY29udGVudEhlaWdodCAqIDAuNSxcbiAgICAgICAgICAgICAgICB4MjogY29udGVudEFyZWEueDIsXG4gICAgICAgICAgICAgICAgeTI6IGNvbnRlbnRBcmVhLnkyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ2V0QXJlYS5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2hpZ2hsaWdodEhlYWRlckRyb3Bab25lKHgpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICB0YWJFbGVtZW50LFxuICAgICAgICAgICAgdGFic0xlbmd0aCA9IHRoaXMuaGVhZGVyLnRhYnMubGVuZ3RoLFxuICAgICAgICAgICAgaXNBYm92ZVRhYiA9IGZhbHNlLFxuICAgICAgICAgICAgdGFiVG9wLFxuICAgICAgICAgICAgdGFiTGVmdCxcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyTGVmdCxcbiAgICAgICAgICAgIGhlYWRlck9mZnNldCxcbiAgICAgICAgICAgIHRhYldpZHRoLFxuICAgICAgICAgICAgaGFsZlg7XG5cbiAgICAgICAgLy8gRW1wdHkgc3RhY2tcbiAgICAgICAgaWYgKHRhYnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGhlYWRlck9mZnNldCA9IHRoaXMuaGVhZGVyLmVsZW1lbnQub2Zmc2V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMubGF5b3V0TWFuYWdlci5kcm9wVGFyZ2V0SW5kaWNhdG9yLmhpZ2hsaWdodEFyZWEoe1xuICAgICAgICAgICAgICAgIHgxOiBoZWFkZXJPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB4MjogaGVhZGVyT2Zmc2V0LmxlZnQgKyAxMDAsXG4gICAgICAgICAgICAgICAgeTE6IGhlYWRlck9mZnNldC50b3AgKyB0aGlzLmhlYWRlci5lbGVtZW50LmhlaWdodCgpIC0gMjAsXG4gICAgICAgICAgICAgICAgeTI6IGhlYWRlck9mZnNldC50b3AgKyB0aGlzLmhlYWRlci5lbGVtZW50LmhlaWdodCgpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0YWJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhYkVsZW1lbnQgPSB0aGlzLmhlYWRlci50YWJzW2ldLmVsZW1lbnQ7XG4gICAgICAgICAgICBvZmZzZXQgPSB0YWJFbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NpZGVkKSB7XG4gICAgICAgICAgICAgICAgdGFiTGVmdCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgdGFiVG9wID0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgdGFiV2lkdGggPSB0YWJFbGVtZW50LmhlaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWJMZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgdGFiVG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgICAgICAgICAgICB0YWJXaWR0aCA9IHRhYkVsZW1lbnQud2lkdGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHggPiB0YWJMZWZ0ICYmIHggPCB0YWJMZWZ0ICsgdGFiV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpc0Fib3ZlVGFiID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Fib3ZlVGFiID09PSBmYWxzZSAmJiB4IDwgdGFiTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFsZlggPSB0YWJMZWZ0ICsgdGFiV2lkdGggLyAyO1xuXG4gICAgICAgIGlmICh4IDwgaGFsZlgpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ryb3BJbmRleCA9IGk7XG4gICAgICAgICAgICB0YWJFbGVtZW50LmJlZm9yZSh0aGlzLmxheW91dE1hbmFnZXIudGFiRHJvcFBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Ryb3BJbmRleCA9IE1hdGgubWluKGkgKyAxLCB0YWJzTGVuZ3RoKTtcbiAgICAgICAgICAgIHRhYkVsZW1lbnQuYWZ0ZXIodGhpcy5sYXlvdXRNYW5hZ2VyLnRhYkRyb3BQbGFjZWhvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc2lkZWQpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZUhvbGRlclRvcCA9IHRoaXMubGF5b3V0TWFuYWdlci50YWJEcm9wUGxhY2Vob2xkZXIub2Zmc2V0KClcbiAgICAgICAgICAgICAgICAudG9wO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyLmRyb3BUYXJnZXRJbmRpY2F0b3IuaGlnaGxpZ2h0QXJlYSh7XG4gICAgICAgICAgICAgICAgeDE6IHRhYlRvcCxcbiAgICAgICAgICAgICAgICB4MjogdGFiVG9wICsgdGFiRWxlbWVudC5pbm5lckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIHkxOiBwbGFjZUhvbGRlclRvcCxcbiAgICAgICAgICAgICAgICB5MjpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VIb2xkZXJUb3AgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dE1hbmFnZXIudGFiRHJvcFBsYWNlaG9sZGVyLndpZHRoKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZUhvbGRlckxlZnQgPSB0aGlzLmxheW91dE1hbmFnZXIudGFiRHJvcFBsYWNlaG9sZGVyLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyLmRyb3BUYXJnZXRJbmRpY2F0b3IuaGlnaGxpZ2h0QXJlYSh7XG4gICAgICAgICAgICB4MTogcGxhY2VIb2xkZXJMZWZ0LFxuICAgICAgICAgICAgeDI6IHBsYWNlSG9sZGVyTGVmdCArIHRoaXMubGF5b3V0TWFuYWdlci50YWJEcm9wUGxhY2Vob2xkZXIud2lkdGgoKSxcbiAgICAgICAgICAgIHkxOiB0YWJUb3AsXG4gICAgICAgICAgICB5MjogdGFiVG9wICsgdGFiRWxlbWVudC5pbm5lckhlaWdodCgpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVzZXRIZWFkZXJEcm9wWm9uZSgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyLnRhYkRyb3BQbGFjZWhvbGRlci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNYXhpbWlzZShlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01heGltaXNlZCkgdGhpcy5kb2NrKGZhbHNlKTtcbiAgICAgICAgQWJzdHJhY3RDb250ZW50SXRlbS5wcm90b3R5cGUudG9nZ2xlTWF4aW1pc2UuY2FsbCh0aGlzLCBlKTtcbiAgICB9XG5cbiAgICBfc2V0dXBIZWFkZXJQb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIHNpZGUgPVxuICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwiYm90dG9tXCJdLmluZGV4T2YodGhpcy5faGVhZGVyLnNob3cpID49IDAgJiZcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlci5zaG93O1xuICAgICAgICB0aGlzLmhlYWRlci5lbGVtZW50LnRvZ2dsZSghIXRoaXMuX2hlYWRlci5zaG93KTtcbiAgICAgICAgdGhpcy5fc2lkZSA9IHNpZGU7XG4gICAgICAgIHRoaXMuX3NpZGVkID0gW1wicmlnaHRcIiwgXCJsZWZ0XCJdLmluZGV4T2YodGhpcy5fc2lkZSkgPj0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwibG1fbGVmdCBsbV9yaWdodCBsbV9ib3R0b21cIik7XG4gICAgICAgIGlmICh0aGlzLl9zaWRlKSB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJsbV9cIiArIHRoaXMuX3NpZGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5sbV9oZWFkZXJcIikubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudENvbnRhaW5lclxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJQb3NpdGlvbiA9XG4gICAgICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl0uaW5kZXhPZih0aGlzLl9zaWRlKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYWZ0ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmVsZW1lbnRbaGVhZGVyUG9zaXRpb25dKHRoaXMuY2hpbGRFbGVtZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY2FsbERvd253YXJkcyhcInNldFNpemVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGlnaGxpZ2h0Qm9keURyb3Bab25lKHNlZ21lbnQpIHtcbiAgICAgICAgdmFyIGhpZ2hsaWdodEFyZWEgPSB0aGlzLl9jb250ZW50QXJlYURpbWVuc2lvbnNbc2VnbWVudF0uaGlnaGxpZ2h0QXJlYTtcbiAgICAgICAgdGhpcy5sYXlvdXRNYW5hZ2VyLmRyb3BUYXJnZXRJbmRpY2F0b3IuaGlnaGxpZ2h0QXJlYShoaWdobGlnaHRBcmVhKTtcbiAgICAgICAgdGhpcy5fZHJvcFNlZ21lbnQgPSBzZWdtZW50O1xuICAgIH1cbn1cbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0V2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvcmlnaW4pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XG4gICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgaW5kZXhPZlxufSBmcm9tICcuLi91dGlscy91dGlscydcblxuLyoqXG4gKiBNaW5pZmllcyBhbmQgdW5taW5pZmllcyBjb25maWdzIGJ5IHJlcGxhY2luZyBmcmVxdWVudCBrZXlzXG4gKiBhbmQgdmFsdWVzIHdpdGggb25lIGxldHRlciBzdWJzdGl0dXRlcy4gQ29uZmlnIG9wdGlvbnMgbXVzdFxuICogcmV0YWluIGFycmF5IHBvc2l0aW9uL2luZGV4LCBhZGQgbmV3IG9wdGlvbnMgYXQgdGhlIGVuZC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ01pbmlmaWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtcbiAgICAgICAgICAgICdzZXR0aW5ncycsXG4gICAgICAgICAgICAnaGFzSGVhZGVycycsXG4gICAgICAgICAgICAnY29uc3RyYWluRHJhZ1RvQ29udGFpbmVyJyxcbiAgICAgICAgICAgICdzZWxlY3Rpb25FbmFibGVkJyxcbiAgICAgICAgICAgICdkaW1lbnNpb25zJyxcbiAgICAgICAgICAgICdib3JkZXJXaWR0aCcsXG4gICAgICAgICAgICAnbWluSXRlbUhlaWdodCcsXG4gICAgICAgICAgICAnbWluSXRlbVdpZHRoJyxcbiAgICAgICAgICAgICdoZWFkZXJIZWlnaHQnLFxuICAgICAgICAgICAgJ2RyYWdQcm94eVdpZHRoJyxcbiAgICAgICAgICAgICdkcmFnUHJveHlIZWlnaHQnLFxuICAgICAgICAgICAgJ2xhYmVscycsXG4gICAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICAgICAgJ21heGltaXNlJyxcbiAgICAgICAgICAgICdtaW5pbWlzZScsXG4gICAgICAgICAgICAncG9wb3V0JyxcbiAgICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgICAgICdjb21wb25lbnROYW1lJyxcbiAgICAgICAgICAgICdjb21wb25lbnRTdGF0ZScsXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgJ2lzQ2xvc2FibGUnLFxuICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICdwb3BvdXRXaG9sZVN0YWNrJyxcbiAgICAgICAgICAgICdvcGVuUG9wb3V0cycsXG4gICAgICAgICAgICAncGFyZW50SWQnLFxuICAgICAgICAgICAgJ2FjdGl2ZUl0ZW1JbmRleCcsXG4gICAgICAgICAgICAncmVvcmRlckVuYWJsZWQnLFxuICAgICAgICAgICAgJ2JvcmRlckdyYWJXaWR0aCcsXG5cblxuXG5cbiAgICAgICAgICAgIC8vTWF4aW11bSAzNiBlbnRyaWVzLCBkbyBub3QgY3Jvc3MgdGhpcyBsaW5lIVxuICAgICAgICBdO1xuICAgICAgICBpZiAodGhpcy5fa2V5cy5sZW5ndGggPiAzNikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gbWFueSBrZXlzIGluIGNvbmZpZyBtaW5pZmllciBtYXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdyb3cnLFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICAnc3RhY2snLFxuICAgICAgICAgICAgJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICAgICAgJ21heGltaXNlJyxcbiAgICAgICAgICAgICdtaW5pbWlzZScsXG4gICAgICAgICAgICAnb3BlbiBpbiBuZXcgd2luZG93J1xuICAgICAgICBdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBHb2xkZW5MYXlvdXQgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gICAgICogcmVwbGFjZXMgaXRzIGtleXMgYW5kIHZhbHVlcyByZWN1cnNpdmVseSB3aXRoXG4gICAgICogb25lIGxldHRlciBjb3VudGVycGFydHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtPYmplY3R9IGNvbmZpZyBBIEdvbGRlbkxheW91dCBjb25maWcgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtaW5pZmllZCBjb25maWdcbiAgICAgKi9cbiAgICBtaW5pZnlDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHZhciBtaW4gPSB7fTtcbiAgICAgICAgdGhpcy5fbmV4dExldmVsKGNvbmZpZywgbWluLCAnX21pbicpO1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgY29uZmlndXJhdGlvbiBPYmplY3QgdGhhdCB3YXMgcHJldmlvdXNseSBtaW5pZmllZFxuICAgICAqIHVzaW5nIG1pbmlmeUNvbmZpZyBhbmQgcmV0dXJucyBpdHMgb3JpZ2luYWwgdmVyc2lvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge09iamVjdH0gbWluaWZpZWRDb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBvcmlnaW5hbCBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgdW5taW5pZnlDb25maWcobWluaWZpZWRDb25maWcpIHtcbiAgICAgICAgdmFyIG9yaWcgPSB7fTtcbiAgICAgICAgdGhpcy5fbmV4dExldmVsKG1pbmlmaWVkQ29uZmlnLCBvcmlnLCAnX21heCcpO1xuICAgICAgICByZXR1cm4gb3JpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmUgZnVuY3Rpb24sIGNhbGxlZCBmb3IgZXZlcnkgbGV2ZWwgb2YgdGhlIGNvbmZpZyBzdHJ1Y3R1cmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheXxPYmplY3R9IG9yaWdcbiAgICAgKiBAcGFyYW0gICB7QXJyYXl8T2JqZWN0fSBtaW5cbiAgICAgKiBAcGFyYW0gICAge1N0cmluZ30gdHJhbnNsYXRpb25GblxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX25leHRMZXZlbChmcm9tLCB0bywgdHJhbnNsYXRpb25Gbikge1xuICAgICAgICB2YXIga2V5LCBtaW5LZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gZnJvbSkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZvciBpbiByZXR1cm5zIGFycmF5IGluZGljZXMgYXMga2V5cywgc28gbGV0J3MgY2FzdCB0aGVtIHRvIG51bWJlcnNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBBcnJheSkga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW4gY2FzZSBzb21ldGhpbmcgaGFzIGV4dGVuZGVkIE9iamVjdCBwcm90b3R5cGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghZnJvbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmFuc2xhdGUgdGhlIGtleSB0byBhIG9uZSBsZXR0ZXIgc3Vic3RpdHV0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtaW5LZXkgPSB0aGlzW3RyYW5zbGF0aW9uRm5dKGtleSwgdGhpcy5fa2V5cyk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRm9yIEFycmF5cyBhbmQgT2JqZWN0cywgY3JlYXRlIGEgbmV3IEFycmF5L09iamVjdFxuICAgICAgICAgICAgICogb24gdGhlIG1pbmlmaWVkIG9iamVjdCBhbmQgcmVjdXJzZSBpbnRvIGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRvW21pbktleV0gPSBmcm9tW2tleV0gaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV4dExldmVsKGZyb21ba2V5XSwgdG9bbWluS2V5XSwgdHJhbnNsYXRpb25Gbik7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBGb3IgcHJpbWl0aXZlIHZhbHVlcyAoU3RyaW5ncywgTnVtYmVycywgQm9vbGVhbiBldGMuKVxuICAgICAgICAgICAgICAgICAqIG1pbmlmeSB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9bbWluS2V5XSA9IHRoaXNbdHJhbnNsYXRpb25Gbl0oZnJvbVtrZXldLCB0aGlzLl92YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWluaWZpZXMgdmFsdWUgYmFzZWQgb24gYSBkaWN0aW9uYXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7U3RyaW5nfEJvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtICAge0FycmF5PFN0cmluZ3xCb29sZWFuPn0gZGljdGlvbmFyeVxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIG1pbmlmaWVkIHZlcnNpb25cbiAgICAgKi9cbiAgICBfbWluKHZhbHVlLCBkaWN0aW9uYXJ5KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIHZhbHVlIGFjdHVhbGx5IGlzIGEgc2luZ2xlIGNoYXJhY3RlciwgcHJlZml4IGl0XG4gICAgICAgICAqIHdpdGggX19fIHRvIGF2b2lkIG1pc3Rha2luZyBpdCBmb3IgYSBtaW5pZmljYXRpb24gY29kZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJ19fXycgKyB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IGluZGV4T2YodmFsdWUsIGRpY3Rpb25hcnkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB2YWx1ZSBub3QgZm91bmQgaW4gdGhlIGRpY3Rpb25hcnksIHJldHVybiBpdCB1bm1vZGlmaWVkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogdmFsdWUgZm91bmQgaW4gZGljdGlvbmFyeSwgcmV0dXJuIGl0cyBiYXNlMzYgY291bnRlcnBhcnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9tYXgodmFsdWUsIGRpY3Rpb25hcnkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhbHVlIGlzIGEgc2luZ2xlIGNoYXJhY3Rlci4gQXNzdW1lIHRoYXQgaXQncyBhIHRyYW5zbGF0aW9uXG4gICAgICAgICAqIGFuZCByZXR1cm4gdGhlIG9yaWdpbmFsIHZhbHVlIGZyb20gdGhlIGRpY3Rpb25hcnlcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnlbcGFyc2VJbnQodmFsdWUsIDM2KV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogdmFsdWUgb3JpZ2luYWxseSB3YXMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCB3YXMgcHJlZml4ZWQgd2l0aCBfX19cbiAgICAgICAgICogdG8gYXZvaWQgbWlzdGFraW5nIGl0IGZvciBhIHRyYW5zbGF0aW9uLiBSZW1vdmUgdGhlIHByZWZpeFxuICAgICAgICAgKiBhbmQgcmV0dXJuIHRoZSBvcmlnaW5hbCBjaGFyYWN0ZXJcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnN1YnN0cigwLCAzKSA9PT0gJ19fXycpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVszXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogdmFsdWUgd2FzIG5vdCBtaW5pZmllZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi91dGlscy9FdmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICAgIGZuQmluZCwgXG4gICAgZ2V0VG91Y2hFdmVudFxufSBmcm9tICcuLi91dGlscy91dGlscydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0xpc3RlbmVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlRWxlbWVudCwgbkJ1dHRvbkNvZGUpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cblxuICAgICAgICB0aGlzLl9lRWxlbWVudCA9ICQoZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9vRG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgICAgICAgdGhpcy5fZUJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB0aGlzLl9uQnV0dG9uQ29kZSA9IG5CdXR0b25Db2RlIHx8IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxheSBhZnRlciB3aGljaCB0byBzdGFydCB0aGUgZHJhZyBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX25EZWxheSA9IDIwMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3RhbmNlIHRoZSBtb3VzZSBuZWVkcyB0byBiZSBtb3ZlZCB0byBxdWFsaWZ5IGFzIGEgZHJhZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbkRpc3RhbmNlID0gMTA7IC8vVE9ETyAtIHdvcmtzIGJldHRlciB3aXRoIGRlbGF5IG9ubHlcblxuICAgICAgICB0aGlzLl9uWCA9IDA7XG4gICAgICAgIHRoaXMuX25ZID0gMDtcblxuICAgICAgICB0aGlzLl9uT3JpZ2luYWxYID0gMDtcbiAgICAgICAgdGhpcy5fbk9yaWdpbmFsWSA9IDA7XG5cbiAgICAgICAgdGhpcy5fYkRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fZk1vdmUgPSBmbkJpbmQodGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2ZVcCA9IGZuQmluZCh0aGlzLm9uTW91c2VVcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2ZEb3duID0gZm5CaW5kKHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuXG5cbiAgICAgICAgdGhpcy5fZUVsZW1lbnQub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgdGhpcy5fZkRvd24pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2VFbGVtZW50LnVuYmluZCgnbW91c2Vkb3duIHRvdWNoc3RhcnQnLCB0aGlzLl9mRG93bik7XG4gICAgICAgIHRoaXMuX29Eb2N1bWVudC51bmJpbmQoJ21vdXNldXAgdG91Y2hlbmQnLCB0aGlzLl9mVXApO1xuICAgICAgICB0aGlzLl9lRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX29Eb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VCb2R5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihvRXZlbnQpIHtcbiAgICAgICAgb0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKG9FdmVudC5idXR0b24gPT0gMCB8fCBvRXZlbnQudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgIHZhciBjb29yZGluYXRlcyA9IHRoaXMuX2dldENvb3JkaW5hdGVzKG9FdmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuX25PcmlnaW5hbFggPSBjb29yZGluYXRlcy54O1xuICAgICAgICAgICAgdGhpcy5fbk9yaWdpbmFsWSA9IGNvb3JkaW5hdGVzLnk7XG5cbiAgICAgICAgICAgIHRoaXMuX29Eb2N1bWVudC5vbignbW91c2Vtb3ZlIHRvdWNobW92ZScsIHRoaXMuX2ZNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMuX29Eb2N1bWVudC5vbmUoJ21vdXNldXAgdG91Y2hlbmQnLCB0aGlzLl9mVXApO1xuXG4gICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmbkJpbmQodGhpcy5fc3RhcnREcmFnLCB0aGlzKSwgdGhpcy5fbkRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKG9FdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fdGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBvRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGNvb3JkaW5hdGVzID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZXMob0V2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5fblggPSBjb29yZGluYXRlcy54IC0gdGhpcy5fbk9yaWdpbmFsWDtcbiAgICAgICAgICAgIHRoaXMuX25ZID0gY29vcmRpbmF0ZXMueSAtIHRoaXMuX25PcmlnaW5hbFk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9iRHJhZ2dpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyh0aGlzLl9uWCkgPiB0aGlzLl9uRGlzdGFuY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fblkpID4gdGhpcy5fbkRpc3RhbmNlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnREcmFnKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fYkRyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkcmFnJywgdGhpcy5fblgsIHRoaXMuX25ZLCBvRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKG9FdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fdGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9lQm9keS5yZW1vdmVDbGFzcygnbG1fZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuX2VFbGVtZW50LnJlbW92ZUNsYXNzKCdsbV9kcmFnZ2luZycpO1xuICAgICAgICAgICAgdGhpcy5fb0RvY3VtZW50LmZpbmQoJ2lmcmFtZScpLmNzcygncG9pbnRlci1ldmVudHMnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9vRG9jdW1lbnQudW5iaW5kKCdtb3VzZW1vdmUgdG91Y2htb3ZlJywgdGhpcy5fZk1vdmUpO1xuICAgICAgICAgICAgdGhpcy5fb0RvY3VtZW50LnVuYmluZCgnbW91c2V1cCB0b3VjaGVuZCcsIHRoaXMuX2ZVcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9iRHJhZ2dpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWdTdG9wJywgb0V2ZW50LCB0aGlzLl9uT3JpZ2luYWxYICsgdGhpcy5fblgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N0YXJ0RHJhZygpIHtcbiAgICAgICAgdGhpcy5fYkRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZUJvZHkuYWRkQ2xhc3MoJ2xtX2RyYWdnaW5nJyk7XG4gICAgICAgIHRoaXMuX2VFbGVtZW50LmFkZENsYXNzKCdsbV9kcmFnZ2luZycpO1xuICAgICAgICB0aGlzLl9vRG9jdW1lbnQuZmluZCgnaWZyYW1lJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG4gICAgICAgIHRoaXMuZW1pdCgnZHJhZ1N0YXJ0JywgdGhpcy5fbk9yaWdpbmFsWCwgdGhpcy5fbk9yaWdpbmFsWSk7XG4gICAgfVxuXG4gICAgX2dldENvb3JkaW5hdGVzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gZ2V0VG91Y2hFdmVudChldmVudClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgeTogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQncyB0cmlnZ2VyZWQgZm9yIGV2ZXJ5IG90aGVyIGV2ZW50XG4gKlxuICogdXNhZ2VcbiAqXG4gKiBteUVtaXR0ZXIub24oIEV2ZW50RW1pdHRlci5BTExfRVZFTlQsIGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3NBcnJheSApe1xuICogIC8vZG8gc3R1ZmZcbiAqIH0pO1xuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBTExfRVZFTlQgPSAnX19hbGwnXG5cblxuLyoqXG4gKiBBIGdlbmVyaWMgYW5kIHZlcnkgZmFzdCBFdmVudEVtaXR0ZXJcbiAqIGltcGxlbWVudGF0aW9uLiBPbiB0b3Agb2YgZW1pdHRpbmcgdGhlXG4gKiBhY3R1YWwgZXZlbnQgaXQgZW1pdHMgYW5cbiAqXG4gKiBFdmVudEVtaXR0ZXIuQUxMX0VWRU5UXG4gKlxuICogZXZlbnQgZm9yIGV2ZXJ5IGV2ZW50IHRyaWdnZXJlZC4gVGhpcyBhbGxvd3NcbiAqIHRvIGhvb2sgaW50byBpdCBhbmQgcHJveHkgZXZlbnRzIGZvcndhcmRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbVN1YnNjcmlwdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5fbVN1YnNjcmlwdGlvbnNbQUxMX0VWRU5UXSA9IFtdO1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3IgZXZlbnRzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9IHNFdmVudCAgICBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gICAgICAgICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gZkNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBleGVjdXRlIHdoZW4gdGhlIGV2ZW50IG9jY3Vyc1xuICAgICAgICAgKiBAcGFyYW0gICB7W09iamVjdF19IG9Db250ZXh0IFRoZSB2YWx1ZSBvZiB0aGUgdGhpcyBwb2ludGVyIHdpdGhpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uID0gZnVuY3Rpb24oc0V2ZW50LCBmQ2FsbGJhY2ssIG9Db250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZkNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gbGlzdGVuIHRvIGV2ZW50ICcgKyBzRXZlbnQgKyAnIHdpdGggbm9uLWZ1bmN0aW9uIGNhbGxiYWNrICcgKyBmQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX21TdWJzY3JpcHRpb25zW3NFdmVudF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tU3Vic2NyaXB0aW9uc1tzRXZlbnRdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21TdWJzY3JpcHRpb25zW3NFdmVudF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgZm46IGZDYWxsYmFjayxcbiAgICAgICAgICAgICAgICBjdHg6IG9Db250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW1pdCBhbiBldmVudCBhbmQgbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICB7U3RyaW5nfSBzRXZlbnQgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSAgICB7TWl4ZWR9ICB2YXJpb3VzIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbWl0ID0gZnVuY3Rpb24oc0V2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaSwgY3R4LCBhcmdzO1xuXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgICAgICAgdmFyIHN1YnMgPSB0aGlzLl9tU3Vic2NyaXB0aW9uc1tzRXZlbnRdO1xuXG4gICAgICAgICAgICBpZiAoc3Vicykge1xuICAgICAgICAgICAgICAgIHN1YnMgPSBzdWJzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gc3Vic1tpXS5jdHggfHwge307XG4gICAgICAgICAgICAgICAgICAgIHN1YnNbaV0uZm4uYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyZ3MudW5zaGlmdChzRXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgYWxsRXZlbnRTdWJzID0gdGhpcy5fbVN1YnNjcmlwdGlvbnNbQUxMX0VWRU5UXS5zbGljZSgpXG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxFdmVudFN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdHggPSBhbGxFdmVudFN1YnNbaV0uY3R4IHx8IHt9O1xuICAgICAgICAgICAgICAgIGFsbEV2ZW50U3Vic1tpXS5mbi5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LCBvciBhbGwgbGlzdGVuZXJzIGlmIG5vIGNhbGxiYWNrIGFuZCBjb250ZXh0IGlzIHByb3ZpZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICB7U3RyaW5nfSBzRXZlbnQgICAgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gZkNhbGxiYWNrIFRoZSBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgY2FsbGJhY2sgbWV0aG9kIChvcHRpb25hbClcbiAgICAgICAgICogQHBhcmFtICAge09iamVjdH0gb0NvbnRleHQgIFRoZSBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgY29udGV4dCAob3B0aW9uYWwpXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmQgPSBmdW5jdGlvbihzRXZlbnQsIGZDYWxsYmFjaywgb0NvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbVN1YnNjcmlwdGlvbnNbc0V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc3Vic2NyaWJ0aW9ucyB0byB1bnN1YnNjcmliZSBmb3IgZXZlbnQgJyArIHNFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpLCBiVW5ib3VuZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fbVN1YnNjcmlwdGlvbnNbc0V2ZW50XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKCFmQ2FsbGJhY2sgfHwgdGhpcy5fbVN1YnNjcmlwdGlvbnNbc0V2ZW50XVtpXS5mbiA9PT0gZkNhbGxiYWNrKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIW9Db250ZXh0IHx8IG9Db250ZXh0ID09PSB0aGlzLl9tU3Vic2NyaXB0aW9uc1tzRXZlbnRdW2ldLmN0eClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbVN1YnNjcmlwdGlvbnNbc0V2ZW50XS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJVbmJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiVW5ib3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgdG8gdW5iaW5kIGZvciAnICsgc0V2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxpYXMgZm9yIHVuYmluZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vZmYgPSB0aGlzLnVuYmluZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxpYXMgZm9yIGVtaXRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuZW1pdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL3V0aWxzL0V2ZW50RW1pdHRlcidcbmltcG9ydCB7IFxuICBBTExfRVZFTlRcbn0gZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgICBmbkJpbmRcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQW4gRXZlbnRFbWl0dGVyIHNpbmdsZXRvbiB0aGF0IHByb3BhZ2F0ZXMgZXZlbnRzXG4gKiBhY3Jvc3MgbXVsdGlwbGUgd2luZG93cy4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgdHJpY2tpZXIgc2luY2VcbiAqIHdpbmRvd3MgYXJlIGFsbG93ZWQgdG8gb3BlbiBjaGlsZFdpbmRvd3MgaW4gdGhlaXIgb3duIHJpZ2h0XG4gKlxuICogVGhpcyBtZWFucyB0aGF0IHdlIGRlYWwgd2l0aCBhIHRyZWUgb2Ygd2luZG93cy4gSGVuY2UgdGhlIHJ1bGVzIGZvciBldmVudCBwcm9wYWdhdGlvbiBhcmU6XG4gKlxuICogLSBQcm9wYWdhdGUgZXZlbnRzIGZyb20gdGhpcyBsYXlvdXQgdG8gYm90aCBwYXJlbnRzIGFuZCBjaGlsZHJlblxuICogLSBQcm9wYWdhdGUgZXZlbnRzIGZyb20gcGFyZW50IHRvIHRoaXMgYW5kIGNoaWxkcmVuXG4gKiAtIFByb3BhZ2F0ZSBldmVudHMgZnJvbSBjaGlsZHJlbiB0byB0aGUgb3RoZXIgY2hpbGRyZW4gKGJ1dCBub3QgdGhlIGVtaXR0aW5nIG9uZSkgYW5kIHRoZSBwYXJlbnRcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge2xtLkxheW91dE1hbmFnZXJ9IGxheW91dE1hbmFnZXJcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SHViIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihsYXlvdXRNYW5hZ2VyKSB7XG4gICAgICAgIFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2xheW91dE1hbmFnZXIgPSBsYXlvdXRNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9kb250UHJvcGFnYXRlVG9QYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jaGlsZEV2ZW50U291cmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbihBTExfRVZFTlQsIGZuQmluZCh0aGlzLl9vbkV2ZW50RnJvbVRoaXMsIHRoaXMpKTtcbiAgICAgICAgdGhpcy5fYm91bmRPbkV2ZW50RnJvbUNoaWxkID0gZm5CaW5kKHRoaXMuX29uRXZlbnRGcm9tQ2hpbGQsIHRoaXMpO1xuICAgICAgICAkKHdpbmRvdykub24oJ2dsX2NoaWxkX2V2ZW50JywgdGhpcy5fYm91bmRPbkV2ZW50RnJvbUNoaWxkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gZXZlcnkgZXZlbnQgZW1pdHRlZCBvbiB0aGlzIGV2ZW50SHViLCByZWdhcmRsZXMgb2Ygb3JpZ2luLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWl4ZWR9XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25FdmVudEZyb21UaGlzKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xheW91dE1hbmFnZXIuaXNTdWJXaW5kb3cgJiYgYXJnc1swXSAhPT0gdGhpcy5fZG9udFByb3BhZ2F0ZVRvUGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdhdGVUb1BhcmVudChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9wYWdhdGVUb0NoaWxkcmVuKGFyZ3MpO1xuXG4gICAgICAgIC8vUmVzZXRcbiAgICAgICAgdGhpcy5fZG9udFByb3BhZ2F0ZVRvUGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2hpbGRFdmVudFNvdXJjZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5fSBhcmdzIEV2ZW50IG5hbWUgKyBhcmd1bWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF8kb25FdmVudEZyb21QYXJlbnQoYXJncykge1xuICAgICAgICB0aGlzLl9kb250UHJvcGFnYXRlVG9QYXJlbnQgPSBhcmdzWzBdO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIGNoaWxkIGV2ZW50cyByYWlzZWQgb24gdGhlIHdpbmRvd1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUV2ZW50fSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfb25FdmVudEZyb21DaGlsZChldmVudCkge1xuICAgICAgICB0aGlzLl9jaGlsZEV2ZW50U291cmNlID0gZXZlbnQub3JpZ2luYWxFdmVudC5fX2dsO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgZXZlbnQub3JpZ2luYWxFdmVudC5fX2dsQXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvcGFnYXRlcyB0aGUgZXZlbnQgdG8gdGhlIHBhcmVudCBieSBlbWl0dGluZ1xuICAgICAqIGl0IG9uIHRoZSBwYXJlbnQncyBET00gd2luZG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXl9IGFyZ3MgRXZlbnQgbmFtZSArIGFyZ3VtZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBfcHJvcGFnYXRlVG9QYXJlbnQoYXJncykge1xuICAgICAgICB2YXIgZXZlbnQsXG4gICAgICAgICAgICBldmVudE5hbWUgPSAnZ2xfY2hpbGRfZXZlbnQnO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSB3aW5kb3cub3BlbmVyLmRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgICAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50ID0gd2luZG93Lm9wZW5lci5kb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgICAgICAgICAgZXZlbnQuZXZlbnRUeXBlID0gZXZlbnROYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBldmVudC5fX2dsQXJncyA9IGFyZ3M7XG4gICAgICAgIGV2ZW50Ll9fZ2wgPSB0aGlzLl9sYXlvdXRNYW5hZ2VyO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW5lci5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZXIuZmlyZUV2ZW50KCdvbicgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3BhZ2F0ZSBldmVudHMgdG8gY2hpbGRyZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheX0gYXJncyBFdmVudCBuYW1lICsgYXJndW1lbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9wcm9wYWdhdGVUb0NoaWxkcmVuKGFyZ3MpIHtcbiAgICAgICAgdmFyIGNoaWxkR2wsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2xheW91dE1hbmFnZXIub3BlblBvcG91dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkR2wgPSB0aGlzLl9sYXlvdXRNYW5hZ2VyLm9wZW5Qb3BvdXRzW2ldLmdldEdsSW5zdGFuY2UoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkR2wgJiYgY2hpbGRHbCAhPT0gdGhpcy5fY2hpbGRFdmVudFNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkR2wuZXZlbnRIdWIuXyRvbkV2ZW50RnJvbVBhcmVudChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBFdmVudEh1YlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignZ2xfY2hpbGRfZXZlbnQnLCB0aGlzLl9ib3VuZE9uRXZlbnRGcm9tQ2hpbGQpO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbi8qKlxuICogQSBzcGVjaWFsaXNlZCBHb2xkZW5MYXlvdXQgY29tcG9uZW50IHRoYXQgYmluZHMgR29sZGVuTGF5b3V0IGNvbnRhaW5lclxuICogbGlmZWN5Y2xlIGV2ZW50cyB0byByZWFjdCBjb21wb25lbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtJdGVtQ29udGFpbmVyfSBjb250YWluZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBzdGF0ZSBpcyBub3QgcmVxdWlyZWQgZm9yIHJlYWN0IGNvbXBvbmVudHNcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9yZWFjdENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX29yaWdpbmFsQ29tcG9uZW50V2lsbFVwZGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5faW5pdGlhbFN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX3JlYWN0Q2xhc3MgPSB0aGlzLl9nZXRSZWFjdENsYXNzKCk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5vbignb3BlbicsIHRoaXMuX3JlbmRlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5vbignZGVzdHJveScsIHRoaXMuX2Rlc3Ryb3ksIHRoaXMpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSByZWFjdCBjbGFzcyBhbmQgY29tcG9uZW50IGFuZCBoeWRyYXRlcyBpdCB3aXRoXG4gICAgICogdGhlIGluaXRpYWwgc3RhdGUgLSBpZiBvbmUgaXMgcHJlc2VudFxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgcmVhY3QncyBnZXRJbml0aWFsU3RhdGUgd2lsbCBiZSB1c2VkXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcih0aGlzLl9nZXRSZWFjdENvbXBvbmVudCgpLCB0aGlzLl9jb250YWluZXIuZ2V0RWxlbWVudCgpWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCBieSByZWFjdCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY3JlYXRlZC4gIEFsc28gZmlyZWQgdXBvbiBkZXN0cnVjdGlvbiAod2hlcmUgY29tcG9uZW50IGlzIG51bGwpLlxuICAgICAqIDxwPlxuICAgICAqIE5vdGU6IFRoaXMgY2FsbGJhY2sgaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSByZXR1cm4gZnJvbSBgUmVhY3RET00ucmVuZGVyYCBiZWNhdXNlXG4gICAgICpcdCAgIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTAzMDkuXG4gICAgICogPC9wPlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAYXJnIHtSZWFjdC5SZWZ9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IGluc3RhbmNlIGNyZWF0ZWQgYnkgdGhlIGBSZWFjdERPTS5yZW5kZXJgIGNhbGwgaW4gdGhlIGBfcmVuZGVyYCBtZXRob2QuXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2dvdFJlYWN0Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWFjdENvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29tcG9uZW50V2lsbFVwZGF0ZSA9IHRoaXMuX3JlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3JlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSB0aGlzLl9vblVwZGF0ZS5iaW5kKCB0aGlzICk7XG4gICAgICAgICAgICBpZiggdGhpcy5fY29udGFpbmVyLmdldFN0YXRlKCkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVhY3RDb21wb25lbnQuc2V0U3RhdGUoIHRoaXMuX2NvbnRhaW5lci5nZXRTdGF0ZSgpICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgY29tcG9uZW50IGZyb20gdGhlIERPTSBhbmQgdGh1cyBpbnZva2VzIFJlYWN0J3MgdW5tb3VudCBsaWZlY3ljbGVcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fY29udGFpbmVyLmdldEVsZW1lbnQoKVswXSk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5vZmYoJ29wZW4nLCB0aGlzLl9yZW5kZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9jb250YWluZXIub2ZmKCdkZXN0cm95JywgdGhpcy5fZGVzdHJveSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG9va3MgaW50byBSZWFjdCdzIHN0YXRlIG1hbmFnZW1lbnQgYW5kIGFwcGxpZXMgdGhlIGNvbXBvbmVudHN0YXRlXG4gICAgICogdG8gR29sZGVuTGF5b3V0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIF9vblVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgdGhpcy5fb3JpZ2luYWxDb21wb25lbnRXaWxsVXBkYXRlLmNhbGwodGhpcy5fcmVhY3RDb21wb25lbnQsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHJlYWN0IGNsYXNzIGZyb20gR29sZGVuTGF5b3V0J3MgcmVnaXN0cnlcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1JlYWN0LkNsYXNzfVxuICAgICAqL1xuICAgIF9nZXRSZWFjdENsYXNzKCkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IHRoaXMuX2NvbnRhaW5lci5fY29uZmlnLmNvbXBvbmVudDtcbiAgICAgICAgdmFyIHJlYWN0Q2xhc3M7XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlYWN0IGNvbXBvbmVudCBuYW1lLiB0eXBlOiByZWFjdC1jb21wb25lbnQgbmVlZHMgYSBmaWVsZCBgY29tcG9uZW50YCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVhY3RDbGFzcyA9IHRoaXMuX2NvbnRhaW5lci5sYXlvdXRNYW5hZ2VyLmdldENvbXBvbmVudCh0aGlzLl9jb250YWluZXIuX2NvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFyZWFjdENsYXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IGNvbXBvbmVudCBcIicgKyBjb21wb25lbnROYW1lICsgJ1wiIG5vdCBmb3VuZC4gJyArXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSByZWdpc3RlciBhbGwgY29tcG9uZW50cyB3aXRoIEdvbGRlbkxheW91dCB1c2luZyBgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KWAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWFjdENsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbmQgZXh0ZW5kcyB0aGUgcHJvcGVydGllcyBhcnJheSBhbmQgcmV0dXJucyB0aGUgUmVhY3QgZWxlbWVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7UmVhY3QuRWxlbWVudH1cbiAgICAgKi9cbiAgICBfZ2V0UmVhY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgICBnbEV2ZW50SHViOiB0aGlzLl9jb250YWluZXIubGF5b3V0TWFuYWdlci5ldmVudEh1YixcbiAgICAgICAgICAgIGdsQ29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgICAgICByZWY6IHRoaXMuX2dvdFJlYWN0Q29tcG9uZW50LmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcm9wcyA9ICQuZXh0ZW5kKGRlZmF1bHRQcm9wcywgdGhpcy5fY29udGFpbmVyLl9jb25maWcucHJvcHMpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLl9yZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gRigpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaEV2ZW50KGV2ZW50KXtcbiAgICBpZigkLnplcHRvKXtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgPyBldmVudC50YXJnZXRUb3VjaGVzWzBdIDogZXZlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZXZlbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gY3JlYXRlT2JqZWN0KHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29udHJ1Y3RvciA9IHN1YkNsYXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KHByb3RvdHlwZSkge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEYucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gbmV3IEYoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RLZXlzKG9iamVjdCkge1xuICAgIHZhciBrZXlzLCBrZXk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoVmFsdWUoa2V5KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBsb2NhdGlvbi5oYXNoLm1hdGNoKG5ldyBSZWdFeHAoa2V5ICsgJz0oW14mXSopJykpO1xuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZ1BhcmFtKHBhcmFtKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIHJldHVybiBnZXRIYXNoVmFsdWUocGFyYW0pO1xuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGtleVZhbHVlUGFpcnMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5zcGxpdCgnJicpLFxuICAgICAgICBwYXJhbXMgPSB7fSxcbiAgICAgICAgcGFpcixcbiAgICAgICAgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlWYWx1ZVBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhaXIgPSBrZXlWYWx1ZVBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtc1twYXJhbV0gfHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogVGhpcyBpcyBiYXNlZCBvbiBQYXVsIElyaXNoJ3Mgc2hpbSwgYnV0IGxvb2tzIHF1aXRlIG9kZCBpbiBjb21wYXJpc29uLiBXaHk/XG4gKiBCZWNhdXNlXG4gKiBhKSBpdCBzaG91bGRuJ3QgYWZmZWN0IHRoZSBnbG9iYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uXG4gKiBiKSBpdCBzaG91bGRuJ3QgcGFzcyBvbiB0aGUgdGltZSB0aGF0IGhhcyBwYXNzZWRcbiAqXG4gKiBAcGFyYW0gICB7RnVuY3Rpb259IGZuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmltRnJhbWUoZm4pIHtcbiAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgfSkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICBpZiAoIShoYXlzdGFjayBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hheXN0YWNrIGlzIG5vdCBhbiBBcnJheScpO1xuICAgIH1cblxuICAgIGlmIChoYXlzdGFjay5pbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXlzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB2YXIgaXNGdW5jdGlvbiA9ICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0JykgPyBcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH0gOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZuQmluZChmbiwgY29udGV4dCwgYm91bmRBcmdzKSB7XG5cbiAgICBpZiAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoZm4sIFtjb250ZXh0XS5jb25jYXQoYm91bmRBcmdzIHx8IFtdKSk7XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gSm9pbiB0aGUgYWxyZWFkeSBhcHBsaWVkIGFyZ3VtZW50cyB0byB0aGUgbm93IGNhbGxlZCBvbmVzIChhZnRlciBjb252ZXJ0aW5nIHRvIGFuIGFycmF5IGFnYWluKS5cbiAgICAgICAgdmFyIGFyZ3MgPSAoYm91bmRBcmdzIHx8IFtdKS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG5cbiAgICAgICAgLy8gSWYgbm90IGJlaW5nIGNhbGxlZCBhcyBhIGNvbnN0cnVjdG9yXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBmdW5jdGlvbiBjYWxsZWQgYm91bmQgdG8gdGFyZ2V0IGFuZCBwYXJ0aWFsbHkgYXBwbGllZC5cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBiZWluZyBjYWxsZWQgYXMgYSBjb25zdHJ1Y3RvciwgYXBwbHkgdGhlIGZ1bmN0aW9uIGJvdW5kIHRvIHNlbGYuXG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgLy8gQXR0YWNoIHRoZSBwcm90b3R5cGUgb2YgdGhlIGZ1bmN0aW9uIHRvIG91ciBuZXdseSBjcmVhdGVkIGZ1bmN0aW9uLlxuICAgIGJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgICByZXR1cm4gYm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgICB2YXIgaW5kZXggPSBpbmRleE9mKGl0ZW0sIGFycmF5KTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IHJlbW92ZSBpdGVtIGZyb20gYXJyYXkuIEl0ZW0gaXMgbm90IGluIHRoZSBhcnJheScpO1xuICAgIH1cblxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gICAgaWYgKHR5cGVvZiBEYXRlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMDAwKVxuICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgIC5yZXBsYWNlKCcuJywgJycpO1xufVxuXG4vKipcbiAqIEEgYmFzaWMgWFNTIGZpbHRlci4gSXQgaXMgdWx0aW1hdGVseSB1cCB0byB0aGVcbiAqIGltcGxlbWVudGluZyBkZXZlbG9wZXIgdG8gbWFrZSBzdXJlIHRoZWlyIHBhcnRpY3VsYXJcbiAqIGFwcGxpY2F0aW9ucyBhbmQgdXNlY2FzZXMgYXJlIHNhdmUgZnJvbSBjcm9zcyBzaXRlIHNjcmlwdGluZyBhdHRhY2tzXG4gKlxuICogQHBhcmFtICAge1N0cmluZ30gaW5wdXRcbiAqIEBwYXJhbSAgICB7Qm9vbGVhbn0ga2VlcFRhZ3NcbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmaWx0ZXJlZCBpbnB1dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyWHNzKGlucHV0LCBrZWVwVGFncykge1xuXG4gICAgdmFyIG91dHB1dCA9IGlucHV0XG4gICAgICAgIC5yZXBsYWNlKC9qYXZhc2NyaXB0L2dpLCAnaiYjOTc7dmFzY3JpcHQnKVxuICAgICAgICAucmVwbGFjZSgvZXhwcmVzc2lvbi9naSwgJ2V4cHImIzEwMTtzc2lvbicpXG4gICAgICAgIC5yZXBsYWNlKC9vbmxvYWQvZ2ksICdvbmxvJiM5NztkJylcbiAgICAgICAgLnJlcGxhY2UoL3NjcmlwdC9naSwgJyYjMTE1O2NyaXB0JylcbiAgICAgICAgLnJlcGxhY2UoL29uZXJyb3IvZ2ksICdvbiYjMTAxO3Jyb3InKTtcblxuICAgIGlmIChrZWVwVGFncyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgaHRtbCB0YWdzIGZyb20gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBpbnB1dFxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGlucHV0IHdpdGhvdXQgdGFnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUYWdzKGlucHV0KSB7XG4gICAgcmV0dXJuICQudHJpbShpbnB1dC5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9