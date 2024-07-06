import React from 'react'

const MilhasParaQuilometro = ({milha}) => {
  const quilometro = milha * 1.60934;
  return (
    <div className='conversao'>
      <h1>Milhas para Quilometros</h1>
      <p>{milha}mi = {quilometro}km</p>
    </div>
  )
}

export default MilhasParaQuilometro