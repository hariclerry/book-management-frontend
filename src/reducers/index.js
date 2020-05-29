import { combineReducers } from 'redux';
import registration from './userReducer';
import authentication from './authReducer';
import books from './bookReducer';

export default combineReducers({
    registration,
    authentication,
    books
});