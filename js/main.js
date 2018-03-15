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

// var assignColour = Math.floor(math.random() * 21);

function assignColour(0, 19) {
  return Math.random() * (19 - 0) + 19;
}
