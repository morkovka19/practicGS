const url = "https://api.hh.ru/vacancies";
const list = document.querySelector(".list__block");
const paginationButtonsBlock = document.querySelector(".list__block-buttons");
const paginationButtons = document.querySelectorAll(".list__button");
const filterFormBlock = document.querySelector("#filter-form");
const filterPositionBlock = document.querySelector("#filter-position");
const optionsBlockForm = filterFormBlock.parentElement.querySelector(".header__options");
const optionsBlockPosition = filterPositionBlock.parentElement.querySelector(".header__options");
const buttonSearch = document.querySelector(".header__button");
const buttonClear = document.querySelector(".header__clear");
const form = document.querySelector(".request__form");
const inputName = form.querySelector("#name");
const inputPhone = form.querySelector("#phone");
const inputEmail = form.querySelector("#email");
const inputComment = form.querySelector("#comment");
const regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const regEmail = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

let filterFormValue = "";
let filterPositionValue = "";
let startPage = 1;
let data = [];
let numderCards = 5;

const getCards = () => {
    return fetch(url).then(res => res.json()).then(res => res).catch(err => err)
}

const getTemplateCard = () => {
    return document.querySelector("#card").content.querySelector(".card").cloneNode(true);
}

const generateCard = (card) => {
    const cardTemplate = getTemplateCard();
    cardTemplate.querySelector(".card__title").textContent = card.name;
    const logo = cardTemplate.querySelector(".card__logo")
    if (card.employer?.logo_urls?.original) {
        logo.src = card.employer?.logo_urls?.original;
        logo.alt = card?.name;
    } else {
        logo.remove();
    }
    cardTemplate.querySelector(".card__info-item-text--form").textContent = card?.employment.name || 'Не указано';
    cardTemplate.querySelector(".card__info-item-text--company").textContent = card.employer.name || 'Не указано';
    cardTemplate.querySelector(".card__info-item-text--web").textContent = card?.alternate_url || 'Не указано';
    cardTemplate.querySelector(".card__info-item-text--address").textContent = card?.area?.name || 'Не указано';
    cardTemplate.querySelector(".card__description").textContent = card?.schedule?.name || 'Не указано';
    cardTemplate.querySelector('.card-list-item--requirement').textContent = card?.snippet?.requirement || 'Не указано';
    cardTemplate.querySelector(".card-list-item--responsibility").textContent = card?.snippet?.responsibility || 'Не указано';
    cardTemplate.querySelector(".card-list-item--working-time-modes").textContent = card?.working_time_modes[0]?.name || 'Не указано';
    return cardTemplate;
}


const addCard = (card) => {
    list.append(generateCard(card));
}



const handleClickFilter = (formBlock) => {
    formBlock.querySelector(".header__icon").classList.toggle("header__icon--rotate");
    formBlock.parentElement.querySelector(".header__options").classList.toggle("header__options--visible");
}

const paginationFunction = (startPage, endPage) => {
    list.innerHTML = "";
    data.slice(startPage, endPage).forEach((card) => {
        addCard(card)
    })
}

paginationButtonsBlock.addEventListener("click", (e) => {
    if (e.target.classList.contains("list__button")) {
        startPage = e.target.textContent;
        paginationFunction((startPage - 1) * numderCards, startPage * numderCards);
        paginationButtons.forEach((button) => {
            if (button.classList.contains("list__button--active")) {
                button.classList.remove("list__button--active");
            }
        })
        e.target.classList.add("list__button--active");
    }
});


filterFormBlock.addEventListener("click", (e) => {
    handleClickFilter(e.currentTarget);
});

filterPositionBlock.addEventListener("click", (e) => {
    handleClickFilter(e.currentTarget);
});

const handleClickOption = (e) => {
    e.currentTarget.parentElement.querySelector(".header__span").textContent = e.target.textContent;
    e.currentTarget.classList.remove("header__options--visible");
    e.currentTarget.parentElement.querySelector(".header__icon").classList.toggle("header__icon--rotate");
    e.currentTarget.parentElement.classList.add("header__filter-item--active");
}


optionsBlockForm.addEventListener("click", (e) => {
    filterFormValue = e.target.textContent;
    handleClickOption(e);
});

optionsBlockPosition.addEventListener("click", (e) => {
    filterPositionValue = e.target.textContent;
    handleClickOption(e);
})

buttonSearch.addEventListener("click", () => {
    if (filterFormValue === "" && filterPositionValue === "") return;
    const filterCards = data.filter((item) => {
        if (filterPositionValue === "") {
            return item.employment?.name === filterFormValue;
        } else if (filterFormValue === "") {
            return item.area?.name === filterPositionValue;
        } else {
            return (item.area?.name === filterPositionValue && item.employment?.name === filterFormValue) ? item : null;
        }
    }
    )
    list.innerHTML = "";
    filterCards.forEach((card) => {
        addCard(card);
    })
    paginationButtonsBlock.classList.add("list__block-buttons--unvisible");
    buttonClear.classList.add("header__clear--visible");
}
);

buttonClear.addEventListener("click", (e) => {
    paginationFunction(0, numderCards);
    paginationButtonsBlock.classList.remove("list__block-buttons--unvisible");
    e.currentTarget.classList.remove("header__clear--visible");
    paginationButtons.forEach((button) => {
        if (button.textContent === '1') button.classList.add("list__button--active");
        else if (button.classList.contains("list__button--active")) button.classList.remove("list__button--active");
    });
    filterFormBlock.firstChild.textContent = "Not selected";
    filterPositionBlock.firstChild.textContent = "Not selected";
})


list.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("card__button--more")) {
        e.target.parentElement.parentElement.classList.toggle("card--big");
        e.target.parentElement.parentElement.querySelector(".card__limited-block").classList.toggle("card__limited-block--unvisible");
        e.target.firstChild.textContent = e.target.firstChild.textContent === "More details" ? "Less details" : "More details";
        e.target.parentElement.querySelector(".card__icon").classList.toggle("card__icon--rotate");
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!regPhone.test(inputPhone.value)){
        alert("Введите, пожалуйчта, номер телефона в необходимом формате");
        inputPhone.value = "";
        return;
    }
    if (!regEmail.test(inputEmail.value)){
        alert("Введите, пожалуйста, почту в необходимом формате");
        inputEmail.value = '';
        return;
    }
    alert(`name: ${inputName.value}\nemail: ${inputEmail.value}\nphone: ${inputPhone}\ncomment: ${inputComment.value}`);
    inputComment.value = "";
    inputEmail.value = "";
    inputName.value = "";
    inputPhone.value = "";
    return;
});



getCards()
    .then(cards => {
        data = cards.items;
        paginationFunction(0, numderCards);
    })
