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
  const [loading, setLoading] = useState(true);
  const [displayedMonsters, setDisplayedMonsters] = useState([]);

  useEffect(() => {
    getMonsters();
  }, []);

  const getMonsters = async () => {
    const url =
      "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
    try {
      const response = await fetch(url);
      const monsterArray = await response.json();
      setMonsters(monsterArray.data);
      setDisplayedMonsters(monsterArray.data);
      setLoading(false);
    } catch (errObj) {
      setError(errObj.message);
    }
  };

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
    const isDuplicate = favMonsters.find((fav) => fav.id === monster.id);
    if (!isDuplicate) {
      setFavMonsters(favs);
    }
  };

  const deleteFavMonster = (id) => {
    const newFavMonsters = favMonsters.filter((monster) => monster.id !== id);
    setFavMonsters(newFavMonsters);
  };

  return (
    <div className="app">
      {error && <h2>{error}</h2>}
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <Nav
            monsters={monsters}
            setDisplayedMonsters={setDisplayedMonsters}
          />
          <main className="main-wrapper">
            <Switch>
              <Route exact path={"/"}>
                <Search
                  monsters={monsters}
                  setDisplayedMonsters={setDisplayedMonsters}
                />
                <MonsterList monsters={displayedMonsters} />
              </Route>
              <Route exact path={"/favs"}>
                <FavList
                  favMonsters={favMonsters}
                  deleteFavMonster={deleteFavMonster}
                />
              </Route>
              <Route
                path={"/monsters/:monsterid"}
                render={({ match }) => {
                  const foundMonster = monsters.find(
                    (monster) => monster.id === +match.params.monsterid
                  );
                  return (
                    <MonsterDetail
                      monster={foundMonster}
                      handleMonsterView={handleMonsterView(
                        match.params.monsterid
                      )}
                      favoriteMonster={favoriteMonster}
                    />
                  );
                }}
              />
            </Switch>
          </main>
        </>
      )}
    </div>
  );
};
export default App;
