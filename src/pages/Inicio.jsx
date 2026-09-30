import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList, faClock, faCheck, faStar } from "@fortawesome/free-solid-svg-icons"
import Cards from "../componentes/Cards"
import './Inicio.css'

function Inicio(){

    return(
        <div className="tela-principal">
            <div className="apresentacao">
                <h1>Olá, <span>Sabrina</span>!</h1>
                <p>Organize seu dia e matenha o foto nos seus objetivos.</p>
            </div>
            <div className="cards-resumo">
                <Cards variante="tarefas" icone={<FontAwesomeIcon icon={faClipboardList}/>} titulo="Total de tarefas" quantidade={5}/>
                <Cards variante="pendentes" icone={<FontAwesomeIcon icon={faClock} />} titulo="Pendentes" quantidade={2}/>
                <Cards variante="concluidas" icone={<FontAwesomeIcon icon={faCheck} />} titulo="Concluidas" quantidade={4}/>
                <Cards variante="atrasadas" icone={<FontAwesomeIcon icon={faStar} />} titulo="Atrasadas" quantidade={0}/>
            </div>
        </div>
    )
}

export default Inicio