import React from "react";
import "../style/Form.css";

function thanksMsg() {
  alert("Thanks, The team will ship your order soon.");
}
function CheckoutForm(props) {
  return (
    <div className="cont">
      <form className="form">
        <label> Type Your Payment Information</label>
        <label>Full Name :</label>
        <input type="text" placeholder="name" require />
        <label>Card Number :</label>
        <input type="number" paceholder="CardNumber" require />
        <label>CVV :</label>
        <input type="number" placeholder="cvv" require />
        <label>Email :</label>
        <input type="email" placeholder="Email" require />
        <label>Address :</label>
        <input type="text" placeholder="City" require />
        <input type="number" placeholder="PostalCode" require />
        <button type="submit" onClick={thanksMsg}>
          {" "}
          Confirm Your Payment{" "}
        </button>
      </form>
    </div>
  );
}
export default CheckoutForm;
