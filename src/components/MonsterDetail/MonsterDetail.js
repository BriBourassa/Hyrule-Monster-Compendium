import React from "react";
import "./MonsterDetail.css";

const MonsterDetail = ({ monster, favoriteMonster }) => {
  const { name, image, description, drops, common_locations } = monster
  const styles = {}
  return (
    <div className="monster-detail-view">
      <h1>{name.toUpperCase()}</h1>
      <img src={image} />
      <p>{description}</p>

      {common_locations && common_locations.length > 0 && (
        <dl>
          <dt>Common Locations:</dt>
          <dd>{common_locations.join(", ")}</dd>
        </dl>
      )}

      {drops && drops.length > 0 && (
        <dl>
          <dt>Drops:</dt>
          <dd>{drops.join(", ")}</dd>
        </dl>
      )}

      <button onClick={() => favoriteMonster(monster)}>Favorite!</button>
    </div>
  );
};

export default MonsterDetail;
