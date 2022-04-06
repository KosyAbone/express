const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const multer = require('multer')
const upload = multer()

userRouter.get('/', userController.testRoute)

userRouter.get('/all-users', userController.getAllUsers)

userRouter.post('/new-user',upload.none(), userController.createUser)

userRouter.put('/update/:email', userController.updateUser)

userRouter.get('/user/:email', userController.getUser)

userRouter.delete('/user/:email', userController.deleteUser)


module.exports = userRouter;