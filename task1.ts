enum GENDER {
    man = 'man',
    woman = 'woman'
}

type Person = {
    name: string,
    age: number,
    gender: GENDER
}

interface User extends Person {
    email: string,
    password: string
}

let user : User = {
    email: 'rf',
    name: 'fdff',
    gender: GENDER.man,
    password: 'dfdf',
    age: 12
}

console.log(user)
