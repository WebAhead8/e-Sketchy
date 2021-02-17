import React from "react";
import sketches from "../data";

function SketchyList({ catFilter, priceFilter }) {
  const [minPrice, maxPrice] = priceFilter;
  const sketchyItems = sketches
    .filter((sketchy) => catFilter === "all" || catFilter === sketchy.category)
    .filter((dish) => sketchy.price >= minPrice && sketchy.price <= maxPrice)
    .map((sketchy) => (
      <li key={sketchy.id} className="card">
        <img src={sketchy.imgUrl} />
        <h3>{sketchy.name}</h3>
        <div>£{sketchy.price.toFixed(2)}</div>
      </li>
    ));
  return (
    <ul className="grid">
      {sketchyItems.length ? (
        sketchyItems
      ) : (
        <li className="card">No results found</li>
      )}
    </ul>
  );
}

export default DishList;
