import React from "react";

// import { NavLink } from "react-router-dom";

const FavList = ({ favMonsters, deleteFavMonster }) => {
  console.log(favMonsters)
  const allFavMonsters = favMonsters.map((favMonster) => {
    return (
      
  

        <div className="monster-view" key={favMonster.id}>
          <img src={favMonster.image} />
          <button onClick={() => deleteFavMonster(favMonster)}>
            delete me!
          </button>
        </div>
      
    );
  });
  return <>{allFavMonsters},</>;
};

export default FavList;
