import { NotificationManager } from 'react-notifications';

import { bookConstants } from "../actions/actionTypes";
import { userService } from "../services/userServices";
import { history } from '../helpers';

function fetchBooks(){
  return dispatch => {
      let apiEndpoint = 'books';
      userService.get(apiEndpoint)
      .then((response)=>{
          dispatch(bookLists(response.data));
      }).catch((err)=>{
          console.log(err);
      })
 };
}

function createBook(title, isbn, author) {
  return (dispatch) => {
    let apiEndpoint = "books";
    let payload = {
      title: title,
      isbn: isbn,
      author: author,
    };
    userService.post(apiEndpoint, payload).then((response) => {
      dispatch(createBookDetails());
      NotificationManager.success('Book added Succesfully!', 'Successful!', 2000);
    }).catch((err)=>{
      NotificationManager.error('Book with ISBN already exists!', 'Error!');
    })
  };
}

function editBookInfo(id, payload){
  return dispatch => {
      let apiEndpoint = 'books/'+ id;
      userService.put(apiEndpoint, payload)
      .then((response)=>{
        console.log('responseEditActions',response.data.data)
          dispatch(editBook(response.data.data));
          NotificationManager.success('Book updated Succesfully!', 'Successful!', 2000);
        }).catch((err)=>{
          NotificationManager.error('Book with ISBN already exists!', 'Error!');
        })
  }
}

function deleteBook(id){
  return dispatch => {
      let apiEndpoint = 'books/'+ id;
      userService.deleteDetail(apiEndpoint)
      .then((response)=>{
           dispatch(deletebBookDetails(response.data));
           NotificationManager.success('Book deleted Succesfully!', 'Successful!', 2000);
      }).catch((err)=>{
        NotificationManager.error('Error  occured while deleting!', 'Error!');
      })
  };
}

export function bookLists(data){
  return{
      type: bookConstants.FETCH_BOOK_SUCCESS,
      payload: data
  }
}

export function createBookDetails(data) {
  return {
    type: bookConstants.REGISTER_BOOK_SUCCESS
  };
}

export function editBook(data){
  return{
      type: bookConstants.EDIT_BOOK_SUCCESS,
      payload:data
  }
}

export function deletebBookDetails(data){
  return{
    type: bookConstants.DELETE_BOOK_SUCCESS,
    payload:data
  }
}

export const bookActions = {
  createBook,
  fetchBooks,
  editBookInfo,
  deleteBook
};
