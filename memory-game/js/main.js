
let cards = [ {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
}, 
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank:"king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{    
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = []; 

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard () {
    let cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    console.log(checkForMatch);

    let flipCard = this.setAttribute('src', cards[cardId].cardImage); //shows card image on flip
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
             alert("You found a match!");
        } else {
            alert('Sorry, try again.')
        } 
  
    }
}

function createBoard () {
    for(let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img'); 
    cardElement.setAttribute('src', 'images/back.png'); //static card image
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    }
}
createBoard();
