// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import getCardsInfo from 'src/helpers/getVacansies';
import Content from '@components/Content';
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
    <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '100vh', minWidth: `${scale(37)}px`}}>
      <Header />
      <Main cards={cards} />
      <FooterContainer />
    </div>
  );
};
