import React from "react";
import categories from "../categories.ts";

export default function ExpenseFilter({ filterFor }) {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => filterFor(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
