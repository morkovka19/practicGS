import { useQuery } from 'react-query';
import getAllVacancies from './controls/getAllVacancies';

export function useAllVacancies(props: any) {
    return useQuery({
        queryKey: ['vacancies'],
        queryFn: getAllVacancies,
        initialData: props.vacancies,
    });
}

export interface CardType {
    img: string;
    title: string;
    description: string;
    adress: string;
    companyName: string;
    work_form: string;
    requirement: string;
    responsibility: string;
    working_time_modes: string;
}
