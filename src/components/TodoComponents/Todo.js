import React from "react";

export const Todo = ({ todo, toggleComplete }) => {
  const strikeThrough = todo.completed ? "line-through" : "none";
  return (
    <div onClick={() => toggleComplete(todo.id)}>
      <h2 style={{ textDecoration: strikeThrough }}>{todo.task}</h2>
    </div>
  );
};
