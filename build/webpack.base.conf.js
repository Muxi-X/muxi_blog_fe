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
        home: './src/home.js',
        web: './src/web.js',
        android: './src/android.js',
        design: './src/design.js',
        product: './src/product.js',
        archiveBlogs: './src/archiveBlogs.js',
        tagBlogs: './src/tagBlogs.js',
        second: './src/second.js',
        mobileHome: './src/mobileHome.js',
        send: './src/send.js',
        viewTags: './src/viewTags.js',
        viewArchive: './src/viewArchive.js',
        mobileWeb: './src/mobileWeb.js',
        mobileAndroid: './src/mobileAndroid.js',
        mobileDesign: './src/mobileDesign.js',
        mobileProduct: './src/mobileProduct.js',
        mobileTag: './src/mobileTag.js',
        mobileArchive: './src/mobileArchive.js',
        mobileSecond: './src/mobileSecond.js',
        landing: './src/landing.js',
        mobileLanding: './src/mobileLanding.js',
        navigation: './src/navigation.js',
        commonStyle: './src/commonStyle.js'
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
        },
        {
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['sort','web','android','design','product','tagBlogs','archiveBlogs']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'mobileCommon',
            chunks: ['mobile','mobileWeb','mobileAndroid','mobileDesign','mobileProduct','mobileTag','mobileArchive']
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
            chunks: ['manifest', 'vendor', 'commonStyle']
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
            chunks: ['common','home','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/second.html',
            inject: false,
            template: path.join(__dirname, '../template/second.ejs'),
            chunks: ['second','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/web.html',
            inject: false,
            template: path.join(__dirname, '../template/web.ejs'),
            chunks: ['common','web','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/send.html',
            inject: false,
            template: path.join(__dirname, '../template/send.ejs'),
            chunks: ['common','send','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/design.html',
            inject: false,
            template: path.join(__dirname, '../template/design.ejs'),
            chunks: ['common','design','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/android.html',
            inject: false,
            template: path.join(__dirname, '../template/android.ejs'),
            chunks: ['common','android','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/product.html',
            inject: false,
            template: path.join(__dirname, '../template/product.ejs'),
            chunks: ['common','product','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/tagBlogs.html',
            inject: false,
            template: path.join(__dirname, '../template/tagBlogs.ejs'),
            chunks: ['common','tagBlogs','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/archiveBlogs.html',
            inject: false,
            template: path.join(__dirname, '../template/archiveBlogs.ejs'),
            chunks: ['common','archiveBlogs','navigation']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileHome.html',
            inject: false,
            template: path.join(__dirname, '../template/mobile.ejs'),
            chunks: ['mobileCommon','mobileHome']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/viewTags.html',
            inject: false,
            template: path.join(__dirname, '../template/viewTags.ejs'),
            chunks: ['viewTags']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/viewArchive.html',
            inject: false,
            template: path.join(__dirname, '../template/viewArchive.ejs'),
            chunks: ['viewArchive']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileWeb.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileWeb.ejs'),
            chunks: ['mobileCommon','mobileWeb']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileSecond.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileSecond.ejs'),
            chunks: ['mobileSecond']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileDesign.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileDesign.ejs'),
            chunks: ['mobileCommon','mobileDesign']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileAndroid.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileAndroid.ejs'),
            chunks: ['mobileCommon','mobileAndroid']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileProduct.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileProduct.ejs'),
            chunks: ['mobileCommon','mobileProduct']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileTag.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileTag.ejs'),
            chunks: ['mobileCommon','mobileTag']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileArchive.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileArchive.ejs'),
            chunks: ['mobileCommon','mobileArchive']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/landing.html',
            inject: false,
            template: path.join(__dirname, '../template/landing.ejs'),
            chunks: ['landing']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/mobileLanding.html',
            inject: false,
            template: path.join(__dirname, '../template/mobileLanding.ejs'),
            chunks: ['mobileLanding']
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/navi.html',
            inject: false,
            template: path.join(__dirname, '../template/navi.ejs'),
            chunks: ['navigation']
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
}
