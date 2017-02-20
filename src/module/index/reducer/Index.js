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

//确认删除模态框
function confirmModalData(data = {
    show: false,
    resolve: null,
    reject: null
}, action) {
    let d = {};
    switch (action.type) {
        case 'SHOW_MODAL':
            return Object.assign(d, data, action.payload);
        case 'CLOSE_MODAL':
            return Object.assign(d, data, {show: false});
        default:
            return data;
    }
}

//... 其他reducer

export default combineReducers({todoList, confirmModalData});