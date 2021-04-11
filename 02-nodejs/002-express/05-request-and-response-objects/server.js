const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST");
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!!!");    // String
    // res.send({color: 'red'})                                          // Object
    res.send('<h1>This is my webpage</h1>')                              // HTML
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})