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
    $card.attr('data-flipped', 'false');
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

  // if (flippedCards.indexOf($card.data('value')) == -1) {
    $card.css('background-color', $card.data('color'));
    $card.text($card.data('value'));
    $card.attr('data-flipped', 'true');
    flippedCards.push($card.data('value'));

    if (flippedCards.length == 2 ) {
      if (flippedCards[0] == flippedCards[1]) {
        $('data-flipped["true"]').css('background-color', 'rgb(153,153,153)');
        $('data-flipped["true"]').css('color', 'rgb(204,204,204)');
      } else {
        $('.card').css('background-color', '');
        $('.card').text('');
        $('.card').attr('data-flipped', 'false');
      }
      $game.data ('flippedCards', []);
    } else {

    }

  // }

  // else {
    // return false;
  // };
};
