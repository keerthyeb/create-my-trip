import renderer from 'react-test-renderer';
import MultiSelect from './MultiSelect';

describe('MultiSelect Component', () => {
  it('should render MultiSelect component correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const placeHolder = 'Select options';
    const selectedItems = ['Option 1'];
    const onChangeHandler = jest.fn();

    const component = renderer.create(
      <MultiSelect options={options} placeHolder={placeHolder} selectedItems={selectedItems} onChangeHandler={onChangeHandler} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
