import './Cards.css'

function Cards({icone, titulo, quantidade, variante}){
    return(
        <div className="cards">
            <div className={`icone ${variante}`}>
                <p>{icone}</p>
            </div>
            <div className='descricao'>
                <p>{titulo}</p>
                <p>{quantidade}</p>
            </div>
        </div>
    )
}

export default Cards