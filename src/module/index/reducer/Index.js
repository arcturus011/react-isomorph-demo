/**
 * Created by chenchen on 2017/2/4.
 */

import {combineReducers} from 'redux';


function todoList(todolist = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todolist, ...action.payload];
            return todolist;
        case 'DEL_TODO':
            return todolist.filter((val, index) => index !== action.payload);
        default:
            return todolist;
    }

}

//... 其他reducer

export default combineReducers({todoList});