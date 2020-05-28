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

export const validate = {
  validateRegistration,
};
