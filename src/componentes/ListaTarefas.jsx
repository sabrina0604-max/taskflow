import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import './ListaTarefas.css'


function ListaTarefas({id, titulo, categoria, prioridade, vencimento, status, alternarStatusTarefa, excluirTarefa, editarTarefa}){

    const hoje = new Date()
    hoje.setHours(0,0,0,0)

    const atrasada = !status && vencimento && new Date(vencimento + "T00:00:00") < hoje

    return(
        <>
        <div className='lista'>
            <div className='marcacao'>
                <input type='checkbox' name={titulo} checked={status} onChange={() => alternarStatusTarefa(id)}/>
                <div className='descricao'>
                    <div>
                        <p className='titulo'>{titulo}</p>
                    </div>
                    <p className='tipos'>
                        <span className={`bolinha ${categoria}`}></span>
                        {categoria} • {prioridade} prioridade
                    </p>
                </div>
            </div>

            <div className='acoes'>  

                <div className='aviso-atrasada-container'>
                    {atrasada &&(
                        <p className='aviso-atrasada'>Atrasada</p>
                    )}  
                </div>    

                {status ?(
                    <p className='status true'>Concluida</p>
                ):(
                    <p className='status false'>Pendente</p>
                )}

                <Button 
                    variante="simples" 
                    titulo={<FontAwesomeIcon icon={faPencil}/>} 
                    onClick={() => editarTarefa(id)}
                />

                <Button 
                    variante="simples" 
                    titulo={<FontAwesomeIcon 
                    icon={faTrash}/>} 
                    onClick={() => excluirTarefa(id)}
                />
                
            </div>    
        </div>
        <div className='linha'></div>
        </>
    )
}

export default ListaTarefas