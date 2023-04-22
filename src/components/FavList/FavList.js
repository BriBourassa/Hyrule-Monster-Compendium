import React from "react";

// import { NavLink } from "react-router-dom";

const FavList = ({ favMonsters, deleteFavMonster }) => {
  console.log(favMonsters);
  const allFavMonsters = favMonsters.map((favMonster) => {
    return (
      <div className="monster-view" key={favMonster.id}>
        <img src={favMonster.image} />
        <button onClick={() => deleteFavMonster(favMonster)}>delete me!</button>
      </div>
    );
  });
  //   return <>
  //   {allFavMonsters}
  //   </>;
  return <>{!allFavMonsters ? <h2>no monsters!!!!!!!!!!!!!!!!!!!!!</h2> : allFavMonsters}</>;
};

export default FavList;
