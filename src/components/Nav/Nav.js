import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <h1 className="title">Hyrule Monster compendium</h1>
        <div className="buttons-container">
          <Link to="/">
            <button className="button">home</button>
          </Link>

          <Link to="/favs">
            <button className="button">favorites</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Nav;
