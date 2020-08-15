import React from "react";

import "./listViewer.styles.css";

import { ToDo } from "../todo/todo.component";

const ListViewer = ({ toDoList, deleteItem }) => {
  return (
    <div className="list-viewer">
      {toDoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default ListViewer;
