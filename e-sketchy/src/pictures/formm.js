import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="username" />
      <input type="number" paceholder="CardNumber" />
      <input type="number" placeholder="cvv" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="City" />
      <input type="number" placeholder="PostalCode" />
      <button type="submit"> Confirm Your Payment </button>
    </form>
  );
}
export default Form;
