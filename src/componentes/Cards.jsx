import './Cards.css'

function Cards({icone, titulo, quantidade, variante}){
    return(
        <div className={`cards ${variante}`}>
            <div id="icone">
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