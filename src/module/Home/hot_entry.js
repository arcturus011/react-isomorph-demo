/**
 * Created by chenchen on 2017/3/7.
 */
import React from 'react';
import Layout from './Index.jsx';
import {connect, Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import Immutable from 'seamless-immutable';


import ReactDOM from 'react-dom';

import mapDispatchToProps from './action/index.js';


function mapStateToProps(state) {
    return state;
}

console.warn(module);

if (process.browser) {


    let render = _ => {

        const configureStore = require('./store/index').default;


        let initialData = Immutable(window._SERVER_DATA || {});

        let store = configureStore(undefined);

        let App = connect(mapStateToProps)(Layout);

        // =====================================================
        //
        //  hot reload 不要使用Provider！！！！，Provider不支持热更新store，直接传递store进去connect即可
        //
        // =====================================================

        ReactDOM.render(
            //{/*<Provider >*/}
            <AppContainer>
                <App store={store}/>
            </AppContainer>
            //{/*  </Provider>*/}
            ,
            document.getElementById('wrap')
        )
        ;

    };


    // Hot Module Replacement API
    if (module.hot) {

        module.hot.accept('./Index.jsx', () => {

            render();


        });
    }


    render();

}
