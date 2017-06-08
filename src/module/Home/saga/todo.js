/**
 * Created by chenchunhan on 2017/5/14.
 */
import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects'
import * as SERVICE from '../service/todo';


export function* fetchTodo(action) {

    let {result: listData} = yield call(SERVICE.fetchList, 1);
    console.log(listData);

    yield  put({
        type: 'initList',
        payload: {
            todoList: listData.list
        }
    })
}


export function* addTodo({payload}) {

    let {result} = yield  call(SERVICE.addTodo, payload.content);

    yield put({
        type: 'addTodo',
        payload: {
            id: result.id,
            content: payload.content,
            createTime: Date.now(),
            done: false
        }
    })

    console.log(result)

}

export function requestAddTodo() {

}

export default function* saga() {

    yield takeEvery("todolist/pull/request", fetchTodo);

    yield takeEvery("todo/add/request", addTodo);

}



