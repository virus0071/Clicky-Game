import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={require("../../images/" + props.image)} id={props.id}
        onClick={() => props.shuffleCharacter(props.id)} 
        className="newCharacter" />
    
  </div>
  </div>
);

export default CharacterCard;
