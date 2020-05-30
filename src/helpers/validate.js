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
  const isbnPattern = /^[0-9]-+$/g;
  switch (name) {
    case "title":
      formErrors.titleError =
        value.length < 5 ? "Title must be atleast 5 characters long" : "";
      break;
    case "isbn":
      formErrors.isbnError =
        !isbnPattern.test(value) && value.length < 10
          ? "Isbn must be valid & atleast 10 characters long, E.g 100-877-66"
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
