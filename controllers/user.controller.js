const { findOneAndDelete } = require('../models/user.model');
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
        console.log(err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const createUser = async(req,res) => {
    try{
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.status(200).json(newUser)
        console.log(newUser)
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
}


const updateUser = async(req, res) => {
    try{
        await User.findOneAndUpdate({email: req.params.email})
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        res.status(200).send(data)
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
    
}

const deleteUser = async(req, res) => {
    const email = await User.findOneAndDelete({email: req.params.email})

}
module.exports = {testRoute, getAllUsers, createUser, updateUser}