import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Password from '../../../assets/password.svg'
import Show from '../Header/Show';

function Inicio() {
    const { setOpen, setTipo, tipo, mensaje, setMensaje } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const inputType = mostrarContraseña ? 'password' : 'text';
    const [contraseña1, setContraseña1] = useState("");
    const [contraseña2, setContraseña2] = useState("");

    const [registro, setRegistro] = useState(() => {
        const storedRegistro = sessionStorage.getItem('registro');
        return storedRegistro ? JSON.parse(storedRegistro) : { nombre: '', apellido: '', documento: '', telefono: '', email: '', pais: '', departamento: '', ciudad: '', direccion: '', contraseña: '' };
    });

    function handleContraseña1(e) {
        setOpen(false);
        setContraseña1(e.target.value)
    }

    function handleContraseña2(e) {
        setOpen(false);
        setContraseña2(e.target.value)
    }

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña);
    }

    function finalizar() {
        if (contraseña1 !== contraseña2) {
            setTipo("Error")
            setMensaje("Las contraseñas no coinciden")
            setOpen(true)
        } else {
            setTipo("Correcto")
            setMensaje("Usuario registrado con exito.")
            setOpen(true)

            setRegistro((prevRegistro) => ({
                ...prevRegistro, contraseña: contraseña1
            }));


        }
        console.log(registro)
    }

    return (
        <div className='flex h-full w-full flex-col justify-start gap-6 rounded-xl p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} name='contraseña' placeholder='Contraseña:' onChange={handleContraseña1} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Password} alt="Repetir contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type={inputType} name='contraseña' placeholder='Repetir contraseña:' onChange={handleContraseña2} />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </div>

            <span className='mt-auto flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={finalizar}>Finalizar</button>
            </span>
        </div>
    )
}

export default Inicio