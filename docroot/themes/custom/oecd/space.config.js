const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@space-designsystem/preset-tailwind2', '@space-designsystem/preset-postcss8'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
