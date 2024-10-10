import React, { useContext } from 'react'
import Email from '../../../assets/email.svg'
import Documento from '../../../assets/documento.svg'
import Alerta from '../../Alerts/Alerta';
import { Context } from '../../../Context/main';

function RecuperarContraseña() {
    const { setOpen } = useContext(Context)

    function recuperar() {
        setOpen(true)
    }

    function handleChange() {
        setOpen(false)
    }

    return (
        <>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Email} alt="Email" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="email" placeholder='Email: ' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Documento} alt="Documento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Documento:' onChange={handleChange} />
                </span>
            </div>

            <span className='mt-4 flex h-12 w-full justify-center'>
                <Alerta tipo={"Success"} mensaje={"Enviamos un correo electronico a samojica08@gmail.com para reestablecer la contraseña."} />
            </span>

            <span className='mt-auto flex w-full flex-col items-center justify-center'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={recuperar}>Recuperar</button>
            </span>
        </>
    )
}

export default RecuperarContraseña