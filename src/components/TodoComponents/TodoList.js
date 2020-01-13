import React from "react";

import { Todo } from "./Todo";

export const TodoList = ({ todos, toggleComplete }) => {
  return (
    <>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete}></Todo>
      ))}
    </>
  );
};
