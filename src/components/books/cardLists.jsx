import React, { Fragment } from "react";

import Shelf from "../../images/bookk.jpg";
import EditBookModal from "components/books/editBookModal";
import DeleteBookModal from "components/books/deleteBookModal";
import "./index.scss";

const BookCards = ({
  books,
  onBookSubmit,
  onInputChange,
  localStateBooks,
  clearFormData,
  deleteBook,
  editDetails,
}) => {
  return (
    <Fragment>
      <EditBookModal
        books={books}
        onBookSubmit={onBookSubmit}
        onInputChange={onInputChange}
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
              <div class="card">
                <img src={Shelf} class="card-img-top" alt="book" />
                <div class="card-body">
                  <h4 id={book._id} class="card-title book-card-title">{book.title}</h4>
                  <div id={book._id} class="card-text">
                    <p className="isbn-text">by</p>
                    <p className="book-card-author">{book.author}</p>
                    <p className="isbn-text">ISBN {book.isbn}</p>
                  </div>
                  <div id={book._id} className="card-buttons">
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
