const merge = require('webpack-merge');
const webpackProd = require('./webpack.prod.js');
const WebpackReport = require('webpack-report');

module.exports = merge(webpackProd, {
  plugins: [new WebpackReport()],
});
