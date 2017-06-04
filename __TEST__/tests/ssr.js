/**
 * Created by chenchen on 2017/2/4.
 *
 * SSR测试
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import test from 'ava';

let {renderToString} = ReactDOMServer;

test('ssr测试', async t => {

    t.pass();
});


test.todo('TODO::SPA情况下SSR测试');


/*
const IndexBundle = require("../build_server/index.bundle.js");


let initialData = {todoList: ['11', '22', '33']};
let instance = React.createElement(IndexBundle.default, initialData);


let str = renderToString(instance);

console.log(str);
*/
