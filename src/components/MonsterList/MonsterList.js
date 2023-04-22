import React from "react";
import "./MonsterList.css";
import MonsterCard from "../MonsterCard/MonsterCard";

const MonsterList = ({ monsters }) => {
  const allMonsters = monsters.map((monster) => {
    return(
        <MonsterCard 
            id = {monster.id}
            image ={monster.image}
            key = {monster.id}
        />
        )
    });
    return (
        <div className="monster-container">
            {allMonsters}
        </div>
    );
};

export default MonsterList;
