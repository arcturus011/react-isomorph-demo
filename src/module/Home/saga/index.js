import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects'

import homeSaga from './home';

export default function* () {

    //这里必须yield一个task才行，否则监听无效

    yield fork(homeSaga);


    console.warn('saga end');

};