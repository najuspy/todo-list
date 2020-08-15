import React, { useState } from "react";

import "./addToDo.styles.css";

const AddToDo = ({ addTODO }) => {
  const initialFormState = { text: "" };
  const [todo, setTodo] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTODO(todo);
    setTodo(initialFormState);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Add Todo</label>
        <input
          type="text"
          placeholder="Add a TODO"
          name="text"
          value={todo.text}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddToDo;
