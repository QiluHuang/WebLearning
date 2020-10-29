"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
  let count = 0;
  for (let i = 0; i < word.length; i++ ) {
    for (let j = 0; j < guess.length; j++) {
      if (word.charAt(i).toUpperCase() === guess.charAt(j).toUpperCase()) {
        count++;
      }
    }
  }
  return count; // this line is wrong
}
