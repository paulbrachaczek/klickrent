import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import Modal from './modal.component.jsx';

it("renders correctly", () => {
    const ModalComponent = shallow(<Modal />);
    expect(toJson(ModalComponent)).toMatchSnapshot();
});
  