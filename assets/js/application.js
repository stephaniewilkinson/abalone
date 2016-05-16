
////////
//Data
////////

var selectedMarbles = [];
var whoseTurn = null;

////////
//Functions
////////


function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}

var allRowsMap = function() {
    return $.trim($(this).text());
}

var initializeGame = function(x) {
  //sets white marbles all with text 1
  var initWhiteMarblesIds = '#i5, #i6, #i7, #i8, #i9, #h4, #h5, #h6, #h7, #h8, #h9, #g5, #g6, #g7'
  $(initWhiteMarblesIds).text("1");
  $(initWhiteMarblesIds).css("backgroundColor", "#bdf271");
  //sets black marbles all with text -1
  var initBlackMarblesIds = '#a1, #a2, #a3, #a4, #a5, #b1, #b2, #b3, #b4, #b5, #b6, #c3, #c4, #c5'
  $(initBlackMarblesIds).text("-1");
  $(initBlackMarblesIds).css("backgroundColor", "#01a2a6");
  var allRows = $('.row').map(allRowsMap);
  console.log(allRows);
}

var moveNE = function(marble) {
  var x = nextChar($(marble).data('x'));
  var y = $(marble).data('y') + 1;
  return '#' + x + y;
}

var moveE = function(marble) {
  var x = $(marble).data('x');
  var y = $(marble).data('y') + 1;
  return '#' + x + y;
}

var moveSE = function(marble) {
  var x = prevChar($(marble).data('x'));
  var y = $(marble).data('y');
  return '#' + x + y;
}

var moveSW = function(marble) {
  var x = prevChar($(marble).data('x'));
  var y = $(marble).data('y') - 1;
  return '#' + x + y;
}

var moveW = function(marble) {
  var x = $(marble).data('x');
  var y = $(marble).data('y') - 1;
  return '#' + x + y;
}

var moveNW = function(marble) {
  var x = nextChar($(marble).data('x'));
  var y = $(marble).data('y');
  return '#' + x + y;
}

// console.log(moveSE('#a1'));
// console.log(moveNE('#a1'));
// console.log(moveE('#a1'));
// console.log(moveSW('#a1'));
// console.log(moveNW('#a1'));
// console.log(moveW('#a1'));


var allRows = $('.row').map(allRowsMap);
console.log(allRows);


////////
//Event Listeners
////////


var addMarble = function(x) {
  selectedMarbles.push(this);
  $(this).css('background-color', '#95ab63');
};

$( ".cell").click(addMarble);




console.log(selectedMarbles);




