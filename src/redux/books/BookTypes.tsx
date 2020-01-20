
export const FETCH_BOOKS = 'FETCTH_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SERACH_BOOKS = 'SERACH_BOOKS';

export interface IBOOK{
    id: number,
    title: string,
    description: string,
    price: string,
    author: string
}
export interface IFETCH_BOOKS_ACTION {
    type: typeof FETCH_BOOKS,
    books: IBOOK[] 
}

interface IADD_BOOK_ACTION {
    type: typeof ADD_BOOK,
    book: IBOOK
}

interface IUPDATE_BOOK_ACTION {
    type: typeof UPDATE_BOOK,
    book: IBOOK
}

interface IDELETE_BOOK_ACTION {
    type: typeof DELETE_BOOK,
    id: number
}

export interface ISERACH_BOOKS_ACTION {
     type: typeof SERACH_BOOKS,
     value: ""
}

export type BOOK_ACTION_TYPE = IFETCH_BOOKS_ACTION | IADD_BOOK_ACTION | IUPDATE_BOOK_ACTION | IDELETE_BOOK_ACTION | ISERACH_BOOKS_ACTION ;