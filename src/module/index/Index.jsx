import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
import bs from '../common/bs';

@bs
export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            todoList: []
        }

        this.handleAddComment = this.handleAddComment.bind(this);
    }

    fetchTodoList() {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve({
                    code: 200,
                    msg: 'success',
                    data: ['111', '222']
                })
            }, 2000)
        });
    }


    async componentDidMount() {

        let {data} = await this.fetchTodoList();

        this.setState({
            todoList: data
        })

    }

    handleAddComment(todo) {

    }


    render() {
        return (
            <div>
                <header>
                    <h1>
                        TodoList
                    </h1>
                </header>
                <Comment handleAddComment={this.handleAddComment}/>

                <TodoList todoList={this.state.todoList}/>

            </div>
        )
    }

}

if (process.browser) {
    ReactDOM.render(<Layout/>, document.getElementById('wrap'));
}
