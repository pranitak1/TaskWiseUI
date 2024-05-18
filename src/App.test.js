import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const textElement = screen.getByText(/Welcome To TaskWiseUI/i); // Using a regex to match the text case-insensitively
  expect(textElement).toBeInTheDocument();
});