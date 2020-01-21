import React, { Component, Fragment } from 'react';


class SearchBar extends React.Component<any, any> {
    render() {
        return (
            <Fragment>
                <input
                    placeholder="Search Book"
                    onChange={(e) => this.props.onSearch(e.target.value)}
                     />
            </Fragment>
        );
    }
}

export default SearchBar;