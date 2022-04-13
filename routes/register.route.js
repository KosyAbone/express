const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.controller')

router.get('/', registerController.test);
router.post('/', registerController.createUser);

module.exports = router;