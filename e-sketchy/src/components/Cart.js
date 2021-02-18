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
          <div>
            <i>Items In Your Cart </i>
            <br />
            {/* {array.map((item) => {
              <h7>{item}</h7>;
            })} */}
            {array}
            <br />$ Total Price :{totalPrice.toFixed(2)}
            <br />
            <a href="checkout">Proceed to checkout</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
