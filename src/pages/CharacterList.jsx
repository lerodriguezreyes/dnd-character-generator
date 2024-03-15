import { useContext, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { GeneratorContext } from "../context/generator.context";
import '../styles/CharacterList.css'

function CharacterList() {
  const { charactersData, setCharactersData } = useContext(GeneratorContext);

  return (
    <div className="characterList">
      <h2 className="pageHeader">Existing Characters</h2>
      {charactersData.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;


