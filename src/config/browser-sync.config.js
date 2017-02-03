/**
 * Created by chenchen on 2016/11/9.
 * browser-sync 自动刷新
 */

//自动刷新
var webpack = require("webpack");

var enableBS = process.argv.some(arg => arg == '--bs');

if (!enableBS) {
    module.exports = new Function();
}
else {
    var bs = require("browser-sync").create('webpack-auto-reload');


    bs.init({port: 18441, ui: false});

    module.exports = new webpack.ProgressPlugin(function handler(percentage, msg) {
        if (percentage < 1) {

            bs.notify(`building... ${percentage * 100}%`)


        }
        if (percentage == 1 && bs) {
            return setTimeout(bs.reload, 16)
        }
    });
}


