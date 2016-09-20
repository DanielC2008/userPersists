'use strict'

const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
	res.send('hello')
})

router.get('/login', (req, res) => {
	res.send('howdy')
})

router.get('/register', (req, res) => {
	res.send('yo')
})

module.exports = router
