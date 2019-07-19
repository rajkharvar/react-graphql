import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'

class BookList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.loading && (
                        <div>
                            <h1>Please wait...</h1>
                        </div>
                    )
                }
                <ul>
                    {
                        !this.props.data.loading && this.props.data.books.map(book => (
                            <li key={book.id}>{book.name}</li>
                        ))
                    }</ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList)
