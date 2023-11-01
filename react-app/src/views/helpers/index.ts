import { CardType } from 'src/api/vacancies/types';
import { arrPosition } from 'src/utils/constants';

export function haveProp(item: any, key: string): string {
    if (item) {
        return Object.keys(item).includes(key) && item[key] !== null ? item[key] : 'Не найдено';
    }
    return 'Не найдено';
}

export default function getCardsInfo(vacancies: any[]): CardType[] {
    const cards: CardType[] = vacancies?.map(item => {
        arrPosition.add(item?.area?.name);
        return {
            title: haveProp(item, 'name'),
            img: haveProp(item?.employer?.logo_urls, 'original'),
            description: haveProp(item?.schedule, 'name'),
            adress: haveProp(item?.area, 'name'),
            companyName: haveProp(item?.employer, 'name'),
            work_form: haveProp(item?.employment, 'name'),
            requirement: haveProp(item?.snippet, 'requirement'),
            responsibility: haveProp(item?.snippet, 'responsibility'),
            working_time_modes: haveProp(item?.working_time_modes[0], 'name'),
        };
    });
    return cards;
}
