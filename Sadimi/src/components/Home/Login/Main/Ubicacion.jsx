import React, { useContext } from 'react'
import { Context } from '../../../../Context/main';
import Alerta from '../../../Alerts/Alerta';
import Pais from '../../../../assets/pais.svg'
import Departamento from '../../../../assets/departamento.svg'
import Ciudad from '../../../../assets/ciudad.svg'
import Direccion from '../../../../assets/direccion.svg'

function Ubicacion({ setTitulo }) {
    const { setOpen } = useContext(Context);

    function handleChange() {
        setOpen(false)
    }

    function siguiente() {
        setTitulo("Ingreso")
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Pais} alt="Pais" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Pais:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Departamento} alt="Departamento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Departamento:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Ciudad} alt="Ciudad" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Ciudad:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Direccion} alt="Direccion" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" placeholder='Direccion:' onChange={handleChange} />
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

export default Ubicacion