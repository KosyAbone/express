const express = require('express');
const app = express()
const userRouter = require('./routes/user.route')
const PORT = 4000;
const mongoose = require('mongoose');
const { urlencoded } = require('express');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.connect(('mongodb://localhost:27017/seedDb'), () => console.log('db is running...'))



app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})