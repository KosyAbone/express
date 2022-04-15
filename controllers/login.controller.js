const User = require('../models/register.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async(req, res) => {
    const { username, password } = req.body

    if(username && password && await bcrypt.compare(User.password, password)){
        
    }
}