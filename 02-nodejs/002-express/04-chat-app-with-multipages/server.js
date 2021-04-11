const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.get('/chats', (req, res) => {
    res.send(
        `
        `
    )
})

app.listen(PORT, (req, res) => {
    console.log(`listening to http://localhost:${PORT}`);
})