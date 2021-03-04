import React, { useState, useEffect } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [loggedUser, setUser] = React.useState("");
  console.log("pos ", loggedUser);

  const user = localStorage.getItem("username");
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  });

  function logOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    setUser("");
    window.location.href = "/";
  }

  if (loggedUser) {
    return (
      <header>
        <i className="logo">
          <span className="e-logo">E</span>Sketchy
        </i>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="loggeduser">Hello, {loggedUser} </li>
            <li>
              <a href="/products">Seller Panel</a>
            </li>
            <li>
              <button className="logout" onClick={logOut}>
                LogOut
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <i className="logo">
          <span className="e-logo">E</span>Sketchy
        </i>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/login">Login/Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Navbar;
