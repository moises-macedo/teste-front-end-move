import { useContext } from "react";
import { CardContext } from "../../Provider/Card";
import { FavoritesContext } from "../../Provider/Favorites";
import { Container, Li, LiImg, Section, Ul, Title, Main } from "./style";
import { BsTrash } from 'react-icons/bs';
import { Paginete } from "../Paginate";
import { motion} from "framer-motion"
export const Modal = ({ id = "modal" }) => {

    const { setIsClosed, isClosed } = useContext(CardContext)
    const { favorites } = useContext(FavoritesContext)
    const handleClick = (e) => {
        if (e.target.id === id) {
            setIsClosed(!isClosed);
        }
    }

    console.log(favorites)
    return (
        <>
            {isClosed ? (

                <Container id={id} onClick={handleClick}>

                    <Section>
                        <Title>
                            <h2>Meus favoritos</h2>
                        </Title>
                        <Main>
                          
                            {favorites?.length > 0?(
                                <Paginete/>
                            ):(
                                <h3>Sem favoritos</h3>
                            )}

                        </Main>
                    </Section>
                </Container>
            ) : null}
        </>
    )
}
