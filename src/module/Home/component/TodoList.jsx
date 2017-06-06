import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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
                            <TodoItem key={index} todo={todo} index={index}/>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

TodoList.propTypes = {
    todoList: React.PropTypes.array.isRequired,
};