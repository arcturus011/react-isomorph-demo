import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    handleDel() {
        // let {index} = this.props;
        let {todo} = this.props;
        let {store} = this.context;

        store.dispatch({
            type: "delTodo",
            payload: {
                id: todo.id
            }
        })

    }

    render() {
        let {todo} = this.props;
        return (
            <li className="todo-list-item">
                {todo.done ? <del><p>{todo.content}</p></del> : <p>{todo.content}</p>}
                <button onClick={this.handleDel.bind(this)} className="pure-button"><i className="iconfont icon-delete"></i>
                </button>
            </li>
        )
    }

}


TodoItem.propTypes = {
    todo: React.PropTypes.object.isRequired
};

TodoItem.contextTypes = {
    store: React.PropTypes.any
}