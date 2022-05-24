const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  // runtimeCompiler: true,
  // assetsPublicPath: '/',
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
