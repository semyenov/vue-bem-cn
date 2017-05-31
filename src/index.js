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
        const nameArray = this.$options.name.split(/(?=[A-Z])/);
        const c = {
          type: nameArray.pop().toLowerCase(),
          name: nameArray.join('-').toLowerCase(),
        };

        let block = '';

        switch (c.type) {
          case 'container': block = `b-${c.name}`; break;
          case 'component': block = `c-${c.name}`; break;
          case 'page': block = `p-${c.name}`; break;
          default: block = `u-${c.name}`;
        }

        if (typeof block !== 'string') return;

        const generator = bemCn(block);
        this.bem = (...args) => generator(...args);
      },
    });
  },
};
