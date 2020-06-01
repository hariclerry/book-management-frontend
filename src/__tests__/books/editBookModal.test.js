import React from "react";
import { shallow } from "enzyme";

// Components
import EditBookModal from "components/books/editBookModal";

describe("EditBookModal Component", () => {
    const mockProps = {
        localStateBooks: { title: "title", isbn: "isbn", author: "author", formErrors: {
            titleError:'',
            isbnError:'',
            authorError:''
        } },
      };
  it("it should render the EditBookModal component correctly", () => {
    const wrapper = shallow(<EditBookModal {...mockProps}/>);
    expect(wrapper).toBeTruthy();
  });
});
