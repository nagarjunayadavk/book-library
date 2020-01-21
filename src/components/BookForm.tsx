import React from 'react';
import { connect } from 'react-redux';
import { saveBookAsync, saveEditBookAsync } from '../redux/books/BookActions';
import { IBOOK } from '../redux/books/BookTypes';
class BookForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            book: {}
        };
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.saveBook(this.state.book);
        // this.setState({book: {}});
        this.props.clearBook();
    }
    static getDerivedStateFromProps(newProps: any, prevState: any) {
        if (newProps.book && (newProps.book.id != prevState.book.id)) {
            return { ...prevState, book: newProps.book }
        }
        return { ...prevState };
    }
    render() {
        return (
            <div className="container">
                <h1> {this.state.book.id ? "Update Book" : "Create Book"}</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-25">
                            <label> Title </label>
                        </div>
                        <div className="col-75">
                            <input required type="text" placeholder="Enter Book Title" value={this.state.book.title} onChange={event => this.setState({ book: { ...this.state.book, title: event.target.value } })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label> Description </label>
                        </div>
                        <div className="col-75">
                            <textarea required rows={5} cols={28} placeholder="Enter Post Description" value={this.state.book.description} onChange={event => this.setState({ book: { ...this.state.book, description: event.target.value } })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label> Price </label>
                        </div>
                        <div className="col-75">
                            <input required type="text" placeholder="Enter Book Price" value={this.state.book.price} onChange={event => this.setState({ book: { ...this.state.book, price: event.target.value } })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label> Author </label>
                        </div>
                        <div className="col-75">
                            <input required type="text" placeholder="Enter Book Author!" value={this.state.book.author} onChange={event => this.setState({ book: { ...this.state.book, author: event.target.value } })} />
                        </div>
                    </div>
                    <div className="row">
                        <button>{this.state.book.id ? "Update Book" : "Create Book"}</button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => {
    return { books: store.books.books }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        saveBook: (book: any) => book.id ? dispatch(saveEditBookAsync(book)) : dispatch(saveBookAsync(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);