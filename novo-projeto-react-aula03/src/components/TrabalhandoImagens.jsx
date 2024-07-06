import React from 'react'
import img1 from '../assets/img1.png'

const TrabalhandoImagens = () => {
  return (
    <div className='container'>
      <h1>Trabalhando com Imagens</h1>
      <div className='imagens'>
        <div className='imagem'>
          <h2>Imagem da Pasta Public</h2>
        <img src="img2.png"/>
        </div>
        <div className='imagem'>
          <h2>Imagem da Pasta Assets</h2>
        <img src= {img1} />
        </div>
      </div>
    </div>
  )
}

export default TrabalhandoImagens