// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import getCardsInfo from 'src/helpers/getVacansies';
import Head from 'next/head';
import FooterContainer from '@components/FooterContainer';
import { scale } from '@greensight/gds';
import Header from '@components/Header';
import Main from '@components/Main';

export async function getServerSideProps() {
  const vacancies = await getAllVacancies();
  return { props: { vacancies } }
}

export default function HomePage(props: any) {
  const vacancies = useAllVacancies(props);
  const cards = getCardsInfo(vacancies?.items);

  return (
    <>
      <Head>
        <title>List Vacancies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Список актуальных вакансий"/>
        <meta name="keywords" content="hh, work, работа, вакансии, подработка" />
      </Head>
      <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '100vh', minWidth: `${scale(37)}px` }}>
        <Header />
        <Main cards={cards} />
        <FooterContainer />
      </div>
    </>
  );
};
