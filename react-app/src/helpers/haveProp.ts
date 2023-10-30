export function haveProp(item: any, key: string): string {
    if (item){
        return (Object.keys(item).includes(key)) && item[key] !== null ? item[key] : "Не найдено";
}
    return "Не найдено"
}
