const port = 8282

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
  console.log(`Server is running on port ${port}.`)
})

require('../controller/CityController')(server);

module.exports = server
