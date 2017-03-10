/**
 * Created by chenchen on 2017/3/10.
 */
const Koa = require("koa");
const app = new Koa();
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack');
const config = require('../webpack.config.js')[0];
// const compile = webpack(devConfig, (err, stats) => {
//     // console.log((stats.toJson("verbose").children.assets));
// });

app.use(webpackMiddleware({
    config: config,
    dev: {
        publicPath: config.output.publicPath,
        // public path to bind the middleware to
        // use the same as in webpack
        // publicPath is required, whereas all other options are optional
        noInfo: false,
        stats: {
            colors: true
        }
    },
    hot: {
        // log: console.log,
        path: "/__webpack_hmr",
        heartbeat: 2000
    }
}));

app.listen(23456, _ => {
    console.log(`dev Server Start`);
});