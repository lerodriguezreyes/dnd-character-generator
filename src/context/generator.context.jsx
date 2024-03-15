import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { imageGenerator } from "../utils/OPENAI";
const GeneratorContext = createContext();
const ContextProvider = ({ children }) => {
  const [charactersData, setCharactersData] = useState([]);
  const [characterIds, setCharacterIds] = useState(4);

  const navigate = useNavigate();

  const getCharacters = () => {
    axios
      .get(import.meta.env.VITE_SERVER_URL + "characters")
      .then((response) => {
        console.log("API character data object ====>", response.data);
        setCharactersData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const addNewCharacter = (newCharacter) => {
    newCharacter.textToImagePrompt = `Photorealistic portrait of a ${newCharacter.race} ${newCharacter.skinColor}-skinned ${newCharacter.sex} ${newCharacter.job} dungeons and dragons character that has ${newCharacter.eyeColor} eyes, ${newCharacter.hairColor} colored hair ${newCharacter.hairStlye} styled, wearing ${newCharacter.armor} and wielding a ${newCharacter.mainWeapon}.`;
    imageGenerator(newCharacter.textToImagePrompt)
      .then((url) => {
        newCharacter.image = url;
        axios
          .post(import.meta.env.VITE_SERVER_URL + "characters", newCharacter)
          .then((response) => {
            console.log("New Character added ===>", response.data);
            setCharactersData([...charactersData, response.data]);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            navigate("/character");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCharacter = (characterId) => {
    console.log("Deleting character!!!!")
    console.log("this is the env variable", import.meta.env.VITE_SERVER_URL)
    axios
      .delete(import.meta.env.VITE_SERVER_URL + "characters/" + characterId)
      .then((response) => {
        console.log("Character removed ===>", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const filteredCharacters = charactersData.filter((character) => {
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
        getCharacters,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
};

export { GeneratorContext, ContextProvider };
