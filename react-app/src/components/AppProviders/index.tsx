import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


interface AppProvidersProps {
    children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 5 * 1000,
                        retry: 0,
                        refetchOnWindowFocus: process.env.NODE_ENV === 'production',
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
};

export default AppProviders;
