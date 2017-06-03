import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
import todoModel from './model/todo';
import configureStore from './store/index';

import ReactDOM from 'react-dom';

// import mapDispatchToProps from './action/index.js';


function mapStateToProps(state) {
    return state;
}


export default class Layout extends React.Component {
    constructor(props) {
        super(props);


        this.handleAddComment = this.handleAddComment.bind(this);
        this.onDelTodo = this.onDelTodo.bind(this);

        /*this.state = {
         todoList: []
         }*/
    }

    getChildContext() {
        return {store: this.props.store};
    }


    componentDidMount() {

        let {addTodo, fetchTodoList, store} = this.props;


        // store.dispatch(fetchTodoList());

        store.dispatch({
            type: 'todolist/request',
            payload: {}
        });

        store.dispatch({
            type: 'USER_FETCH_REQUESTED',
            payload: {}
        });




    }

    handleAddComment(todo) {

        let {addTodo} = this.props;

        addTodo([todo]);


    }

    onDelTodo(index) {


        let {delTodo} = this.props;

        console.log(index);


        delTodo(index);


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
                        {todoStatus.pending ? 'loading.1..' : 'TodoList'}
                    </h1>
                </header>
                <Comment handleAddComment={this.handleAddComment}/>

                <TodoList onDelTodo={this.onDelTodo} todoList={this.props.todoList}/>
                <a href="https://github.com/larry011/react-isomorph-demo.git" className="dl"></a>
            </div>
        )
    }

}


Layout.childContextTypes = {
    store: React.PropTypes.object
};

Layout.propTypes = {
    addTodo: React.PropTypes.func.isRequired,
    delTodo: React.PropTypes.func.isRequired,
    fetchTodoList: React.PropTypes.func.isRequired
}