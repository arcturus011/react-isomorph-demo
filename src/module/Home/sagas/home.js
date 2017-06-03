/**
 * Created by chenchunhan on 2017/5/14.
 */
import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects'
import {fetchList} from '../model/todo';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    yield new Promise(function (resolve, reject) {
        resolve()
    });


}

function* fetchTodo(action) {

    /* console.warn(call(fetchList), put({
             type: 'todolist/fetch/success',
             payload: {
                 todoList: list
             }
         })
     );*/

    let list = yield call(fetchList);
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

    yield takeEvery("todolist/request", fetchTodo);

    yield takeEvery("todolist/request/test", fetchTodo);


}


function* mySaga2() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);

}

export default function* () {

    //这里必须yield一个task才行，否则监听无效

    let taskA = yield fork(mySaga);
    let taskB = yield fork(mySaga2);

    /* console.warn('saga start');

     let a = mySaga();

     // console.log(a);

     mySaga2();*/

    console.warn('saga end');

};