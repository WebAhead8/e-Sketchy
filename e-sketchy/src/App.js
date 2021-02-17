import "./App.css";
import React from "react";
import CategoryFilter from "./components/CategoryFilter.js";
import PriceFilter from "./components/PriceFilter";
import SketchyList from "./components/SketchyList";
import Cart from "./components/Cart";

function App() {
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

export default App;
