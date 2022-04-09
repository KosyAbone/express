const mongoose = require('mongoose');

const login = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const Login = mongoose.model('Login', UserSchema)
module.exports = Login