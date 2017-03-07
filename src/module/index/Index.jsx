import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
import bs from '../common/bs';


// @bs
export default class Layout extends React.Component {
    constructor(props) {
        super(props);


        this.handleAddComment = this.handleAddComment.bind(this);
        this.onDelTodo = this.onDelTodo.bind(this);

        /*this.state = {
         todoList: []
         }*/
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

        let {dispatch} = this.props;


        /*let {data} = await this.fetchTodoList();

        dispatch({
            type: 'ADD_TODO',
            payload: data
        });*/

        /* this.setState({
         todoList: data
         })*/

    }

    handleAddComment(todo) {

        let {dispatch} = this.props;

        dispatch({
            type: 'ADD_TODO',
            payload: [todo]
        });

        /*  console.log(todo);

         this.setState({
         todoList: [...this.state.todoList, todo]
         })*/

    }

    onDelTodo(index) {

        let {dispatch} = this.props;


        console.log(index);

        dispatch({
            type: 'DEL_TODO',
            payload: index
        });


        /* let todoList = this.state.todoList.filter((val, i) => i !== index);

         this.setState({
         todoList
         });*/


    }

    componentWillUnmount() {
        console.log(10);
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className="title">
                        TodoList
                    </h1>
                </header>
                <Comment handleAddComment={this.handleAddComment}/>

                <TodoList onDelTodo={this.onDelTodo} todoList={this.props.todoList}/>

            </div>
        )
    }

}


Layout.contextTypes = {
    store: React.PropTypes.object
};