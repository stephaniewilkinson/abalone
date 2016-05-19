  ////////
//Data
////////

var board;
var selectedMarbles;
var whoseTurn;
var direction;
var valids = [];

////////
//Functions
////////

function initBoard() {
  board = [
    {marble: 1, w: null, nw: null, ne: null, e: 1,     se: 6,    sw: 5},
    {marble: 1, w: 0,    nw: null, ne: null, e: 2,     se: 7,    sw: 6},
    {marble: 1, w: 1,    nw: null, ne: null, e: 3,     se: 8,    sw: 7},
    {marble: 1, w: 2,    nw: null, ne: null, e: 4,     se: 9,    sw: 8},
    {marble: 1, w: 3,    nw: null, ne: null, e: null,  se: 10,   sw: 9},
    {marble: 1, w: null, nw: null, ne: 0,    e: 6,     se: 12,   sw: 11},
    {marble: 1, w: 5,    nw: 0,    ne: 1,    e: 7,     se: 13,   sw: 12},
    {marble: 1, w: 6,    nw: 1,    ne: 2,    e: 8,     se: 14,   sw: 13},
    {marble: 1, w: 7,    nw: 2,    ne: 3,    e: 9,     se: 15,   sw: 14},
    {marble: 1, w: 8,    nw: 3,    ne: 4,    e: 10,    se: 16,   sw: 15},
    {marble: 1, w: 9,    nw: 4,    ne: null, e: null,  se: 17,   sw: 16},
    {marble: null, w:    null, nw: null, ne: 5,    e: 12,    se: 19,   sw: 18},
    {marble: null, w: 11,   nw: 5,    ne: 6,    e: 13,    se: 20,   sw: 19},
    {marble: 1, w: 12,   nw: 6,    ne: 7,    e: 14,        se: 21,   sw: 20},
    {marble: 1, w: 13,   nw: 7,    ne: 8,    e: 15,       se: 22,   sw: 21},
    {marble: 1, w: 14,   nw: 8,    ne: 9,    e: 16,       se: 23,   sw: 22},
    {marble: null, w: 15,   nw: 9,    ne: 10,   e: 17,    se: 24,   sw: 23},
    {marble: null, w: 16,   nw: 10,   ne: null, e: null, se: 25,   sw: 24},
    {marble: null, w: null, nw: null, ne: 11,   e: 19,    se: 26,   sw: 26},
    {marble: null, w: 18,   nw: 11,   ne: 12,   e: 20,    se: 27,   sw: 27},
    {marble: null, w: 19,   nw: 12,   ne: 13,   e: 21,    se: 28,   sw: 28},
    {marble: null, w: 20,   nw: 13,   ne: 14,   e: 22,    se: 29,   sw: 29},
    {marble: null, w: 21,   nw: 14,   ne: 15,   e: 23,    se: 30,   sw: 30},
    {marble: null, w: 22,   nw: 15,   ne: 16,   e: 24,    se: 31,   sw: 31},
    {marble: null, w: 23,   nw: 16,   ne: 17,   e: 25,    se: 32,   sw: 32},
    {marble: null, w: 24,   nw: 17,   ne: null, e: null,  se: 33,   sw: 33},
    {marble: null, w: null, nw: null, ne: 18,   e: 27,    se: 35,   sw: null},
    {marble: null, w: 26,   nw: 18,   ne: 19,   e: 28,    se: 36,   sw: 35},
    {marble: null, w: 27,   nw: 19,   ne: 20,   e: 29,    se: 37,   sw: 36},
    {marble: null, w: 28,   nw: 20,   ne: 21,   e: 30,    se: 38,   sw: 37},
    {marble: null, w: 29,   nw: 21,   ne: 22,   e: 31,    se: 39,   sw: 38},
    {marble: null, w: 30,   nw: 22,   ne: 23,   e: 32,    se: 40,   sw: 39},
    {marble: null, w: 31,   nw: 23,   ne: 24,   e: 33,    se: 41,   sw: 40},
    {marble: null, w: 32,   nw: 24,   ne: 25,   e: 34,    se: 42,   sw: 41},
    {marble: null, w: 33,   nw: 25,   ne: null, e: null,  se: null, sw: 42},
    {marble: null, w: null, nw: 26,   ne: 27,   e: 36,    se: 43,   sw: 42},
    {marble: null, w: 35,   nw: 27,   ne: 28,   e: 37,    se: 44,   sw: 43},
    {marble: null, w: 36,   nw: 28,   ne: 29,   e: 38,    se: 45,   sw: 44},
    {marble: null, w: 37,   nw: 29,   ne: 30,   e: 39,    se: 46,   sw: 45},
    {marble: null, w: 38,   nw: 30,   ne: 31,   e: 40,    se: 47,   sw: 46},
    {marble: null, w: 39,   nw: 31,   ne: 32,   e: 41,    se: 48,   sw: 47},
    {marble: null, w: 40,   nw: 32,   ne: 33,   e: 42,    se: 49,   sw: 48},
    {marble: null, w: 41,   nw: 33,   ne: 34,   e: null,  se: null, sw: 49},
    {marble: null, w: null, nw: 35,   ne: 36,   e: 44,    se: 50,   sw: null},
    {marble: null, w: 43,   nw: 36,   ne: 37,   e: 45,    se: 51,   sw: 50},
    {marble: -1, w: 44,   nw: 37,   ne: 38,   e: 46,    se: 52,   sw: 51},
    {marble: -1, w: 45,   nw: 38,   ne: 39,   e: 47,    se: 53,   sw: 52},
    {marble: -1, w: 46,   nw: 39,   ne: 40,   e: 48,    se: 54,   sw: 53},
    {marble: null, w: 47,   nw: 40,   ne: 41,   e: 49,    se: 55,   sw: 54},
    {marble: null, w: 48,   nw: 41,   ne: 42,   e: null,  se: null, sw: 55},
    {marble: -1, w: null, nw: 43,   ne: 44,   e: 51,    se: 56,   sw: null},
    {marble: -1, w: 50,   nw: 44,   ne: 45,   e: 52,    se: 57,   sw: 56},
    {marble: -1, w: 51,   nw: 45,   ne: 46,   e: 53,    se: 58,   sw: 57},
    {marble: -1, w: 52,   nw: 46,   ne: 47,   e: 54,    se: 59,   sw: 58},
    {marble: -1, w: 53,   nw: 47,   ne: 48,   e: 55,    se: 60,   sw: 59},
    {marble: -1, w: 54,   nw: 48,   ne: 49,   e: null,  se: null, sw: 60},
    {marble: -1, w: null, nw: 50,   ne: 51,   e: 57,    se: null, sw: null},
    {marble: -1, w: 56,   nw: 51,   ne: 52,   e: 58,    se: null, sw: null},
    {marble: -1, w: 57,   nw: 52,   ne: 53,   e: 59,    se: null, sw: null},
    {marble: -1, w: 58,   nw: 53,   ne: 54,   e: 60,    se: null, sw: null},
    {marble: -1, w: 59,   nw: 54,   ne: 55,   e: null,  se: null, sw: null}
    ];
}

var initializeGame = function() {
  direction = "";
  whoseTurn = 1;
  selectedMarbles = [];
  initBoard();
  renderBoard();
}

function getAdjacent(index, dir) {
  return board[board[index][dir]];
}

function findValidMarbles(index) {
   valids = [];
  if (selectedMarbles.length === 1) {
    var cell = board[index];
    console.log(board[cell.se].marble);
    console.log(whoseTurn);
    if (board[(cell.nw)].marble === whoseTurn) valids.push(cell.nw);
    if (board[(cell.ne)].marble === whoseTurn) valids.push(cell.ne);
    if (board[(cell.e)].marble === whoseTurn) valids.push(cell.e);
    if (board[(cell.se)].marble === whoseTurn) valids.push(cell.se);
    if (board[(cell.sw)].marble === whoseTurn) valids.push(cell.sw);
    if (board[(cell.w)].marble === whoseTurn) valids.push(cell.w);
  }
  return valids;
}

function renderBoard() {
  board.forEach(function(cell, idx) {
    var $cellEl = $('[index="' + idx + '"]');
    $cellEl.removeClass('p1 p2 clickable clicked');
    if (cell.marble === whoseTurn) {
      $cellEl.addClass('clickable'); }
    if (cell.marble === 1 ) {
      $cellEl.addClass('p1');
    } else if (cell.marble === -1) {
      $cellEl.addClass('p2');
    }
  });
  renderValids();
}

function renderValids() {
  console.log(valids);
  valids.forEach(function(validIdx) {
    var $cellEl = $('[index="' + validIdx + '"]');
      $cellEl.addClass('clickable');

  });
}

function getCellIndex(el) {
  return parseInt($(el).attr('index'));
}

function getTail() {
  return ['e', 'se', 'sw'].includes(direction) ? 0 : selectedMarbles.length - 1;
}

function moveMarbles() {
  selectedMarbles.forEach(function(marbleIdx) {
    var nextIndex = board[marbleIdx][direction];
    board[nextIndex].marble = board[marbleIdx].marble;
  });
  board[selectedMarbles[getTail()]].marble = null;
  renderBoard();
  selectedMarbles = [];
  whoseTurn *= -1;
};


////////
//Event Listeners
////////

$( ".cell").click(function(evt) {
    if (selectedMarbles.length < 3) {
      var cellIndex = getCellIndex(this);
      // ignore clicks on empty cells
      if (board[cellIndex].marble === null) return;
      if (board[cellIndex].marble !== whoseTurn) return;
      // check that marble clicked is not already in selectedMarbles array
      if ($.inArray(cellIndex, selectedMarbles) === -1) {
          $(this).addClass("clicked");
          selectedMarbles.push(cellIndex);
          findValidMarbles(cellIndex);
          selectedMarbles.sort(function(a, b) {
            return a-b;
          });
        };
    };
    renderBoard();
});



initializeGame();
