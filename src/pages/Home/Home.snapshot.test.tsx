import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home Component', () => {
  it('should render Home component correctly', () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
