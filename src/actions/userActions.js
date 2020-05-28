import { userConstants } from "../actions/actionTypes";
import { userService } from "../services/userServices";

function createUser(userName, email, password) {
  return (dispatch) => {
    let apiEndpoint = "user";
    let payload = {
      userName: userName,
      email: email,
      password: password,
    };
    userService.post(apiEndpoint, payload).then((response) => {
      dispatch(creatUserDetails());
      // history.push('/home');
    });
  };
}

function loginUser(email, password) {
  return (dispatch) => {
    let apiEndpoint = "user/login";
    let payload = {
      email: email,
      password: password,
    };
    userService.post(apiEndpoint, payload).then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        dispatch(userDetails(response.data));
        //  history.push('/home');
      }
    });
  };
}

function logout() {
  return (dispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    dispatch(logoutUser());
    // history.push("/");
  };
}
export function userDetails(user) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    token: user.token,
  };
}
export function logoutUser() {
  return {
    type: "LOGOUT_SUCCESS",
    auth: false,
    token: "",
  };
}

export function creatUserDetails() {
  return {
    type: userConstants.REGISTER_SUCCESS,
  };
}

export const userActions = {
  createUser,
  loginUser,
};
