import React from "react";
import sketches from "../data";
import "../style/Store.css";

function SketchyList({
  setArray,
  setTotalPrice,
  catFilter,
  priceFilter,
  item = 0,
}) {
  const [minPrice, maxPrice] = priceFilter;

  const sketchyItems = sketches
    .filter((sketchy) => catFilter === "all" || catFilter === sketchy.category)
    .filter((sketchy) => sketchy.price >= minPrice && sketchy.price <= maxPrice)
    .map((sketchy) => (
      <div className="product">
        <li key={sketchy.id} className="card">
          <img className="product-img" src={sketchy.pic_url} />
          <h3>{sketchy.name}</h3>
          <h5>{sketchy.dec}</h5>
          <div>${sketchy.price}</div>
          <button onClick={() => TotalPrice(sketchy.price, sketchy.name)}>
            Add to cart
          </button>
        </li>
      </div>
    ));
  function TotalPrice(sketchyPrice, sketchyName) {
    setTotalPrice((prevState) => (prevState += sketchyPrice));

    setArray((prevState) => {
      return prevState.concat([sketchyName + ": $" + sketchyPrice + "   "]);
    });
  }
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
