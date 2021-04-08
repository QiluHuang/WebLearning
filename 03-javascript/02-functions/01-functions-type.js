// 1.1) basic function(statement)
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong();

// 1.2) basic function with arguments(statement)
function fromAStatement( someValue ) {
    console.log(someValue);
}

function greet(name) {
    console.log(`Hi, ${name}`);
} 
greet("Tim");



// 2) function expression
const fromAnExpression = function ( someValue ) {
    console.log(someValue);
}

const add = function (x, y) {
    return x + y;
}



// 3) Fat Arrow functions
const someFunc = (arg) => {
    console.log(arg);
}