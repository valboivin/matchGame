var MatchGame = {};
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready (function(){
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardValues = [];
  for (var i = 1; i <= 8; i++) {
    cardValues.push(i);
    cardValues.push(i);
    };

  cardValues.sort(function(){
    return 0.5- Math.random();
  });

  return cardValues;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var cardColors = [
    'hsl(25,85%, 65%)',
    'hsl(55,85%, 65%)',
    'hsl(90,85%, 65%)',
    'hsl(160,85%, 65%)',
    'hsl(220,85%, 65%)',
    'hsl(265,85%, 65%)',
    'hsl(310,85%, 65%)',
    'hsl(360,85%, 65%)'];

  $game.data ('flippedCards', [] );

  $game.empty();

  for (var i = 0; i < cardValues.length; i++) {
    var $card = $('<div class="card col-md-3 col-xs-3"></div>');
    $card.data('value', cardValues[i]);
    $card.data('color', cardColors[cardValues[i]-1]);

    $game.append($card);
    $card.on('click', function(){
      MatchGame.flipCard($(this), $game);
    });
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  var flippedCards = $game.data('flippedCards');

    $card.css('background-color', $card.data('color'));
    $card.text($card.data('value'));
    flippedCards.push($card);

    if (flippedCards.length == 2 ) {
      if (flippedCards[0].data('value') == flippedCards[1].data('value')) {
        for (var i = 0; i < flippedCards.length; i++) {
          flippedCards[i].css('background-color', 'rgb(153,153,153)');
          flippedCards[i].css('color', 'rgb(204,204,204)');
        }
      } else {
        setTimeout(function(){
          for (var i = 0; i < flippedCards.length; i++) {
            flippedCards[i].css('background-color', '');
            flippedCards[i].text('');
          }
        }, 500);
      }
      $game.data ('flippedCards', []);
    }
};
