import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navBar.css"

const NavBar = () => {
  return (
    <div className = "navbar">
      <h3>TechnoWorld</h3>

      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;
