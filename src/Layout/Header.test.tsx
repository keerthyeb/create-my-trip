import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('render web site name', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const element = await screen.findByText(/Enchanting Travels/i);
    expect(element).toBeInTheDocument();
  });
});
