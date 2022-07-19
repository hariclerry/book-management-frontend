import { NotificationManager } from 'react-notifications';

import { bookConstants } from "../actions/actionTypes";
import { userService } from "../services/userServices";

function fetchBooks() {
  return dispatch => {
    let apiEndpoint = 'books';
    userService.get(apiEndpoint)
      .then((response) => {
        dispatch(bookLists(response.data));
      }).catch((err) => {
        console.log(err);
      })
  };
}

function createBook(title, isbn, author, file) {
  return (dispatch) => {
    let apiEndpoint = "books";
    // let payload = {
    //   title: title,
    //   isbn: isbn,
    //   author: author,
    //   image: name,
    // };

    const data = new FormData();
    data.append("title", title);
    data.append("isbn", isbn);
    data.append("author", author);
    data.append("image", file);
    // data.append("image", {
    //   name: file.name,
    //   type: file.type,
    //   uri: file.name,
    // })
    userService.post(apiEndpoint, data).then((response) => {
      dispatch(createBookDetails(response.data.data))
      NotificationManager.success('Book added Succesfully!', 'Successful!', 2000);
    }).catch((err) => {
      NotificationManager.error('Book with ISBN already exists!', 'Error!');
    })
  };
}

function editBookInfo(id, title, isbn, author) {
  return dispatch => {
    let apiEndpoint = 'books/' + id;
    let payload = {
      title: title,
      isbn: isbn,
      author: author,
    };
    userService.put(apiEndpoint, payload)
      .then((response) => {
        dispatch(editBook(response.data.data));
        NotificationManager.success('Book updated Succesfully!', 'Successful!', 2000);
      }).catch((err) => {
        NotificationManager.error('Book with ISBN already exists!', 'Error!');
      })
  }
}

function deleteBook(id) {
  return dispatch => {
    let apiEndpoint = 'books/' + id;
    userService.deleteDetail(apiEndpoint)
      .then((response) => {
        dispatch(deletebBookDetails(id));
        NotificationManager.success('Book deleted Succesfully!', 'Successful!', 2000);
      }).catch((err) => {
        NotificationManager.error('Error  occured while deleting!', 'Error!');
      })
  };
}

export function bookLists(data) {
  return {
    type: bookConstants.FETCH_BOOK_SUCCESS,
    payload: data
  }
}

export function createBookDetails(data) {
  return {
    type: bookConstants.REGISTER_BOOK_SUCCESS,
    payload: data
  };
}

export function editBook(data) {
  return {
    type: bookConstants.EDIT_BOOK_SUCCESS,
    payload: data
  }
}

export function deletebBookDetails(data) {
  return {
    type: bookConstants.DELETE_BOOK_SUCCESS,
    payload: data
  }
}

export const bookActions = {
  createBook,
  fetchBooks,
  editBookInfo,
  deleteBook
};
