import React, { useState } from "react";
import './Search.css'

const Search = ({ monsters, setDisplayedMonsters }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }
    const handleSearchClick = () => {
        const NameResults = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const LocationResults = 
        monsters.filter(
            monster => 
            {if (monster.common_locations === null) {
                return false
            } 
            return monster.common_locations.join(' ').toLowerCase().includes(searchQuery.toLocaleLowerCase())} 
        );
        setSearchQuery('')
        const arraySet = new Set([...NameResults, ...LocationResults])
        setDisplayedMonsters(Array.from(arraySet)) 
    }
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search Monster or Location!" value={searchQuery} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )
};

export default Search