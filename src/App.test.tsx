import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CustomerForm } from './components/CustomerForm';

beforeEach(() => {
  render(<App />);
})
test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders all components', () => {
  const element = screen.getByText(/Customer Edit Form/i);
  expect(element).toBeInTheDocument();
});
