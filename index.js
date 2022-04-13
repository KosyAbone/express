require('dotenv').config()
require('./database').connect()
const express = require('express');
const app = express()
const bookRouter = require('./routes/book.route')
const registerRouter = require('./routes/register.route')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/register', registerRouter);
app.use('/book', bookRouter);

app.listen(process.env.PORT, () => {
    console.log(`Express Server listening on port ${process.env.PORT}`);
})