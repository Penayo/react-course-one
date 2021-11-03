const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const { API_VERSION } = require('./config')

// Load Routes
// ...

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure HTTP Header
// ...

// Basic Routes
// ...

module.exports = app
