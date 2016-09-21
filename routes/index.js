'use strict'

const { Router } = require('express')
const User = require('../models/User')

const router = Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/login', (req, res) => {
	res.render('login')
})

router.post('/login', (req, res, err) => {

})

router.get('/register', (req, res) => {
	res.render('register')
})

router.post('/register', ({body: {email, password} }, res, err) => {
	User
		.create({email, password})
		.then(() => res.redirect('/login'))
		.catch(err)
})

module.exports = router
