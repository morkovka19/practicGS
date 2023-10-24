import Head from 'next/head'
import { useQuery } from 'react-query';
import getAllVacancies from 'src/api/controls/getAllVacancies';

export async function getServerSideProps(){
  const vacacies = await getAllVacancies();
  return {props: { vacacies } }
}

export default function  HomePage(props: any){
  // const { data } = useQuery({
  //   queryKey: ['vacancies'],
  //   queryFn: getAllVacancies,
  //   initialData: props.vacancies
  // })
  console.log(props.vacacies)
  return (
    <Head children={undefined}></Head>
  );
};





``