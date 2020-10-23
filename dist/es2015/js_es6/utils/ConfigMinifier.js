function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { indexOf } from '../utils/utils';
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

      var index = indexOf(value, dictionary);
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

export { ConfigMinifier as default };