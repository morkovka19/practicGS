// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import getCardsInfo from 'src/helpers/getVacansies';
import Content from '@components/Content';
import FooterContainer from '@components/FooterSection';

export async function getServerSideProps() {
  const vacancies = await getAllVacancies();
  return { props: { vacancies } }
}

export default function HomePage(props: any) {
  const vacancies = useAllVacancies(props);
  const cards = getCardsInfo(vacancies?.items);

  return (
    <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
      <Content cards={cards} />
      <FooterContainer />
    </div>
  );
};
