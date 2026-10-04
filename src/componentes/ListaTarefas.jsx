import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import './ListaTarefas.css'



function ListaTarefas({titulo, categoria, prioridade, conclusao}){
    return(
        <>
        <div className='lista'>
            <div className='marcacao'>
                <input type='checkbox' name={titulo} value={conclusao}/>
                <div className='descricao'>
                    <div>
                        <p className='titulo'>{titulo}</p>
                    </div>
                        <p className='tipos'><span>•</span>{categoria} • {prioridade}</p>
                </div>
            </div>

            <div className='acoes'>    
                {conclusao ?(
                    <p className='conclusao true'>Concluida</p>
                ):(
                    <p className='conclusao false'>Pendente</p>
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