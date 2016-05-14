
////////
//Data
////////


////////
//Functions
////////


var allRowsMap = function() {
    return $.trim($(this).text());
}

var initializeGame = function(x) {
  //sets white marbles all with text 1
  $('#i5, #i6, #i7, #i8, #i9, #h4, #h5, #h6, #h7, #h8, #h9, #g5, #g6, #g7').text("1");
  $('#i5, #i6, #i7, #i8, #i9, #h4, #h5, #h6, #h7, #h8, #h9, #g5, #g6, #g7').css("backgroundColor", "#ff358b");
  //sets black marbles all with text -1
  // $(selector).text(content)
  var allRows = $('.row').map(allRowsMap);
  console.log(allRows);
}

var allRows = $('.row').map(allRowsMap);
console.log(allRows);
