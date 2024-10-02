import React from 'react'
import Close from '../../../assets/close.svg'

function Cerrar() {

    const handleClick = () => {
        const register = document.getElementById('register');
        register.style.display = 'none';
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Close} alt="cerrar" />
        </div>
    )
}

export default Cerrar