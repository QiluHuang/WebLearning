const express = require('express');
const app = express();
const PORT = 3000;

// express "middleware", this time as an extra library
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// (skipping over other express stuff)
app.get('/', (req, res) => {
    const store = req.query.store;        // http://localhost:3000/?store=I+like+cats，那么store会有I like cats
                                          // 如果store变了，那么cookie也会变
    if (store) {
        res.cookie('saved', store);
    }

    const saw = req.cookies.saved;
    res.send(`<p>Request had cookies "saved": ${saw}</p>`);
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})