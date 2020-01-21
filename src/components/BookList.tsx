import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBooksAsync, searchBooksAsync } from '../redux/books/BookActions';
import BookForm from './BookForm';
import SearchBar from './SearchBar';
import _ from 'underscore';
class BookList extends React.Component<any, any> {
    state = {
        orignalBooks: this.props.books,
        books: this.props.books,
        book: {}
    }
    componentDidMount() {
        this.props.fetchBooks();
    }
    static getDerivedStateFromProps(newProps: any, prevState: any) {
        if (JSON.stringify(newProps.books) !== JSON.stringify(prevState.orignalBooks)) {
            return { ...prevState, books: newProps.books, orignalBooks: newProps.books }
        }
        return { ...prevState };
    }

    onSearch = (value: string) => {
        this.setState({ books: _.filter(this.props.books, (book: any) => book.author.includes(value) || book.description.includes(value) || book.title.includes(value)) })
    }

    editBook = (book: object) => {
        this.setState({ book: book });
    }
    clearBook = () => {
        this.setState({ book: {} });
    }
    render() {
        return (
            <Fragment>
                <header>
                    <div className="header-left">
                      <h3>Book Library</h3>
                    </div>
                    <div className="header-right">
                       <SearchBar onSearch={this.onSearch} />
                    </div>
                    
                </header>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Author</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.books.map((book: any) => {
                                let props = { book: book };
                                return (<tr key={book.id}>
                                    <td data-label="title">{book.title}</td>
                                    <td data-label="desc">{book.description}</td>
                                    <td data-label="price">{book.price}</td>
                                    <td data-label="author">{book.author}</td>
                                    <td onClick={() => this.editBook(book)} >
                                        <span className="edit-button">
                                            Edit
                                        </span>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <BookForm book={this.state.book} clearBook={this.clearBook} key={new Date().getMilliseconds()} />
                </div>

            </Fragment>

        );
    }

}


const mapStateToProps = (store: any) => {
    return {
        books: store.books.books
    }
}

const mapDispatchToProps = {
    fetchBooks: fetchBooksAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
