import React from "react";

function Cart({ totalPrice, array }) {
  const [toggle, setToggle] = React.useState(false);

  // ------------------
  function addItemToCart() {
    // if (addToCart) {
    const addToCart = localStorage.getItem("addToCart");

    localStorage.setItem("addToCart", array + totalPrice);
  }
  // }
  addItemToCart();
  // --------------------
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Show Cart<i className="fa fa-shopping-cart"></i>
      </button>

      {toggle && (
        <div className="cartdiv">
          <div>
            {array}
            <br />$ Total Price :{totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
