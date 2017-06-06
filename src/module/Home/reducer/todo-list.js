export function addTodo(state, action) {

}

export function delTodo() {

}

export function updateTodo() {

}

export function initList(state, {payload}) {

    // console.log(action, 123)

    return state.set('todoList', payload.todoList);

}