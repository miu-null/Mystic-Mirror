import { render, screen } from '@testing-library/react';
import App from './App';

test('renders image', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/description/i);
  expect(imgElement).toBeInTheDocument();
});
