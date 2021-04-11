const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
    console.log(req.query);
    // res.send('working with query string');

    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCH')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});