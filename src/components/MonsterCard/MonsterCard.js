import React from "react";
import './MonsterCard.css'
import { NavLink } from "react-router-dom";

const MonsterCard = ({ id, image }) => {
    return (
          <div className="monster-card">
            <NavLink to={`/monsters/${id}`} key={id}>
              <div className="monster-view">
                <img src={image} alt={`monster${id}`}/>
              </div>
            </NavLink>
          </div>
        )
    };

    export default MonsterCard

