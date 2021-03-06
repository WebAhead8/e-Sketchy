import React from "react";
import SketchyList from "./SketchyList";
import Cart from "./Cart";
import "../style/Store.css";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

function Store() {
  const [catFilter, setCatFilter] = React.useState("all");
  const [priceFilter, setPriceFilter] = React.useState([9.99, 99.99]);

  const [totalPrice, setTotalPrice] = React.useState(
    JSON.parse(localStorage.getItem("addToCart"))?.totalPrice || 0
  );

  const [array, setArray] = React.useState(
    JSON.parse(localStorage.getItem("addToCart"))?.arrayOfPrices || []
  );

  return (
    <main>
      <section className="filters-sec">
        <form className="filters">
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>
      <section className="cart-icon">
        <Cart totalPrice={totalPrice} array={array} />
      </section>
      <section className="sketches">
        <h2> Welcome To Our Store! </h2>
        <SketchyList
          array={array}
          setArray={setArray}
          setTotalPrice={setTotalPrice}
          catFilter={catFilter}
          priceFilter={priceFilter}
          totalPrice={totalPrice}
        />
      </section>
    </main>
  );
}

export default Store;
