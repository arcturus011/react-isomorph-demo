import test from 'ava';
import axios from 'axios';
import {expect} from 'chai';

//这里使用高德API模拟测试接口调用
test('api接口测试', async t => {

    let res = await axios({
        method: 'get',
        url: 'http://restapi.amap.com/v3/ip',
        params: {
            key: '290aef048bb05315298d8c06f2c8d895'
        }
    });


    expect(res.status).to.equal(200);
    expect(res.data).to.not.empty;
    expect(res.data.status).to.equal('1');


    console.log(res.data);


    t.pass();

});