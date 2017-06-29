/**
 * Created by chenchen on 2017/2/4.
 */


import Immutable from 'seamless-immutable';

import * as todoListReducer from './todo-list';


let combinedReducer = Object.assign({}, todoListReducer);

//模块的state结构
export let moduleState = {
    todoList: [],
    todoStatus: {
        pending: false,
        error: false
    }
};

function reducerEntry(state, action) {

    //如果是初始化Redux，判断是否有服务端数据
    if (action.type === '@@INIT') {
        return Immutable(state || moduleState)
    }

    //每次dispatch action都会调用reducer,有些是给saga用的action，这里要过滤一下
    console.info(action);

    if (action.type && combinedReducer[action.type]) {
        return combinedReducer[action.type](state, action);
    }

    return state;

}


export default reducerEntry;