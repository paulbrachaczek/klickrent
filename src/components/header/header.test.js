import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import Header from "./header.component.jsx";

it("renders correctly", () => {
    const HeaderComponent = shallow(<Header />);
    expect(toJson(HeaderComponent)).toMatchSnapshot();
});
  