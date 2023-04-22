import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import MonsterList from "../MonsterList/MonsterList";
import Nav from "../Nav/Nav";
import MonsterDetail from "../MonsterDetail/MonsterDetail";
import FavList from "../FavList/FavList";


const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState("");
  const [favMonsters, setFavMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const getMonsters = async () => {
    const url =
      "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
    try {
      const response = await fetch(url);
      const monsterArray = await response.json();
      setMonsters(monsterArray.data);
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

  const deleteFavMonster = (favMonster) => {
    console.log(favMonster);
    // find by id, remove from array
  };

  const searchMonsters = () => {
    const searchedMonsters = [searchedMonsters]
    
  }

  console.log(monsters.filter(monster => monster.name.toLowerCase().includes(filteredMonsters)))

  return (
    monsters.length > 0 && (
    <>
      
        <Nav />
    
      <main className="app">
         {/* <h2>Click on a monster or search by name/ location!</h2>
        <input type="text" placeholder="Search Monster" className="search" onChange={(event) => setFilteredMonsters(event.target.value)}
      /> */}
        <Switch>

          <Route exact path={"/"}>
            <MonsterList monsters={monsters} />
          </Route>

          <Route path={"/favs"}>
            <FavList
              favMonsters={favMonsters}
              deleteFavMonster={deleteFavMonster}
            />
          </Route>
          <Route path={"/monsters/:monsterid"} render={({ match }) => {
            console.log(match.params, 'setting key! to monsterid,  and value comes from NavLink')
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
    )
  );
};
export default App