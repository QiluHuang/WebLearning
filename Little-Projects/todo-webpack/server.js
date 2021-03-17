const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.get('/demo', (req, res) => {
    const data = {
        sample: 'cats'
    };
    res.json(data);
});

app.listen(PORT, () => console.log(`localhost:${PORT}`));
