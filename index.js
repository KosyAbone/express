require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bookRouter = require('./routes/book.route')
const registerRouter = require('./routes/register.route')

mongoose.connect(
    process.env.URL
  )
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/register', registerRouter);
app.use('/book', bookRouter);

app.listen(process.env.PORT, () => {
    console.log(`Express Server listening on port ${process.env.PORT}`);
})