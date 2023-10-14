url = 'https://api.hh.ru/vacancies';
const list = document.querySelector(".list__block");


const getCards = () =>{
    return fetch(url).then(res => res.json()).then(res => res).catch(err => err)
}

const getTemplateCard =() => {
    return document.querySelector('#card').content.querySelector('.card').cloneNode(true);
}

const generateCard =(card) =>{
    const cardTemplate = getTemplateCard();
    cardTemplate.querySelector(".card__title").textContent = card.name;
    const logo = cardTemplate.querySelector(".card__logo")
    logo.src = card.employer?.logo_urls?.original;
    logo.alt = card?.name;
    cardTemplate.querySelector(".card__info-item-text--form").textContent = card?.employment?.name;
    cardTemplate.querySelector(".card__info-item-text--company").textContent = card.employer.name;
    cardTemplate.querySelector(".card__info-item-text--web").textContent = card?.alternate_url;
    cardTemplate.querySelector(".card__info-item-text--address").textContent = card?.area?.name;
    cardTemplate.querySelector('.card__description').textContent = card?.schedule?.name;
    cardTemplate.querySelector('.card-list-item--requirement').textContent = card?.snippet?.requirement;
    cardTemplate.querySelector('.card-list-item--responsibility').textContent = card?.snippet?.responsibility;
    cardTemplate.querySelector('.card-list-item--working-time-modes').textContent = card?.working_time_modes[0]?.name;
    return cardTemplate;
}


const addCard = (card) =>{
    console.log(list);
    console.log(generateCard(card))
    list.append(generateCard(card));
}

Promise.resolve(
    getCards()
).then(cards => {
    cards.items.forEach(card =>{
        addCard(card);
    })
})