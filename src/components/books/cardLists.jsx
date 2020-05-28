import React, { Fragment, useState } from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import Button from "components/common/button";
import Book from "../../images/book-shelves.jpg";
import Shelf from "../../images/book.jpg";
import EditBookModal from "components/books/editBookModal";
import DeleteBookModal from "components/books/deleteBookModal";

// import Button from "components/common/button";
import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const BookCards = (props) => {
  return (
    <Fragment>
      <EditBookModal />
      <DeleteBookModal />
      <div className="card-books">
        <div class="card" style={{ width: "18rem" }}>
          <img src={Shelf} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalUpdate"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalDelete"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Book} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Shelf} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Book} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookCards;
