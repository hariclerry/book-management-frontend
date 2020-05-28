import { combineReducers } from 'redux';
import contacts from './userReducer';

export default combineReducers({
    contacts: contacts
});