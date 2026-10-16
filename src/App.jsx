import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Inicio from './pages/Inicio'
import NovaTarefa from './pages/NovaTarefa'

function App() {

  const [telaAtual, setTelaAtual] = useState("inicio")
  const [tarefas, setTarefas] = useState([])
  const [tarefaEditando, setTarefaEditando] = useState(null)

  function adicionarTarefa(novaTarefa){
    const existe = tarefas.some((tarefa) => tarefa.id === novaTarefa.id)

    if(existe){
      setTarefas(tarefas.map((item) => {
        if(item.id === novaTarefa.id){
          return novaTarefa  
        }else{
          return item
        }
      }))
    }else {
      setTarefas([...tarefas, novaTarefa])
    }
  }

  function salvarTarefa(tarefa){
    adicionarTarefa(tarefa)
    setTarefaEditando(null)
    setTelaAtual("inicio")
  }

  function cancelarEdicao(){
    setTarefaEditando(null)
    setTelaAtual("inicio")
  }

  function editarTarefa(id){
    const tarefa = tarefas.find((item) => item.id === id)
    setTarefaEditando(tarefa)
    setTelaAtual("novaTarefa")
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
          excluirTarefa={excluirTarefa}
          editarTarefa={editarTarefa}
        />
      ):(
        <NovaTarefa 
          aoCancelar={cancelarEdicao}
          aoCriarTarefa={salvarTarefa} 
          tarefaEditando={tarefaEditando}
        />
      )}
    
    </div>
  )
}

export default App
