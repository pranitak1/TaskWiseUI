import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});

test('renders text "Welcome To TaskWiseUI ...."', () => {
  render(<App />);
  const textElement = screen.getByText('Welcome To TaskWiseUI ....');
  expect(textElement).toBeInTheDocument();
});
