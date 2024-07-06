import { useState } from 'react'
import './App.css'
import PrecisoEstudar from './components/PrecisoEstudar'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Study To-do List</h1>
        <PrecisoEstudar tech01='React' tech02='Java'/>
      </div>
    </>
  )
}

export default App
