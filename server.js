'use strict'

//require express and instantiate
const express = require('express')
const app = express()
//set up port
const port = process.env.PORT || 3000
app.set('port', port)

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
})
