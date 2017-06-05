/**
 * Created by chenchen on 2017/2/4.
 *
 * SSR测试
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import test from 'ava';
import cheerio from 'cheerio';

let {renderToString} = ReactDOMServer;
import indexBundle from '../../server/dist_server/index.ssr';
import {expect} from 'chai';

test('ssr测试', async t => {

    const initialData = {
        todoList: [{
            content: "Mewnxuacir lfq lqbemwwbf.",
            createTime: "1992-07-12",
            done: true,
            id: 1,
        }],
        todoStatus: {
            pending: false,
            error: false
        }
    };

    let instance = React.createElement(indexBundle,initialData);

    let str = renderToString(instance);

    // console.log(str);

    expect(str).to.not.be.empty;

    let $ = cheerio.load(str);

    //应该会有一个列表项
    expect($('.todo-list-item').length).to.equal(1)

    t.pass();
});


test.todo('TODO::SPA情况下SSR测试');

