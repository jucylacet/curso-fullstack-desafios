import { useState } from 'react'
import './App.css'
import ListaDeLivros from './components/ListaDeLivros'

function App() {
  const adicionaLivros = [
    {
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      ano: 1954
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      ano: 1949
    },
    {
      titulo: 'O Poder do Hábito',
      autor: 'Charles Duhigg',
      ano: 2012
    }
  ]

  return (
    <>
      <div className='container'>
        <h1>Biblioteca de livros</h1>
        <ListaDeLivros livros={adicionaLivros}/>
      </div>
    </>
  )
}

export default App
