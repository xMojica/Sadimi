import React, { useContext } from 'react'
import Close from '../../../../assets/close.svg'
import { Context } from '../../../../Context/main'

function Cerrar() {

    const context = useContext(Context);

    function handleClick() {
        context.setMostrarLogin(false)
        document.body.style.overflow = "scroll";
        context.setOpen(false);
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Close} alt="cerrar" />
        </div>
    )
}

export default Cerrar