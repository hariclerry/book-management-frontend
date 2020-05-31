import { bookConstants } from "actions/actionTypes";

const initialState = {
  books: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case bookConstants.REGISTER_BOOK_SUCCESS:    
    return {
      ...state.books,
      books: action.payload
  };
      case bookConstants.FETCH_BOOK_SUCCESS:
        return {
            ...state.books,
            books: action.payload
        };
        case bookConstants.EDIT_BOOK_SUCCESS:
      return {
        books: state.books.filter(book => book._id !== action.payload._id)
      };
      case bookConstants.DELETE_BOOK_SUCCESS:
        return {
          books: state.books.filter(book => book._id !== action.payload._id)
        };

    default:
      return state;
  }
}
