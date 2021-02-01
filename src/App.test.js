import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import App from "./App";

it("renders correctly", () => {
    const AppComponent = shallow(<App />);
    expect(toJson(AppComponent)).toMatchSnapshot();
});
  