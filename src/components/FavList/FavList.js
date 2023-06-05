import React, { useEffect, useState } from "react"
import './FavList.css'

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
        <div className="fav-monster-view" key={favMonster.id}>
          <img src={favMonster.image} alt={`favMonster${favMonster.id}`}/>
          <button className="button" onClick={() => deleteFavMonster(favMonster.id)}>Delete</button>
        </div>
      )
    })
  ) : (
    <div class="no-fav-text">
      <h2>No favorite monsters</h2>
    </div>
  )
    return (
      <div className="fav-monsters-display">
        {allFavMonsters}
      </div>
    )
};

export default FavList;
