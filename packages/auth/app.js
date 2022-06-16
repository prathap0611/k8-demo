const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.get('/auth', (req, res) => {
    console.log("Should perform authorization");
    res.header('clientId', 'some client id');
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Application listening in port ${port}`);
})