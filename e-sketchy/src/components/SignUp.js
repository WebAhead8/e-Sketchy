import React from "react";
import "../style/Form.css";

function SignUp() {
  const [signup, setSignup] = React.useState({
    username: "",
    email: " ",
    user_pass: "",
    loc: "",
  });
  const url = `http://localhost:4000/users`;

  const checkResponse = (response) => {
    if (response.status !== 201) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };

  const postUsers = (url, signup) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(signup),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(checkResponse)
      .catch((err) => {
        throw new Error(`fetch getData failed ${err}`);
      });
  };
  function handelClick() {
    setSignup({
      username: signup.username,
      email: signup.email,
      user_pass: signup.password,
      loc: signup.location,
    });
    postUsers(url, signup);
  }

  return (
    <div className="cont">
      <form className="form">
        <label> Sign Up</label>
        <label>Username :</label>
        <input
          type="text"
          placeholder="username"
          value={signup.username}
          name="username"
          required
        />
        <label>Email :</label>
        <input type="email" placeholder="Email" name="email" required />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <label>Confirm Password :</label>
        <input type="password" placeholder="Confirm Password" required />
        <label>Location :</label>
        <input type="text" placeholder="Location" name="location" required />
        <button type="submit" onClick={handelClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
