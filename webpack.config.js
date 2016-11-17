/**
 * Created by chenchen on 2016/11/15.
 */
const path = require('path');
//入口文件
let entry = {
    index: './module/index/Index_entry.js'
};

//浏览器端的配置
let browserConfig = {
    entry,
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build',
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: `babel`,
            }
        ]
    }
};

module.exports = browserConfig;