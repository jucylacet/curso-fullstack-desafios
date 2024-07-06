import React from 'react'

const QuilometroParaMilhas = ({quilometro}) => {
  const milha = quilometro * 0.621371;
  return (
    <div className='conversao'>
      <h1>Quilometros para Milhas</h1>
      <p>{quilometro}km = {milha}mi</p>
    </div>
  )
}

export default QuilometroParaMilhas