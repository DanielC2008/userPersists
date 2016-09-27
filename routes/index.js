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

router.post('/login', ({ session, body: {email, password} }, res, err) => {
	//get obj that matches username
	User
		.findOne({email: email})
		.then((user) => {
			//compare the passwords
			//true redirect to index
			if (password === user.password) {
				session.user = email
				res.redirect('/')
			// false render /login with a message
			} else {
				res.render('login')
			}
		})
		.catch(err)
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

router.get('/logout', (req, res) => {
	req.session.destroy(err => {
		if (err) throw err
	})
	res.render('logout')
})

module.exports = router
