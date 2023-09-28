const express = require('express')
const router = express.Router()
const bookController = require('../../Backend/controllers/book.controller')

router.get('/', bookController.getAllBooks)

router.post('/', bookController.createBook)

router.put('/:name', bookController.updateBook)

router.get('/:name', bookController.getBook)

// router.delete('/:name', bookController.deleteBook)


module.exports = router;