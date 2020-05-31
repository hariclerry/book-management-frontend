import React, { Fragment, useState } from "react";

import InputField from "components/common/inputFields";
import Button from "components/common/button";

import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const DeleteBookModal = ({
  localStateBooks,
  deleteBook
}) => {
  return (
    <Fragment>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Delete {localStateBooks.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete {localStateBooks.title}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-danger" data-dismiss="modal" onClick={deleteBook}>Delete</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default DeleteBookModal;
