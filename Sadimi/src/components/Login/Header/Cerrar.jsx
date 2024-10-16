import React, { useContext } from 'react'
import Close from '../../../assets/close.svg'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/main';

function Cerrar() {
    const navigate = useNavigate();
    const { setOpen, setRegistro } = useContext(Context)

    function handleClick() {
        setOpen(false)
        setRegistro({})
        navigate("/")
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Close} alt="cerrar" />
        </div>
    )
}

export default Cerrar