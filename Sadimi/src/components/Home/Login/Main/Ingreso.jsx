import React, { useContext, useState } from 'react'
import { Context } from '../../../../Context/main';
import Alerta from '../../../Alerts/Alerta';
import Password from '../../../../assets/password.svg'
import Show from './Show';

function Inicio() {
    const { setOpen } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const inputType = mostrarContraseña ? 'password' : 'text';

    function handleChange() {
        setOpen(false)
    }

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña);
    }

    function finalizar() {
        setOpen(true)
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} placeholder='Contraseña:' onChange={handleChange} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Repetir contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} placeholder='Repetir contraseña:' onChange={handleChange} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='mt-4 flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={"Debes ingresar los datos correctamente"} />
            </div>

            <span className='mt-8 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={finalizar}>Finalizar</button>
            </span>
        </section>
    )
}

export default Inicio