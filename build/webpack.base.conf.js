var path = require('path')
var config = require('../config')
var utils = require('./util')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var webpack = require('webpack')

process.noDeprecation = true

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        index: './src/index.js',
        web: './src/web.js',
        design: './src/design.js',
        android: './src/android.js',
        product: './src/product.js'
    },
    output: {
        path: path.join(__dirname, "../"),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: process.env.NODE_ENV === 'production'
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/base.html',
            inject: false,
            template: path.join(__dirname, '../template/base.ejs'),
            chunks: ['manifest', 'vendor']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/svg.html',
            inject: false,
            template: path.join(__dirname, '../template/svg.ejs'),
            chunks: ['svg']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/index.html',
            inject: false,
            template: path.join(__dirname, '../template/index.ejs'),
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/second.html',
            inject: false,
            template: path.join(__dirname, '../template/second.ejs'),
            chunks: ['second']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/web.html',
            inject: false,
            template: path.join(__dirname, '../template/web.ejs'),
            chunks: ['web']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/design.html',
            inject: false,
            template: path.join(__dirname, '../template/design.ejs'),
            chunks: ['design']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/android.html',
            inject: false,
            template: path.join(__dirname, '../template/android.ejs'),
            chunks: ['android']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/product.html',
            inject: false,
            template: path.join(__dirname, '../template/product.ejs'),
            chunks: ['product']
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
}