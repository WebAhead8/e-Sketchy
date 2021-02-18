import React from "react";
import SketchyList from "./SketchyList";
import Cart from "./Cart";
import "../style/Store.css";

function Store() {
  const [catFilter, setCatFilter] = React.useState("all");
  const [priceFilter, setPriceFilter] = React.useState([9.99, 99.99]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [array, setArray] = React.useState([]);
  return (
    <main>
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
        />
      </section>
    </main>
  );
}

export default Store;
