const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // const name = req.query.name;


    // 如果用户url写成 ?name=%3Cimg+src=%27%27+onerror=%22alert(%27pwned%27)%22%3E，就会有窗口弹出
    // 或者写成 ?name=<img+src=%27%27+onerror="alert(%27pwned%27)">
    // 所以要写以下防止
    // const name = req.query.name.replace(/>/g, "&gt;").replace(/</, "&lt;");
    // 或者
    const name = req.query.name.replace(/[^A-Za-z0-9_]+/g, "");
    
    res.send(`<p>Hello ${name}</p>`)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});