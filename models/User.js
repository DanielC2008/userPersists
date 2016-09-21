'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Register', {
	email: String,
	password: String
})
