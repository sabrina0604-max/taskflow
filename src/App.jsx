import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Inicio from './pages/Inicio'

function App() {

  return (
    <div className='app'>
      <Sidebar/>
      <Inicio/>
    </div>
  )
}

export default App
