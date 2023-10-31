import { Button } from "@components/controls/Button";
import { getAmountPages } from "src/helpers/getColPages";
import { useEffect, useState } from "react";
import { Container, Layout, Section, scale } from "@greensight/gds";
import { amountCardsType } from "./types";
import { MEDIA_QUERIES } from "src/scripts/gds";


export default function Pagination({ amountCards, handlePagination, filter }: amountCardsType) {

    const amountPages = getAmountPages(amountCards);
    const [arrButtonsNumbers, setArrButtonsNumbers] = useState([] as number[]);
    const [numberActivePage, setNumberActivePage] = useState(1);

    useEffect(() => {
        setNumberActivePage(Number(!filter))
    }, [filter])

    useEffect(() => {
        const arrBuff: number[] = [];
        for (let i = 0; i < amountPages; i += 1) {
            arrBuff.push(i + 1)
        }
        setArrButtonsNumbers(arrBuff);
    }, [amountPages]);

    const handleClickButton = (e: any) => {
        setNumberActivePage(e.currentTarget.value);
        handlePagination(e.currentTarget.value);
    }

    return (
            <Container css={{
                margin: '0 auto',
                marginTop: `${scale(4)}px`,
                display: `${filter ? 'none' : 'block'}`,
            }} >
                <ul css={{
                    padding: '0',
                    margin: '0 auto',
                    width: '40%',
                    paddingTop: `${scale(4)}px`,
                    [MEDIA_QUERIES.xs]: {
                        width: '90%',
                    }
                }}>
                    <Layout type="flex" justify="space-around">
                        {arrButtonsNumbers.map((item, i) => (
                            <li key={i}>
                                <Button variant={`${Number(numberActivePage) === Number(item) ? "primary" : "notactive"}`} size="sm" onClick={handleClickButton} value={item}>{item}</Button>
                            </li>
                        ))}
                    </Layout>
                </ul>
            </Container>
    )
}
