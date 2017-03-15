/**
 * Created by chenchen on 2017/3/15.
 */


export default  function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todoArr) => dispatch({
            type: 'ADD_TODO',
            payload: todoArr
        }),
        delTodo: (todoIndex) => dispatch({
            type: 'DEL_TODO',
            payload: todoIndex

        })
    }
}