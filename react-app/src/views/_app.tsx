import type { AppProps } from 'next/app';
import { FC } from 'react';
import AppProviders from '@components/AppProviders';
import { Hydrate } from 'react-query';
import Head from 'next/head';

const AppContent: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

function MyApp(props: AppProps) {
    return (
        <>
            <Head>
                <title>List Vacancies</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Список актуальных вакансий" />
                <meta name="keywords" content="hh, work, работа, вакансии, подработка" />
            </Head>
            <AppProviders>
                <Hydrate state={props.pageProps.dehydratedState}>
                    <AppContent {...props.pageProps} />
                </Hydrate>
            </AppProviders>
        </>
    );
}
export default MyApp;
