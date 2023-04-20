import React from "react";
import { NavLink } from "react-router-dom";
import Monster from "../Monster/Monster";

const MonsterList = ({ monsters, handleMonsterView }) => {
  const allMonsters = monsters.map((monster) => {
    return (
      <NavLink to={`/monsters/${monster.id}`} key={monster.id}>
        <Monster
          key={monster.id}
        //   name={monster.name}
          image={monster.image}
        //   description={monster.description}
        //   drops={monster.drops}
          handleMonsterView={handleMonsterView}
        />
      </NavLink>
    );
  });
  return <>{allMonsters}</>;
};

export default MonsterList;
