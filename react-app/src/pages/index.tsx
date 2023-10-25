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

    <div>
      {JSON.stringify(vacancies.items)}

      <Button variant="primary" size="sm" rounded type={'button'} getTypographyCSS={function (name: 'body' | 'buttonLg' | 'buttonMd' | 'buttonSm' | 'captionUppercase' | 'caption' | 'smallBold' | 'small' | 'bodyBold' | 'subheading' | 'title' | 'headline' | 'h4' | 'h3' | 'h2' | 'h1'): CSSObject {
        throw new Error('Function not implemented.');
      }}>gfhfgdh</Button>
    </div>


  );
};
