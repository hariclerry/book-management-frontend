import { bookConstants } from "actions/actionTypes";

const initialState = {
  books: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case bookConstants.REGISTER_BOOK_SUCCESS:    
    return {
      ...state,
      books: [ ...state.books, action.payload]
  };
      case bookConstants.FETCH_BOOK_SUCCESS:
        return {
            ...state,
            books: action.payload
        };
      case bookConstants.EDIT_BOOK_SUCCESS:
          const updatedBook = action.payload;
  
          const updateBooks = state.books.map(book => {
            if (book._id === updatedBook._id) {
              return updatedBook;
            }
            return book;
          });
          return {
            ...state,
            books:updateBooks
          };
      case bookConstants.DELETE_BOOK_SUCCESS:
        return {
            ...state,
            books: state.books.filter(
              book => book._id !== action.payload
            )
        };

    default:
      return state;
  }
}
