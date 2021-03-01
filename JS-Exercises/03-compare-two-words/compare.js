function compare( word, guess ) {
    let matches = 0;
    const letterCount = {};
    
    for ( let letter of word.toLowerCase ) {
        letterCount[letter] = letterCount + 1 || 1;

    }

    for ( let guessLetter of guess.toLowerCase ) {
        if ( letterCount[guessLetter] ) {
            letterCount[guessLetter] -= 1;
            matches += 1;
        }
    }

    return matches;
}