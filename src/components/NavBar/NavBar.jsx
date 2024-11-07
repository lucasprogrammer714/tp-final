import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css"

const NavBar = () => {
  return (
    <div className = "navbar">
      <h3>NavBar</h3>

      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;
