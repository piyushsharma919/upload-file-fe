import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    screen.debug();
  })

  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Hello World!!!!')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
