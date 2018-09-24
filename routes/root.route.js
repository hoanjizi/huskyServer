const express = require('express')
const app = express.Router()

require('./husky/husky.route')(app)

module.exports = app