import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <nav>
      <h2>Logo Here.</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <FiShoppingBag />
        <p>{0}</p>
      </div>
    </nav>
  );
};

export default Header;
