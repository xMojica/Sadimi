import React, { useContext } from 'react'
import Telefono from '../../../../assets/telefono.svg'
import Email from '../../../../assets/email.svg'
import { Context } from '../../../../Context/main';
import Alerta from '../../../Alerts/Alerta';

function Contacto() {
    const { setOpen } = useContext(Context);

    function handleChange() {
        setOpen(false)
    }

    function siguiente() {
        // setTitulo("Ubicacion")
        setOpen(true)
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Telefono} alt="Telefono" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="number" placeholder='Telefono:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Email} alt="Email" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="email" placeholder='Email:' onChange={handleChange} />
                </span>
            </div>

            <div className='mt-4 flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={"Debes ingresar los datos correctamente"} />
            </div>

            <span className='mt-8 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Siguiente</button>
            </span>
        </section>
    )
}

export default Contacto