
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [] 

let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


//check if two matching cards have been played, add logic here
function checkForMatch () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log('Sorry, try again')
        }
    }
}