import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            edition: '',
            authorId: ''
        }
    }

    generateAuthors = () => {
        let data = this.props.getAuthorsQuery
        if (data.loading) {
            return (
                <option disabled>Loading Authors</option>
            )
        }
        else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                price: parseFloat(this.state.price),
                edition: this.state.edition,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
        this.setState({ name: '', edition: '', price: 0, authorId: '' })
    }
    render() {
        return (
            <div className="add-book">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Book Name</label>
                        <input type="text" value={this.state.name} name="name" placeholder="Enter book name" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" value={this.state.price} name="price" placeholder="Price" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label>Book Edition</label>
                        <input type="text" value={this.state.edition} name="edition" placeholder="Enter book Edition" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label>Authors</label>
                        <select name="authorId" onChange={this.handleChange.bind(this)} value={this.state.authorId}>
                            <option>Select Author</option>
                            {this.generateAuthors()}
                        </select>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)