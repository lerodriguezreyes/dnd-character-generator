import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/BACKEND_API";
import axios from "axios";
import { imageGenerator } from "../utils/OPENAI";

const GeneratorContext = createContext();
const ContextProvider = ({ children }) => {
  const [charactersData, setCharactersData] = useState([]);
  const [characterIds, setCharacterIds] = useState(4);

  const navigate = useNavigate()

  const getCharacters = () => {
    axios
    .get(BACKEND_URL + "characters")
    .then((response) => {
      console.log("API character data object ====>", response.data);
      setCharactersData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getCharacters()
  }, []);

  const addNewCharacter = (newCharacter) => {
    // newCharacter.id = String(characterIds);

    newCharacter.textToImagePrompt = `Photorealistic portrait of a ${newCharacter.race} ${newCharacter.skinColor}-skinned ${newCharacter.sex} ${newCharacter.job} dungeons and dragons character that has ${newCharacter.eyeColor} eyes, ${newCharacter.hairColor} colored hair ${newCharacter.hairStlye} styled, wearing ${newCharacter.armor} and wielding a ${newCharacter.mainWeapon}.`
    imageGenerator(newCharacter.textToImagePrompt)
      .then((url) => {
        newCharacter.image = url
        axios
          .post(BACKEND_URL + "characters", newCharacter)
          .then((response) => {
            console.log("New Character added ===>", response.data);
            setCharactersData([...charactersData, response.data])
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            navigate('/character')
          })
      })
      .catch((err) => {
        console.log(err)
      })
    // let newCharacters = [newCharacter, ...charactersData];
    // // setCharacterIds((prev) => prev + 1);
    // setCharactersData(newCharacters);
  };

  const deleteCharacter = (characterId) => {
    const filteredCharacters = charactersData.filter((character) => {
      axios
        .delete(BACKEND_URL + "characters/" + characterId)
        .then((response) => {
          console.log("Character removed ===>", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return character.id !== characterId;
    });
    setCharactersData(filteredCharacters);
  };

  return (
    <GeneratorContext.Provider
      value={{
        charactersData,
        setCharactersData,
        addNewCharacter,
        deleteCharacter,
        getCharacters
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
};

export { GeneratorContext, ContextProvider };
