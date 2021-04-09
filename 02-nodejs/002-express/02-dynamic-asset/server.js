const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('./public'));

// Add a dynamic asset
app.get('/dynamic.html', (req, res) => {
    res.send('This is not an actual life');
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})