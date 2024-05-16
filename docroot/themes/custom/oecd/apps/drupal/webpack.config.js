/**
 * Space webpack config.
 */
const spaceCore = require('@space-designsystem/core');

const appConfig = spaceCore.resolveConfig('drupal', process.env.NODE_ENV);
const finalConfig = spaceCore.getAppPack(appConfig);
module.exports = finalConfig;
