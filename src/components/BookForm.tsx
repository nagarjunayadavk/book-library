import React from 'react';
import { connect } from 'react-redux';
import { saveBookAsync } from '../redux/books/BookActions';
import { IBOOK } from '../redux/books/BookTypes';
class BookForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
            author: ''
        };
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const price = this.state.price;
        const author = this.state.author;
        const data = {
            title,
            description,
            price,
            author
        }
        this.props.saveBook(data);
    }

    render() {
        return (
            <div>
                <h1>Create a Book</h1>
                <form onSubmit={this.handleSubmit} >
                    <input required type="text" placeholder="Enter Book Title" onChange={event => this.setState({ title: event.target.value })} /><br /><br />
                    <textarea required rows={5} cols={28} placeholder="Enter Post Description" onChange={event => this.setState({ description: event.target.value })} /><br /><br />
                    <input required type="text" placeholder="Enter Book Price" onChange={event => this.setState({ price: event.target.value })} /><br /><br />
                    <input required type="text" placeholder="Enter Book Author!" onChange={event => this.setState({ author: event.target.value })} /><br /><br />
                    <button>Create Book</button>
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
        saveBook: (book: any) => dispatch(saveBookAsync(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);