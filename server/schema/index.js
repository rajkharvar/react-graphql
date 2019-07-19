const graphql = require('graphql')
const _ = require('lodash')
const Book = require('../models/book')
const Author = require('../models/author')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql

// // Dummy Data
// const books = [
//   { id: '1', name: 'JS Develpment', price: 100.10, edition: 'Fifth', authorId: '1' },
//   { id: '2', name: 'BlockChain Texhnology', price: 90.10, edition: 'Third', authorId: '3' },
//   { id: '3', name: 'JS Develpment', price: 100.10, edition: 'Fourth', authorId: '2' },
//   { id: '4', name: 'JS Develpment', price: 100.10, edition: 'Fifth', authorId: '1' }
// ]
// const authors = [
//   { id: '1', name: 'Brad Traversy', age: 32 },
//   { id: '2', name: 'Net Ninga', age: 26 },
//   { id: '3', name: 'Anonymous', age: 22 }
// ]

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
        return Author.findById(parent.authorId)
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
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent._id })
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
        return Book.findById(args.id)
      }
    },
    author: {
      // An author based on id
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id)
      }
    },
    books: {
      // All Books
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({})
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({})
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        edition: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
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
