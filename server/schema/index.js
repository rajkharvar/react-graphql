const graphql = require('graphql')
const _ = require('lodash')
const Book = require('../models/book')
const Author = require('../models/author')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList } = graphql

// Dummy Data
const books = [
  { id: '1', name: 'JS Develpment', price: 100.10, edition: 'Fifth', authorId: '1' },
  { id: '2', name: 'BlockChain Texhnology', price: 90.10, edition: 'Third', authorId: '3' },
  { id: '3', name: 'JS Develpment', price: 100.10, edition: 'Fourth', authorId: '2' },
  { id: '4', name: 'JS Develpment', price: 100.10, edition: 'Fifth', authorId: '1' }
]
const authors = [
  { id: '1', name: 'Brad Traversy', age: 32 },
  { id: '2', name: 'Net Ninga', age: 26 },
  { id: '3', name: 'Anonymous', age: 22 }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    edition: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId })
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    book: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { id: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // A single book based on id
    book: {
      // Schema of the book
      type: BookType,
      // arguments that are require to fire query
      args: { id: { type: GraphQLID } },
      // actual code for quering db
      resolve(parent, args) {
        return _.find(books, { id: args.id })
      }
    },
    author: {
      // An author based on id
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id })
      }
    },
    books: {
      // All Books
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors
      }
    }
  }
})

// mutation mutates the data
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age
        })
        return author.save()
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        edition: { type: GraphQLString },
        authorId: { type: GraphQLID }
      },
      resolve(parent, args) {
        const book = new Book({
          name: args.name,
          price: args.price,
          edition: args.edition,
          authorId: args.authorId
        })
        return book.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
