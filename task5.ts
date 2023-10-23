//типизация метода map у массива

const numbers: number[] = [3, 4, 5, 6, 7, 8];

const newNumbers: number[] = numbers.map((item: number) => {
    return item * 2;
})

console.log(newNumbers)
