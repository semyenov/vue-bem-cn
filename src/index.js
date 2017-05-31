import bemCn from 'bem-cn-lite';

export default {
  install(Vue, config) {
    const cfg = Object.assign({
      el: '__',
      mod: '--',
      modValue: '-',
    }, config);

    bemCn.setup(cfg);

    Vue.mixin({
      created() {
        const block = this.$options.block || this.$options.name.split(/(?=[A-Z])/);

        if (typeof block === 'string') {
          /* eslint no-nested-ternary: 0 */
          const c = { type: block.pop().toLowerCase(), name: block.join('-').toLowerCase() };
          const name = c.type === 'container' ? `b-${c.name}` : c.type === 'component' ? `c-${c.name}` : c.type === 'page' ? `p-${c.name}` : `u-${c.name}`;

          if (typeof name === 'string') {
            const generator = bemCn(name);
            this.bem = (...args) => generator(...args);
          }
        }
      },
    });
  },
};
