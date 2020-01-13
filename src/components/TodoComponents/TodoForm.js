import React from "react";

import { Form } from "../../styles/form";

export const TodoForm = ({
  description,
  updateDescription,
  addTodo,
  removeCompleted
}) => {
  return (
    <Form>
      <label htmlFor="input">Enter a new todo:</label>
      <input
        type="text"
        id="input"
        name="input"
        onChange={e => updateDescription(e.target.value)}
        value={description}
      />
      <div>
        <button onClick={e => addTodo(e, description)}>add</button>
        <button onClick={e => removeCompleted(e)}>clear completed</button>
      </div>
    </Form>
  );
};
