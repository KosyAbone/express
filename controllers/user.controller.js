const User = require('../models/register.model')


exports.test = (req, res) => {
    res.status(200).json({message: 'test route is working', status: 'success'})
}

exports.getUser = async(req,res) => {
    const { email } = req.body

    try{
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(404).send("User does not Exist.<br/> <button>Create Account</button>");
        res.status(200).json(userFound)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
