import { combineReducers } from 'redux';
import registration from './userReducer';
import authentication from './authReducer';

export default combineReducers({
    registration,
    authentication
});