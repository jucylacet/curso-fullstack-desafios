import React from 'react'

const Multiplicacao = ({ num1, num2 }) => {
  const resultadoMultiplicacao = num1 * num2;

  return (
    <div className='operacao'>
      <h1>O resultado da multiplicação de {num1} * {num2} = {resultadoMultiplicacao}</h1>
    </div>
  )
}

export default Multiplicacao