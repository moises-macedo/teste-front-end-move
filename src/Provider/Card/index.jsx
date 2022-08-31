import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"

export const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [characters, setCharacters] = useState();

    const loadcharacters = () => {
        api.get(`characters`)
            .then((res) => {
                
                setCharacters(res.data)
            }).catch(err=> console.log(err))
    }

    useEffect(() => {
        loadcharacters()
    }, [])
   

    return (
        <CardContext.Provider value={{ characters }}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider