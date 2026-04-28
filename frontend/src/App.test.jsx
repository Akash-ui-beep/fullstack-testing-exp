import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders message', () => {
  render(<App />)
  expect(screen.getByText('Hello Frontend')).toBeInTheDocument()
})