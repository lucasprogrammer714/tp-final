
const Button = ({texto, numero, color="red"}) => {

//props siempre van de componente padre  a hijos

    return(
        <div>
            <button style={{backgroundColor:color}}>{texto}</button>
        </div>
    )
}

export default Button