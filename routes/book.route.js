const express = require('express')
const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')
const multer = require('multer')
const upload = multer()

//bookRouter.get('/', bookController.testRoute)

bookRouter.get('/', bookController.getAllBooks)

bookRouter.post('/',upload.none(), bookController.createBook)

bookRouter.put('/:name', bookController.updateBook)

bookRouter.get('/:name', bookController.getBook)

bookRouter.delete('/:name', bookController.deleteBook)


module.exports = bookRouter;