type Adult = {
    name: string,
    surname: string,
    work: string,
    age: number
}


type Child = Omit<Adult, 'work'>;

const adult: Adult = {
    name: 'ew',
    surname: 'rg',
    work: 'rthtr',
    age: 34
}

const child : Child = {
    name: 'hrtgh',
    surname: 'rhrh',
    age: 10
}


console.log(adult, child)
