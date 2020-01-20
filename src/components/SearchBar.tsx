import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchBooksAsync } from '../redux/books/BookActions';

class SearchBar extends React.Component<any, any> {
    render() {
        const { searchBooksAsync, value } = this.props;

        return (
            <Fragment>
                <input
                    placeholder="Search Book"
                    onChange={(e) => searchBooksAsync(e.target.value)}
                    value={value} />
            </Fragment>
        );
    }
}

const mapStateToProps = (store: any) => {
    return { value: store.books.value }
}

const mapDispatchToProps = {
    searchBooksAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);