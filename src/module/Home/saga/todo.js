/**
 * Created by chenchunhan on 2017/5/14.
 */
import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects'
import * as SERVICE from '../service/todo';


function* fetchTodo(action) {

    let listData = yield call(SERVICE.fetchList);
    console.log(listData);

    return ;
    yield  put({
        type: 'initList',
        payload: {
            todoList: listData.list
        }
    })
}


export default function* saga() {

    yield takeEvery("todolist/fetch", fetchTodo);

}



