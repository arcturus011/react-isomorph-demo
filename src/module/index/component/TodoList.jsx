import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelTodo = this.handleDelTodo.bind(this);

    }

    componentDidMount() {

    }

    handleDelTodo() {

    }

    render() {
        return (
            <div className="todolist-section">
                <ul>
                    <TodoItem handleDelTodo={this.handleDelTodo}/>
                </ul>
            </div>
        )
    }

}

TodoList.propTypes = {
    todoList: React.PropTypes.array.isRequired,
    handleDelTodo: React.PropTypes.func.isRequired
}