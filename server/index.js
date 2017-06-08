/**
 * Created by chenchen on 2017/2/4.
 */
const Koa = require("koa");
const app = new Koa();
const router = require('koa-better-router')().loadMethods();
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const Promise = require("bluebird");
const serve = require('koa-static-server');
const readFileAsync = Promise.promisify(fs.readFile);
const RES_PATH = path.resolve(__dirname, '../dist/');
const axios = require("axios");

//////////////////////////////////////////////////////

const React = require("react");
const ReactDOMServer = require("react-dom/server");
let {renderToString} = ReactDOMServer;


/**
 * 读取HTML模版，返回cheerio实例
 * @param path
 * @return {Promise.<*>}
 */
async function loadHTMLTemplate(path) {
    try {
        let content = await readFileAsync(path);
        return cheerio.load(content);

    } catch (e) {
        console.error(e);
        return false;
    }
}


router.get('/', async (ctx, next) => {

    let $ = await loadHTMLTemplate(path.resolve(RES_PATH, 'index.html'));

    if (!$) {
        return ctx.body = null;
    }

    let IndexBundle = require("./dist_server/index.ssr");

    //fetch接口数据
    let todoList = await(await fetch('http://localhost:8088/api/todo_list')).json();

    let initialData = {todoList};

    let instance = React.createElement(IndexBundle.default, initialData);

    let str = renderToString(instance);


    $('#wrap').html(str);

    //前后端数据要同步
    let syncScript = `<script id="server-data">window._SERVER_DATA=${JSON.stringify(initialData)}</script>`;

    $('head').append(syncScript);

    return ctx.body = $.html();


});


//API接口
router.get('/api/todo_list', async (ctx, next) => {

    return ctx.body = {

    };

});


//router
app.use(router.middleware());

//router
app.use(function (ctx, next) {

    //如果路由中间件已经有数据了，无需再走静态文件中间件了
    if (ctx.body) {
        return true;
    }

    return next();
});

app.use(serve({rootDir: RES_PATH}));

app.listen(8088, _ => {
    console.log('server started... http://localhost:8088/')
});