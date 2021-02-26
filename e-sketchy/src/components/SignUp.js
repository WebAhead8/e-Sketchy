import React from "react";
import "../style/Form.css";

// function thanksMsg() {
//   alert("Thanks, You have been successfully signed in :)");
// }

function SignUp() {
  function signUpHandler(event) {
    // event.preventDefault();
    const userData = {
      username: username,
      email: email,
      user_pass: password,
      loc: location,
    };

    postUsers(url, userData);
  }
  const checkResponse = (response) => {
    if (response.status !== 201) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };

  const postUsers = (url, userData) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(checkResponse)
      .catch((err) => {
        throw new Error(`fetch getData failed ${err}`);
      });
  };

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [location, setLocation] = React.useState("");
  const url = `http://localhost:4000/users`;
  //   console.log("email: ", email);

  return (
    <div className="cont">
      <form className="form">
        <label> Sign Up</label>
        <label>Username :</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email :</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password :</label>
        <input type="password" placeholder="Confirm Password" required />
        <label>Location :</label>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit" onClick={signUpHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default SignUp;
