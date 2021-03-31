let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guessNum = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guessNum) !== targetNum) {
    if (guessNum === 'q') break;
    attempts++;
    if (guessNum > targetNum) {
        guessNum = prompt("Too high! Enter a new guess:");
    } else {
        guessNum = prompt("Too low! Enter a new guess:");
    }
}

if (guessNum === 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log(`YOU GOT IT! It took you ${attempts} guesses`);
}