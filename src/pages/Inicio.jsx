import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList, faClock, faCheck, faStar } from "@fortawesome/free-solid-svg-icons"
import Cards from "../componentes/Cards"
import './Inicio.css'
import Button from "../componentes/Button"
import ListaTarefas from "../componentes/ListaTarefas"
import { useState } from "react"

function Inicio({aoCriarTarefa, tarefas, alternarStatusTarefa, excluirTarefa, editarTarefa}){

    const [filtroTitulo, setFiltroTitulo] = useState("")
    const [filtroStatus, setFiltroStatus] = useState("todas")
    const [filtroCategoria, setFiltroCategoria] = useState("")
    const [filtroPrioridade, setFiltroPrioridade] = useState("")

    const tarefasPendentes = tarefas.filter((tarefa) => {
        return tarefa.status === "pendentes"
    })

    const tarefasConcluidas = tarefas.filter((tarefa) => {
        return tarefa.status === "concluidas"
    })

    const hoje = new Date()
    hoje.setHours(0,0,0,0)

    const tarefasAtrasadas = tarefas.filter((tarefa) => {
        return(
            tarefa.status === "pendentes" &&
            tarefa.vencimento &&
            new Date(tarefa.vencimento +"T00:00:00") < hoje
        )
    })

    const idTarefasAtrasadas = tarefasAtrasadas.map((tarefa) => tarefa.id)

    const tarefasFiltradas = tarefas.filter((tarefa) => {
        return (
            (filtroStatus === "todas" || tarefa.status === filtroStatus || (filtroStatus === "atrasadas" && idTarefasAtrasadas.includes(tarefa.id))) &&
            (filtroPrioridade === "" || tarefa.prioridade === filtroPrioridade) &&
            (filtroCategoria === "" || tarefa.categoria === filtroCategoria) &&
            (filtroTitulo === "" || tarefa.titulo.toLowerCase().includes(filtroTitulo.toLowerCase()))
        )
    })

    const tarefasOrdenadas = [...tarefasFiltradas].sort((a, b) => {
        return new Date(a.vencimento).getTime() - new Date(b.vencimento).getTime()
    })

    return(
        <div className="tela-principal">
            <div className="apresentacao">
                <h1>Olá, <span>Sabrina</span>!</h1>
                <p>Organize seu dia e matenha o foto nos seus objetivos.</p>
            </div>
            <div className="cards-resumo">
                <Cards variante="tarefas" icone={<FontAwesomeIcon icon={faClipboardList}/>} titulo="Total de tarefas" quantidade={tarefas.length}/>
                <Cards variante="pendentes" icone={<FontAwesomeIcon icon={faClock} />} titulo="Pendentes" quantidade={tarefasPendentes.length}/>
                <Cards variante="concluidas" icone={<FontAwesomeIcon icon={faCheck} />} titulo="Concluídas" quantidade={tarefasConcluidas.length}/>
                <Cards variante="atrasadas" icone={<FontAwesomeIcon icon={faStar} />} titulo="Atrasadas" quantidade={tarefasAtrasadas.length}/>
            </div>
            <nav className="pesquisa">

                <input className="buscarTarefa"
                    type="text" 
                    name="buscarTarefa"
                    placeholder="Buscar Tarefa..."
                    onChange={(e)=> setFiltroTitulo(e.target.value)}
                    value={filtroTitulo}
                />

                <select 
                    name="status" 
                    className="select" 
                    onChange={(e) => setFiltroStatus(e.target.value)}
                    value={filtroStatus}
                >
                    <option value="todas">Todas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="concluidas">Concluídas</option>
                    <option value="atrasadas">Atrasadas</option>
                </select>

                <select 
                    name="prioridade" 
                    className="select"
                    onChange={(e) => setFiltroPrioridade(e.target.value)}
                    value={filtroPrioridade}
                >
                    <option value="">Prioridade</option>
                    <option value="alta">Alta prioridade</option>
                    <option value="media">Média prioridade</option>
                    <option value="baixa">Baixa prioridade</option>
                </select>

                <select 
                    name="categoria" 
                    className="select"
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    value={filtroCategoria}
                >
                    <option value="">Categoria</option>
                    <option value="estudos">Estudos</option>
                    <option value="projetos">Projetos</option>
                    <option value="carreira">Carreira</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="lazer">Lazer</option>
                </select>

                <Button variante="btn-principal" titulo="+ Nova Tarefa" onClick={aoCriarTarefa}/>
            
            </nav>

            <div className="lista-de-tarefas">
                <h2>Tarefas</h2>
                <div>
                    {tarefasOrdenadas.length === 0 ? (
                        <div className="vazio">Não existem tarefas</div>
                        ):(
                        tarefasOrdenadas.map((tarefa)=>(
                            <ListaTarefas 
                                key={tarefa.id}
                                id={tarefa.id}
                                titulo={tarefa.titulo} 
                                categoria={tarefa.categoria} 
                                prioridade={tarefa.prioridade}
                                vencimento={tarefa.vencimento}
                                status={tarefa.status === "concluidas"}
                                alternarStatusTarefa={alternarStatusTarefa}
                                excluirTarefa={excluirTarefa}
                                editarTarefa={editarTarefa}
                            />
                        ))
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Inicio