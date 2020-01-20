import { combineReducers} from 'redux';
import booksReducers from './books';

const reducer = combineReducers( {
    books: booksReducers
});

export default reducer;