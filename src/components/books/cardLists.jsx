import React, { Fragment, useState } from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import Button from "components/common/button";
import Book from "../../images/book-shelves.jpg";
import Shelf from "../../images/bookk.jpg";
import EditBookModal from "components/books/editBookModal";
import DeleteBookModal from "components/books/deleteBookModal";

// import Button from "components/common/button";
import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const BookCards = ({
  books,
  handleBookCreation,
  handleInputChange,
  localStateBooks,
  clearFormData,
  deleteBook,
  editDetails,
}) => {
  return (
    <Fragment>
      <EditBookModal
        books={books}
        handleBookCreation={handleBookCreation}
        handleInputChange={handleInputChange}
        localStateBooks={localStateBooks}
        clearFormData={clearFormData}
      />
      <DeleteBookModal
        localStateBooks={localStateBooks}
        deleteBook={deleteBook}
      />
      <div className="card-books">
        {books &&
          books.map((book) => {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <img src={Shelf} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title book-card-title">{book.title}</h4>
                  <p class="card-text">
                    <p className="isbn-text">ISBN {book.isbn}</p>
                    <p className="book-card-author">{book.author}</p>
                  </p>
                  <div className="card-buttons">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => editDetails(book, e)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={(e) => editDetails(book, e)}
                  >
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default BookCards;
