import { useState } from 'react'
import './App.css'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometro from './components/MilhasParaQuilometro'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Conversor de temperaturas</h1>
        <CelsiusParaFahrenheit celsius={35}/>
        <FahrenheitParaCelsius fahrenheit={95}/>
        <QuilometroParaMilhas quilometro={10}/>
        <MilhasParaQuilometro milha={5}/>
      </div>
    </>
  )
}

export default App
