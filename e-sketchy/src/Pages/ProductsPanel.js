import React,  { useState, useEffect }  from "react";
import AddProducts from "../components/AddProd";
function ProductsPanel(){
return(
    <div className="products-panel">
        <nav>
            <ul>
                <li>Add Product</li>
                <li>Edit Product</li>
                <li>Delete Product</li>
            </ul>
        </nav>
        <AddProducts />
    </div>
);
}
export default ProductsPanel;