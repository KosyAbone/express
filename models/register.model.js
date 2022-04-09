const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, default: null},
    lastName: {type: String, required: true, default: null},
    email: {type: String, required: true, default: null, unique: true},
    password: {type: String, required: true, default: null},
    dateCreated: {type: Date, default: new Date.now()}
})

const User = mongoose.model('User', UserSchema)
module.exports = User