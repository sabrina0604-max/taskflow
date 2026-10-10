import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList, faClock, faCheck, faStar } from "@fortawesome/free-solid-svg-icons"
import Cards from "../componentes/Cards"
import './Inicio.css'
import Button from "../componentes/Button"
import ListaTarefas from "../componentes/ListaTarefas"

function Inicio({aoCriarTarefa}){

    return(
        <div className="tela-principal">
            <div className="apresentacao">
                <h1>Olá, <span>Sabrina</span>!</h1>
                <p>Organize seu dia e matenha o foto nos seus objetivos.</p>
            </div>
            <div className="cards-resumo">
                <Cards variante="tarefas" icone={<FontAwesomeIcon icon={faClipboardList}/>} titulo="Total de tarefas" quantidade={5}/>
                <Cards variante="pendentes" icone={<FontAwesomeIcon icon={faClock} />} titulo="Pendentes" quantidade={2}/>
                <Cards variante="concluidas" icone={<FontAwesomeIcon icon={faCheck} />} titulo="Concluídas" quantidade={4}/>
                <Cards variante="atrasadas" icone={<FontAwesomeIcon icon={faStar} />} titulo="Atrasadas" quantidade={0}/>
            </div>
            <nav className="pesquisa">
                <input className="buscarTarefa"
                    type="text" 
                    name="buscarTarefa"
                    placeholder="Buscar Tarefa..."
                />
                <select name="status" className="select">
                    <option value="todas">Todas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="concluidas">Concluídas</option>
                    <option value="atrasadas">Atrasadas</option>
                </select>
                <select name="prioridade" className="select">
                    <option value="prioridade">Prioridade</option>
                    <option value="alta">Alta prioridade</option>
                    <option value="media">Média prioridade</option>
                    <option value="baixa">Baixa prioridade</option>
                </select>
                <select name="categoria" className="select">
                    <option value="categoria">Categoria</option>
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
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={false}/>                   
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={true}/> 
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={false}/> 
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={false}/> 
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={false}/> 
                    <ListaTarefas titulo="Estudar React" categoria="Estudos" prioridade="Alta Prioridade" conclusao={true}/> 
                </div>
            </div>
            
        </div>
    )
}

export default Inicio