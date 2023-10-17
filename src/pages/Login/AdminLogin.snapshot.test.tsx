import React from 'react';
import { render } from '@testing-library/react';
import AdminLogin from './AdminLogin';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

test('AdminLogin component matches snapshot', () => {
  const { asFragment } = render(<AdminLogin />);
  expect(asFragment()).toMatchSnapshot();
});
