require('dotenv').config()
const User = require('../../Backend/models/register.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

exports.test = (req, res) => {
    res.status(200).json({message: 'test route is working', status: 'success'})
}


exports.createUser = async(req, res) => {
    const { firstName, lastName, email, phone, gender, address, password } = req.body;

    try{
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(404).send("User already exists. Please Login")
            //return res.redirect('/login')
        }

        encryptedPassword = await bcrypt.hash(password.toString(), 10)

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone,
            gender,
            address,
            password: encryptedPassword
        })

        const token = jwt.sign({id: user._id, email}, secretKey, {expiresIn: '2h'})

        

        res.status(201).send(`Account created successfully. Welcome to SeedHub ${firstName}`)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}