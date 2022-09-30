import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Arrange
  render(<App />);
  const linkElement = screen.getByText(/Stock for icecreams: 50/i);
  expect(linkElement).toBeInTheDocument();
});

test('random check for component - Verifying with Snapshot', () => {
    const  app = render(<App/>)
    expect(app.getByText('Buy Cake')).toBeTruthy();
    expect(app).toMatchSnapshot();
});

test('Check value of h2 tag to change after cake button click', () => {
  render(<App/>);
  const btnCake = screen.getByText(/Buy Cake/i);
  fireEvent.click(btnCake);
  const h2 = screen.getByText(/Stock for cakes: 9/);
  expect(h2).toBeTruthy();
  expect(h2.textContent).toBe('Stock for cakes: 9');
});