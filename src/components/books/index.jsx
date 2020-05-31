import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "components/common/navBar";
import AddBookModal from "components/books/addBookModal";
import BookCards from "components/books/cardLists";
import { bookActions } from "actions/bookActions";
import { validate } from "helpers/validate";
import "./index.scss";

const Dashboard = (props) => {
  const initialFormState = {
    title: "",
    isbn: "",
    author: "",
    formErrors: {
      titleError: "",
      isbnError: "",
      authorError: "",
    },
  };
  const [localBooksState, setBooks] = useState(initialFormState);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    fetchAllBooks();
  }, [requestData]);

  const fetchAllBooks = async () => {
    const { dispatch } = props;
    await dispatch(bookActions.fetchBooks());
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formErrors = localBooksState.formErrors;
    validate.validateBook(name, formErrors, value);
    setBooks({ ...localBooksState, formErrors, [name]: value });
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const { title, isbn, author, id } = localBooksState;
    const { dispatch } = props;
    if (title && isbn && author && !id) {
      if (title && isbn && author) {
        dispatch(bookActions.createBook(title, isbn, author));
      }
    } else if (title && isbn && author && id) {
      const id = localBooksState.id;
      const updatedDetails = {
        title: title,
        isbn: isbn,
        author: author,
      };
      if (title && isbn && author) {
        dispatch(bookActions.editBookInfo(id, updatedDetails));
      }
    }
    clearFormData();
    window.location.reload(false);
  };

  const editDetails = (data) => {
    setBooks({
      id: data._id,
      title: data.title,
      isbn: data.isbn,
      author: data.author,
      formErrors: {
        titleError: "",
        isbnError: "",
        authorError: "",
      },
    });
  };

  const clearFormData = () => {
    setBooks({
      title: "",
      isbn: "",
      author: "",
      formErrors: {
        titleError: "",
        isbnError: "",
        authorError: "",
      },
    });
  };

  const deleteBook = () => {
    const { id } = localBooksState;
    const { dispatch } = props;
    dispatch(bookActions.deleteBook(id));
    clearFormData();
    setRequestData(new Date());
  };
  const { books } = props;
  return (
    <Fragment>
      <Navigation />
      <AddBookModal
        onBookSubmit={handleBookSubmit}
        onInputChange={handleInputChange}
        localBooksState={localBooksState}
      />
      <div className="book-lists">
        <h4>Welcome to your dashboard!</h4>
        <button
          type="button"
          className="btn btn-outline-success book-plus"
          data-toggle="modal"
          data-target="#form"
        >
          + Add New Book
        </button>
      </div>
      <hr className="hr-styles" />

      {books && books.length > 0 ? (
        <BookCards
          books={books}
          onBookSubmit={handleBookSubmit}
          onInputChange={handleInputChange}
          localStateBooks={localBooksState}
          editDetails={editDetails}
          clearFormData={clearFormData}
          deleteBook={deleteBook}
          setRequestData={setRequestData}
        />
      ) : (
        <div className="book-empty">
          <h4>Empty shelf! Click</h4>
          <button
            type="button"
            className="btn btn-outline-success empty-button"
            data-toggle="modal"
            data-target="#form"
          >
            +
          </button>
          <h4> to start adding books</h4>
        </div>
      )}
      <footer className="footer-text">
        <p>Copyright &copy; 2020. Harriet</p>
      </footer>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(Dashboard)
);
