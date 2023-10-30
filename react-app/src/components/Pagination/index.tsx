import { Button } from "@components/controls/Button";
import { getAmountPages } from "src/helpers/getColPages";
import { useCallback, useEffect, useState } from "react";
import { scale } from "@greensight/gds";
import { amountCardsType } from "./types";


export default function Pagination({amountCards, handlePagination, filter}: amountCardsType) {

    const amountPages = getAmountPages(amountCards);
    const [arrButtonsNumbers, setArrButtonsNumbers] = useState(new Array());
    const [numberActivePage, setNumberActivePage] = useState(1);

    useCallback(() =>{
        setNumberActivePage(1)
}, [filter])

    useEffect(() => {
        const arrBuff: number[] = [];
        for (let i = 0; i < amountPages; i++) {
            arrBuff.push(i + 1)
        }
        setArrButtonsNumbers(arrBuff);
    }, []);

    useEffect(() =>{
        setNumberActivePage(1)
    },[filter])


    const handleClickButton = (e: any) => {
        if (e.target.value){
        setNumberActivePage(e.target.value);
        handlePagination(e.target.value)
        }
    }

    return (
        <div css={{ margin: '0 auto', marginTop: `${scale(4)}px`, width: '40%', display: `${filter ? 'none' : 'block'}`}} >
            <ul css={{ display: 'flex', justifyContent: 'space-around', padding: '0' }} onClick={handleClickButton}>
                {arrButtonsNumbers.map((item, i) => (
                    <li key={i}>
                        <Button variant={`${numberActivePage == item ? "primary" : "notactive"}`} size="sm" value={item}>{item}</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}