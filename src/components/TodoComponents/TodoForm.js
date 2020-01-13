import React from "react";

export const TodoForm = ({
  description,
  updateDescription,
  addTodo,
  removeCompleted
}) => {
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
      <button onClick={e => removeCompleted(e)}>clear completed</button>
    </form>
  );
};
