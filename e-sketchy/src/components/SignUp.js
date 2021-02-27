import React from "react";
import "../style/Form.css";

function SignUp() {
  const [signup, setSignup] = React.useState({
    username: "",
    email: " ",
    password: "",
    location: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;
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
          value={signup.username}
          onChange={handelChange}
          required
        />
        <label>Email :</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={signup.email}
          onChange={handelChange}
          required
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handelChange}
          value={signup.password}
          required
        />
        <label>Confirm Password :</label>
        <input type="password" placeholder="Confirm Password" required />
        <label>Location :</label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={signup.location}
          onChange={handelChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignUp;
