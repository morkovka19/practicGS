// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import { MyButton } from '@components/Button';
import { useTheme } from '@emotion/react';
import { Button } from '@greensight/gds';
import { FutureButtonTheme } from '@greensight/gds';


export async function getServerSideProps() {
  const vacancies = await getAllVacancies();
  return { props: { vacancies } }
}

export default function HomePage(props: any) {

  const vacancies = useAllVacancies(props);
  return (
  //   <Body>
  //     {/* <Head children={undefined}></Head> */}
    <div>
      {JSON.stringify(vacancies.items)}
      <MyButton />
      <Button size='sm'>fe</Button>
      </div>

  //     <Header />
  //     <Main />
  //     <Footer />

  //   <Body/>

  );
};
