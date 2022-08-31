import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {    
    const [favorites, setFavorites] = useState([])
    

    const addFavorites = (char) => {
        const newChar = [...favorites, char];
        const filtredChar = [...new Set(newChar)];
        setFavorites(filtredChar)        

    }

    const removeFavorites = (indexToRemove) =>{
        const newFavorites = favorites.filter((el,index)=>{
            return index !== indexToRemove
        });
        setFavorites(newFavorites)
    }
    return (
        <FavoritesContext.Provider value={{
            addFavorites,
            favorites,
            removeFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesProvider