import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Password from '../../../assets/password.svg'
import Show from '../Header/Show';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inicio() {
    const navigate = useNavigate()
    const { setOpen, setTipo, tipo, mensaje, setMensaje, registro, setRegistro, setUsuario } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const inputType = mostrarContraseña ? 'password' : 'text';
    const [contraseña1, setContraseña1] = useState("");
    const [contraseña2, setContraseña2] = useState("");

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña);
    }

    function handleContraseña1(e) {
        setOpen(false);
        setContraseña1(e.target.value)
    }

    function handleContraseña2(e) {
        setOpen(false);
        setContraseña2(e.target.value)
    }


    async function insertar() {
        try {
            const response = await axios.post('https://api-sadimi-v2.vercel.app/users', { user: registro });
            console.log(registro)
            setUsuario(response.data.user)
            navigate("/")
        } catch (err) {
            console.log(err)
            console.log(registro)
            if (err.response) {
                setTipo(err.response.data.status);
                setMensaje(err.response.data.message);
            } else {
                setTipo("Error");
                setMensaje("Error interno");
            }
        } finally {
            setOpen(true);

        }
    }

    function finalizar() {
        if (contraseña1 !== contraseña2) {
            setTipo("Error")
            setMensaje("Las contraseñas no coinciden")
            setOpen(true)
        } else {
            setRegistro((prevRegistro) => ({
                ...prevRegistro, contrasena: contraseña1
            }));
            insertar()
        }


    }

    return (
        <>
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

            <span className='mt-auto flex w-full flex-col items-center justify-center'>
                <button className='w-2/3 rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={finalizar}>Finalizar</button>
            </span>
        </>
    )
}

export default Inicio