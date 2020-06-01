import React from "react";
import { shallow,mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "components/books/index";

//TODO:Fix this
const mockStore = configureStore();
const store = mockStore({
});
describe("Dashboard Component", () => {
  const mockProps = {
  

  };

  it("it should render the Dashboard component correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Dashboard {...mockProps} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
