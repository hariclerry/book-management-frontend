import { userConstants } from "actions/actionTypes";

// let token = localStorage.getItem("my-token");
// const isLoggedIn = token ? true : false;

const initialState = {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        // loggedIn: true,
        user: action.token,
      };
    case userConstants.LOGOUT:
      return {
        // loggedIn: false,
      };
    default:
      return state;
  }
}
