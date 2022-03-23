const express = require('express');
const app = express()
const PORT = 4000;

//app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).send("<h1>This is the home page.</h1>");
})

app.get('/about', (req, res) => {
    res.status(200).send("<h1>This is an about page.</h1>");
})

app.get('/contact-us', (req, res) => {
    res.status(200).send("<h1>This is a contact page.</h1>");
})

app.get('/facilities', (req, res) => {
    res.status(200).send("<h1>This is a facilities page.</h1>");
})

app.get('/gallery', (req, res) => {
    res.status(200).send("<h1>his is a gallery page.</h1>T");
})

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})