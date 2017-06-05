/**
 * Created by chenchen on 2017/2/4.
 */


import Immutable from 'seamless-immutable';

import * as todoListReducer from './todoList';


let mainReducer = Object.assign({}, todoListReducer);

let moduleState = {
    todoList: [],
    todoStatus: {
        pending: false,
        error: false
    }
};

function reducerEntry(state = Immutable(moduleState), action) {


    console.info(action);
    //每次dispatch action都会调用reducer,有些是给saga用的action，这里要过滤一下

    if (action.type && mainReducer[action.type]) {


        return mainReducer[action.type](state, action);

    }

    return state;


    // return state.merge(action.payload || {}, {deep: true});
}


export default reducerEntry;