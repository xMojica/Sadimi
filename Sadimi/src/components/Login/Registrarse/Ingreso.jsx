import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Password from '../../../assets/password.svg'
import Show from '../Header/Show';

function Inicio() {
    const { setOpen } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const inputType = mostrarContraseña ? 'password' : 'text';

    const [registro, setRegistro] = useState(() => {
        const storedRegistro = sessionStorage.getItem('registro');
        return storedRegistro ? JSON.parse(storedRegistro) : { nombre: '', apellido: '', documento: '', telefono: '', email: '', pais: '', departamento: '', ciudad: '', direccion: '', contraseña: '' };
    });

    function handleChange(e) {
        setOpen(false);
        const { name, value } = e.target;
        setRegistro((prevRegistro) => ({
            ...prevRegistro, [name]: value
        }));
    }

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña);
    }

    function finalizar() {
        setOpen(true)
    }

    return (
        <div className='flex h-full flex-col justify-start gap-6 rounded-xl bg-tercero p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} name='contraseña' placeholder='Contraseña:' onChange={handleChange} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Repetir contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} name='contraseña' placeholder='Repetir contraseña:' onChange={handleChange} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={"Debes ingresar los datos correctamente"} />
            </div>

            <span className='mt-auto flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={finalizar}>Finalizar</button>
            </span>
        </div>
    )
}

export default Inicio