/**
 * Created by chenchunhan on 2017/5/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default modulePath => {

    function render() {
        let Layout = require(modulePath).default;

        ReactDOM.render(
            <div>
                <Layout/>
            </div>
            ,
            document.getElementById('wrap')
        );

    }

    // Hot Module Replacement API
    if (module.hot) {

        module.hot.accept(modulePath, () => {

            render();


        });
    }


    render();

};





