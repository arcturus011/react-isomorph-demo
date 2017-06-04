/**
 * Created by chenchunhan on 2017/5/14.
 */
import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects'
import {fetchList} from '../service/todo';


function* fetchTodo(action) {

    let list = yield call(fetchList);
    yield  put({
        type: 'initList',
        payload: {
            todoList: list
        }
    })
}


export default function* saga() {

    yield takeEvery("todolist/fetch", fetchTodo);

}



