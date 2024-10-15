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
        <div className='flex h-full w-full flex-col gap-6'>
            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>

                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type={inputType}
                        name='contraseña'
                        placeholder='Contraseña:'
                        onChange={handleContraseña1}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>

                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type={inputType}
                        name='repetirContraseña'
                        placeholder='Repetir contraseña:'
                        onChange={handleContraseña2}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </div>

            <span className='mt-10 flex w-full flex-col items-center justify-between sm:mt-auto'>
                <button
                    className='w-full rounded-xl bg-primero p-2 px-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer sm:w-2/3 sm:text-2xl'
                    onClick={finalizar}>
                    Finalizar
                </button>
            </span>
        </div>
    );

}

export default Inicio