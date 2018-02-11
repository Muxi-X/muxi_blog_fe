var path = require('path')
var utils = require('./util')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var env = config.build.env
var faviconsWebpackPlugin = require('favicons-webpack-plugin')
const extractCSS = new ExtractTextPlugin('css/[name].css');

var webpackConfig = merge(baseWebpackConfig, {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.min.js'
        }
    },
    module: {
        noParse: /vue\.runtime\.min\.js/,
        rules: [{
          test: /\.scss$/,
          use: extractCSS.extract({
            fallback: "style-loader",
            use: ['css-loader','sass-loader'],
          }),
        }]
    },
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    plugins: [
        new faviconsWebpackPlugin({
            logo: './src/assets/favicon.png',
            prefix: 'favicon/',
        }),
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        extractCSS,
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]
})

module.exports = webpackConfig
