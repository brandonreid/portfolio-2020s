'use strict';

const lost = require('lost');
// const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

module.exports = [
  lost(),
  // pxtorem({
  //   rootValue: 16,
  //   unitPrecision: 5,
  //   propList: [
  //     'font',
  //     'font-size',
  //     'height',
  //     'letter-spacing',
  //     'margin',
  //     'margin-top',
  //     'margin-left',
  //     'margin-bottom',
  //     'margin-right',
  //     'padding',
  //     'padding-top',
  //     'padding-left',
  //     'padding-bottom',
  //     'padding-right',
  //     'border-radius',
  //   ],
  //   selectorBlackList: [
  //     'html',
  //     'body',
  //     'img'
  //   ],
  //   replace: true,
  //   mediaQuery: false,
  //   minPixelValue: 0
  // }),
  autoprefixer()
];
