const Book = require('../../Backend/models/book.model')


exports.getAllBooks = async(req, res) => {
    try{
        const allBooks = await Book.find();
        res.status(200).send(allBooks)
    }
    // catch (err){
    //     console.log(err.message)
    //     res.status(500).json({message: "Internal Server Error"})
    // }
}

exports.createBook = async(req,res) => {
    try{
        const newBook = await Book.create({
            name: req.body.name,
            author: req.body.author,
            isAvailable: req.body.isAvailable
        })
        res.status(200).json(newBook)
        console.log(newBook)
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
}

exports.getBook = async(req, res) => {
    try{
        const book = await Book.findOne({name: req.params.name})
        if(!book) {
           return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(book);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}


exports.updateBook = async(req, res) => {
    if(!req.body){
        res.status(400).send({message: "Cannot update empty data!"})
    }
    try{
        const updatedBook = await Book.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
        
        if(!updatedBook){
           return res.status(404).send("Book not found!")
        }
        //console.log(updatedBook)
        res.status(200).json(updatedBook)
    } catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
    
}

exports.deleteBook = async(req, res) => {
    try{
        const book = await Book.findOneAndDelete({name: req.params.name})
        if(!book){
            return res.status(404).send('Book Does Not Exist!')
        }
        res.status(200).json({message: "delete successful"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}