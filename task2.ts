enum TYPE {
    Mammal = 'mammal',
    Bird = 'bird',
    Fish = 'fish'
}

type Animal = {
    name: string,
    age: number,
    type: TYPE
}

interface Cat extends Animal {
    mustache: boolean,
    coloring: string
}

interface Dog extends Animal {
    nickname: string,
    favoriteToy: boolean,
}

interface Bird extends Animal{
    lenghtBeak: number,
    habitat: string
}


let dog : Dog = {
    name: 'Бобик',
    age: 2,
    type: TYPE.Mammal,
    nickname: 'Боб',
    favoriteToy: true
};

let cat : Cat =  {
    name: 'Барсик',
    age: 1,
    type: TYPE.Mammal,
    mustache: false,
    coloring: 'в полосочку'
}

let bird : Bird = {
    name: "Гоша",
    age: 0.5,
    type: TYPE.Bird,
    lenghtBeak: 10,
    habitat: 'тропики'
}
console.log(dog, bird, cat)
