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
  const [file, setFile] = useState("");

  useEffect(() => {
    fetchAllBooks();
  }, []);

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

  const handleFileChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (!files) return;
    setFile(files[0]);
  };
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const { title, isbn, author, id } = localBooksState;
    const { dispatch } = props;
    if (title && isbn && author && !id) {
      if (title && isbn && author && file.name) {
        dispatch(bookActions.createBook(title, isbn, author, file));
        setFile("");
      }
    } else if (title && isbn && author && id) {
      const id = localBooksState.id;
      if (title && isbn && author) {
        dispatch(bookActions.editBookInfo(id, title, isbn, author));
      }
    }
    clearFormData();
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
      <div className="book-main">
        <AddBookModal
          onBookSubmit={handleBookSubmit}
          onInputChange={handleInputChange}
          localBooksState={localBooksState}
          onFileChange={handleFileChange}
          file={file}
        />
        <div className="book-lists">
          <h4>My Book Shelf</h4>
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
            <h4>Empty shelf</h4>
            <button
              type="button"
              className="btn btn-outline-success empty-button"
              data-toggle="modal"
              data-target="#form"
            >
              +
            </button>
          </div>
        )}
        <footer className="footer-dashboard">
          <p>Copyright &copy; {new Date().getFullYear()} Harriet</p>
        </footer>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(Dashboard)
);
