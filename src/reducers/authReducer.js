import { userConstants } from 'actions/actionTypes';

let token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {loggedIn: false};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}