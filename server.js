'use strict'

//require express and instantiate
const express = require('express')
const app = express()
const routes = require('./routes/')
const { connect } = require('./db/database')
const bodyParser = require('body-parser')
//set up port
const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')
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

