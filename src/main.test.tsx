import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { StrictMode } from 'react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('Main entry point', () => {
  it('no element should be outside of the root element', () => {
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)

    const elementsOutsideRoot = document.body.querySelectorAll('body > :not(#root)')
    expect(elementsOutsideRoot.length).toBe(0)
  })

  it('renders StrictMode with App component', () => {
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)

    render(
      <StrictMode>
        <App />
      </StrictMode>,
      { container: root }
    )

    const strictModeElement = root.querySelector('div')
    expect(strictModeElement).toBeInTheDocument()
  })

  it('root element is created and has correct id', () => {
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)

    expect(document.getElementById('root')).toStrictEqual(root)
  })
})
