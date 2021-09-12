require("dotenv").config();

const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const forkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const PACKAGE = require("../package.json");
const PATHS = require("./paths");
const envConfig = require("./envConfig");

// Set Environment
const ENV = process.env.APP_ENV || "development";
const Config = envConfig[ENV];

console.log(JSON.stringify(Config));

module.exports = {
  mode: process.env.NODE_ENV,
  target: "web",
  entry: {
    app: `${PATHS.SRC_DIR}/index.tsx`,
  },
  output: {
    path: PATHS.DIST_DIR,
    filename: "bundles/[name].[contenthash].js",
    sourceMapFilename: "maps/[name].[contenthash].map.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: PATHS.SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      App: PATHS.App,
      Components: PATHS.Components,
      Utilities: PATHS.Utilities,
      Services: PATHS.Services,
      constants: PATHS.Constants,
      State: PATHS.State,
      Pages: PATHS.Pages,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(PACKAGE.version),
      ENV: JSON.stringify(ENV),
      PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
      API: JSON.stringify(Config.apiUrl),
    }),
    new forkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "ts", "tsx"],
    }),
  ],
};
