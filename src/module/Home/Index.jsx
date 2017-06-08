import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
import '../common/rem';
import PropTypes from 'prop-types';

// import mapDispatchToProps from './action/index.js';


function mapStateToProps(state) {
    return state;
}


export default class Index extends React.Component {
    constructor(props) {
        super(props);

    }

    getChildContext() {
        return {store: this.props.store};
    }


    componentDidMount() {

        let {addTodo, fetchTodoList, store} = this.props;


        store.dispatch({
            type: 'todolist/fetch',
        });

    }


    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {

        let {todoStatus, todoList} = this.props;
        return (

            <div>
                <header>
                    <h1 className="title">
                        {todoStatus.pending ? 'loading...' : 'TodoList'}
                    </h1>
                </header>
                <Comment/>
                <TodoList todoList={todoList}/>
                <a href="https://github.com/larry011/react-isomorph-demo.git" className="dl"></a>
            </div>
        )
    }

}


Index.childContextTypes = {
    store: PropTypes.object
};

