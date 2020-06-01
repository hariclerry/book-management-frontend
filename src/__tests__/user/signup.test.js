import React from "react";
import { shallow,mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Signup from "components/user/signup";

//TODO:Fix this
const mockStore = configureStore();
const store = mockStore({
});
describe("Signup Component", () => {
  const mockProps = {
  

  };

  it("it should render the Signup component correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Signup {...mockProps} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
