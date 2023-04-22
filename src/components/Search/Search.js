import React, { useState } from "react";
import './Search.css'

const Search = ({ monsters }) => {
    const [searchQuery, setSearchQuery] = useState('')

    console.log(searchQuery)
    
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSearchClick = () => {
        console.log('search button clicked')


        const results = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(results)
        setSearchQuery(results)
    }

    return (
        <div>
            <input type="text" placeholder="Search Monster or Location!" value={searchQuery} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )


;}

export default Search