/**
 * Created by chenchen on 2017/2/4.
 */


// import {combineReducers} from 'redux';
// import {FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_PENDING, FETCH_TODO_LIST_FAILED} from '../action/index';

import Immutable from 'seamless-immutable';


function todoList(todolist = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todolist, ...action.payload];
        case 'DEL_TODO':
            return todolist.filter((val, index) => index !== action.payload);

        case FETCH_TODO_LIST_SUCCESS:
            return action.payload;
        default:
            return todolist;
    }

}

//... 其他reducer

function todoStatus(status = {pending: false}, action) {
    switch (action.type) {
        case FETCH_TODO_LIST_PENDING:
            return Object.assign({}, status, {pending: true});
        case FETCH_TODO_LIST_SUCCESS:
            return Object.assign({}, status, {pending: false});
        case FETCH_TODO_LIST_FAILED:
            return Object.assign({}, status, {pending: false});

        default:
            return status;
    }

}

function reducer(state = Immutable({
    todoList: [],
    todoStatus: {
        pending: false,
        error:false
    }
}), action) {
    console.log(action);


    return state.merge(action.payload || {}, {deep: true});
}

// export default combineReducers({todoList, todoStatus});

export default reducer;