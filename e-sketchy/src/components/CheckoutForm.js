import React from "react";
import "../style/Form.css";

function CheckoutForm(props) {
  return (
    <div className="cont">
      <form className="form">
        <label> Type Your Payment Information</label>
        <label>Full Name :</label>
        <input type="text" placeholder="name" />
        <label>Card Number :</label>
        <input type="number" paceholder="CardNumber" />
        <label>CVV :</label>
        <input type="number" placeholder="cvv" />
        <label>Email :</label>
        <input type="email" placeholder="Email" />
        <label>Address :</label>
        <input type="text" placeholder="City" />
        <input type="number" placeholder="PostalCode" />
        <button type="submit"> Confirm Your Payment </button>
      </form>
    </div>
  );
}
export default CheckoutForm;
