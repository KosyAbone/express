const express = require('express');
const app = express()
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("This is an Express Server.");
})

app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
})