import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"

export const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [characters, setCharacters] = useState();
    const [isClosed, setIsClosed] = useState(false)

    const loadcharacters = () => {
        api.get(`characters`)
            .then((res) => {
                
                setCharacters(res.data)
            }).catch(err=> console.log(err))
    }

    useEffect(() => {
        loadcharacters()
    }, [])

    if(!isClosed){
        document.querySelector('body').style.overflow ='auto'
    }
    if(isClosed){
        document.querySelector('body').style.overflow ='hidden'
    }
   

    return (
        <CardContext.Provider value={{ 
            characters,
            setIsClosed,
            isClosed}}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider