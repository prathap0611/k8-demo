const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log("Hitting get");
    console.log(JSON.stringify(req.headers));
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`Application listening in port ${port}`);
})