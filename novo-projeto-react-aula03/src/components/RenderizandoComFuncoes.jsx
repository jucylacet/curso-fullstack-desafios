import React from 'react'

const RenderizandoComFuncoes = () => {
  const escolhaDeRenderização = (oQueRenderizar) => {
    if ( oQueRenderizar === "PB"){
      return <h1>Paraíba</h1>
    } else {
      return <h2>Estados Inferiores</h2>
    }
  }

  return (
    <div className='renderizacao'>
      {escolhaDeRenderização("PB")}
      {escolhaDeRenderização("SP")}
    </div>
  )
}

export default RenderizandoComFuncoes