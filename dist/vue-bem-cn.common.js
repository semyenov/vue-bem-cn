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
        var nameArray = this.$options.name.split(/(?=[A-Z])/);
        var c = {
          type: nameArray.pop().toLowerCase(),
          name: nameArray.join('-').toLowerCase()
        };

        var block = '';

        switch (c.type) {
          case 'container':
            block = 'b-' + c.name;break;
          case 'component':
            block = 'c-' + c.name;break;
          case 'page':
            block = 'p-' + c.name;break;
          default:
            block = 'u-' + c.name;
        }

        if (typeof block !== 'string') return;

        var generator = (0, _bemCnLite2.default)(block);
        this.bem = function () {
          return generator.apply(undefined, arguments);
        };
      }
    });
  }
};

//# sourceMappingURL=vue-bem-cn.common.js.map