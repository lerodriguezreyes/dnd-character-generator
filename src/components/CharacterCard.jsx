import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { GeneratorContext } from "../context/generator.context"

function CharacterCard({ character }) {
  const {deleteCharacter } = useContext(GeneratorContext)

  return (
    <div key={character.id} className="characterCard">
    <h4>{character.name}</h4>
    <img src={character.image} />
    <p>Class: {character.class} </p>
    <p>Level: {character.level} </p>
    <p>Current Campaign: {character.currentCampaign} </p>
    <button onClick={() => deleteCharacter(character.id)}>Delete</button>
    </div>
  )
}

export default CharacterCard