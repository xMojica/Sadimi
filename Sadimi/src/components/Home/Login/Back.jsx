import React from 'react'
import Arrow from '../../../assets/back.svg'

function Back() {

    const handleClick = () => {
        const register = document.getElementById('register');
        register.style.display = 'none';
    }


    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Arrow} alt="atras" />
        </div>
    )
}

export default Back