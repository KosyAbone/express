const User = require('../models/user')
const mongoose = require('mongoose')

exports.default('/', (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
})

exports.getAllUsers('/', async(req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).send(allUsers)
    }
    catch{
        res.status(500).send("Internal Server Error")
    }
})