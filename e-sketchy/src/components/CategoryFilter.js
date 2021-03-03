import React from "react";
import "../style/Filters.css";

const categories = [
  "all",
  "portrait",
  "anime",
  "brushes",
  "sketchbook",
  "pens",
  "tablets",
];

function CategoryFilter({ catFilter, setCatFilter }) {
  return (
    <fieldset className="filter">
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={cat === catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
          />
          {cat}
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
