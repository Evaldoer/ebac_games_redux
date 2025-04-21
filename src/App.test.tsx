import { render, screen } from '@testing-library/react'
import App from './App'

// O App já contém o Provider, então não precisa encapsular de novo

test('deve renderizar o header e os produtos', () => {
  render(<App />)

  // Verifica se o componente Header está na tela
  expect(screen.getByText(/ebac games/i)).toBeInTheDocument()

  // Verifica se os produtos começam sendo carregados
  expect(screen.getByText(/carregando/i)).toBeInTheDocument()
})
