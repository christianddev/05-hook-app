import React from "react";
import PropTypes from 'prop-types';
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description?.trim()?.length > 1) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
      // const actionAdd = { type: "add", payload: newTodo };
      handleAddTodo(newTodo);
      reset();
    }
  };
  return (
    <>
      <h4>Agregar</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Learn.."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary mt-1 form-control">
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
};

export default TodoAdd;
