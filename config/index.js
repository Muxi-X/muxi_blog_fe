// webpack config variables
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'http://cdn.com/dist/',
    productionSourceMap: false,
    bundleAnalyzerReport: false
  },
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/dist/'
  }
}