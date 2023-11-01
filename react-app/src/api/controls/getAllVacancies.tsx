import { BASE_URL } from 'src/utils/constants';
export default async function getAllVacancies() {
    const res = await fetch(BASE_URL);
    const response = await res.json();
    return response;
}
