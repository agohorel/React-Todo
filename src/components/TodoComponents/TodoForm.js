import React from "react";

export const TodoForm = ({ description, updateDescription, addTodo }) => {
  return (
    <form>
      <label htmlFor="input">Enter a new todo:</label>
      <input
        type="text"
        id="input"
        name="input"
        onChange={e => updateDescription(e.target.value)}
        value={description}
      />
      <button onClick={e => addTodo(e, description)}>add</button>
      <button>clear completed</button>
    </form>
  );
};
