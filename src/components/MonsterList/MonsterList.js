import React from "react";
import "./MonsterList.css";
import MonsterCard from "../MonsterCard/MonsterCard";

const MonsterList = ({ monsters }) => {
  const allMonsters = monsters.map((monster) => {
    return(
        <div className="card">
        <MonsterCard 
            id = {monster.id}
            image ={monster.image}
            key = {monster.id}
        />
        </div>
        )
    });
    return (
        <div className="monster-container">
            {allMonsters}
        </div>
    );
};

export default MonsterList;