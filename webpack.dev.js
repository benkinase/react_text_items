const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",

    publicPath: "/",
    host: process.env.Host || "localhost",
    historyApiFallback: true,
    inline: true,
    liveReload: false,
    port: process.env.PORT || 3000,
    hot: true,
    open: true,
    quiet: true,
    noInfo: false,
    //stats: "minimal",
    stats: { colors: true },
    compress: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
