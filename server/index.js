const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/index')
const mongoose = require('mongoose')
const config = require('./config.json')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
// app.use({ useNewUrlParese: true })

mongoose.connect(config.url, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to DB')
})

const PORT = process.env.PORT || 4000
// Endpoint is one supercharged point where all queries are fired on the route
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT)
})
