const User = require('../models/user.model')


exports.testRoute = (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
}

exports.getAllUsers = async(req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).send(allUsers)
    }
    catch (err){
        console.log(err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

exports.createUser = async(req,res) => {
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

exports.getUser = async(req, res) => {
    try{
        const user = await User.findOne({email: req.params.email})
        if(!user) {
           return res.status(404).json({message: "User Not Found"})
        }
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}


exports.updateUser = async(req, res) => {
    if(!req.body){
        res.status(400).send({message: "Cannot update empty data!"})
    }
    try{
        const updatedUser = await User.findOneAndUpdate({email: req.params.email}, req.body)
        if(!updatedUser){
           return res.status(404).send("User not found!")
        }
        res.status(200).json(updatedUser)
    } catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
    
}

exports.deleteUser = async(req, res) => {
    try{
        const user = await User.findOneAndDelete({email: req.params.email})
        if(!user){
            return res.status(404).send('User Does Not Exist!')
        }
        res.status(200).json({message: "delete successful"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}