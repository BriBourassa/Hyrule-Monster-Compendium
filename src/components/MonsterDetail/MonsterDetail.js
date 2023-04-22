import React from "react";
import './MonsterDetail.css'

const MonsterDetail = ({ monster, favoriteMonster }) => {
    const {name, image, description, drops, common_locations} = monster
  return (
    <div className="monster-detail-view">
      <h1>{name.toUpperCase()}</h1>
      <img src={image} />
      <p>{description}</p>
      {(common_locations && common_locations.length > 0) && <p>Common Locations:{common_locations.join(', ')}</p>}
      {(drops && drops.length > 0) && <p>Drops:{drops.join(', ')}</p>}
      <button onClick={() => favoriteMonster(monster)}>Favorite!</button>
    </div>
  );
};

export default MonsterDetail;
