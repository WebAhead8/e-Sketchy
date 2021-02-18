import React from "react";

function Cart({ totalPrice, array }) {
  const [toggle, setToggle] = React.useState(false);

  function addItemToCart() {
    const addToCart = localStorage.getItem("addToCart");

    localStorage.setItem("addToCart", array + totalPrice);
  }
  addItemToCart();

  return (
    <div className="cart-icon">
      <button onClick={() => setToggle(!toggle)}>Cart</button>
      {toggle && (
        <div className="cartdiv">
          <div>
            <i>Items In Your Cart </i>
            <br />
            {array}
            <br />$ Total Price :{totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
