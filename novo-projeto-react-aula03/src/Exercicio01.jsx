import { useState } from 'react'
import './App.css'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Calculadora</h1>
        <Adicao num1={10} num2={10}/>
        <Subtracao num1={10} num2={10}/>
        <Multiplicacao num1={10} num2={10}/>
        <Divisao num1={10} num2={10}/>
      </div>
    </>
  )
}

export default App
