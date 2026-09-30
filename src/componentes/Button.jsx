import './Button.css'

function Button({variante, titulo, onClick}){
    return(
        <>
        <button className={`${variante}`} onClick={onClick}>
            {titulo}
        </button>
        </>
    )
}

export default Button