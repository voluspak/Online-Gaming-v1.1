import App from './App'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

describe('Overall App testing', () => {
  afterEach(cleanup)
  it('Should render', () => {
    render(<App />)
  })

  it('Should show a text input', () => {
    render(<App />)
    screen.getByRole('textbox')
  })
  it('Should show a submit button', () => {
    render(<App />)
    screen.getByRole('button')
  })
  it('Should render a title', () => {
    render(<App />)
    screen.getByText('Online Gaming App')
  })
  it('Should show a sorting checkbox', () => {
    render(<App />)
    screen.getByRole('checkbox')
  })
  it('Input should let the user write on it', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Dragon Ball' } })
    expect(input.value).toBe('Dragon Ball')
  })
  it('Should display a list by pressing submit button after writing on input', async () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Megaman' } })

    const enviar = screen.getByText('Buscar')
    fireEvent.click(enviar)

    setTimeout(async () => {
      await screen.findAllByRole('img')
    }, 500)
  })

  it('Should match both searching and results', async () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Batman' } })

    const enviar = screen.getByText('Buscar')
    fireEvent.click(enviar)

    setTimeout(async () => {
      await screen.findByText('Batman' || 'batman' || 'Bat' || 'bat')
    }, 500)
  })
})
