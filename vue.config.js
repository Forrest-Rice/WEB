/* eslint-disable new-cap */
/* $$
 $ @Author: By
 $ @Date: 2022-04-18 10:10:19
 $ @LastEditTime: 2022-04-18 10:13:30
 $ @LastEditors: By
 $ @Description:
 $ @FilePath: \p-p\vue.config.js
 $ @可以输入预定的版权声明、个性签名、空行等
 $ */
const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module.rule('pug').test(/\.pug$/).use('pug-html-loader').loader('pug-html-loader')
      .end();
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    port: 9000,
    // warnings: false,
    // errors: false,
    // lintOnSave: false

  },
});
