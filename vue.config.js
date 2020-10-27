var webpack = require("webpack");
var path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // lintOnSave: false,
  filenameHashing: true,
  chainWebpack: config => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
    config.module
      .rule("media")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
    config.module
      .rule("fonts")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.hotReload = true;
        return options;
      });
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@C": "@/components",
        "@UTIL": "@/utils",
        "@V": "@/views",
      }
    }
  }
};
