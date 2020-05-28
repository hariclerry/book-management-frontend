import React, { Fragment, useState } from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import Button from "components/common/button";
import Navigation from "components/common/navBar";
import AddBookModal from "components/books/addBookModal";
// import EditBookModal from "components/books/editBookModal";
import BookCards from "components/books/cardLists";
// import DeleteBookModal from "components/books/deleteBookModal"

// import Button from "components/common/button";
import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const Dashboard = (props) => {
  return (
    <Fragment>
      <Navigation />
      <AddBookModal />
      {/* <EditBookModal />
      <DeleteBookModal/> */}
      <div className="book-lists">
        <h3>Welcome user, start adding books!</h3>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Book
        </button>
      </div>
      <BookCards />
    </Fragment>
  );
};

export default Dashboard;
