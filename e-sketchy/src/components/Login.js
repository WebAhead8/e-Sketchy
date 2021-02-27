import React from "react";
import getData from "../utils/fetchBackend";

function Login() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <div className="cont">
      <form className="form">
        <label> Type Your Login Information</label>
        <label>Email :</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          require
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="City"
          onChange={(e) => setPassword(e.target.value)}
          require
        />
        <button type="submit" onSubmit={CheckUser(email, password)}>
          Login
        </button>
      </form>
    </div>
  );
}

function CheckUser(email, password) {
  const url = `http://localhost:4000/login/${email}${password}`;
  getData(url).then((data) => {
    console.log(data);
    if (data) {
      alert("Welcome Back");
    }
  });
}

export default Login;
