import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBooksAsync, searchBooksAsync } from '../redux/books/BookActions';
import BookForm from './BookForm';
import SearchBar from './SearchBar';

class BookList extends React.Component<any, any> {

    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        return (
            <Fragment>
                <div>
                    <SearchBar />
                </div>
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

                            {this.props.books.map((book: any) => {
                                return (<tr key={book.id}>
                                    <td data-label="title">{book.title}</td>
                                    <td data-label="desc">{book.description}</td>
                                    <td data-label="price">{book.price}</td>
                                    <td data-label="author">{book.author}</td>
                                    <td>Edit</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <button>Add Book</button>
                    <BookForm />
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
