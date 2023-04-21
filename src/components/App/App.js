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

  return (
    monsters.length > 0 && (
      <main className="app">
        <Route
          exact path={"/"}
          render={() => {
            return (
              <div className="monster-container">
                <Nav />
                <MonsterList monsters={monsters} />
              </div>
            )}}/>
        <Route
          path={"/favs"}
          render={() => {
            return (
              <div>
                <Nav />
                <FavList
                  favMonsters={favMonsters}
                  deleteFavMonster={deleteFavMonster} />
              </div>
            )}}/>
        <Route
          path={"/monsters/:monsterid"}
          render={({ match }) => {
            const foundMonster = monsters.find(
              (monster) => monster.id === +match.params.monsterid
            );
            return (
              <div>
                <Nav />
                <MonsterDetail
                  monster={foundMonster}
                  handleMonsterView={handleMonsterView(match.params.monsterid)}
                  favoriteMonster={favoriteMonster}
                />
              </div>
            )}}/>
      </main>
    )
  );
};

export default App;
