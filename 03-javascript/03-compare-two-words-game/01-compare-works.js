function compare( word, guess ) {
    let count = 0; 
    const obj = {};
    for (let i = 0; i < word.length; i++) {
        if (isNaN(obj[word[i].toLowerCase()])) {
            obj[word[i].toLowerCase()] = 1;
        } else {
            obj[word[i].toLowerCase()]++;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (obj[guess[i].toLowerCase()] > 0) {
            obj[guess[i].toLowerCase()]--;
            count++;
        }
    }
    return count;
}