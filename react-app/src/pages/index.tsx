// import Head from 'next/head'
import getAllVacancies from 'src/api/controls/getAllVacancies';
import useAllVacancies from 'src/api/useAllVacancies';
import { CSSObject, useTheme } from '@emotion/react';
import { Button } from "@components/Button"



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
      {/* {JSON.stringify(vacancies.items)} */}
      
<Button variant="secondary" size="md" rounded={true} css={{ background: "red" }} block={false} iconAfter={false} hidden={false} type={'button'} disabled={false} getTypographyCSS={function (name: 'body' | 'buttonLg' | 'buttonMd' | 'buttonSm' | 'captionUppercase' | 'caption' | 'smallBold' | 'small' | 'bodyBold' | 'subheading' | 'title' | 'headline' | 'h4' | 'h3' | 'h2' | 'h1'): CSSObject {
        throw new Error('Function not implemented.');
      } }>gfhfgdh</Button>
      </div>

  //     <Header />
  //     <Main />
  //     <Footer />

  //   <Body/>

  );
};
