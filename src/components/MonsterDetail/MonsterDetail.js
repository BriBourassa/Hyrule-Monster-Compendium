import React from "react";
import './MonsterDetail.css'

const MonsterDetail = ({ monster, favoriteMonster }) => {
    // console.log(monster)
    const {name, image, description, drops} = monster
  return (
    <div className="monster-detail-view">
      <h1>{name.toUpperCase()}</h1>
      <img src={image} />
      <p>{description}</p>
      {(drops && drops.length > 0) && <p>Drops:{drops.join(', ')}</p>}
      <button onClick={() => favoriteMonster(monster)}>Favorite!</button>
    </div>
  );
};

export default MonsterDetail;
