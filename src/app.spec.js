import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/react/cleanup-after-each'
import App from './App'

describe('App', () => {
  it('Runs without error', () => {
    render(<App />)
  })
})
