import { FETCH_BOOKS, IBOOK, BOOK_ACTION_TYPE, ADD_BOOK, SERACH_BOOKS, UPDATE_BOOK } from "./BookTypes";
import axios from 'axios';

const fetchBooks = (books: IBOOK[]): BOOK_ACTION_TYPE => {
    return {
        type: FETCH_BOOKS,
        books
    }
}

export const fetchBooksAsync = () => async (dispatch: any) => {
    axios.get('http://localhost:3001/books').then((res) => {
        return dispatch(fetchBooks(res.data));
    })
}

const saveBook = (book: any): BOOK_ACTION_TYPE => {
    return {
        type: ADD_BOOK,
        book
    }
}

export const saveBookAsync = (data: any) => async (dispatch: any) => {
    axios.post('http://localhost:3001/books', data ).then((res) => {
        return dispatch(saveBook(res.data));
    });
}


const saveEditBook = (book: any): BOOK_ACTION_TYPE => {
    return {
        type: UPDATE_BOOK,
        book
    }
}

export const saveEditBookAsync = (data: any) => async (dispatch: any) => {
    axios.put('http://localhost:3001/books/'+data.id, data ).then((res) => {
        return dispatch(saveEditBook(res.data));
    });
}


const searchBooks = (value: any): BOOK_ACTION_TYPE => {
    return {
        type: SERACH_BOOKS,
        value
    }
}

export const searchBooksAsync = (searchText: any) => async (dispatch: any) =>  dispatch(searchBooks(searchText));