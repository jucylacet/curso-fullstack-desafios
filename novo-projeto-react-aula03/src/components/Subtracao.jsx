import React from 'react'

const Subtracao = ({ num1, num2 }) => {
  const resultadoSubtracao = num1 - num2;

return (
    <div className='operacao'>
      <h1>O resultado da subtração de {num1} - {num2} = {resultadoSubtracao}</h1>
    </div>
  )
}

export default Subtracao