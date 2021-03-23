const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')
// const env = require('./src/config/env.config')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // publicPath: isProd ? `https://${env.cos.assetsDomain}/${env.cos.remoteBasePath}` : '/',
  publicPath: '/',
  chainWebpack: config => {
    if (isProd) {
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      })
    }
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 20000 }))
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    if (process.env.NODE_ENV !== 'production') return
    config
      .plugin('prerender-spa-plugin')
      .use(PrerenderSPAPlugin)
      .init(Plugin => new Plugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/friend',
          '/tool',
          '/tool/imageconverter'
        ],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          renderAfterDocumentEvent: 'render-event',
          renderAfterElementExists: '#app',
          timeout: 2000,
          // maxConcurrentRoutes: 1,
          renderAfterTime: 5000,
          headless: false
        })
      }))
  },
  css: {
    sourceMap: true
  },
  devServer: {
    disableHostCheck: true
  }
}
