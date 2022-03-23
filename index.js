const express = require('express');
const app = express()
const PORT = 4000;

//app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html");
})

app.get('/index.css', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.css");
})

app.get('/IMG_8028.JPG', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/IMG_8028.JPG");
})

// app.get('/', (req, res) => {
//     res.status(200).send("<h1>This is the Home Page.</h1>");
// })

// app.get('/about', (req, res) => {
//     res.status(200).send("<h1>This is an about page.</h1>");
// })

// app.get('/contact-us', (req, res) => {
//     res.status(200).send("<h1>This is a contact page.</h1>");
// })

// app.get('/facilities', (req, res) => {
//     res.status(200).send("<h1>This is a facilities page.</h1>");
// })

// app.get('/gallery', (req, res) => {
//     res.status(200).send("<h1>his is a gallery page.</h1>T");
// })

//app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})