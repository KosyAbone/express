const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.default)

module.exports = userRouter;