import React from "react";

function PriceFilter({ priceFilter, setPriceFilter }) {
  return (
    <fieldset className="price">
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          className="price-bar"
          type="range"
          id="min-price"
          min="9.99"
          max="99.99"
          step="0.25"
          value={priceFilter[0]}
          onChange={(e) => setPriceFilter([e.target.value, priceFilter[1]])}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          className="price-bar"
          type="range"
          id="max-price"
          min="9.99"
          max="99.99"
          step="0.25"
          value={priceFilter[1]}
          onChange={(e) => setPriceFilter([priceFilter[0], e.target.value])}
        />
      </label>
    </fieldset>
  );
}

export default PriceFilter;
