function validateRegistration(name, formErrors, value) {
  switch (name) {
    case "userName":
      formErrors.userNameError =
        value.length < 5 ? "Username must be atleast 5 characters long" : "";
      break;
    case "email":
      formErrors.emailError = value.length < 5 ? "Email must valid" : "";
      break;
    case "password":
      formErrors.passwordError =
        value.length < 5 ? "Password must be atleast 5 characters long" : "";
      break;
    default:
      break;
  }
}

function validateBook(name, formErrors, value) {
  switch (name) {
    case "title":
      formErrors.titleError =
        value.length < 5 ? "Title must be atleast 5 characters long" : "";
      break;
    case "isbn":
      formErrors.isbnError =
         value.length < 8
          ? "Isbn must be numbers & atleast 8 characters long, E.g 100-877-66"
          : "";
      break;
    case "author":
      formErrors.authorError =
        value.length < 5 ? "Author must be atleast 5 characters long" : "";
      break;
    default:
      break;
  }
}
export const validate = {
  validateRegistration,
  validateBook,
};
