import React from "react";
import { NavLink } from "react-router-dom";
import Monster from "../Monster/Monster";

const MonsterList = ({ monsters, handleMonsterView }) => {
  const allMonsters = monsters.map((monster) => {
    return (
      <NavLink to={`/monsters/${monster.id}`} key={monster.id}>
        <Monster
          key={monster.id}
          image={monster.image}
          handleMonsterView={handleMonsterView}
        />
      </NavLink>
    );
  });
  return <>{allMonsters}</>;
};

export default MonsterList;
