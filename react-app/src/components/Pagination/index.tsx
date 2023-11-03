import { Button } from '@components/controls/Button';
import { getAmountPages } from './helpers';
import { useEffect, useState } from 'react';
import { Container, scale } from '@greensight/gds';
import { MEDIA_QUERIES } from 'src/scripts/gds';

export default function Pagination({
    amountCards,
    handlePagination,
    filter,
}: {
    amountCards: number;
    handlePagination: (value: number) => void;
    filter: boolean;
}) {
    const amountPages = getAmountPages(amountCards);
    const [arrButtonsNumbers, setArrButtonsNumbers] = useState<number[]>([]);
    const [numberActivePage, setNumberActivePage] = useState(1);

    useEffect(() => {
        setNumberActivePage(Number(!filter));
    }, [filter]);

    useEffect(() => {
        const arrBuff = Array.from(Array(amountPages > 0 ? amountPages : 1), (_, i) => i + 1);
        setArrButtonsNumbers(arrBuff);
    }, [amountPages]);

    const handleClickButton = (e: any) => {
        setNumberActivePage(e.currentTarget.value);
        handlePagination(e.currentTarget.value);
    };

    return (
        <Container
            css={{
                margin: '0 auto',
                marginTop: scale(4),
                display: filter ? 'none' : 'block',
            }}
        >
            <ul
                css={{
                    padding: '0',
                    margin: '0 auto',
                    width: '40%',
                    paddingTop: scale(4),
                    display: 'flex',
                    justifyContent: 'space-around',
                    [MEDIA_QUERIES.xs]: {
                        width: '90%',
                    },
                }}
            >
                {arrButtonsNumbers.map((item, i) => (
                    <li key={i}>
                        <Button
                            variant={Number(numberActivePage) === Number(item) ? "primary" : "notactive"}
                            size="sm"
                            onClick={handleClickButton}
                            value={item}
                        >
                            {item}
                        </Button>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
