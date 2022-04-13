const User = require('../models/register.model')
const bcrypt = require('bcrypt')

exports.test = (req, res) => {
    res.status(200).json({message: 'test route is working', status: 'success'})
}


exports.createUser = async(req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    try{
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(404).send("User already exists. Please Login")
            //return res.redirect('/login')
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone,
            password: encryptedPassword
        })
        // console.log(user)
        res.status(201).json(user)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}