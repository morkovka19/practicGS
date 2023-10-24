// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import Body from 'src/containers/Page';

export async function getServerSideProps() {
  const vacancies = await getAllVacancies();
  return { props: { vacancies } }
}

export default function HomePage(props: any) {

  const vacancies = useAllVacancies(props);
  return (
  //   <Body>
  //     {/* <Head children={undefined}></Head> */}
    <div css={{background: 'lightblue'}}>{JSON.stringify(vacancies.items)}</div>

  //     <Header />
  //     <Main />
  //     <Footer />

  //   <Body/>

  );
};
