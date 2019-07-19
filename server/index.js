const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/index')
const mongoose = require('mongoose')
const config = require('./config.json')
const cors = require('cors')

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

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT)
})
