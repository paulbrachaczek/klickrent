import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import Button from "./button.component";

it("renders correctly", () => {
    const ButtonComponent = shallow(<Button />);
    expect(toJson(ButtonComponent)).toMatchSnapshot();
});
  