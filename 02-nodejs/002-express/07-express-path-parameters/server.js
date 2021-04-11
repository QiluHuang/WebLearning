const express = require('express');
const app = express();
const PORT = 3000;

// generic pattern: /r/SOMETHINGHERE
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    // res.send(`THIS IS A SUBREDDIT!`);

    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
});

// 多个params
app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    // res.send('Test');

    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)


})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});