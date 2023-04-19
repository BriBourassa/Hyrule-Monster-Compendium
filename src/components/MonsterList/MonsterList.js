import React from "react";

const MonsterList = ({monsters, img}) => {
    const allMonsters = monsters.map((monster) => {
        // console.log(monsters)
        return (
            <input type='image' src={monster.image}>
             
            </input>
        )
    })

    return allMonsters
};

export default MonsterList