// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import { Container, Layout, Section } from '@greensight/gds';
import Main from '@components/Main';
import Header from '@components/Header';
import Footer from '@components/Footer';
import getCardsInfo from 'src/helpers/getVacansies';
import { MAJOR_STEP } from '../utils/constants';
import tokens from '../../public/tokens.json'
import Form from '@components/Form';
import FormSection from '@components/FormSection/FormSection';
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
    <Layout type="flex" direction="column">
      <Content cards={cards} />
      <FooterContainer />
    </Layout>
  );
};
