import React, { useContext } from 'react'
import Email from '../../../../assets/email.svg'
import Documento from '../../../../assets/documento.svg'
import Alerta from '../../../Alerts/Alerta'
import { Context } from '../../../../Context/main'

function RecuperarContraseña() {
    const { setOpen } = useContext(Context)

    function recuperar() {
        setOpen(true)
    }

    function handleChange() {
        setOpen(false)
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>
            <div className='mb-5 h-12'>
                <Alerta tipo={"Error"} mensaje={"Error al intentar recuperar el usuario"} />
            </div>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Email} alt="Email" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="email" placeholder='Email: ' onChange={handleChange} />
                </span>
            </div>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Documento} alt="Documento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Documento:' onChange={handleChange} />
                </span>
            </div>

            <span className='mt-12 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={recuperar}>Recuperar</button>
            </span>
        </section>
    )
}

export default RecuperarContraseña