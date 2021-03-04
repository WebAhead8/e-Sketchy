import React, { useState, useEffect } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import addProduc from "../utils/productsFetch.js";
import "../style/Form.css";

function AddProducts() {
  // pro_name, pic_url, descr, price, category
  const [addProd, setAddProd] = React.useState({
    pro_name: "",
    pic_url: " ",
    descr: "",
    price: "",
    category: "",
  });

  function addProduct(e) {
    e.preventDefault();
    addProduc(addProd);
    console.log("Added ", addProd);
  }

  function setValues(event) {
    const { name, value } = event.target;
    setAddProd((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="products-add">
      <form className="prod-form" onSubmit={addProduct}>
        <label>Add Product</label>
        <input
          type="text"
          placeholder="Product Name"
          name="pro_name"
          onChange={setValues}
        />
        <input
          type="text"
          placeholder="Product Pic Url"
          name="pic_url"
          onChange={setValues}
        />
        <input
          type="text"
          placeholder="About Product"
          name="descr"
          onChange={setValues}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={setValues}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          onChange={setValues}
        />
        {/* <ReactHTMLDatalist
          options={[
            { text: "portraits", value: "1" },
            { text: "anime", value: "2" },
            { text: "tablets", value: "3" },
            { text: "pens", value: "4" },
            { text: "sketchbook", value: "6" },
            { text: "brushes", value: "5" },
          ]}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddProducts;
