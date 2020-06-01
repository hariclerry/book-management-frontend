import React from "react";
import { shallow,mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "components/user/login";

//TODO:Fix this
const mockStore = configureStore();
const store = mockStore({
});
describe("Login Component", () => {
  const mockProps = {
  

  };

  it("it should render the Login component correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Login {...mockProps} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
