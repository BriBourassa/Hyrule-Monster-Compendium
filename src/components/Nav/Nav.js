import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <h1 className="title">Hyrule Monster compendium</h1>
        <div className="buttons-container">
          <NavLink to="/">
            <button className="button">home</button>
          </NavLink>
          <NavLink to="/favs">
            <button className="button">favorites</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Nav;
