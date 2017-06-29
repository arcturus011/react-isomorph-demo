/**
 * Created by chenchen on 2017/3/7.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducer/index';

import createSagaMiddleware from 'redux-saga'
import mySaga from '../saga/index';

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
// const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(mySaga);

    return store;
}