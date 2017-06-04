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

    console.log(state, action);


    if (action.type && mainReducer[action.type]) {


        return mainReducer[action.type](state, action);

    }

    return state;


    // return state.merge(action.payload || {}, {deep: true});
}


export default reducerEntry;