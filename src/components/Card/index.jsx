import { useContext, useState } from "react"
import { CardContext } from "../../Provider/Card"
import { Container, LiDescription, LiImg, Ul } from "./style";
import { AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from "../../Provider/Favorites";



export const Card = () => {
    


    const { characters } = useContext(CardContext)
    const { addFavorites, favorites } = useContext(FavoritesContext)
   


    return (
        <Container>
            {characters?.map((el) => {
                const { status, img, name, char_id, nickname } = el
                return (
                    <Ul key={char_id}>
                        <LiDescription>
                            <p>{name}</p>
                        </LiDescription>
                        <LiImg>
                            <img src={img} alt={name} />
                        </LiImg>
                        <LiDescription>
                            <p>{nickname}</p>
                        </LiDescription>
                        <LiDescription>
                            <p>{status}</p>
                        </LiDescription>
                        <LiDescription>
                            <button onClick={() => addFavorites(el)}>
                                <p><AiFillHeart /></p>                                
                            </button>
                        </LiDescription>
                    </Ul>
                )
            })}
        </Container>
    )
}
