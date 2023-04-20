import React from "react";

const Monster = ({name, image, description, drops}) => {
  
  return (
  <div className="monster-view">
    <h1>{name}</h1>
    <img src={image}/>
    <p>{description}</p>
    <p>{drops}</p>
  </div>
  )
};

export default Monster;


