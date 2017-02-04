import React from 'react';
import 'regenerator-runtime/runtime';
import './stylus/index.styl';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList';
import Comment from './component/Comment';
import bs from '../common/bs';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer/Index';

@bs
export default class Layout extends React.Component {
    constructor(props) {
        super(props);


        this.handleAddComment = this.handleAddComment.bind(this);
        this.onDelTodo = this.onDelTodo.bind(this);

        /*this.state = {
         todoList: []
         }*/
    }

    static get contextTypes() {
        return {
            store: React.PropTypes.object
        }
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


        let {data} = await this.fetchTodoList();

        dispatch({
            type: 'ADD_TODO',
            payload: data
        });

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

if (process.browser) {

    //初始数据，用于和server render数据同步
    let initialData = window._SERVER_DATA || {};

    let store = createStore(reducers, initialData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    let App = connect(_ => _)(Layout);//用connect包装一下，这里只用到mapStateToProps，而且不对state加以过滤

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('wrap'));
}

