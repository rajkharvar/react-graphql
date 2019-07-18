const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLSchema } = graphql

const books = [
  {id: '1', name: 'JS Develpment', author: 'Brad Traversy', price: 100.10, edition: 'Fifth'},
  { id: '2', name: 'BlockChain Texhnology', author: 'Brad Traversy', price: 90.10, edition: 'Third'},
  { id: '3', name: 'JS Develpment', author: 'Brad Traversy', price: 100.10, edition: 'Fourth'},
  { id: '4', name: 'JS Develpment', author: 'Brad Traversy', price: 100.10, edition: 'Fifth'},
]

const BookType = new GraphQLObjectType({
  name: 'Books',
  fields: () => ({
    id: GraphQLString,
    author: GraphQLString,
    name: GraphQLString,
    price: GraphQLFloat,
    edition: GraphQLFloat
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      // Schema of the book
      type: BookType,
      // arguments that are require to fire query
      args: { id: {type: GraphQLString }},
      // actual code for quering db
      resolve (parent, args) {
        return _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
