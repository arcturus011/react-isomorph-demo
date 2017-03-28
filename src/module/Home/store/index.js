/**
 * Created by chenchen on 2017/3/7.
 */

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducer/';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {

    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
    // 允许我们 dispatch() 函数loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer/index.js', () => {


            const nextRootReducer = require('./index');
            console.warn('reducer replace', nextRootReducer);

            store.replaceReducer(reducers);
        });
    }

    return store;
}