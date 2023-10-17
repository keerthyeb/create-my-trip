import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('should render Dropdown component correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const placeHolder = 'Select an option';
    const onChangeHandler = jest.fn();

    const component = renderer.create(
      <Dropdown options={options} placeHolder={placeHolder} onChangeHandler={onChangeHandler} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
