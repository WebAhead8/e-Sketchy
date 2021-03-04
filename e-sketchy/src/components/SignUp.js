import React, { useState, useEffect } from "react";
import "../style/Form.css";
import postUsers from "../utils/signUpFetch.js";

function SignUp() {
  const [signup, setSignup] = React.useState({
    username: "",
    email: " ",
    user_pass: "",
    loc: "",
    user_pass2: "",
  });
  const [worrning, setWorrning] = React.useState("");

  function handelClick(e) {
    e.preventDefault();

    if (signup.user_pass2 == signup.user_pass) {
      setWorrning("");
      postUsers(signup);
      alert("Thanks for joining");
      window.location.href = "/login";
    } else {
      setWorrning("passord not match");
    }
  }
  function handelChange(event) {
    const { name, value } = event.target;
    setSignup((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="cont">
      <form onSubmit={handelClick} className="form">
        <label> Sign Up</label>
        <label>Username :</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          minlength="3"
          maxlength="20"
          onChange={handelChange}
          required
        />
        <label>Email :</label>
        <input
          type="email"
          placeholder="Email"
          onChange={handelChange}
          name="email"
          required
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="user_pass"
          onChange={handelChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />

        <label>Confirm Password :</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="user_pass2"
          onChange={handelChange}
          required
        />

        <label>Location :</label>
        <input
          type="text"
          placeholder="Location"
          name="loc"
          onChange={handelChange}
          required
        />
        <i className="toto">
          {" "}
          Already have an account? <a href="/login"> Login </a>{" "}
        </i>
        <output className="error">{worrning}</output>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
