import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }
    render() {
        return (
            <div >
                <div className="book-list">

                    <h1>All Books</h1>
                    {
                        this.props.data.loading && (
                            <div>
                                <h1>Please wait...</h1>
                            </div>
                        )
                    }
                    <ul style={{ listStyle: 'none' }}>
                        {
                            !this.props.data.loading && this.props.data.books.map(book => (
                                <li key={book.id} onClick={() => this.setState({ selected: book.id })}>{book.name}</li>
                            ))
                        }
                    </ul>
                </div>

                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList)
