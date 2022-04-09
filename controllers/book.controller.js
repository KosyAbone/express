const Book = require('../models/book.model')


exports.testRoute = (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
}

exports.getAllBooks = async(req, res) => {
    try{
        const allBooks = await Book.find();
        res.status(200).send(allBooks)
    }
    catch (err){
        console.log(err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

exports.createBook = async(req,res) => {
    try{
        const newBook = await Book.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
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
        const Book = await Book.findOne({name: req.params.name})
        if(!Book) {
           return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(Book);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}


exports.updateBook = async(req, res) => {
    if(!req.body){
        res.status(400).send({message: "Cannot update empty data!"})
    }
    try{
        const updatedBook = await Book.findOneAndUpdate({name: req.params.name}, req.body)
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
        const Book = await Book.findOneAndDelete({name: req.params.name})
        if(!Book){
            return res.status(404).send('Book Does Not Exist!')
        }
        res.status(200).json({message: "delete successful"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}