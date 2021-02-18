import React from "react";

function Cart({ totalPrice, array }) {
  const [toggle, setToggle] = React.useState(false);

  function addItemToCart() {
    const addToCart = localStorage.getItem("addToCart");

    localStorage.setItem(
      "addToCart",
      JSON.stringify({
        arrayOfPrices: array,
        totalPrice: totalPrice,
      })
    );
  }
  addItemToCart();

  return (
    <div className="cart-icon">
      <button onClick={() => setToggle(!toggle)}>Cart</button>
      {toggle && (
        <div className="cartdiv">
          <i>Items In Your Cart </i>
          <br />
          {array}
          <br />$ Total Price :{totalPrice.toFixed(2)}
          <br />
          <a href="checkout">Proceed to checkout</a>
        </div>
      )}
    </div>
  );
}

export default Cart;
