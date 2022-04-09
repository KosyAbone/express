const User = require('../models/register.model')
const bcrypt = require('bcrypt')

exports.test = (req, res) => {
    res.status(200).json({message: 'test route is working', status: 'success'})
}

exports.createUser = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.send(404).send("User already exists. Please Login")
            return res.redirect('/login')
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        })
        res.status(201).json(user, {message: "Profile successfully created"})

    }catch(err){
        res.status(500).json({message: err.message})
    }
}