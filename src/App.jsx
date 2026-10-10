import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Inicio from './pages/Inicio'
import NovaTarefa from './pages/NovaTarefa'

function App() {

  const [telaAtual, setTelaAtual] = useState("inicio")

  function mudarTela(novaTela){
    setTelaAtual(novaTela);
  }

  return (
    <div className='app'>
      <Sidebar/>
      {telaAtual === "inicio" ? (
        <Inicio aoCriarTarefa={() => mudarTela("novaTarefa")}/>
      ):(
        <NovaTarefa aoCancelar={() => mudarTela("inicio")}/>
      )}
    
    </div>
  )
}

export default App
