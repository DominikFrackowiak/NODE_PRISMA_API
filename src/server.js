const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.status(200)
	res.send('<h1>SO: THIS IS HOME!</h1>')
})

app.get('/course', (req, res) => {
 res.status(200)
 res.send({
  name: 'NODE API',
  desc: 'Learn Node API'
 })
})


module.exports = app