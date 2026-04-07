import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders calculators display', () => {
  render(<App/>);
  expect(screen.getByText('0')).toBeInTheDocument();
});
