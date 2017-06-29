/**
 * Created by chenchen on 2017/3/10.
 */
const Koa = require("koa");
const app = new Koa();
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack');
const config = require('../webpack.config.js');
const _ = require("lodash");
const open = require("open");
// const compile = webpack(devConfig, (err, stats) => {
//     // console.log((stats.toJson("verbose").children.assets));
// });

config.entry = _.mapValues(config.entry, val => [
    'react-hot-loader/patch',
    // activate HMR for React
    // 'webpack-dev-server/client?http://localhost:23456', //原始的dev-server
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    // 'webpack/hot/only-dev-server',
    val
]);

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
]);

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

    open("http://127.0.0.1:23456")
});