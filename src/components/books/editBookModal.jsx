import React, { Fragment, useState } from "react";

import InputField from "components/common/inputFields";
import Button from "components/common/button";

import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const EditBookModal = (props) => {
  return (
    <Fragment>
<div class="modal fade" id="exampleModalUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Book</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="form-main">
        <form className="flex-form">

          <div className="form-group">
            <InputField
              htmlFor="exampleInputText"
              label="Title"
              type="text"
              id="exampleInputText"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <InputField
              htmlFor="exampleInputText1"
              label="Isbn"
              type="text"
              id="exampleInputText1"
              className="form-control"
            />
          </div>

 <div className="form-group">
            <InputField
              htmlFor="exampleInputText2"
              label="Author"
              type="text"
              id="exampleInputText2"
              className="form-control"
            />
          </div>
          {/* <Button
            text="Login"
            type="submit"
            value="Submit"
            className="btn btn-primary"
          /> */}
        </form>
      </div>
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
            text="Add Book"
            type="button"
            value="Submit"
            className="btn btn-primary"
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

export default EditBookModal;
