import {
    gql
} from 'apollo-boost'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $edition: String!, $price: Float!, $authorId: ID!){
        addBook( name: $name,  edition: $edition,  price: $price,  authorId: $authorId){
            name
            id
        }
    }
`

export {
    getBooksQuery,
    getAuthorsQuery,
    addBookMutation
}