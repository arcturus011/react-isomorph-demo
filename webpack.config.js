/**
 * Created by chenchen on 2016/11/15.
 */
const path = require('path');
const webpack = require("webpack");
const htmlWebapckPluginConfig = require("./src/config/html-webpack-plugin.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoRefresh = require('./src/config/browser-sync.config.js');

//入口文件
let entry = {
    index: './src/module/index/Index.jsx',
    todoDetail: './src/module/TodoDetail/TodoDetail.jsx'
};

//浏览器端的配置
let browserConfig = {
    entry,
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '',
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpe?g|gif)/,
                loader: 'url?limit=1024&name=img/[name].[ext]'
            }, {
                test: /\.(ttf|eot|svg)$/,
                loader: "url?limit=1024&name=fonts/[name].[ext]"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.(styl|css)$/,
                loader: ExtractTextPlugin.extract(["vue-style"], "css?sourceMap!autoprefixer!stylus")
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/common.js',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            fetch: 'isomorphic-fetch',
            promise: 'promise'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
        }),
        new ExtractTextPlugin('css/[name].css'),
        ...htmlWebapckPluginConfig,
        autoRefresh
    ],
};

module.exports = browserConfig;