/**
 * Use AirBnB ES6 linting standards, as well as a Jest plugin for tests
 *
 * Rule reference: http://eslint.org/docs/rules
 * Individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
 */
const spaceCore = require('@space-designsystem/core');
const spaceConfig = require('./space.config');

const appConfig = spaceCore.resolveConfig(
  'storybook',
  'development',
  {},
  spaceConfig,
  __dirname
);
const { namespaces } = appConfig;
const aliasMap = [];
Object.keys(namespaces).forEach((key) => {
  aliasMap.push([key, namespaces[key]]);
});

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  root: true,
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    BUILD_TARGET: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/jsx-uses-react': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': [0], // turned off for now while we are console.logging everywhere.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': [0],
    "no-param-reassign": [2, { "props": false }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: aliasMap,
      },
    },
  },
};
