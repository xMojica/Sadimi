import React, { useContext } from 'react'
import Arrow from '../../../assets/back.svg'
import { Context } from '../../../Context/main';
import { useNavigate } from 'react-router-dom';

function Atras({ titulo, setTitulo }) {
    const navigate = useNavigate()
    const { setOpen } = useContext(Context);

    const handleClick = () => {
        setOpen(false);
        switch (titulo) {
            case "Iniciar sesion":
                navigate("/");
                break;
            case "Recuperar contraseña":
                setTitulo("Iniciar sesion");
                break;
            case "Datos personales":
                setTitulo("Iniciar sesion");
                break;
            case "Contacto":
                setTitulo("Datos personales")
                break;
            case "Ubicacion":
                setTitulo("Contacto")
                break;
            case "Contraseña":
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