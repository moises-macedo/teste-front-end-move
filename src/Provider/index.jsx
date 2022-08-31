import CardProvider from "./Card"
import FavoritesProvider from "./Favorites"

const Provider = ({ children }) => {
    return (
        <CardProvider>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </CardProvider>
    )
}
export default Provider