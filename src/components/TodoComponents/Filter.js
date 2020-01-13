import React from "react";

export const Filter = ({ filterTerm, updateFilterTerm }) => {
  return (
    <form>
      <label htmlFor="search">Filter Todos:</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={e => updateFilterTerm(e.target.value)}
        value={filterTerm}
      />
    </form>
  );
};
