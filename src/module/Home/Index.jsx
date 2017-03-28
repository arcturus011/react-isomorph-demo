import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
// import bs from '../common/bs';
import Provider from "react-redux/src/components/Provider";
import todoModel from './model/todo';

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


    componentDidMount() {

        let {addTodo, fetchTodoList, store} = this.props;


        store.dispatch(fetchTodoList());


    }

    handleAddComment(todo) {

        let {addTodo} = this.props;

        addTodo([todo]);


        /*  console.log(todo);

         this.setState({
         todoList: [...this.state.todoList, todo]
         })*/

    }

    onDelTodo(index) {


        let {delTodo} = this.props;

        console.log(index);


        delTodo(index);


        /* let todoList = this.state.todoList.filter((val, i) => i !== index);

         this.setState({
         todoList
         });*/


    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {

        let {todoStatus} = this.props;
        return (

            <div>
                <header>
                    <h1 className="title">
                        {todoStatus.pending ? 'loading...' : 'TodoList'}
                    </h1>
                </header>
                <Comment handleAddComment={this.handleAddComment}/>

                <TodoList onDelTodo={this.onDelTodo} todoList={this.props.todoList}/>
                <a href="https://github.com/larry011/react-isomorph-demo.git" className="dl"></a>
            </div>
        )
    }

}


Layout.contextTypes = {
    store: React.PropTypes.object
};

Layout.propTypes = {
    addTodo: React.PropTypes.func.isRequired,
    delTodo: React.PropTypes.func.isRequired,
    fetchTodoList: React.PropTypes.func.isRequired
}