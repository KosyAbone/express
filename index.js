require('dotenv').config()
const express = require('express');
const app = express()
const loginRouter = require('./routes/login.route')
const PORT = process.env.PORT || 6000;
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.URL, () => console.log('db is running...'))


app.use('/user', loginRouter);

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})