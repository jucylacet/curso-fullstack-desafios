import React from 'react'

const Divisao = ({num1, num2}) => {
  const resultadoDivisao = num1 / num2;

return (
    <div className='operacao'>
      <h1>O resultado da divisão de {num1} / {num2} = {resultadoDivisao}</h1>
    </div>
  )
}

export default Divisao