import React from "react";
import Nav from "../Nav/Nav";

const FavList = ({ favMonsters, deleteFavMonster }) => {
    // console.log(monsters)
  const allFavMonsters = favMonsters.map((favMonster) => {
    return (
 
        <div className="monster-view" key={favMonster.id}>  
          <img src={favMonster.image} />
          <button onClick={() => deleteFavMonster(favMonster)}>delete me!</button>
        </div>
    
    );
  });
  return <>{allFavMonsters}</>;
};

export default FavList;
