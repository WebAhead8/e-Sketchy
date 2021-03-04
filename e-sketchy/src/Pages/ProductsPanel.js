import React, { useState, useEffect } from "react";
import AddProducts from "../components/AddProd";
function ProductsPanel() {
  return (
    <div className="products-panel">
      <AddProducts />
    </div>
  );
}
export default ProductsPanel;
