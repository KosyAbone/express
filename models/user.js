import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique},
    password: {type: String, required}
})

module.exports = mongoose.model('User', UserSchema)