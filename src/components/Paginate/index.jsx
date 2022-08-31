import { useContext, useEffect, useState } from "react";
import { BsTrash } from 'react-icons/bs';
import ReactPaginate from "react-paginate";
import { FavoritesContext } from "../../Provider/Favorites";
import { Li, LiImg, Ul, } from "./style";

export const Paginete = () => {
    const { favorites, removeFavorites } = useContext(FavoritesContext)
    const [cardsPerPage, setCardsPerPage] = useState(favorites);
    const [pagNumber, setPagNumber] = useState(0);

    const listPerPage = 5;

    const pagesVisited = pagNumber * listPerPage;
    const displayCard = cardsPerPage.slice(pagesVisited, pagesVisited + listPerPage)
        .map((el, index) => {
            const { name, char_id, status, img } = el;
            return (
                <Ul key={char_id}>
                    <LiImg>
                        <img src={img} alt={name} />
                    </LiImg>
                    <Li>{name}</Li>
                    <Li>
                        <p>{status}</p>
                    </Li>
                    <Li>
                        <button onClick={() => removeFavorites(index)}>

                            <p><BsTrash /></p>
                        </button>
                    </Li>
                </Ul>
            )

        })
    const pageCounter = Math.ceil(favorites?.length / listPerPage);

    const changePage = ({ selected }) => {
        console.log(selected)
        setPagNumber(selected)
    }

    useEffect(() => {
        if (favorites) {
            setCardsPerPage(favorites)
        }
    }, [favorites])
    const listSizeSize = favorites?.length

    return (

        <>
            {displayCard}
            {listSizeSize > 4 ? (

                <ReactPaginate
                    previousLabel={"Voltar"}
                    nextLabel={"Proximo"}
                    pageCount={pageCounter}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationAticve"}
                />
            ) : null}


        </>






    )
}