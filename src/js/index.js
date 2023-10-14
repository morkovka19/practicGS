url = 'https://api.hh.ru/vacancies';

const getCards = () =>{
    return fetch(url).then(res => res.json()).then(res => res).catch(err => err)
}

const generateCard =(card) =>{
    console.log(card)
}

Promise.resolve(
    getCards()
).then(cards => {
    cards.items.map(card =>{
        generateCard(card)
    })
})