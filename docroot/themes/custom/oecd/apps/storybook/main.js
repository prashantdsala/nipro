const spaceCore = require('@space-designsystem/core');
const postCss = require('postcss');
const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    'storybook-addon-themes',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postCss,
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );
    
    const final = spaceCore.getAppPack(spaceCore.resolveConfig('storybook'), [config]);
    return final;
  },
};
