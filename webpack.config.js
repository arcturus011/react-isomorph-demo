/**
 * Created by chenchen on 2016/11/15.
 */
const path = require('path');
const webpack = require("webpack");
const htmlWebapckPluginConfig = require("./src/config/html-webpack-plugin.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoRefresh = require('./src/config/browser-sync.config.js');
const nodeExternals = require('webpack-node-externals');

//入口文件
let entry = {
    index: [
        'react-hot-loader/patch',
        // activate HMR for React
        // 'webpack-dev-server/client?http://localhost:23456', //原始的dev-server
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        // 'webpack/hot/only-dev-server',
        './src/module/index/hot_entry.js',
    ],
    todoDetail: './src/module/TodoDetail/TodoDetail.jsx'
};

//浏览器端的配置
let browserConfig = {
    entry,
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
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
                loader: "babel-loader"
            },
            {
                test: /\.(styl|css)$/,
                loader: "vue-style!css?sourceMap!autoprefixer!stylus"
                // loader: ExtractTextPlugin.extract({
                //     fallback: "vue-style-loader",
                //     use: "css?sourceMap!autoprefixer!stylus"
                // })
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
            Promise: 'promise'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
        }),
        new ExtractTextPlugin('css/[name].css'),
        ...htmlWebapckPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // autoRefresh
    ],
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    // devServer: {
    //     host: 'localhost',
    //     port: 23456,
    //
    //     historyApiFallback: true,
    //     // respond to 404s with index.html
    //
    //     hot: true,
    //     // enable HMR on the server
    // },
};


let serverConfig = Object.assign({}, browserConfig, {
    output: {
        path: path.join(__dirname, 'build_server'),
        filename: "[name].bundle.js",
        libraryTarget: 'commonjs2' //设置导出类型，web端默认是var，node需要module.exports = xxx的形式
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {                //node端的babel编译配置可以简化很多
                    babelrc: "false",
                    presets: ['react'],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-es2015-modules-commonjs" //如果不转换成require，import 'xxx.styl'会报错
                    ]
                }
            },
            {
                test: /\.(styl|css)$/,          //node端不能 require('xx.css')，会报错
                loader: 'null'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            fetch: 'isomorphic-fetch',
            Promise: 'promise'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
        }),
    ],
    target: 'node',
    externals: [nodeExternals()], //不把node_modules中的文件打包
});


module.exports = [browserConfig];