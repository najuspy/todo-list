import React from "react";

import "./todo.styles.css";

export const ToDo = ({ todo, deleteItem }) => {
  const { id, text } = todo;
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="fas fa-trash" onClick={deleteItem} />
    </div>
  );
};
