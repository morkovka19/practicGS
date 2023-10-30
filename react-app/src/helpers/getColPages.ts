export const getAmountPages = (amountCards: number) =>{
    return amountCards % 5 === 0 ? amountCards / 5 : amountCards / 5 + 1;
}