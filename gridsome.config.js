// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const precss = require('precss');
const cssnano = require('cssnano');
const loop = require('postcss-for');
const varPolyfill = require('postcss-custom-properties');

const cssPlugins = [
  precss(),
  loop(),
  tailwind(),
  varPolyfill(),
  cssnano(),
];

if (process.env.NODE_ENV === 'prodcution') {
  cssPlugins.push(purgecss(require('./purgecss.config')));
}

module.exports = {
  siteName: 'Namchee',
  siteDescription: 'Welcome to Namchee\'s site!',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: cssPlugins,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
