import React from "react";
import styled from "styled-components";

export const Todo = ({ todo, toggleComplete }) => {
  const strikeThrough = todo.completed ? "line-through" : "none";
  const color = todo.completed ? "#00B35B" : null;
  return (
    <TodoCard onClick={() => toggleComplete(todo.id)}>
      <TodoText style={{ textDecoration: strikeThrough, color }}>
        {todo.task}
      </TodoText>
    </TodoCard>
  );
};

const TodoCard = styled.div`
  background-color: #3c3c3c;
  padding: 0.5rem;
  min-width: 500px;

  &:nth-of-type(even) {
    background-color: #4c4c4c;
  }

  &:hover {
    cursor: pointer;
    background-color: #6c6c6c;
  }
`;

const TodoText = styled.div`
  font-size: 24px;
`;
