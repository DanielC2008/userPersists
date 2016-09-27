'use strict'

//require express and instantiate
const express = require('express')
const app = express()
const routes = require('./routes/')
const { connect } = require('./db/database')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')
//set up port
const port = process.env.PORT || 3000

app.set('port', port)
app.set('view engine', 'pug')

app.use(session({
	store: new RedisStore({
		url: process.env.REDIS_URL || "redis://localhost:6379"
	}),
	secret: 'persistance'
}))

app.use((req, res, next) => {
	app.locals.user = req.session && req.session.user
	next()
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes)


connect()
	.then(() => {
		app.listen(port, () => {
			console.log(`Express server listening on port ${port}`);
		})
	})
	.catch(console.error)

