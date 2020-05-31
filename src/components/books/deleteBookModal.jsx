import React, { Fragment } from "react";

import "./index.scss";

const DeleteBookModal = ({
  localStateBooks,
  deleteBook
}) => {
  return (
    <Fragment>
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Delete {localStateBooks.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete {localStateBooks.title}?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-danger" data-dismiss="modal" onClick={deleteBook}>Delete</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default DeleteBookModal;
