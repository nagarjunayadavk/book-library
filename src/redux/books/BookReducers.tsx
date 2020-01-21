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
            const newbooks = state.books.slice();
            newbooks.splice(state.books.findIndex(book => book.id === action.book.id), 1, action.book);
            return { ...state, books: newbooks}
        case DELETE_BOOK:
            return { ...state, books: state.books.slice().splice(state.books.findIndex(book => book.id === action.id), 1)}
        default: 
            return {...state };
    }
}



