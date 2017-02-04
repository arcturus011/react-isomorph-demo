import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);


        this.handleDelTodo = this.handleDelTodo.bind(this);

    }

    componentDidMount() {

    }

    handleDelTodo(index) {

        this.props.onDelTodo(index);
    }

    render() {
        if (this.props.todoList.length === 0) {
            return <p>loading</p>
        }
        return (
            <div className="todolist-section">
                <ul className="todo-list ">
                    {this.props.todoList.map((todo, index) => {
                        return (
                            <TodoItem key={index} todo={todo} index={index} handleDelTodo={this.handleDelTodo}/>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

TodoList.propTypes = {
    todoList: React.PropTypes.array.isRequired,
    onDelTodo: React.PropTypes.func.isRequired
};