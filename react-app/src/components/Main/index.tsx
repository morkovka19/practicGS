import { Section, scale } from "@greensight/gds"
import List from "@components/List"
import Pagination from "@components/Pagination"
import { useEffect, useState } from "react";
import Filters from "@components/Filtres";
import { CardsProps } from "../../types/types"
import { FilterProps } from "./types";
import { MEDIA_QUERIES } from "src/scripts/gds";

export default function Main({ cards }: CardsProps) {

    const [cardsActive, setCards] = useState(cards.slice(0, 5));
    const [actualPage, setActualPage] = useState(1);
    const [filter, setFilter] = useState(false)

    useEffect(() => {
        if (actualPage !== 0) setCards(cards?.slice((actualPage - 1) * 5, (actualPage * 5)))
    }, [actualPage, cards])

    const handlePagination = (numberPage: number) => {
        setActualPage(numberPage)
    }

    const handleFilter = ({ valueForm, valuePosition }: FilterProps) => {
        const actualCards = cards.filter((card) => {
            if (valueForm === '') return card.adress === valuePosition && card;
            if (valuePosition === '') return card.work_form === valueForm && card;
            return card.adress === valuePosition && card.work_form === valueForm && card;
        })
        setCards(actualCards);
        setFilter(true);
        setActualPage(0)
    }

    const handleClearFilter = () => {
        setFilter(false);
        setActualPage(1)
    }

    return (
        <main css={{
            marginTop: `${scale(5)}px`,
            marginBottom: `${scale(13)}px`,
            padding: '0',
            width: '83%',
            [MEDIA_QUERIES.sm]: {
                marginTop: `${scale(3)}px`,
                marginBottom: `${scale(4)}px`
            }
        }}>
            <Filters handleFilterCards={handleFilter} handleClearFilter={handleClearFilter} />
            <List cards={cardsActive} />
            <Pagination amountCards={cards.length} handlePagination={handlePagination} filter={filter} />
        </main>
    )
}
