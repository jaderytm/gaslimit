// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GasLimit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GasLimit/i);
    expect(titleElement).toBeInTheDocument();
});
