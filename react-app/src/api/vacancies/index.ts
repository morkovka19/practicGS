import { useQuery } from 'react-query';
import { getVacancies } from './api';

export const useVacancies = (props: any) => {
    const { key, fetch } = getVacancies();
    return useQuery({
        queryKey: key,
        queryFn: fetch,
    });
};
