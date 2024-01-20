const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpeg',
    },
    {
        name: 'chesseburger',
        img: 'images/chesseburger.jpeg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg',
    },
    {
        name: 'fries',
        img: 'images/fries.jpeg',
    },
    {
        name: 'chesseburger',
        img: 'images/chesseburger.jpeg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg',
    }
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}