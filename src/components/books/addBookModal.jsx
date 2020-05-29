import React, { Fragment, useState } from "react";

import InputField from "components/common/inputFields";
import Button from "components/common/button";

import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const AddBookModal = ({ localBooksState, handleInputChange, handleBookCreation }) => {
  const { title, isbn, author, formErrors } = localBooksState;
  const disableSubmitButton = title === "" || isbn === "" || author === "";

  return (
    <Fragment>

      <div
        class="modal fade"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title" id="exampleModalLabel">
              Add Book
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div className="form-group">
                  <InputField
                    htmlFor="exampleInputText"
                    label="Title"
                    value={title}
                    name="title"
                    type="text"
                    id="exampleInputText"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  {formErrors.titleError.length > 0 && (
                    <div className="input-error">{`* ${formErrors.titleError}`}</div>
                  )}
                </div>
                <div className="form-group">
                  <InputField
                    htmlFor="exampleInputText1"
                    label="Isbn"
                    value={isbn}
                    name="isbn"
                    type="text"
                    id="exampleInputText1"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  {formErrors.isbnError.length > 0 && (
                    <div className="input-error">{`* ${formErrors.isbnError}`}</div>
                  )}
                </div>

                <div className="form-group">
                  <InputField
                    htmlFor="exampleInputText2"
                    label="Author"
                    value={author}
                    name="author"
                    type="text"
                    id="exampleInputText2"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  {formErrors.authorError.length > 0 && (
                    <div className="input-error">{`* ${formErrors.authorError}`}</div>
                  )}
                </div>
              </div>
              <div class="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-success"
                  onClick={handleBookCreation} 
                  data-dismiss="modal"
                  disabled={disableSubmitButton}
                  
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBookModal;
