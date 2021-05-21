const initialState =  [{
    id: 1,
    todo: 'buy bread',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();
console.table( todos)

const newTodo =  {
    id: 2,
    todo: 'buy milk',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);
console.table(todos)