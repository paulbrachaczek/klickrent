import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import FormInput from './form-input.component.jsx'

it("renders correctly", () => {
    const InputComponent = shallow(<FormInput />);
    expect(toJson(InputComponent)).toMatchSnapshot();
});
  