const express = require('express');
const app = express();
const PORT = 5000; // Why 5000? dev-server uses 3000
const catFacts = require('./cat-facts.json');

// Not yet configured for static files!

app.get('/api/test', (req, res) => {
    res.send('server works');
});


// a service API count 
// and then whenever you call it is going to return you an incremental number.
let count = 0;
app.post('/api/count', (req, res) => {
    count += 1;
    res.json(count);
});

app.get('/api/catFacts', (req, res) => {
    setTimeout( () => {
        res.json(catFacts);
    }, 3000); //设定3s后获得 deliberately slow response
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})