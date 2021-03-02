import React, { useState, useEffect } from "react";
import { login, getUser } from "../utils/fetchUsers";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", user_pass: "" });
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onChange = (stateKey) => ({ target }) =>
    setLoginData({ ...loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData).then((data) => {
      localStorage.setItem("access_token", data.access_token);
      setUser(data);
      setIsLoggedIn(true);
    });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    console.log("token ", token);
    if (token) {
      getUser(token)
        .then((data) => {
          console.log("The other data : ", data);
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");

    setUser({});
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1> Welcome Back! </h1>
        <i> {loginData.email} </i>
        <p> You can go shopping now! </p>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
  return (
    <div className="cont">
      <form className="form" onSubmit={onSubmit}>
        <label> Type Your Login Information</label>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange("email")}
          value={loginData.email}
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="user_pass"
          id="user_pass"
          onChange={onChange("user_pass")}
          value={loginData.user_pass}
        />
        <i>
          {" "}
          Don't have an account? <a href="/signin">Sign Up</a>
        </i>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;