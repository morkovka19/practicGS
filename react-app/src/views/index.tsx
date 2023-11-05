import { getVacancies } from '@views/api';
import { useVacancies } from 'src/api/vacancies';
import getCardsInfo from './index/helpers';
import { scale } from '@greensight/gds';
import Header from 'src/_app/Header';
import { QueryClient, dehydrate } from 'react-query';
import Filters from '@views/index/components/Filters';
import Pagination from './index/components/Pagination';
import List from '@views/index/components/List';
import { useCallback, useEffect, useState } from 'react';
import FormSection from '@views/index/components/FormSection';
import Footer from 'src/_app/Footer';

export default function HomePage() {
    const vacancies = useVacancies();
    const cards = getCardsInfo(vacancies?.data?.items);
    const [cardsActive, setCards] = useState(cards?.slice(0, 5));
    const [actualPage, setActualPage] = useState(1);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        if (actualPage !== 0) setCards(cards?.slice((actualPage - 1) * 5, actualPage * 5));
    }, [actualPage, cards]);

    const handlePagination = (numberPage: number) => {
        setActualPage(numberPage);
    };

    const handleFilter = useCallback(
        ({ form, position }: { form: string; position: string }) => {
            const actualCards = cards.filter(card => {
                if (!form) return card.adress === position && card;
                if (!position) return card.work_form === form && card;
                return card.adress === position && card.work_form === form && card;
            });
            setCards(actualCards);
            setFilter(true);
            setActualPage(0);
        },
        [filter, cardsActive]
    );

    const handleClearFilter = useCallback(() => {
        setFilter(false);
        setActualPage(1);
    }, [filter]);

    return (
        <div
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '100vh',
                minWidth: scale(37),
            }}
        >
            <Header />

            <main css={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Filters handleFilterCards={handleFilter} handleClearFilter={handleClearFilter} />

                <List cards={cardsActive} />

                <Pagination amountCards={cards?.length} handlePagination={handlePagination} filter={filter} />

                <FormSection />
            </main>

            <Footer />
        </div>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    const { key, fetch } = getVacancies();
    await queryClient.prefetchQuery(key, fetch);
    return {
        props: {
            dehydrateState: dehydrate(queryClient),
        },
    };
}
