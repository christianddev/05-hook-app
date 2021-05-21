import React, { useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import todoReducer from "./todoReducer";
import TodoAdd from "./TodoAdd";
import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("TodoApp")) || [];
};

const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("TodoApp", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    const actionAdd = { type: "add", payload: newTodo };
    dispatch(actionAdd);
  };

  const handleDeleteTodo = (id) => {
    const actionDel = { type: "delete", payload: id };
    dispatch(actionDel);
  };

  const handleToggleTodo = (id) => {
    const actionDel = { type: "toggle", payload: id };
    dispatch(actionDel);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
