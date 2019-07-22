import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

const getAuthorQuery = gql`
  {
    author
    id
    age
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $edition: String, $price: Float, $authorId: ID!) {
    addBook(
      name: $name
      edition: $edition
      price: $price
      authorId: $authorId
    ) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      name
      edition
      price
      id
      author {
        name
        id
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorQuery, addBookMutation, getBookQuery };
