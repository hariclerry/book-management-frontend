import jwt from 'jwt-decode' 
import { userConstants } from 'actions/actionTypes';

let token = localStorage.getItem('token');
let userData = jwt(token)
const initialState = token ? { loggedIn: true, token, userData } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.userData
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}