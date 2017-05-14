/**
 * Created by chenchen on 2017/3/28.
 */

import Mock from 'mockjs';

export function fetchList() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {

            let {list: mockData} = Mock.mock({
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    createTime: "@date('yyyy-MM-dd')",
                    content: '@sentence(3)',
                    'done|1': true,
                }]
            });

            resolve(mockData);


        }, 1000)
    });

}
