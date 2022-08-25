const express = require('express')
const router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUser)
router.post('/signup', userController.createUser)
router.post('/login', userController.findUser)

module.exports = router