import { getVacancies } from 'src/api/vacancies/api';
import { useVacancies } from 'src/api/vacancies';
import getCardsInfo from './helpers';
import FooterContainer from '@components/FooterContainer';
import { scale } from '@greensight/gds';
import Header from '@components/Header';
import Main from '@components/Main';
import { QueryClient, dehydrate } from 'react-query';

export default function HomePage(props: any) {
    const vacancies = useVacancies(props);
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
    await queryClient.prefetchQuery('vacanсies', getVacancies);
    return {
        props: {
            dehydrateState: dehydrate(queryClient),
        },
    };
}
