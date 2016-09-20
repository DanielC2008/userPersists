'use strict'

//require express and instantiate
const express = require('express')
const app = express()
const routes = require('./routes/')
//set up port
const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(routes)











app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
})

