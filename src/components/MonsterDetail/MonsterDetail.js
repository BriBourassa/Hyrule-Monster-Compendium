import React from "react";

const MonsterDetail = ({ monster, favoriteMonster }) => {
    const {name, image, description, drops} = monster
  return (
    <div className="monster-view">
      <h1>{name}</h1>
      <img src={image} />
      <p>{description}</p>
      <p>{drops}</p>
      
      <button onClick={() => favoriteMonster(monster)}>Favorite!</button>
    </div>

  );
};

export default MonsterDetail;
