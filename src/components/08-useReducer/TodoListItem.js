import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ index, todo, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li className="list-group-item"  key={todo.id}>
      <p
        onClick={() => handleToggleTodo(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
