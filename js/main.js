// JavaScript Document

console.log("Linked Up");

// All boxes begin black
// 20 boxes are assigned a randomly generated number
// Numbers are assoicated with colours, (or in the case of the Movie, numbers are associated with character images).
// There can only be 2 of each colour within the game and each game will have every colour represented.
// Integers 1-10, each integer can only be assigned to divs twice.
// When an integer is assigned it will be stored in a variable and can be stored twice. Afterwards the number generator can longer assign that integer.
// Upon being clicked a box will display the colour it's associated with.
// The objective is to find the the matching box with the same colour.
// When another box is clicked it will display its colour, if the colours match both boxes will disappear.
// If the boxes do not match they will both revert to displaying as black.
// When all boxes have been matched to their partners the game will end.
// The number of attempts will be recorded and displayed as a highscore.
// Players can continuously retry the game to beat their previous highscore.


// an array to hold all of the cards
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

// a deck containing all the cards featured in the game
const deck = document.getElementById("card-deck");

 // an array for all opened cards
var openedCards = [];


// a function to shuffle all of the cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


// shuffles cards when page is refreshed / loads
document.body.onload = startGame();


//  function to start a new play 
function startGame(){
    // shuffle deck
    cards = shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open",);
    }
}


// toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
};










