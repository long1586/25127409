import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({
    data: {
      rooms: [{ room_id: 1, name: 'Test room', price: 100000 }]
    },
    isLoading: false,
    error: undefined
  })
}));

test('renders rooms returned by the API', () => {
  render(<App />);
  expect(screen.getByText('Room 1: Test room, price: 100000')).toBeInTheDocument();
});
