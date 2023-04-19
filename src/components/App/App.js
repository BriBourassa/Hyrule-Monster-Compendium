import React, { useEffect, useState } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import MonsterList from '../MonsterList/MonsterList';



const App = () => {
  const [monsters, setMonsters] = useState([])
  const [error, setError] = useState('')

  const getMonsters = async () => {

    try{
    const url = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
    const response = await fetch(url)
    const monsterArray = await response.json()
    setMonsters(monsterArray.data)
    // console.log('heres the array!', monsterArray)
  } catch (err) {
    setError(err.message)
  // console.log('errors!', err.message)
}

};
useEffect(() => {
  getMonsters()
}, [])


// console.log('heres MONSTERS', monsters)

return (
  <h1>
    <MonsterList monsters={monsters}/>
  </h1>
)


};

export default App;
