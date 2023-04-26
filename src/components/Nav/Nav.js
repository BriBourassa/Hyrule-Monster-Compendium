import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ monsters, setDisplayedMonsters }) => {
  return (
    <nav className="nav-bar-wrapper">
      <h1 className="title">Hyrule Monster Compendium</h1>
      <div className="nav-bar-buttons">
        <Link to="/">
          <button className="button-home" onClick={() => setDisplayedMonsters(monsters)}>
            Home
          </button>
        </Link>
        <Link to="/favs">
          <button className="button-fav">Favorites</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
