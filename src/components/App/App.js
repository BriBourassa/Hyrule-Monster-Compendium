import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import MonsterList from "../MonsterList/MonsterList";
import Nav from "../Nav/Nav";
import Monster from "../Monster/Monster";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState('');
  // const [favMonsters, setFavMonsters] = useState([]);

  const getMonsters = async () => {
    const url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters"
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

  const handleMonsterView = ((monster) => {
    if(monster.id)
    console.log(monster)
  })

  // fav and delete function here

  return (
    <main className="app">

          <Nav />

      {/* <Switch> */}

        <Route path={"/monsters/:monsterid"}render={ ({match}) => <Monster monsterid={(match.params.monsterid)}/>}/>
        

        <div className="monster-container">
          {monsters.length > 0 ? <MonsterList monsters={monsters} handleMonsterView={(event) => handleMonsterView(event.target)}/> : <p>{error}</p>}
        </div>


    {/* </Switch> */}
    </main>
  );
};

export default App;
