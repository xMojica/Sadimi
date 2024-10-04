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
                navigate("/Login");
                break;
            case "Datos personales":
                navigate("/Login");
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