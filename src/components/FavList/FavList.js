import React, { useEffect, useState } from "react"

const FavList = ({ favMonsters, deleteFavMonster }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(favMonsters.length > 0){
      setIsLoading(false)
    }
  }, [favMonsters])

  const allFavMonsters = 
  favMonsters.length > 0 ? (
    favMonsters.map((favMonster) => {
      return (
        <div className="monster-view" key={favMonster.id}>
          <img src={favMonster.image} alt={`favMonster${favMonster.id}`}/>
          <button onClick={() => deleteFavMonster(favMonster.id)}>delete me!</button>
        </div>
      )
    })
  ) : (
    <div className="monster-view">
      <h2>No favorite monsters</h2>
    </div>
  )
    return (
      // <div>
      //   {isLoading ? (
      //     <h2>Loading...</h2>
      //   ) : (
      //     allFavMonsters
      //   )}
    
      // </div>

      <div>
        {allFavMonsters}
      </div>
    )

  // const allFavMonsters = favMonsters.map((favMonster) => {
    // return (
      // <div className="monster-view" key={favMonster.id}>
      //   <img src={favMonster.image} />
      //   <button onClick={() => deleteFavMonster(favMonster)}>delete me!</button>
      // </div>
  //   );
  // });
  //   return <>
  //   {allFavMonsters}
  //   </>;
  // return <>{!allFavMonsters ? <h2>no monsters!!!!!!!!!!!!!!!!!!!!!</h2> : allFavMonsters}</>;
};

export default FavList;
