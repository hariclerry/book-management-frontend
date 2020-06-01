import React from "react";
import { shallow } from "enzyme";

// Components
import InputField from "components/common/button";

describe("Button Component", () => {
  it("it should render the Button component correctly", () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toBeTruthy();
  });
});
