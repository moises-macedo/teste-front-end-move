import { Button, Logo, Menu, Section } from "./style";

import { FavoritesContext } from "../../Provider/Favorites";
import { useContext } from "react";

export const Header = () => {
    const { favorites } = useContext(FavoritesContext)
    return (
        <Section>
            <Logo>
                <h2>Breaking Bad</h2>
            </Logo>
            <Menu>
                <Button>
                    <p>Favoritos <span>{favorites?.length}</span></p>                    
                </Button>                

            </Menu>
        </Section>

    )
}
