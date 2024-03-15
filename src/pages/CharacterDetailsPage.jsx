import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { GeneratorContext } from "../context/generator.context";
import LostCharacter from "../components/LostCharacter";
import FullDetailsCard from "../components/FullDetailsCard";
import '../styles/CharacterDetails.css'

function CharacterDetailsPage() {
  const { charactersData } = useContext(GeneratorContext);
  const { characterId } = useParams();
  const character = charactersData.find(
    (character) => character.id === characterId
  );

  return (
    <div className="characterDetailsBackground">
      <h1 className="characterDetailsHeader"> Character Details </h1>
      {!character && <LostCharacter />}
      {character && <FullDetailsCard character={character} />}
      <Link className="link" to={`/edit/${characterId}`}> Edit character</Link>
    </div>
  );
}

export default CharacterDetailsPage;
