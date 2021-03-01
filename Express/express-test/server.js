// server.js
// NOT in public
// index.html however IS inside public/

// run with `node server.js`
// - NOT inside public
// - But inside project directory
// (same location as server.js and package.json)

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/dynamic.html', (req, res) => { 
    console.log(JSON.stringify(req.query));
    res.send('This is not an actual file');
});

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});