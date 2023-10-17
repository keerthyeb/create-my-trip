import renderer from 'react-test-renderer';
import Home from './Home';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Home Component', () => {
  it('should render Home component correctly', () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
