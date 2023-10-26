export function haveProp(item: any, key: string): string{
    if (item)
        return (Object.keys(item).includes(key)) ? item[key] : "Не найдено";
    else return "Не найдено"
} 