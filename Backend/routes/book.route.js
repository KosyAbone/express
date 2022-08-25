const express = require('express')
const router = express.Router()
const bookController = require('../../Backend/controllers/book.controller')
const multer = require('multer')
const upload = multer()

//router.get('/', bookController.testRoute)

router.get('/', bookController.getAllBooks)

router.post('/',upload.none(), bookController.createBook)

router.put('/:name', bookController.updateBook)

router.get('/:name', bookController.getBook)

router.delete('/:name', bookController.deleteBook)


// module.exports = router;