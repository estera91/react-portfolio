import { render, screen } from '@testing-library/react';
import App from './App';

// Mock matchMedia
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // For compatibility with addEventListener
    removeListener: jest.fn(), // For compatibility with removeEventListener
  };
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
