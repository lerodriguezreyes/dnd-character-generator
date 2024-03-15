import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GeneratorContext } from "../context/generator.context";
import LostCharacter from "../components/LostCharacter";
import FullDetailsCard from "../components/FullDetailsCard";
import '../styles/CharacterDetails.css' 

function CharacterDetailsPage() {
  const { charactersData } = useContext(GeneratorContext);
  const { characterId } = useParams();

  const [ character, setCharacter ] = useState(null)

  useEffect(() => {
    
    if (charactersData.length > 0) {
      const thisCharacter = charactersData.find(
        (char) => char.id == characterId
      );
      setCharacter(thisCharacter)

    }

  }, [charactersData])



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
