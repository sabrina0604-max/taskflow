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

  function alternarStatusTarefa(id) {
    setTarefas(tarefas.map((tarefa) => {
      if(tarefa.id === id){
        if(tarefa.status === "pendentes"){
          return {...tarefa, status:"concluidas"}
        }else if(tarefa.status === "concluidas"){
          return {...tarefa, status:"pendentes"}
        }  
      }
      return tarefa
  }))}

  function mudarTela(novaTela){
    setTelaAtual(novaTela);
  }

  function excluirTarefa(id){
    setTarefas(tarefas.filter((tarefa) =>tarefa.id !== id))
  }



  return (
    <div className='app'>
      <Sidebar/>
      {telaAtual === "inicio" ? (
        <Inicio 
        aoCriarTarefa={() => mudarTela("novaTarefa")}
        tarefas={tarefas}
        alternarStatusTarefa={alternarStatusTarefa}
        excluirTarefa={excluirTarefa}/>
      ):(
        <NovaTarefa 
        aoCancelar={() => mudarTela("inicio")}
        aoCriarTarefa={adicionarTarefa} />
      )}
    
    </div>
  )
}

export default App
