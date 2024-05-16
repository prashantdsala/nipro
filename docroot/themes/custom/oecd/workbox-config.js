module.exports = {
  globDirectory: '../../../',
  globPatterns: [
    'themes/custom/oecd/dist/app-drupal/*.css',
    'themes/custom/oecd/dist/app-drupal/behaviors/*.js',
    'themes/custom/oecd/dist/app-drupal/font/*.{woff,woff2,eot,ttf,svg}',
    'themes/custom/oecd/dist/app-drupal/images/*.{png,svg,jpg,jpeg,webp}',
    'themes/custom/oecd/images/*.{png,svg,jpg,jpeg,webp}',
  ],
  globIgnores: [
    'core/**/*',
    'libraries/**/*',
    'modules/**/*',
    'private/**/*',
    'profiles/**/*',
    'simplesaml/**/*',
    'sites/**/*',
    'themes/custom/oecd/node_modules/**/*',
  ],
  swSrc: '../../../sw.js',
  swDest: '../../../sw.js',
  maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Cache files upto 4 MB.
};
