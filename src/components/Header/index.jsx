import { Button, Logo, Menu, Section } from "./style";

import { FavoritesContext } from "../../Provider/Favorites";
import { useContext } from "react";
import { CardContext } from "../../Provider/Card";

export const Header = () => {

    const{ isClosed, setIsClosed} = useContext(CardContext)
    const { favorites } = useContext(FavoritesContext)
    return (
        <Section>
            <Logo>
                <h2>Breaking Bad</h2>
            </Logo>
            <Menu>
                <Button onClick={() => setIsClosed(!isClosed)}>
                    <p>Favoritos <span>{favorites?.length}</span></p>
                </Button>
            </Menu>
        </Section>

    )
}
