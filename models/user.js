import mongoose, {Schema} from "mongoose";

const User = new Schema({
    name: {type: String, required = true},
    email: {type: String, required = true, unique},
    password: {type: String, required}
})

export User.model('User', userSchema)