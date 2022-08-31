import { useContext, useState } from "react"
import { CardContext } from "../../Provider/Card"
import { Container, LiDescription, LiImg, Ul } from "./style";
import { AiOutlineStar } from 'react-icons/ai';



export const Card = () => {

    const { characters } = useContext(CardContext)
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
                            <button>
                                <p><AiOutlineStar /></p>
                            </button>
                        </LiDescription>
                    </Ul>
                )
            })}
        </Container>
    )
}
