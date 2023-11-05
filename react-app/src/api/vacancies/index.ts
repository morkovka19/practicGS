import { useQuery } from 'react-query';
import { getVacancies } from '../../views/api';

export const useVacancies = () => {
    const { key, fetch } = getVacancies();
    return useQuery({
        queryKey: key,
        queryFn: fetch,
    });
};
