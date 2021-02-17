import React from "react";
import sketches from "../data";

function SketchyList({ catFilter, priceFilter }) {
  const [minPrice, maxPrice] = priceFilter;
  const sketchyItems = sketches
    .filter((sketchy) => catFilter === "all" || catFilter === sketchy.category)
    .filter((sketchy) => sketchy.price >= minPrice && sketchy.price <= maxPrice)
    .map((sketchy) => (
      <li key={sketchy.id} className="card">
        <img src={sketchy.pic_url} />
        <h3>{sketchy.name}</h3>
        <h5>{sketchy.dec}</h5>
        <div>${sketchy.price}</div>
        <button>Add to cart</button>
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

export default SketchyList;
