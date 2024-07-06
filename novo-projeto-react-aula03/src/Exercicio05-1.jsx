import { useState } from 'react'
import './App.css'
import ImagemCondicional from './components/ImagemCondicional'

function App() {

  return (
    <>
      <div className='container'>
      <h1>Renderização de Imagens Condicionais</h1>
      <ImagemCondicional imagem="PUBLIC" />
      <ImagemCondicional imagem="ASSET" />
      </div>
    </>
  )
}

export default App
