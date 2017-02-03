import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    del() {
        let {index} = this.props;

        this.props.handleDelTodo(index);


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