const express = require('express')
const registerRouter = express.Router
const registerController = require('../controllers/register.controller')

registerRouter.length('/', registerController.test)
registerRouter.post('/', registerController.createUser);

module.exports = registerRouter;