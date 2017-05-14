/**
 * Created by chenchen on 2017/3/7.
 */

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducer/';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';

import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/home';

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
// const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    // 允许我们 dispatch() 函数loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志

    sagaMiddleware.run(mySaga);

    return store;
}