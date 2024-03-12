import { createContext, useEffect, useState } from 'react';

import { BACKEND_URL } from '../utils/BACKEND_API';

import axios from 'axios';

const GeneratorContext = createContext()
const ContextProvider = ({ children }) => {

    const [charactersData, setCharactersData] = useState([])
    const [racesData, setRacesData] = useState([])
    const [classesData, setClassesData] = useState([])
    const [backgroundsData, setBackgroundsData] = useState([])
    const [cantripsData, setCantripsData] = useState([])
    const [lv1SpellsData, setLv1SpellsData] = useState([])
    const [weaponsData, setWeaponsData] = useState([])
    const [armorsData, setArmorsData] = useState([])

    // const addNewCharacter = (newCharacter) => {
    //     newCharacter.id = String(characterIds)
    //     let newCharacters = [newCharacter, ...characters]
    //     setCharacterIds((prev) => prev + 1)
    //     setCharacters(newCharacters)
    //   }
    
    const deleteCharacter = (characterId) => {
        const filteredCharacters = characters.filter((character) => {
          return character.id !== characterId;
        })
        setCharacters(filteredCharacters);
      }


    useEffect (() => {
        axios.get(BACKEND_URL + "characters")
            .then((response) => {
                console.log('API character data object ====>', response.data)
                setCharactersData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])

    useEffect (() => {
            axios.get(BACKEND_URL + "races")
                .then((response) => {
                    console.log('API races data object ====>', response.data)
                    setRacesData(response.data)
                })
                .catch((err) => {console.log(err) 
                })
                
                }, [])

    useEffect (() => {
            axios.get(BACKEND_URL + "classes")
                .then((response) => {
                    console.log('API classes data object ====>', response.data)
                    setClassesData(response.data)
                })
                .catch((err) => {console.log(err) 
                })
                
                }, [])

    useEffect (() => {
        axios.get(BACKEND_URL + "backgrounds")
            .then((response) => {
                console.log('API backgrounds data object ====>', response.data)
                setBackgroundsData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])

    useEffect (() => {
        axios.get(BACKEND_URL + "cantrips")
            .then((response) => {
                console.log('API cantrips data object ====>', response.data)
                setCantripsData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])

    useEffect (() => {
        axios.get(BACKEND_URL + "lv1spells")
            .then((response) => {
                console.log('API lv1spells data object ====>', response.data)
                setCantripsData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])
    useEffect (() => {
        axios.get(BACKEND_URL + "weapons")
            .then((response) => {
                console.log('API weapons data object ====>', response.data)
                setCantripsData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])

    useEffect (() => {
        axios.get(BACKEND_URL + "armors")
            .then((response) => {
                console.log('API weapons data object ====>', response.data)
                setArmorsData(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])
            
    return (
        <GeneratorContext.Provider value={{ charactersData, setCharactersData, deleteCharacter, racesData, setRacesData, classesData, setClassesData, backgroundsData, setBackgroundsData, cantripsData, setCantripsData, lv1SpellsData, setLv1SpellsData, weaponsData, setWeaponsData, armorsData, setArmorsData }}>
            
            {children}

        </GeneratorContext.Provider>
    )

}

export {GeneratorContext, ContextProvider}



