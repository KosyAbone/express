const User = require('../models/user.model')


const testRoute = (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
}

const getAllUsers = async(req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).send(allUsers)
    }
    catch (err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

const createUser = (req,res) => {
    const newUser = User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).send(newUser)
}


const updateUser = async(req, res) => {
    await User.findOne({email: req.params.email})
    const data = {
        let name: req.body.name,
        let email: req.body.email,
        let password: req.body.password
    }

}
module.exports = {testRoute, getAllUsers, createUser, updateUser}