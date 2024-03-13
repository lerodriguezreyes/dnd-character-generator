import { createContext, useEffect, useState } from 'react';

import { BACKEND_URL } from '../utils/BACKEND_API';

import axios from 'axios';

const GeneratorContext = createContext()
const ContextProvider = ({ children }) => {

    const [charactersData, setCharactersData] = useState([])
    const [characterIds, setCharacterIds ] = useState([])
useEffect (() => {
        axios.get(BACKEND_URL + "characters")
            .then((response) => {
                console.log('API character data object ====>', response.data)
                setCharactersData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])

    const addNewCharacter = (newCharacter) => {
        newCharacter.id = String(characterIds)
        let newCharacters = [newCharacter, ...charactersData]
        setCharacterIds((prev) => prev + 1)
        setCharactersData(newCharacters)
        axios.post(BACKEND_URL + 'characters')
            .then((response) => {
                console.log('New Character added ===>', response.data)
                })
            .catch((error) => {
                console.log(error)
            }) 
      }
    
    const deleteCharacter = (characterId) => {
        const filteredCharacters = charactersData.filter((character) => {
        axios.delete(BACKEND_URL + 'characters/'+ characterId)
            .then((response) => {
                console.log('Character removed ===>', response.data)
                })
            .catch((error) => {
                console.log(error)
            })
          return character.id !== characterId;
        })
        setCharactersData(filteredCharacters);
        
       
      }


    
       return (
        <GeneratorContext.Provider value={{ charactersData, setCharactersData, addNewCharacter, deleteCharacter,}}>
            
            {children}

        </GeneratorContext.Provider>
    )

}

export {GeneratorContext, ContextProvider}



