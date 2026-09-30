import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faHouse, faList, faTag, faGear, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar(){

    return(
        <nav className='sidebar'>
            <div className='Topo'>
                <h1 id='logo'><span className='destaque'><FontAwesomeIcon icon={faSquareCheck} /></span> Task<span className='destaque'>Flow</span> </h1>
                <ul id='nav-lista'>
                    <li><a href=''><FontAwesomeIcon icon={faHouse}/> Inicio </a> </li>
                    <li><a href=''><FontAwesomeIcon icon={faList}/> Tarefas</a></li>
                    <li><a href=''><FontAwesomeIcon icon={faTag}/> Categorias</a></li>
                    <li><a href=''><FontAwesomeIcon icon={faGear}/> Configurações</a></li>
                </ul>
            </div>
            <div className='frase-motivacional'>
                <p id='frase'>Pequenos passos também são grandes conquistas!</p>
                <p><FontAwesomeIcon icon={faHeart} /></p>
            </div>
        </nav>
    )
}

export default Sidebar