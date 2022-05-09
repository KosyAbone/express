require('dotenv').config()
const User = require('../Backend/models/register.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

exports.login = async(req, res) => {
    const { email, password } = req.body

    if(!(email && password)) 
        return res.status(400).send("Both inputs are needed.");


    try{
        const user = await User.findOne({email})

        if(!user)
            return res.status(404).send("Incorrect Login Details.")

        if(user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {id: user._id, email}, 
                secretKey, 
                {expiresIn: '2h'})
        
            user.token = token;

            res.status(200).json(user)
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}