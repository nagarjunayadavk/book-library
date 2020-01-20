import { IBOOK, BOOK_ACTION_TYPE, FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, SERACH_BOOKS } from './BookTypes';
import { stat } from 'fs';
import _ from 'underscore';
interface IINITIAL_STATE {
    books: IBOOK[],
    value: ""
}
const initialState: IINITIAL_STATE = {
    books: [],
    value: ""
}

export const reducer = (state = {...initialState}, action: BOOK_ACTION_TYPE ) => {

    switch(action.type){
        case FETCH_BOOKS:
            return {...state, books: action.books };
        case ADD_BOOK:
            return {...state, books: [...state.books, action.book]};
        case UPDATE_BOOK:
            return { ...state, books: state.books.slice().splice(state.books.findIndex(book => book.id === action.book.id), 1, action.book)}
        case DELETE_BOOK:
            return { ...state, books: state.books.slice().splice(state.books.findIndex(book => book.id === action.id), 1)}
        case SERACH_BOOKS:
            const {value} = action;
            return { ...state, value,  books:  _.filter(state.books, book => book.author.includes(value)) }
            // return { ...state, books: state.books.filter((val) => val.includes(value))}
        default: 
            return {...state };

    }
}



