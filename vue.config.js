// vue.config.js
const Dotenv = require('dotenv-webpack')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => Object.assign(options, {
              transformAssetUrls: {
                 'v-img': ['src', 'lazy-src'],
                 'v-card': 'src',
                 'v-card-media': 'src',
                 'v-responsive': 'src',
                 'v-parallax': 'src',
                  //...
              }
              }))
    },
    configureWebpack: {
      plugins: [new Dotenv()]
    }
   }