import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import './ListaTarefas.css'



function ListaTarefas({titulo, categoria, prioridade, status}){
    return(
        <>
        <div className='lista'>
            <div className='marcacao'>
                <input type='checkbox' name={titulo} value={status}/>
                <div className='descricao'>
                    <div>
                        <p className='titulo'>{titulo}</p>
                    </div>
                        <p className='tipos'><span>•</span>{categoria} • {prioridade}</p>
                </div>
            </div>

            <div className='acoes'>    
                {status ?(
                    <p className='status true'>Concluida</p>
                ):(
                    <p className='status false'>Pendente</p>
                )}
                <Button variante="simples" titulo={<FontAwesomeIcon icon={faPencil} />}/>
                <Button variante="simples" titulo={<FontAwesomeIcon icon={faTrash} />}/>
            </div>    
        </div>
        <div className='linha'></div>
        </>
    )
}

export default ListaTarefas