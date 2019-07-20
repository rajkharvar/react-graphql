import React, { Component } from 'react'
import { getBookQuery } from '../queries/queries'
import { graphql } from 'react-apollo'

class BookDetails extends Component {
    generateBookDetails = () => {
        let data = this.props.data
        if (data.book) {
            return (
                <div>
                    <h1>Book Name: {data.book.name}</h1>
                    <h3>Price: {data.book.price}</h3>
                    <h4>Edition: {data.book.edition}</h4>
                    <h2>Author:{data.book.author.name}</h2>
                    <h4>All Books by this author:</h4>
                    {
                        data.book.author.books.map(book => (
                            <h4 key={book.id}>{book.name}</h4>
                        ))
                    }
                </div>
            )
        }
        else {
            return (<div>No book selected</div>)
        }
    }
    render() {
        return (
            <div className="book-details">
                <h1>Books Details Here:</h1>
                {this.generateBookDetails()}
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)


