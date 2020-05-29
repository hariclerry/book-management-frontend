import React, { Fragment, useState } from "react";

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import "./index.scss";
import { checkPropTypes } from "prop-types";

const EditBookModal = ({
  localStateBooks,
  handleInputChange,
  handleBookCreation,
  clearFormData,
}) => {
  const { title, isbn, author, formErrors } = localStateBooks;
  const disableSubmitButton = title === "" || isbn === "" || author === "";
  return (
    <Fragment>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Book
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
            <div class="modal-body">
              <div className="form-main">
                <form className="flex-form">
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
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={clearFormData}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onClick={handleBookCreation}
                      disabled={disableSubmitButton}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBookModal;
