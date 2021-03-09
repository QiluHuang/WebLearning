const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('./public'));

const people = {
    amit: {
      age: 23,
      grade: 76,
    },
    bao: {
      age: 24,
      grade: 92,
    },
};



// request a specific person
app.get('/people/:name', (req, res) => {
    const name = req.params.name;
    if (people[name]) {
        res.json(people[name]);
    } else {
        res.status(404).json({ error: `Unknwon user: ${name}` });
    }
});


// request all the people
app.get('/people/', (req, res) => {
    res.json(Object.keys(people));
});


// sending us data as json in the body of the request
// so will not be URL encoded it will be json encoded
app.post('/people/:name', express.json(), (req, res) => {
    const name = req.params.name;
    if (!name) {
        res.status(400).json({ error: "'name' required" });
        
    } else if (people[name]) {
        res.status(409).json({ error: `duplicate: ${name}` });
        
    } else {
        people[name] = req.body;
        res.json(Object.keys(people));
        // res.sendStatus(200);
    }
});


app.delete('/people/:name', (req, res) => {
    const name = req.params.name;
    if (!name) {
        res.status(400).json({ error: 'missing-name' });
        return;
    }
    delete people[name];
    res.json(Object.keys[people]);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
