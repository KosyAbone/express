const express = require('express')
const registerRouter = express.Router()
const registerController = require('../controllers/register.controller')

registerRouter.get('/', registerController.test);
registerRouter.get('/:email', registerController.getUser);
registerRouter.post('/', registerController.createUser);

module.exports = registerRouter;