const express = require('express')
const loginRouter = express.Router()
const loginController = require('../controllers/login.controller')
const multer = require('multer')
const upload = multer()

//userRouter.get('/', loginController.testRoute)

userRouter.get('/', loginController.getAllUsers)

userRouter.post('/',upload.none(), loginController.createUser)

userRouter.put('/:email', loginController.updateUser)

userRouter.get('/:email', loginController.getUser)

userRouter.delete('/:email', loginController.deleteUser)


module.exports = loginRouter;