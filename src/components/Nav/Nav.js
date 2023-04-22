import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar-wrapper">
      <h1 className="title">Hyrule Monster compendium</h1>
      <div className="nav-bar-buttons">
        <Link to="/">
          <button className="button">home</button>
        </Link>
        <Link to="/favs">
          <button className="button">favorites</button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;