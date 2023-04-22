import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MonsterList from "../MonsterList/MonsterList";
import Nav from "../Nav/Nav";
import MonsterDetail from "../MonsterDetail/MonsterDetail";
import FavList from "../FavList/FavList";
import Search from "../Search/Search";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState("");
  const [favMonsters, setFavMonsters] = useState([]);
  // const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [loading, setLoading] = useState(true)

  const getMonsters = async () => {
    const url =
      "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
    try {
      const response = await fetch(url);
      const monsterArray = await response.json();
      setMonsters(monsterArray.data);
      setLoading(false)
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getMonsters();
  }, []);

  const handleMonsterView = (id) => {
    const newMonster = monsters.find((monster) => {
      return monster.id === +id;
    });
    return (
      <MonsterDetail monster={newMonster} favoriteMonster={favoriteMonster} />
    );
  };

  const favoriteMonster = (monster) => {
    const favs = [monster, ...favMonsters];
    setFavMonsters(favs);
    // store only ids, not whole obj
    // dont store twice
    // local storage? to persist
  };

  const deleteFavMonster = (id) => {
  
    // match by id
    const newFavMonsters = favMonsters.filter((monster) => monster.id !== id)
    setFavMonsters(newFavMonsters)
  };

  // const searchMonsters = (searchInput) => {
  //   upper and lower case

//change hook state of monsters
// display what matches the 

  // else return monsters
    
  // }

  // console.log(monsters.filter(monster => monster.name.toLowerCase().includes(filteredMonsters)))

  return (
    // monsters.length > 0 && (
    <div className="app">
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <Nav />
          <Search monsters={monsters}/>

      <main className="main-wrapper">
 
        <Switch>

          <Route exact path={"/"}>
            <MonsterList monsters={monsters} />
          </Route>

          <Route exact path={"/favs"}>
            <FavList
              favMonsters={favMonsters}
              deleteFavMonster={deleteFavMonster}
              />
          </Route>

          <Route path={"/monsters/:monsterid"} render={({ match }) => {
            const foundMonster = monsters.find(
              (monster) => monster.id === +match.params.monsterid
              );
              return (
                <MonsterDetail
                monster={foundMonster}
                handleMonsterView={handleMonsterView(match.params.monsterid)}
                favoriteMonster={favoriteMonster}
                />
                )}}/>

        </Switch>
      </main>
                
      </>
    )}

     </div>
   
  );
};
export default App