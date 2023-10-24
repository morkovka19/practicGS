import { useQuery } from "react-query";
import getAllVacancies from "./controls/getAllVacancies";

export default function useAllVacancies(props: any) {
   const { data } = useQuery({
      queryKey: ['vacancies'],
      queryFn: getAllVacancies,
      initialData: props.vacancies
   }
   )
   return data;
}
