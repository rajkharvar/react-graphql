const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/index')
const app = express()

const PORT = process.env.PORT || 4000
// Endpoint is one supercharged point where all queries are fired on the route
app.use('/graphql', graphqlHTTP({ schema }))

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT)
})
