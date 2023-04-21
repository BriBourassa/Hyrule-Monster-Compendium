import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

const MonsterList = ({ monsters }) => {
    console.log(monsters)
  const allMonsters = monsters.map((monster) => {
    return (
      <NavLink to={`/monsters/${monster.id}`} key={monster.id}>
        <div className="monster-view">
          <img src={monster.image} />
        </div>
      </NavLink>
    );
  });
  return <>{allMonsters}</>;
};

export default MonsterList;
