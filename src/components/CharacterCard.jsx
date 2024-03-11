import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function CharacterCard({ character }) {
  return (
    <div key={character.id} className="characterCard">
    <h4>{character.name}</h4>
    <img src={character.image} />
    <p>Class: {character.class} </p>
    <p>Level: {character.level} </p>
    <p>Current Campaign: {character.currentCampaign} </p>
    <p></p>
    </div>
  )
}

export default CharacterCard