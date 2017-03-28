/**
 * Created by chenchen on 2017/3/15.
 */

export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_PENDING = 'FETCH_TODO_LIST_PENDING';
export const FETCH_TODO_LIST_FAILED = 'FETCH_TODO_LIST_FAILED';

import todoModel from '../model/todo';


export default  function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todoArr) => dispatch({
            type: ADD_TODO,
            payload: todoArr
        }),
        delTodo: (todoIndex) => dispatch({
            type: DEL_TODO,
            payload: todoIndex

        }),
        fetchTodoList: () => {
            return dispatch => {
                dispatch({
                    type: FETCH_TODO_LIST_PENDING
                });

                return todoModel.fetchList().then(list => {

                    console.log(list);
                    dispatch({
                        type: FETCH_TODO_LIST_SUCCESS,
                        payload: list
                    });
                }).catch(e => {
                    dispatch({
                        type: FETCH_TODO_LIST_FAILED,
                        payload: e
                    });
                })
            }
        }
    }
}