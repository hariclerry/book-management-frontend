import React, { Fragment } from "react";

import InputField from "components/common/inputFields";
import "./index.scss";

const EditBookModal = ({
  localStateBooks,
  onInputChange,
  onBookSubmit,
  clearFormData,
}) => {
  const { title, isbn, author, formErrors } = localStateBooks;
  const disableSubmitButton = title === "" || isbn === "" || author === "";
  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Book
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
            <div className="modal-body">
              <div className="form-main modal-edit">
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
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={clearFormData}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={onBookSubmit}
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
