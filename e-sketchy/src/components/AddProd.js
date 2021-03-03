import React,  { useState, useEffect }  from "react";
import ReactHTMLDatalist from "react-html-datalist";

function AddProducts(){
return(
    <div className="products-add">
        <form>
            <label>Add Product</label>
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder="Product Pic Url" />
            <input type="text" placeholder="About Product" />
            <input type="number" placeholder="Price" />
            <ReactHTMLDatalist
            options={[
              { text: "portraits", value: "1" },
              { text: "anime", value: "2" },
              { text: "tablets", value: "3" },
              { text: "pens", value: "4" },
              { text: "sketchbook", value: "6" },
              { text: "brushes", value: "5" }
            ]}
      />
        </form>
    </div>
);
}
export default AddProducts;