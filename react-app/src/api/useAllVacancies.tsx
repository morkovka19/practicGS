import { useQueryClient, useQuery } from "react-query";
import getAllVacancies from "./controls/getAllVacancies";

export const  useAllVacsncies = () => {
   useQuery<Vacancies[]>({
    queryKey: ['vacancies'],
    queryFn: () => getAllVacancies()
   })
}