enum Type {
    Mammal = 'mammal',
    Bird = 'bird',
    Fish = 'fish'
}

type Animal = {
    name: string,
    age: number,
    type: Type
}

interface ICat extends Animal {
    mustache: boolean,
    coloring: string
}

interface IDog extends Animal {
    nickname: string,
    favoriteToy: boolean,
}

interface IBird extends Animal{
    lengtBeak: number,
    habitat: string
}


let dog : IDog = {
    name: 'Бобик',
    age: 2,
    type: Type.Mammal,
    nickname: 'Боб',
    favoriteToy: true
};

let cat : ICat =  {
    name: 'Барсик',
    age: 1,
    type: Type.Mammal,
    mustache: false,
    coloring: 'в полосочку'
}

let bird : IBird = {
    name: "Гоша",
    age: 0.5,
    type: Type.Bird,
    lengtBeak: 10,
    habitat: 'тропики'
}
console.log(dog, bird, cat)
