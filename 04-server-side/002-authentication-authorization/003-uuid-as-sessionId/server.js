const express = require('express');
const app = express();
const PORT = 3000;

const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

// this could move to another file for Separation of Concerns
const session = {};

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    console.log(sid);
    // Because that cookie that value doesn't exist as a key in this object 
    // this object(指的session) is currently empty because we just restarted the server.
    // 注意：username不是存在cookie，data is coming from the server side，不是存在client side
    if (!sid || !session[sid]) {    
        res.send('You are not logged in, <a href="/login.html">Login Now</a>');
        return;
    }
    
    // res.send('We have not written this yet');
    res.send(`You are logged in as ${session[sid].username}. 
    You may <form action="/logout" method="POST">
    <button type="submit">Logout</button>
    </form>`);
})

app.post('/session', (req, res) => {
    const username = req.body.username.trim();
    if (username === 'dog'  || !username) {
        res.status(403).send('this is a bad message');
        return;
    }
    const sid = uuidv4();
    res.cookie('sid', sid);
    session[sid] = {
        username: username
    }
    res.redirect('/');
});

app.get('/users', (req, res) => {
    const sid = req.cookies.sid;
    if(!sid || !isValid(sid)) {
        res.clearCookie('sid');
        res.sendStatus(401);
        return;
    }
    // Do whatever here
    console.log(sid);
})

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    delete session[sid];
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});