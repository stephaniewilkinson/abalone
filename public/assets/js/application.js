////////
//Data
////////

var board;
var selectedMarbles;
var whoseTurn;
var direction;
var valids = [];
var validDirs;
var gutter;
var remainingMarblesRed ;
var remainingMarblesBlue;
var directions = ['nw', 'ne', 'e', 'se', 'sw', 'w'];
var owners = [0, 1, -1, 0, 0];
var db = new Firebase("https://abalone-game.firebaseio.com/");

////////
//Functions
////////

function initBoard() {
  db.set({'board': [
  /*  0 */  {marble: 1,  w: null, nw: null, ne: null, e: 1,    se: 6,    sw: 5},
  /*  1 */  {marble: 1,  w: 0,    nw: null, ne: null, e: 2,    se: 7,    sw: 6},
  /*  2 */  {marble: 1,  w: 1,    nw: null, ne: null, e: 3,    se: 8,    sw: 7},
  /*  3 */  {marble: 1,  w: 2,    nw: null, ne: null, e: 4,    se: 9,    sw: 8},
  /*  4 */  {marble: 1,  w: 3,    nw: null, ne: null, e: null, se: 10,   sw: 9},
  /*  5 */  {marble: 1,  w: null, nw: null, ne: 0,    e: 6,    se: 12,   sw: 11},
  /*  6 */  {marble: 1,  w: 5,    nw: 0,    ne: 1,    e: 7,    se: 13,   sw: 12},
  /*  7 */  {marble: 1,  w: 6,    nw: 1,    ne: 2,    e: 8,    se: 14,   sw: 13},
  /*  8 */  {marble: 1,  w: 7,    nw: 2,    ne: 3,    e: 9,    se: 15,   sw: 14},
  /*  9 */  {marble: 1,  w: 8,    nw: 3,    ne: 4,    e: 10,   se: 16,   sw: 15},
  /* 10 */  {marble: 1,  w: 9,    nw: 4,    ne: null, e: null, se: 17,   sw: 16},
  /* 11 */  {marble: 0,  w: null, nw: null, ne: 5,    e: 12,   se: 19,   sw: 18},
  /* 12 */  {marble: 0,  w: 11,   nw: 5,    ne: 6,    e: 13,   se: 20,   sw: 19},
  /* 13 */  {marble: 1,  w: 12,   nw: 6,    ne: 7,    e: 14,   se: 21,   sw: 20},
  /* 14 */  {marble: 1,  w: 13,   nw: 7,    ne: 8,    e: 15,   se: 22,   sw: 21},
  /* 15 */  {marble: 1,  w: 14,   nw: 8,    ne: 9,    e: 16,   se: 23,   sw: 22},
  /* 16 */  {marble: 0,  w: 15,   nw: 9,    ne: 10,   e: 17,   se: 24,   sw: 23},
  /* 17 */  {marble: 0,  w: 16,   nw: 10,   ne: null, e: null, se: 25,   sw: 24},
  /* 18 */  {marble: 0,  w: null, nw: null, ne: 11,   e: 19,   se: 27,   sw: 26},
  /* 19 */  {marble: 0,  w: 18,   nw: 11,   ne: 12,   e: 20,   se: 28,   sw: 27},
  /* 20 */  {marble: 0,  w: 19,   nw: 12,   ne: 13,   e: 21,   se: 29,   sw: 28},
  /* 21 */  {marble: 0,  w: 20,   nw: 13,   ne: 14,   e: 22,   se: 30,   sw: 29},
  /* 22 */  {marble: 0,  w: 21,   nw: 14,   ne: 15,   e: 23,   se: 31,   sw: 30},
  /* 23 */  {marble: 0,  w: 22,   nw: 15,   ne: 16,   e: 24,   se: 32,   sw: 31},
  /* 24 */  {marble: 0,  w: 23,   nw: 16,   ne: 17,   e: 25,   se: 33,   sw: 32},
  /* 25 */  {marble: 0,  w: 24,   nw: 17,   ne: null, e: null, se: 34,   sw: 33},
  /* 26 */  {marble: 0,  w: null, nw: null, ne: 18,   e: 27,   se: 35,   sw: null},
  /* 27 */  {marble: 0,  w: 26,   nw: 18,   ne: 19,   e: 28,   se: 36,   sw: 35},
  /* 28 */  {marble: 0,  w: 27,   nw: 19,   ne: 20,   e: 29,   se: 37,   sw: 36},
  /* 29 */  {marble: 0,  w: 28,   nw: 20,   ne: 21,   e: 30,   se: 38,   sw: 37},
  /* 30 */  {marble: 0,  w: 29,   nw: 21,   ne: 22,   e: 31,   se: 39,   sw: 38},
  /* 31 */  {marble: 0,  w: 30,   nw: 22,   ne: 23,   e: 32,   se: 40,   sw: 39},
  /* 32 */  {marble: 0,  w: 31,   nw: 23,   ne: 24,   e: 33,   se: 41,   sw: 40},
  /* 33 */  {marble: 0,  w: 32,   nw: 24,   ne: 25,   e: 34,   se: 42,   sw: 41},
  /* 34 */  {marble: 0,  w: 33,   nw: 25,   ne: null, e: null, se: null, sw: 42},
  /* 35 */  {marble: 0,  w: null, nw: 26,   ne: 27,   e: 36,   se: 43,   sw: null},
  /* 36 */  {marble: 0,  w: 35,   nw: 27,   ne: 28,   e: 37,   se: 44,   sw: 43},
  /* 37 */  {marble: 0,  w: 36,   nw: 28,   ne: 29,   e: 38,   se: 45,   sw: 44},
  /* 38 */  {marble: 0,  w: 37,   nw: 29,   ne: 30,   e: 39,   se: 46,   sw: 45},
  /* 39 */  {marble: 0,  w: 38,   nw: 30,   ne: 31,   e: 40,   se: 47,   sw: 46},
  /* 40 */  {marble: 0,  w: 39,   nw: 31,   ne: 32,   e: 41,   se: 48,   sw: 47},
  /* 41 */  {marble: 0,  w: 40,   nw: 32,   ne: 33,   e: 42,   se: 49,   sw: 48},
  /* 42 */  {marble: 0,  w: 41,   nw: 33,   ne: 34,   e: null, se: null, sw: 49},
  /* 43 */  {marble: 0,  w: null, nw: 35,   ne: 36,   e: 44,   se: 50,   sw: null},
  /* 44 */  {marble: 0,  w: 43,   nw: 36,   ne: 37,   e: 45,   se: 51,   sw: 50},
  /* 45 */  {marble: -1, w: 44,   nw: 37,   ne: 38,   e: 46,   se: 52,   sw: 51},
  /* 46 */  {marble: -1, w: 45,   nw: 38,   ne: 39,   e: 47,   se: 53,   sw: 52},
  /* 47 */  {marble: -1, w: 46,   nw: 39,   ne: 40,   e: 48,   se: 54,   sw: 53},
  /* 48 */  {marble: 0,  w: 47,   nw: 40,   ne: 41,   e: 49,   se: 55,   sw: 54},
  /* 49 */  {marble: 0,  w: 48,   nw: 41,   ne: 42,   e: null, se: null, sw: 55},
  /* 50 */  {marble: -1, w: null, nw: 43,   ne: 44,   e: 51,   se: 56,   sw: null},
  /* 51 */  {marble: -1, w: 50,   nw: 44,   ne: 45,   e: 52,   se: 57,   sw: 56  },
  /* 52 */  {marble: -1, w: 51,   nw: 45,   ne: 46,   e: 53,   se: 58,   sw: 57  },
  /* 53 */  {marble: -1, w: 52,   nw: 46,   ne: 47,   e: 54,   se: 59,   sw: 58  },
  /* 54 */  {marble: -1, w: 53,   nw: 47,   ne: 48,   e: 55,   se: 60,   sw: 59  },
  /* 55 */  {marble: -1, w: 54,   nw: 48,   ne: 49,   e: null, se: null, sw: 60  },
  /* 56 */  {marble: -1, w: null, nw: 50,   ne: 51,   e: 57,   se: null, sw: null},
  /* 57 */  {marble: -1, w: 56,   nw: 51,   ne: 52,   e: 58,   se: null, sw: null},
  /* 58 */  {marble: -1, w: 57,   nw: 52,   ne: 53,   e: 59,   se: null, sw: null},
  /* 59 */  {marble: -1, w: 58,   nw: 53,   ne: 54,   e: 60,   se: null, sw: null},
  /* 60 */  {marble: -1, w: 59,   nw: 54,   ne: 55,   e: null, se: null, sw: null}
  ],
  whoseTurn: whoseTurn
});

db.on('value', function(dataSnapshot) {
  board = dataSnapshot.val().board;
  whoseTurn = dataSnapshot.val().whoseTurn;
  renderBoard();
});
}

var initializeGame = function() {
  direction = "";
  whoseTurn = 1;
  selectedMarbles = [];
  initBoard();
  renderBoard();
};

function jumbleBoard() {
  board.forEach(function(idx) {
    idx.marble = owners[Math.floor(Math.random() * 5)];
  });
}


////////
// Directional Functions
////////

// gets the irection of the top of the row
function getTopDir() {
  var cell2 = board[selectedMarbles[1]];
  if (cell2.nw === selectedMarbles[0]) {return 'nw';}
  if (cell2.ne === selectedMarbles[0]) {return 'ne';}
  if (cell2.w === selectedMarbles[0]) {return 'w';}
}

// gets the opposite of the top dir
function getOppDir(dir) {
  if (dir === 'nw') {return 'se';}
  if (dir === 'ne') {return 'sw';}
  if (dir === 'e') {return 'w';}
  if (dir === 'se') {return 'nw';}
  if (dir === 'sw') {return 'ne';}
  if (dir === 'w') {return 'e';}
}

function getCellIndex(el) {
  return parseInt($(el).attr('index'));
}

function possibleMoveDirections() {
  return directions.filter(function(dir) {
    return canMarblesMove(dir);
  });
}

function canMarblesMove(dir) {
  return selectedMarbles.every(function(m) {
    return (board[m][dir] && board[board[m][dir]].marble === 0) || selectedMarbles.includes(board[m][dir]);
  });
}

function nearbyEnemies() {
  return directions.filter(function(dir) {
    return isThereAnEnemyAdjacent(dir);
  });
}

function isThereAnEnemyAdjacent(dir) {
  return selectedMarbles.every(function(m) {
    return (board[m][dir] != null && board[board[m][dir]].marble === (whoseTurn * (-1))) || selectedMarbles.includes(board[m][dir]);
  });
}

function rightSouthMostMarble() {
  return board[selectedMarbles[(selectedMarbles.length - 1)]];
}

function objInDir(thisMarble, dir) {
  return board[thisMarble[dir]];
}

function leftNorthMostMarble() {
  return board[selectedMarbles[0]]
};

function canIShove() {
  if (selectedMarbles.length > 1) {
    var canShove = true;
    var validShoveDirs  = [];
    var enemyDirsArray  = nearbyEnemies(); // ["ne"]
    var lastMarble      = rightSouthMostMarble();
    var firstMarble     = leftNorthMostMarble();
    var enemyBattleLines = 1;
    var validMurderDirs = [];

      for (var i = enemyDirsArray.length - 1; i >= 0; i--) {
        var dir = enemyDirsArray[i]
        var targetObj = board[lastMarble[dir]];
        var northTargetObj = board[firstMarble[dir]]

          if(["se","sw","e"].indexOf(dir) > -1) {
            if (board[targetObj[dir]] && board[targetObj[dir]].marble === 0) {
            } else if (!targetObj.hasOwnProperty(dir)) {
              console.log('gutterball to the ' + dir);
              validMurderDirs.push(dir);
            } else if (board[targetObj[dir]] && (board[targetObj[dir]].marble === (whoseTurn * (-1)))) {
              enemyBattleLines ++;
              targetObj = board[targetObj[dir]];
            } else if (board[targetObj[dir]] && board[targetObj[dir]].marble === whoseTurn) {
              canShove = false;
            }
            if (enemyBattleLines < selectedMarbles.length && canShove) {
              console.log("Can shove", dir);
              validShoveDirs.push(dir);
            }
          }

          if ( ["w","nw","ne"].indexOf(dir) > -1) {
            if (board[northTargetObj[dir]] && board[northTargetObj[dir]].marble === 0) {
            } else if (board[northTargetObj[dir]] && (board[northTargetObj[dir]].marble === (whoseTurn * (-1)))) {
              enemyBattleLines ++;
              northTargetObj = board[northTargetObj[dir]];
            }  else if (!northTargetObj.hasOwnProperty(dir)) {
              console.log('gutterball to the ' + dir);
              validMurderDirs.push(dir);
            }  else if (board[northTargetObj[dir]] && board[northTargetObj[dir]].marble === whoseTurn) {
              canShove = false;
            } else if (objInDir(northTargetObj, dir) === null || board[northTargetObj[dir]] === undefined) {

            }
            if ((enemyBattleLines < selectedMarbles.length) && canShove) {
              validShoveDirs.push(dir);
            } else {
            }
          }
      }
    return validShoveDirs;
  }
}

function findValidMarbles(index) {
  valids = [];
  if (selectedMarbles.length === 1) {
    var cell = board[index];
    if (board[(cell.nw)] && board[(cell.nw)].marble === whoseTurn) {valids.push(cell.nw);}
    if (board[(cell.ne)] && board[(cell.ne)].marble === whoseTurn && board[(cell.ne)]) {valids.push(cell.ne);}
    if (board[(cell.e)] && board[(cell.e)].marble === whoseTurn) {valids.push(cell.e);}
    if (board[(cell.se)] && board[(cell.se)].marble === whoseTurn) {valids.push(cell.se);}
    if (board[(cell.sw)] && board[(cell.sw)].marble === whoseTurn) {valids.push(cell.sw);}
    if (board[(cell.w)] && board[(cell.w)].marble === whoseTurn) {valids.push(cell.w);}
  } else if (selectedMarbles.length === 2) {
    var dir = getTopDir();

    if (board[selectedMarbles[0]][dir] &&  board[board[selectedMarbles[0]][dir]].marble === whoseTurn){
      valids.push(board[selectedMarbles[0]][dir]);
    };
    dir = getOppDir(dir);
    if (board[selectedMarbles[1]][dir] && board[board[selectedMarbles[1]][dir]].marble == whoseTurn){
      valids.push(board[selectedMarbles[1]][dir]);
    };
  };
  return valids;
}

function findCellsClasses(arr) {
  var openCells = arr;
  if (openCells != null && openCells.length > 0) {
    return "." + openCells.join(", .");
  } else {
    return "";
  }
}

//reverse the array depending ont he direction

function moveMarbles(direction) {
  console.log(direction);
  if(direction === 'ne' || direction === 'nw' || direction === 'w') {
    // check if you're shoving a marble
    selectedMarbles.forEach(function(marbleIdx) {
      var nextIndex = board[marbleIdx][direction];
      board[nextIndex].marble = board[marbleIdx].marble;
      board[marbleIdx].marble = 0;
     });

  } else if (direction === 'sw' || direction === 'se' || direction === 'e') {
    //check if the cell is filled already
    selectedMarbles = selectedMarbles;
    for (var i = selectedMarbles.length - 1; i > -1; i--) {
      var nextIndex = board[selectedMarbles[i]][direction];

      board[nextIndex].marble = board[selectedMarbles[i]].marble;

      board[selectedMarbles[i]].marble = 0;
    }
  } else {console.log('wtf')};

  // board[selectedMarbles[getTail()]].marble = 0;
  selectedMarbles = [];
  db.update({board: board})
  whoseTurn *= -1;
  db.update({whoseTurn: whoseTurn})
  renderBoard();
};

function checkIfWon() {
  remainingMarblesRed = [];
  remainingMarblesBlue = [];
  //if there are fewer than nine of either color the game is won
  board.forEach(function(idx) {
    if (idx.marble === 1) {
      remainingMarblesRed.push(board.indexOf(idx));
    };
    if (idx.marble === -1) {
      remainingMarblesBlue.push(board.indexOf(idx));
    };
  });
  if (remainingMarblesBlue.length < 9) {
    alert('red wins');
    initBoard();
    renderBoard();
  } else if (remainingMarblesRed.length < 9) {
    alert('blue wins');
    initBoard();
    renderBoard();
  }
}

////////
//Renders
////////

function renderArrows() {
  $('.moveArrow').hide();
  $('.moveArrow').css('color', '');
  var nearbyOpenCells = findCellsClasses(possibleMoveDirections());
  var validShoveDirs = findCellsClasses(canIShove());

  if (selectedMarbles.length > 0) {
    $(nearbyOpenCells).show();
  };
  if (selectedMarbles.length > 1) {
    $(validShoveDirs).show();
    $(validShoveDirs).css('color', 'red');
  }
};

function renderBoard() {
  board.forEach(function(cell, idx) {
    var $cellEl = $('[index="' + idx + '"]');
    $cellEl.removeClass('p1 p2 clickable clicked');
    if ($.inArray(idx, selectedMarbles) === 0 || $.inArray(idx, selectedMarbles) === 1 || $.inArray(idx, selectedMarbles) === 2) {
      $cellEl.addClass('clicked');
    };
    if (cell.marble === 1) {
      $cellEl.addClass('p1');
    } else if (cell.marble === -1) {
      $cellEl.addClass('p2');
    }
  });
  renderArrows();
  checkIfWon();
  renderValids();
}

function renderValids() {
  if (selectedMarbles.length === 0) {
    board.forEach(function(idx) {
      if (idx.marble === whoseTurn) {
      valids.push(board.indexOf(idx));
    };
  })
}
  valids.forEach(function(validIdx) {
    var $cellEl = $('[index="' + validIdx + '"]');
      $cellEl.addClass('clickable');
  });
}


////////
//Event Listeners
////////

$( ".cell").click(function(evt) {
    if (selectedMarbles.length < 3) {
      var cellIndex = getCellIndex(this);
      // ignore clicks on empty cells
      if (board[cellIndex].marble === null) return;
      if (board[cellIndex].marble !== whoseTurn) return;
      if (selectedMarbles.length && !valids.includes(cellIndex)) return;
      if ($.inArray(cellIndex, selectedMarbles) === -1) {
          $(this).addClass("clicked");
          selectedMarbles.push(cellIndex);
          selectedMarbles.sort(function(a, b) {
            return a-b;
          });
          findValidMarbles(cellIndex);
        };
    };
    renderBoard();
});


$('.moveArrow').on('click', function(evt) {
  direction = $(this).attr('dir');
  moveMarbles(direction);
});

$('.jumble').on('click', function(evt) {
  jumbleBoard();
  renderBoard();
});

$('.tilt').on('click', function(evt) {
  $('#board').toggleClass('boardtilt');
  $('#container').toggleClass('containertilt')
});

$('.rotate').on('click', function(evt) {
  $('#board').toggleClass('rotateboard');
});

initializeGame();
