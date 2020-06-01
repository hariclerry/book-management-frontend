import { NotificationManager } from 'react-notifications';

import { userConstants } from "../actions/actionTypes";
import { userService } from "../services/userServices";
import { history } from '../helpers';

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
      NotificationManager.success('Registration Succesful!', 'Successful!', 2000);
    }).catch((err)=>{
      NotificationManager.error('User Email already exists!', 'Error!');
  })
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
        history.push('/dashboard')
        NotificationManager.success('Login Succesful!', 'Successful!', 2000);
      }
    }).catch((err)=>{
      NotificationManager.error('Wrong Email address or password!', 'Error!');
  })
  };
}

function logout() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    history.push('/')
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
    type: userConstants.LOGOUT,
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
  logout
};
