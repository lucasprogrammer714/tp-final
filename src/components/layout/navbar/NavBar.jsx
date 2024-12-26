import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-title-size">
          <Link to="/">
            {" "}
            <img
              src="https://res.cloudinary.com/dadhmr1hw/image/upload/v1733097403/logo_c7uzej.png"
              alt="techno-world-logo"
              className="size-logo"
            />
          </Link>
          <h3>TechnoWorld</h3>
        </div>
        <div className="links-styles">
          <Link to="/category/Gaming">Gaming</Link>
          <Link to="/category/PC-Notebooks">PC-Notebooks</Link>
          <Link to="/category/SmartPhones">SmartPhones</Link>
          <Link to="/category/SmartWatch">SmartWatch</Link>
          <Link to="/category/TV">TV</Link>
        </div>
        <div>
          <Link to="/cart">
            <CartWidget></CartWidget>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
