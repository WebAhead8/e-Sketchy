import React from "react";
import "../style/Store.css";
import "../style/Filters.css";
import getData from "../utils/fetchBackend";

const API_BASE = "http://localhost:4000";
function SketchyList({
  setArray,
  setTotalPrice,
  catFilter,
  priceFilter,
  array,
  totalPrice,
}) {
  const [minPrice, maxPrice] = priceFilter;
  const [prodData, setProdData] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem(
      "addToCart",
      JSON.stringify({
        arrayOfPrices: array,
        totalPrice: totalPrice,
      })
    );
  }, [array, totalPrice]);
  React.useEffect(() => {
    const url = `http://localhost:4000/products`;
    getData(url).then((data) => {
      setProdData(data);
    });
  }, []);
  if (!prodData) {
    return <h3>...Loading</h3>;
  }

  const sketchyItems = prodData
    .filter((sketchy) => catFilter === "all" || catFilter === sketchy.category)
    .filter((sketchy) => sketchy.price >= minPrice && sketchy.price <= maxPrice)
    .map((sketchy) => (
      <div className="product">
        <li key={sketchy.id} className="card">
          <img className="product-img" src={sketchy.pic_url} />
          <h3>{sketchy.pro_name}</h3>
          <h5>{sketchy.descr}</h5>
          <div>${sketchy.price}</div>
          <button
            onClick={() => {
              TotalPrice(sketchy.price, sketchy.pro_name);
            }}
          >
            Add to cart
          </button>

          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Customres reviews
          </button>
        </li>
      </div>
    ));
  function TotalPrice(sketchyPrice, sketchyName) {
    setTotalPrice((prevState) => (prevState += +sketchyPrice));

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
