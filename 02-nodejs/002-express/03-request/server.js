const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

// request params 在 req.query 里面
app.get('/dynamic', (req, res) => {
    console.log(JSON.stringify(req.query));   // localhost:3000/dynamic.html?cats=cool&dogs=drool+a+lot
                                              //那么在webserver会显示{"cats":"cool","dogs":"drool a lot"}
    res.send('This is not an actual file');
});

// body params 需要 middleware
app.post('/response', express.urlencoded({ extended: false }), (req, res) => {
    if(req.body.username === "dog") {
        res.send(`you drool`);
    } else {
        res.send(`
        <!DOCTYPE HTML>
        <html>
            <head></head>
            <body>
            <a href="/">Return to form</a>
            <div>
                ${JSON.stringify(req.body)}
            </div>
            </body>
        </html>
    `);
    }
});


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});