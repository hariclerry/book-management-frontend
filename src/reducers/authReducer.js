import { userConstants } from "actions/actionTypes";

let token = localStorage.getItem("token");
const isLoggedIn = token ? true : false;
const initialState = { loggedIn: isLoggedIn };

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
