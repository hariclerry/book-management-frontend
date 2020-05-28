import React, { Fragment, useState } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
  console.log(props, 'propssssssss')
  return (
    <Fragment>
      <Navigation />
      <AddBookModal />
      {/* <EditBookModal />
      <DeleteBookModal/> */}
      <div className="book-lists">
        <h4>Welcome {props.userData.userName}, start adding books!</h4>
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
const mapStateToProps = (state) => ({
  userData
  : state.authentication.userData,
});

export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(Dashboard)
);
