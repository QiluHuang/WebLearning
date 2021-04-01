// 1) basic function
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong();


// 2) with arguments
function greet(name) {
    console.log(`Hi, ${name}`);
} 

greet("Tim");

// 3) function expressions
const add = function (x, y) {
    return x + y;
}