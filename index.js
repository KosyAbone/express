const express = require('express');
const app = express()
const router = require('./routes/user.route')
const PORT = 4000;



app.use('/', router);

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})