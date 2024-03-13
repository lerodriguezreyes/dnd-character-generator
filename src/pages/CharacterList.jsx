import { useContext, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import { GeneratorContext } from "../context/generator.context"


function CharacterList() {

const {charactersData, setCharactersData} = useContext(GeneratorContext)

  return (
    <div>
    <h3>Character List</h3>
    {charactersData.map((character) => {

      return <CharacterCard key={ character.id } character={ character } />
    })}
    </div>
  )
}

export default CharacterList