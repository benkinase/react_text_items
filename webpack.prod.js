const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "static/[name].[fullhash].js",
    publicPath: "/",
  },
  optimization: { splitChunks: { chunks: "all" } },
});
