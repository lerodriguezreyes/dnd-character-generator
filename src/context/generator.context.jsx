import { createContext, useEffect, useState } from 'react';

import { BACKEND_URL } from '../utils/BACKEND_API';

import axios from 'axios';

const GeneratorContext = createContext()
const ContextProvider = ({ children }) => {

    const [characters, setCharacters] = useState([])
   
    // const addNewCharacter = (newCharacter) => {
    //     newTask.id = String(tasksIds)
    //     let newTasks = [newTask, ...tasks]
    //     setTaskIds((prev) => prev + 1)
    //     setTasks(newTasks)
    //   }
    
    //   const deleteTask = (taskId) => {
    //     const filteredTasks = tasks.filter((task) => {
    //       return task.id !== taskId;
    //     })
    //     setTasks(filteredTasks);
    //   }

    // DALL-E request
    // POST https://api.openai.com/v1/images/generations
    // const response = await openai.createImage({
    //     model: "dall-e-3",
    //     prompt: "a white siamese cat",
    //     n: 1,
    //     quality: 'hd'
    //     size: "1024x1024",
    //     style: 'vivid'
    //   });
    //   image_url = response.data.data[0].url;







    useEffect (() => {
        axios.get(BACKEND_URL + '/characters')
            .then((response) => {
                console.log('Characters object =====>', response.data)
                setCharacters(response.data)
            })
            .catch((err) => {console.log(err) 
            })
            
            }, [])
    return (
        <GeneratorContext.Provider value={{ characters, setCharacters }}>
            
            {children}

        </GeneratorContext.Provider>
    )

}

export {GeneratorContext, ContextProvider}



