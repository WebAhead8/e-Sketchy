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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a className="cart-btn">
        <img
          className="cart-icon"
          src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg"
        />
      </a>
    </header>
  );
}

export default Navbar;
