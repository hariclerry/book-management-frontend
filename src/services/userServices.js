import axios from "axios";
import config from "../config/config";

export const userService = {
  get,
  post,
  put,
  deleteDetail,
};
function get(apiEndpoint) {
  return axios
    .get(config.baseUrl + apiEndpoint, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function post(apiEndpoint, payload) {
  return axios
    .post(config.baseUrl + apiEndpoint, payload, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function put(apiEndpoint, payload) {
  return axios
    .put(config.baseUrl + apiEndpoint, payload, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function deleteDetail(apiEndpoint) {
  return axios
    .delete(config.baseUrl + apiEndpoint, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOptions() {
  let options = {};
  if (localStorage.getItem('my-token')) {
    options.headers = { 'x-auth-token': localStorage.getItem('my-token') };
  }
  return options;
}
