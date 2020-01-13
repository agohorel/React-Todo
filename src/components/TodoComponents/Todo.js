import React from "react";

export const Todo = ({ todo, toggleComplete }) => {
  return (
    <div onClick={() => toggleComplete(todo.id)}>
      <h2>{todo.task}</h2>
    </div>
  );
};
