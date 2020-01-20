import { FETCH_BOOKS, IBOOK, BOOK_ACTION_TYPE, ADD_BOOK, SERACH_BOOKS } from "./BookTypes";
import axios from 'axios';

const fetchBooks = (books: IBOOK[]): BOOK_ACTION_TYPE => {
    return {
        type: FETCH_BOOKS,
        books
    }
}

export const fetchBooksAsync = () => async (dispatch: any) => {
    // let res =  await axios.get('http://localhost:3000/books');
    axios.get('http://localhost:3001/books').then((res) => {
        return dispatch(fetchBooks(res.data));
    })
    // dispatch(fetchBooks(res));
}

const saveBook = (book: any): BOOK_ACTION_TYPE => {
    return {
        type: ADD_BOOK,
        book
    }
}

export const saveBookAsync = (data: any) => async (dispatch: any) => {
    // let res =  await axios.get('http://localhost:3000/books');
    axios.post('http://localhost:3001/books', data ).then((res) => {
        return dispatch(saveBook(res.data));
    })
    // dispatch(fetchBooks(res));
}
const searchBooks = (value: any): BOOK_ACTION_TYPE => {
    return {
        type: SERACH_BOOKS,
        value
    }
}

export const searchBooksAsync = (searchText: any) => async (dispatch: any) =>  dispatch(searchBooks(searchText));