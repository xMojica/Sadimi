import React from 'react'
import Close from '../../../assets/close.svg'
import { useNavigate } from 'react-router-dom';

function Cerrar() {
    const navigate = useNavigate();

    function handleClick() {
        sessionStorage.setItem('registro', JSON.stringify({}));
        navigate("/")
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Close} alt="cerrar" />
        </div>
    )
}

export default Cerrar