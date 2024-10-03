import React from 'react'
import Email from '../../../../assets/email.svg'
import Documento from '../../../../assets/documento.svg'
// import Alerta from '../../../Alerts/Alerta'

function RecuperarContraseña() {

    function recuperar() {
        console.log("recuperando")
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>
            <div className='flex h-12 items-center rounded-xl bg-segundo'>
                <img className='mx-4 h-6 w-6' src={Email} alt="Email" />
                <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-xl text-primero shadow-lg outline-none placeholder:text-primero' type="email" placeholder='Email:' />
            </div>
            <div className='flex h-12 items-center rounded-xl bg-segundo'>
                <img className='mx-4 h-6 w-6' src={Documento} alt="Documento" />
                <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-xl text-primero shadow-lg outline-none placeholder:text-primero' type="text" placeholder='Documento:' />
            </div>
            <div className=''>
                {/* <Alerta mensaje={"Contraseña recuperada con exito."} /> */}
            </div>
            <span className='mt-24 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl text-segundo hover:scale-105 hover:cursor-pointer' onClick={recuperar}>Recuperar</button>
            </span>
        </section>
    )
}

export default RecuperarContraseña