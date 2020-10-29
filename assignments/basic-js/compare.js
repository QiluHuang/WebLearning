"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) { // DO NOT MODIFY
  /* YOU MAY MODIFY THE LINES BELOW */
  let matches = 0;
  const letterCount = {};
  for( let letter of word.toLowerCase() ) {
    letterCount[letter] = letterCount[letter] + 1 || 1;//truthy-falsy, 0 is falsy
  }
  for( let letter of guess.toLowerCase() ) {
    if( letterCount[letter] ) {
      letterCount[letter] -= 1;
      matches += 1;
    }
  }
  return matches;
}
