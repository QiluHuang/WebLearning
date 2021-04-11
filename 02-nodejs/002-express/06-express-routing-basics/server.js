const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log("This is the homepage!");
})

app.get('/cats', (req, res) => {
    console.log("CAT REQUEST!!!");
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST');
})

app.get('/dogs', (req, res) => {
    console.log("WOOF!!!");
})

// *代表match everything，所以不能放在一开头，否则一批配上就直接显示这个了
app.get('*', (req, res) => {
    res.send(`I don't know that path`);
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})