import { useContext } from "react";
import { Link } from "react-router-dom";
import { GeneratorContext } from "../context/generator.context";
import '../styles/CharacterCard.css'

function CharacterCard({ character }) {
  const { deleteCharacter } = useContext(GeneratorContext);

  return (
    <div key={character.id} className="characterCard">
      <img className="profile" src={character.image} />
      <h2><Link to={`/detail/${character.id}`}>{character.name}</Link></h2>
      <p>Class: {character.job} </p>
      <p>Level: {character.lv} </p>
      <p>Current Campaign: {character.campaign} </p>
      <button onClick={() => deleteCharacter(character.id)}>Delete</button>
    </div>
  );
}

export default CharacterCard;
