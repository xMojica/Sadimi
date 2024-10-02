import React, { useContext } from 'react'
import Arrow from '../../../assets/back.svg'
import { Context } from '../../../Context/main';

function Atras() {

    const context = useContext(Context);

    const handleClick = () => {
        context.setMostrarLogin(false)
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Arrow} alt="atras" />
        </div>
    )
}

export default Atras