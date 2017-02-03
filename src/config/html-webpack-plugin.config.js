/**
 * Created by chenchen on 2016/11/28.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['common', 'index'],
        template: path.resolve(__dirname, '../template/base.html'),
        hash: true,
    }),
    new HtmlWebpackPlugin({
        filename: 'todo_detail.html',
        chunks: ['common', 'todoDetail'],
        template: path.resolve(__dirname, '../template/base.html'),
        hash: true,
    })
]
