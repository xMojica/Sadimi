import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Show from '../Header/Show';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inicio() {
    const navigate = useNavigate();
    const { setOpen, setTipo, tipo, mensaje, setMensaje, setUsuario, registro } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const inputType = mostrarContraseña ? 'password' : 'text';
    const [contraseña1, setContraseña1] = useState("");
    const [contraseña2, setContraseña2] = useState("");

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña);
    }

    function handleContraseña1(e) {
        setOpen(false);
        setContraseña1(e.target.value);
    }

    function handleContraseña2(e) {
        setOpen(false);
        setContraseña2(e.target.value);
    }

    function finalizar() {
        if (contraseña1 !== contraseña2) {
            setTipo("Error");
            setMensaje("Las contraseñas no coinciden");
            setOpen(true);
        } else {
            const nuevoRegistro = {
                ...registro,
                contrasena: contraseña1
            };
            insertar(nuevoRegistro);
            console.log(nuevoRegistro)
        }
    }

    async function insertar(nuevoRegistro) {
        try {
            const response = await axios.post('https://api-sadimi-v2.vercel.app/users', nuevoRegistro);
            setUsuario(response.data.user);
            navigate("/");
        } catch (err) {
            if (err.response) {
                setTipo(err.response.data.status);
                setMensaje(err.response.data.message);
                setOpen(true);
            } else {
                setTipo("Error");
                setMensaje("Error interno");
                setOpen(true);
            }
        }
    }

    return (
        <div className='flex h-full w-full flex-col gap-4'>
            <div className='mx-auto w-full max-w-96'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </div>
            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type={inputType}
                        name='contraseña'
                        placeholder='Contraseña:'
                        onChange={handleContraseña1}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type={inputType}
                        name='repetirContraseña'
                        placeholder='Repetir contraseña:'
                        onChange={handleContraseña2}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <span className='mx-auto mt-8 flex w-full max-w-96 flex-col items-center justify-center'>
                <button
                    className='w-full rounded-xl bg-primero p-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={finalizar}>
                    Finalizar
                </button>
            </span>
        </div>
    );
}

export default Inicio;
