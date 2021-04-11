const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common.js");
const { PUBLIC_DIR, DIST_DIR } = require("./paths");

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: PORT,
    historyApiFallback: true,
    contentBase: "./",
    host: "0.0.0.0",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${DIST_DIR}/index.html`,
      template: `${PUBLIC_DIR}/index.html`,
      chunksSortMode: "none",
      baseUrl: `${process.env.PUBLIC_URL}/`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PUBLIC_DIR}/icons`, to: "icons/" },
        `${PUBLIC_DIR}/manifest.json`,
      ],
    }),
  ],
});
