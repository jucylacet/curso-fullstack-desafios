import React from 'react'

const Adicao = ({ num1, num2 }) => {
  const resultadoSoma = num1 + num2;

  return (
    <div className='operacao'>
      <h1>O resultado da adição de {num1} + {num2} = {resultadoSoma}</h1>
    </div>
  )
}

export default Adicao