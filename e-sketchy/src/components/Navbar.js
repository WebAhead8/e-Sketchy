import React from "react";
import "../style/Navbar.css";

function Navbar() {
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
            <a href="/signup">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
