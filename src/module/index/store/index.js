/**
 * Created by chenchen on 2017/3/7.
 */

import {combineReducers, createStore} from 'redux';
import reducers from '../reducers/';

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0


export default function configureStore(initialState) {

    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    if (module.hot) {
        console.warn(11111);
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {


            const nextRootReducer = require('../reducers/index');

            console.warn(nextRootReducer);

            store.replaceReducer(reducers);
        });
    }

    return store;
}