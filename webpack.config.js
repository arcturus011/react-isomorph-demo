/**
 * Created by chenchen on 2016/11/15.
 */
const path = require('path');
const webpack = require("webpack");
const htmlWebapckPluginConfig = require("./src/config/html-webpack-plugin.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');


//浏览器端的配置
let browserConfig = {
    context: __dirname,
    entry: {
        index: './src/module/Home/Index-entry.js',
        // todoDetail: './src/module/TodoDetail/TodoDetail.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
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
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.(styl|css)$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        /*        new webpack.optimize.CommonsChunkPlugin({
                    name: 'common',
                    filename: 'js/common.js',
                }),*/
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            fetch: 'isomorphic-fetch',
            Promise: 'bluebird'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
        }),
        // new ExtractTextPlugin('css/[name].css'),
        ...htmlWebapckPluginConfig,
    ],
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    devtool: 'source-map'
};


module.exports = browserConfig;