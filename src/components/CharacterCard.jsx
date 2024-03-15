import { useContext } from "react";
import { Link } from "react-router-dom";
import { GeneratorContext } from "../context/generator.context";
import '../styles/CharacterCard.css'
import { diceRoll, bookCoversArray } from "../utils/randomizer";

function CharacterCard({ character }) {
  const { deleteCharacter } = useContext(GeneratorContext);
  const randomBookImageUrl = bookCoversArray[diceRoll(8)];

  return (
    <div className="wrapper">
    <div key={character.id} className="characterCard" style={{backgroundImage: `url(${randomBookImageUrl})`}}>
      <h3 className="characterCardHeader"><Link to={`/detail/${character.id}`}>{character.name}'s Tale </Link></h3>
      <img className="profile" src={character.image} />
      <p className="bookText">Class: {character.job} </p>
      <p className="bookText">Campaign: {character.campaign} </p>
      <button className="bookButton" onClick={() => deleteCharacter(character.id)}>Put back in the shelf </button>
    </div>
    </div>
  );
}

export default CharacterCard;
