import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    waitForConfirm() {

        let {store} = this.context;

        return new Promise((resolve, reject) => {

            store.dispatch({
                type: 'SHOW_MODAL',
                payload: {
                    show: true,
                    resolve,
                    reject
                }
            })

        });
    }

    closeModal() {
        let {store} = this.context;


        store.dispatch({
            type: 'CLOSE_MODAL',
            payload: {}
        })

    }

    async del() {
        let {index} = this.props;

        let ret = await this.waitForConfirm().catch(e => {
            return false;
        });

        if (!ret) {
            this.closeModal();
            return false;
        }

        this.props.handleDelTodo(index);

        this.closeModal();


    }

    render() {
        let {todo} = this.props;
        return (
            <li className="todo-list-item">
                <p>{todo}</p>
                <button onClick={this.del.bind(this)} className="pure-button"> X</button>
            </li>
        )
    }

}


TodoItem.propTypes = {
    handleDelTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.string.isRequired
}

TodoItem.contextTypes = {
    store: React.PropTypes.object
};