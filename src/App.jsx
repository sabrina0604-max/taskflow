import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Inicio from './pages/Inicio'
import NovaTarefa from './pages/NovaTarefa'

function App() {

  const [telaAtual, setTelaAtual] = useState("inicio")
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(novaTarefa){
    setTarefas([...tarefas, novaTarefa])
  }

  function mudarTela(novaTela){
    setTelaAtual(novaTela);
  }

  return (
    <div className='app'>
      <Sidebar/>
      {telaAtual === "inicio" ? (
        <Inicio 
        aoCriarTarefa={() => mudarTela("novaTarefa")}
        tarefas={tarefas}/>
      ):(
        <NovaTarefa 
        aoCancelar={() => mudarTela("inicio")}
        aoCriarTarefa={adicionarTarefa} />
      )}
    
    </div>
  )
}

export default App
