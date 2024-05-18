import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByTestId } = render(<App />);
  const welcomeMessage = getByTestId('app-component');
  // expect(welcomeMessage).toBeInTheDocument();
  expect(welcomeMessage.textContent).toBe('Welcome To TaskWiseUI ....'); // Check the exact text content
});
