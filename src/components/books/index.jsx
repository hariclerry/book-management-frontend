import React, { Fragment, useState, useEffect } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import Button from "components/common/button";
import Navigation from "components/common/navBar";
import AddBookModal from "components/books/addBookModal";
// import EditBookModal from "components/books/editBookModal";
import BookCards from "components/books/cardLists";
import { bookActions } from "actions/bookActions";
import { validate } from "helpers/validate";
// import DeleteBookModal from "components/books/deleteBookModal"

// import Button from "components/common/button";
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

  const fetchAllBooks = () => {
    const { dispatch } = props;
    dispatch(bookActions.fetchBooks());
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formErrors = localBooksState.formErrors;
    validate.validateBook(name, formErrors, value);
    setBooks({ ...localBooksState, formErrors, [name]: value });
  };

  // const handleBookCreation = (event) => {
  //   event.preventDefault();
  //   const { title, isbn, author } = localBooksState;
  //   const { dispatch } = props;
  //   if (title && isbn && author) {
  //     dispatch(bookActions.createBook(title, isbn, author));
  //   }
  //   props.history.push("/dashboard");
  // };

  const handleBookCreation = (event) => {
    event.preventDefault();
    const { title, isbn, author, id } = localBooksState;
    // console.log("localllllll*******", localBooksState);
    const { dispatch } = props;
    if (title && isbn && author && !id) {
      if (title && isbn && author) {
        dispatch(bookActions.createBook(title, isbn, author));
      }
      // clearFormData();
    } else if (title && isbn && author && id) {
      // console.log("Calledsecondedit*******");
      const id = localBooksState.id;
      const updatedDetails = {
        title: title,
        isbn: isbn,
        author: author,
      };
      if (title && isbn && author) {
        dispatch(bookActions.editBookInfo(id, updatedDetails));
      }
      // clearFormData();
      // props.history.push("/dashboard");
    }

    clearFormData();
    // props.history.push("/dashboard");
    setRequestData(new Date());
  };

  const editDetails = (data) => {
    // event.preventDefault();
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
    clearFormData()
    setRequestData(new Date());
  };
  return (
    <Fragment>
      <Navigation />
      <AddBookModal
        handleBookCreation={handleBookCreation}
        handleInputChange={handleInputChange}
        localBooksState={localBooksState}
      />
      <div className="book-lists">
        <h4>Welcome to your dashboard!</h4>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#form"
        >
          Add Book
        </button>
      </div>
      <hr className="hr-styles"/>
      <BookCards
        books={props.books}
        handleBookCreation={handleBookCreation}
        handleInputChange={handleInputChange}
        localStateBooks={localBooksState}
        editDetails={editDetails}
        clearFormData={clearFormData}
        deleteBook={deleteBook}
        setRequestData={setRequestData}
      />
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
