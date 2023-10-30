import { Button } from "@components/controls/Button";
import { getAmountPages } from "src/helpers/getColPages";
import { useEffect, useState } from "react";
import { scale } from "@greensight/gds";
import { amountCardsType } from "./types";


export default function Pagination({amountCards, handlePagination, filter}: amountCardsType) {

    const amountPages = getAmountPages(amountCards);
    const [arrButtonsNumbers, setArrButtonsNumbers] = useState([] as number[]);
    const [numberActivePage, setNumberActivePage] = useState(1);

    useEffect(() =>{
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
        <div css={{ margin: '0 auto', marginTop: `${scale(4)}px`, width: '40%', display: `${filter ? 'none' : 'block'}`}} >
            <ul css={{ display: 'flex', justifyContent: 'space-around', padding: '0' }}>
                {arrButtonsNumbers.map((item, i) => (
                    <li key={i}>
                        <Button variant={`${Number(numberActivePage) === Number(item) ? "primary" : "notactive"}`} size="sm" onClick={handleClickButton} value={item}>{item}</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
