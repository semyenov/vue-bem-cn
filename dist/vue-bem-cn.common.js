'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _bemCnLite = require('bem-cn-lite');

var _bemCnLite2 = _interopRequireDefault(_bemCnLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue, config) {
    var cfg = (0, _assign2.default)({
      el: '__',
      mod: '--',
      modValue: '-'
    }, config);

    _bemCnLite2.default.setup(cfg);

    Vue.mixin({
      created: function created() {
        var block = this.$options.block || this.$options.name.split(/(?=[A-Z])/);

        if (typeof block === 'string') {
          /* eslint no-nested-ternary: 0 */
          var c = { type: block.pop().toLowerCase(), name: block.join('-').toLowerCase() };
          var name = c.type === 'container' ? 'b-' + c.name : c.type === 'component' ? 'c-' + c.name : c.type === 'page' ? 'p-' + c.name : 'u-' + c.name;

          if (typeof name === 'string') {
            var generator = (0, _bemCnLite2.default)(name);
            this.bem = function () {
              return generator.apply(undefined, arguments);
            };
          }
        }
      }
    });
  }
};

//# sourceMappingURL=vue-bem-cn.common.js.map