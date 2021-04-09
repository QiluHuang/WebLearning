// server.js
// NOT in public
// index.html however IS inside public/
//
// run with `node server.js`
// - NOT inside public 
// - But inside project directory
// (same locaton as server.js and package.json)

const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})