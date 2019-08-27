const porta = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParseInt = require('express-query-int')

server.use(bodyParser.urlencoded({ extended : true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParseInt())



server.listen(porta, function(){
     console.log('backend rodando!')
})

module.exports = server