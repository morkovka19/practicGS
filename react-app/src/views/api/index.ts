import { BASE_URL } from 'src/utils/constants';

const VACANCIES_KEY = 'vacancies';

export const getVacancies = () => ({
    key: VACANCIES_KEY,
    fetch: async () => {
        const res = await fetch(BASE_URL);
        const response = await res.json();
        return response;
    },
});
