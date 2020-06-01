import React from "react";
import { shallow } from "enzyme";

// Components
import Home from "components/user/home";

describe("Home Component", () => {
  it("it should render the Home component correctly", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
