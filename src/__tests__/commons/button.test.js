import React from "react";
import { shallow } from "enzyme";

// Components
import Button from "components/common/button";

describe("Button Component", () => {
  it("it should render the Button component correctly", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toBeTruthy();
  });
});
