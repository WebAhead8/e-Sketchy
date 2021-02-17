import "./App.css";
import React from "react";
import CategoryFilter from "./Components/CategoryFilter.js";
import PriceFilter from "./Components/PriceFilter";
import SketchyList from "./Components/SketchyList";
import Navbar from "./Components/Navbar";

function App() {
  const [catFilter, setCatFilter] = React.useState("all");
  const [priceFilter, setPriceFilter] = React.useState([9.99, 99.99]);
  return (
    <main>
      <Navbar />
      <section className="filters">
        <h1>e-Sketchy</h1>
        <h2>Filters</h2>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>
      <section className="sketches">
        <h2>sketches</h2>
        <SketchyList catFilter={catFilter} priceFilter={priceFilter} />
      </section>
    </main>
  );
}

export default App;
