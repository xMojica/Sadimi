import React, { useContext } from 'react'
import Arrow from '../../../../assets/back.svg'
import { Context } from '../../../../Context/main';

function Atras({ titulo, setTitulo }) {

    const context = useContext(Context);

    const handleClick = () => {
        switch (titulo) {
            case "Iniciar sesion":
                context.setMostrarLogin(false)
                document.body.style.overflow = "scroll";
                break;
            case "Datos personales":
                setTitulo("Iniciar sesion")
                break;
            case "Contacto":
                setTitulo("Datos personales")
                break;
            case "Ubicacion":
                setTitulo("Contacto")
                break;
            case "Ingreso":
                setTitulo("Ubicacion")
                break;
            default:
                break;
        }
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Arrow} alt="atras" />
        </div>
    )
}

export default Atras