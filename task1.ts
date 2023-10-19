enum Gender {
    Man = 'man',
    Woman = 'woman'
}

type Person = {
    name: string,
    age: number,
    gender: Gender
}

interface IUser extends Person {
    email: string,
    password: string
}

let user : IUser = {
    email: 'rf',
    name: 'fdff',
    gender: Gender.Man,
    password: 'dfdf',
    age: 12
}

console.log(user)
