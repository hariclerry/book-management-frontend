import React, { Fragment } from "react";

import InputField from "components/common/inputFields";

import "./index.scss";

const AddBookModal = ({ localBooksState, onInputChange, onBookSubmit }) => {
  const { title, isbn, author, formErrors } = localBooksState;
  const disableSubmitButton = title === "" || isbn === "" || author === "";
  return (
    <Fragment>
      <div
        className="modal fade"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Book
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <InputField
                    htmlFor="exampleInputText"
                    label="Title"
                    value={title}
                    name="title"
                    type="text"
                    id="exampleInputText"
                    className="form-control"
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
                  />
                  {formErrors.authorError.length > 0 && (
                    <div className="input-error">{`* ${formErrors.authorError}`}</div>
                  )}
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={onBookSubmit}
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
