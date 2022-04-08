const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const multer = require('multer')
const upload = multer()

//userRouter.get('/', userController.testRoute)

userRouter.get('/', userController.getAllUsers)

userRouter.post('/',upload.none(), userController.createUser)

userRouter.put('/:email', userController.updateUser)

userRouter.get('/:email', userController.getUser)

userRouter.delete('/:email', userController.deleteUser)


module.exports = userRouter;