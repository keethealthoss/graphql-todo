var express = require('express')
var cors = require('cors')
var Schema = require('./schema')
var graphQLHTTP = require('express-graphql')

var app = express()
app.use(cors())
app.use('/', graphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))
app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`GraphQL Server is now running on localhost:${process.env.PORT || 8080}`)
})
