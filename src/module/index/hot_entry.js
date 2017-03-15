/**
 * Created by chenchen on 2017/3/7.
 */
import React from 'react';
import Layout from './Index.jsx';
import {connect, Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import configureStore from './store/index';

import ReactDOM from 'react-dom';

import mapDispatchToProps from './actions/index.js';



function mapStateToProps(state) {
    return state;
}


if (process.browser) {


    let render = _ => {


        let initialData = window._SERVER_DATA || {};

        let store = configureStore(initialData);

        let App = connect(mapStateToProps, mapDispatchToProps)(Layout);//用connect包装一下，这里只用到mapStateToProps，而且不对state加以过滤

        // =====================================================
        //
        //  hot reload 不要使用Provider！！！！
        //
        // =====================================================

        ReactDOM.render(
            <AppContainer>
                <App store={store}/>
            </AppContainer>,
            document.getElementById('wrap'));

    };


    // Hot Module Replacement API
    if (module.hot) {

        module.hot.accept('./Index.jsx', () => {

            render();


        });
    }


    render();

}
