const express = require('express');
const app = express();
const PORT = 5000; // Why 5000? dev-server uses 3000

// Not yet configured for static files!

app.get('/api/test', (req, res) => {
    res.send('server works');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})