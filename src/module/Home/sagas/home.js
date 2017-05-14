/**
 * Created by chenchunhan on 2017/5/14.
 */
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {fetchList} from '../model/todo';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield 222;
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchTodo(action) {

    console.log(action);

    let list = yield fetchList();
    console.log(list);
    yield  put({
        type: 'todolist/fetch/success',
        payload: {
            todoList: list
        }
    })


}

function* updateTodo() {

}

function* delTodo() {

}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
    yield takeEvery("todolist/request", fetchTodo);

}

export default mySaga;