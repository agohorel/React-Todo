import React from "react";

import { Todo } from "./Todo";

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <Todo todo={todo}></Todo>
      ))}
    </>
  );
};
