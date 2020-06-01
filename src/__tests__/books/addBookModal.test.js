import React from "react";
import { shallow } from "enzyme";

// Components
import AddBookModal from "components/books/addBookModal";

describe("AddBookModal Component", () => {
  const mockProps = {
    localBooksState: { title: "", isbn: "", author: "", formErrors: {
        titleError:'',
        isbnError:'',
        authorError:''
    } },
  };
  it("it should render the AddBookModal component correctly", () => {
    const wrapper = shallow(<AddBookModal {...mockProps} />);
    expect(wrapper).toBeTruthy();
  });
});
