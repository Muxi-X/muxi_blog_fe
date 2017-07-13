const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/main.js')
    ],
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: 'http://localhost:3000/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            }, 
            {
                loader: "css-loader" // translates CSS into CommonJS
            }, 
            {
                loader: "sass-loader" // compiles Sass to CSS
            }   
            ]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[hash:7].[ext]'
            }
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss', '.vue']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
}