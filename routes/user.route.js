const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')

userRouter.get('/', userController.testRoute)

userRouter.get('/all-users', userController.getAllUsers)

userRouter.post('/new-user', userController.createUser)


module.exports = userRouter;