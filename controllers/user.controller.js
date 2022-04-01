const User = require('../models/user')
const mongoose = require('mongoose')

export default('/', (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
})

export.getAllUsers('/', async(req, res) => {
    try{
        const allUsers = await mongoose.User.find();
        res.status(200).send(allUsers)
    }
    catch{
        res.status(500).send("Internal Server Error")
    }
})