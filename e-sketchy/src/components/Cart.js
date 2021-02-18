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
      <button onClick={() => setToggle(!toggle)}>
        <img
          src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-shopping-cart-icon-shopping-cart-by-vexels.png"
          className="cartico"
        />
      </button>
      {toggle && (
        <div className="cartdiv">
          <div>
            <i>Items In Your Cart </i>
            <br />
            {array.map((item) => {
              return (
                <div>
                  <br />
                  <h3>{item}</h3>
                </div>
              );
            })}
            {/* {array} */}
            <br />
            <span className="total">Total Price :${totalPrice.toFixed(2)}</span>
            <a href="checkout">Proceed to checkout</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
