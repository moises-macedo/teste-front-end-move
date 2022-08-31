import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const favoritesStorage = JSON.parse(localStorage.getItem("@favorites")) || [];
    const [favorites, setFavorites] = useState(favoritesStorage)

    const addFavorites = (char) => {
        const newChar = [...favorites, char];
        const filtredChar = [...new Set(newChar)];
        setFavorites(filtredChar)
        localStorage.setItem( "@favorites" , JSON.stringify(filtredChar))

    }
    return (
        <FavoritesContext.Provider value={{
            addFavorites,
            favorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesProvider