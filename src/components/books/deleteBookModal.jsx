import React, { Fragment, useState } from "react";

import InputField from "components/common/inputFields";
import Button from "components/common/button";

import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const DeleteBookModal = (props) => {
  return (
    <Fragment>
<div class="modal fade" id="exampleModalDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Book</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Are you sure you want to delete this Book?</p>
      </div>
      <div class="modal-footer">
      <Button
            text="Cancel"
            type="button"
            value="Submit"
            className="btn btn-secondary"
            data-dismiss="modal"
          />

<Button
            text="Delete Book"
            type="button"
            value="Submit"
            className="btn btn-danger"
          />
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default DeleteBookModal;
