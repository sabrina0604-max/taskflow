import './Button.css'

function Button({variante, titulo, onClick, type}){
    return(
        <>
        <button className={`${variante}`} onClick={onClick} type={type}>
            {titulo}
        </button>
        </>
    )
}

export default Button