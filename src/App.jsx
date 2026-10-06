import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Inicio from './pages/Inicio'
import NovaTarefa from './pages/NovaTarefa'

function App() {

  return (
    <div className='app'>
      <Sidebar/>
      <NovaTarefa/>
    </div>
  )
}

export default App
