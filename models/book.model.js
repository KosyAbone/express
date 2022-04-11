const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true, default: null},
    author: {type: String, required: true, default: null},
    isAvailable: {type: Boolean, default: null},
    dateAdded: {type: Date, default: new Date()}
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book