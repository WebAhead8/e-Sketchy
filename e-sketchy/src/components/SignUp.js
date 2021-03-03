import React from "react";
import "../style/Form.css";
import postUsers from "../utils/signUpFetch.js";

function SignUp() {
  const [signup, setSignup] = React.useState({
    username: "",
    email: " ",
    user_pass: "",
    loc: "",
  });

  function handelClick() {
    postUsers(signup);
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
      <form className="form">
        <label> Sign Up</label>
        <label>Username :</label>
        <input
          type="text"
          placeholder="username"
          name="username"
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
          required
        />
        <label>Confirm Password :</label>
        <input type="password" placeholder="Confirm Password" required />
        <label>Location :</label>
        <input
          type="text"
          placeholder="Location"
          name="loc"
          onChange={handelChange}
          required
        />
        <i>
          {" "}
          You already have an account? <a href="/login">Login</a>
        </i>
        <button type="submit" onClick={handelClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
