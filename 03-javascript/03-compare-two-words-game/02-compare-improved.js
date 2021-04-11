function compare( word, guess ) {
    let matches = 0; 
    const letterCount = {};

    const increment = count => count ? count + 1 : 1;

    for (let letter of word.toLowerCase()) {
        // letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1;
        // letterCount[letter] = increment(letterCount[letter]);
        letterCount[letter] = letterCount[letter] + 1 || 1;
    }

    for (let letter of guess.toLowerCase()) {
        if (letterCount[letter] > 0) {
            letterCount[letter] -= 1;
            matches += 1;
        }
    }

    return matches;
}