import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import CategoryList from "./category-list.component.jsx";

it("renders correctly", () => {
    const mockProduct = [
        {
            name: 'test',
            typeId: 1
        }
    ]
    const CategoryListComponent = shallow(<CategoryList products={mockProduct} />);
    expect(toJson(CategoryList)).toMatchSnapshot();
});
  