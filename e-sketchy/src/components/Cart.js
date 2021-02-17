import React from "react";

function Cart({ totalPrice }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div>
      <div className="shopping-cart"></div>
      <button onClick={() => setToggle(!toggle)}>Show Cart</button>
      {toggle && <div>{totalPrice}</div>}
    </div>
  );
}
export default Cart;
