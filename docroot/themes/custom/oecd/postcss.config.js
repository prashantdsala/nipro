const tailwind = require('tailwindcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const postrtl = require('postcss-rtlcss');

module.exports = {
  plugins: [nested, tailwind, autoprefixer, postrtl],
};
