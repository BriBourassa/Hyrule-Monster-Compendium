import React, { useState } from "react";
import './Search.css'

const Search = ({ monsters, setDisplayedMonsters }) => {
    const [searchQuery, setSearchQuery] = useState('')
    // const [searchResults, setDisplayedMonsters] = useState([])

    // console.log(searchQuery)
    
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSearchClick = () => {
        const results = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(results)
        setSearchQuery('')
        setDisplayedMonsters(results)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search Monster or Location!" value={searchQuery} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )


;}

export default Search