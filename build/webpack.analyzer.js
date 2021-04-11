const merge = require("webpack-merge");
const webpackProd = require("./webpack.prod.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(webpackProd, {
  plugins: [new BundleAnalyzerPlugin()],
});
