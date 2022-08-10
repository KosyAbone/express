require('dotenv').config()
require('./Backend/database').connect()
const express = require('express');
const app = express()
const bookRouter = require('./Backend/routes/book.route')
const registerRouter = require('./Backend/routes/register.route')
const loginRouter = require('./Backend/routes/login.route')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Home Test Route Working!");
})

app.use('/register', registerRouter);
app.use('/book', bookRouter);
app.use('/login', loginRouter)

// app.listen(process.env.PORT, () => {
//     console.log(`Express Server listening on port ${process.env.PORT}`);
// })