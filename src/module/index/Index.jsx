import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';

export default class extends React.Component {
    constructor() {
        super();

        this.state = {
            pageData: 'loading'
        }
    }

    getAsyncData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    msg: 'success',
                    data: 'hello!'
                })
            }, 2000)
        });
    }


    async componentDidMount() {

        let data = await this.getAsyncData();

        this.setState({
            pageData: data.data
        })

    }

    render() {
        return (
            <div>
                data: {this.state.pageData}
            </div>
        )
    }

}
