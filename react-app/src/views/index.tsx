import { getVacancies } from 'src/api/vacancies/api';
import { useVacancies } from 'src/api/vacancies';
import getCardsInfo from './helpers';
import FooterContainer from '@components/FooterContainer';
import { scale } from '@greensight/gds';
import Header from '@components/Header';
import Main from '@components/Main';
import { QueryClient, dehydrate } from 'react-query';

export default function HomePage() {
    const vacancies = useVacancies();
    const cards = getCardsInfo(vacancies?.data?.items);
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
            <Main cards={cards} />
            <FooterContainer />
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
