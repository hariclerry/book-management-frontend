import React from "react";
import { shallow } from "enzyme";

// Components
import DeleteBookModal from "components/books/deleteBookModal";

describe("DeleteBookModal Component", () => {
  const mockProps = {
    localStateBooks: { title: "title", isbn: "09-0998", author: "author", formErrors: {
        titleError:'',
        isbnError:'',
        authorError:''
    } },
  };
  it("it should render the DeleteBookModal component correctly", () => {
    const wrapper = shallow(<DeleteBookModal {...mockProps}/>);
    expect(wrapper).toBeTruthy();
  });
});
