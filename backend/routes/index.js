const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/hello', homeController.hello)

module.exports = router
