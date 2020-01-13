import React from "react";

import { Form } from "../../styles/form";

export const Filter = ({ filterTerm, updateFilterTerm }) => {
  return (
    <Form>
      <label htmlFor="search">filter todos:</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={e => updateFilterTerm(e.target.value)}
        value={filterTerm}
      />
    </Form>
  );
};
