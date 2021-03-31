const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}


// For...Of Loop
console.log("2) For...Of Loop");
for (let sub of subreddits) {
    // console.log(sub);
    console.log(`Visit reddit.com/r/${sub}`);
}


for (let char of "hello world") {
    console.log(char);
}