import React from "react";
import SketchyList from "./SketchyList";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";

function Store() {
  const [catFilter, setCatFilter] = React.useState("all");
  const [priceFilter, setPriceFilter] = React.useState([9.99, 99.99]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [array, setArray] = React.useState([]);
  return (
    <main>
      <section className="sketches">
        <Cart totalPrice={totalPrice} array={array} />
      </section>
      <section className="sketches">
        <h2>sketches</h2>
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
