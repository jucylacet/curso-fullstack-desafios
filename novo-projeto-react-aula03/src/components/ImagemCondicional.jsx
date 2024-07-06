import React from 'react'
import img from '../assets/img1.png'

const ImagemCondicional = ({imagem}) => {
  const renderizarImagens = () => {
    if (imagem === 'PUBLIC') {
        return <img src='img2.png' />
    } else if (imagem === 'ASSET') {
        return <img src={img} />
    }
}
  return (
    <div className='imagens'>
      {renderizarImagens()}
    </div>
  )
}

export default ImagemCondicional