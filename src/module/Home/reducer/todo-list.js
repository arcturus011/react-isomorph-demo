export function addTodo(state, action) {

}

export function delTodo(state, {payload: {id}}) {


    return state.set('todoList', (state.todoList.filter(val => val.id != id)));

}

export function updateTodo(state, action) {

}

export function initList(state, {payload}) {

    // console.log(action, 123)

    return state.set('todoList', payload.todoList);

}