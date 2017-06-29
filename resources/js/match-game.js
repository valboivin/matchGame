var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */


/*

var cardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];


cardValues.sort(function(){
  return 0.5- Math.random();
});

for (var cardShuffled= 0; cardShuffled < cardValues.length; cardShuffled++){
 console.log(cardValues[cardShuffled]);
}

*/

 var cardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];


 cardValues.sort(function(){
   return 0.5- Math.random();
 });

for (var cardShuffled= 0; cardShuffled < cardValues.length; cardShuffled++){
  console.log(cardValues[cardShuffled]);
}




MatchGame.generateCardValues = function () {
var shuffledValues = [];
for (var i = 0; i < cardValues.Length; i++)

};


/*

var condiments = ['Ketchup', 'Mustard', 'Sauerkraut'];
var condimentsLength = condiments.length;
for (var i = 0; i < condimentsLength; i++) {
  console.log('Condiment: ' + condiments[i]);
}
*/


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
$game.empty();
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
