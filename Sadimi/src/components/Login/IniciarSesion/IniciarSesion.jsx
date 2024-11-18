import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Email from '../../../assets/email.svg';
import Password from '../../../assets/password.svg';
import Alerta from '../../Alerts/Alerta';
import Show from '../Header/Show';
import Loader from '../../Alerts/Loader';
import { useNavigate } from 'react-router-dom';

function IniciarSesion({ setTitulo }) {
    const navigate = useNavigate()
    const { setOpen, setUsuario } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputType = mostrarContraseña ? 'password' : 'text';

    function handleEmail(e) {
        setOpen(false);
        setEmail(e.target.value)
    };

    function handleContraseña(e) {
        setOpen(false);
        setContraseña(e.target.value)
    };

    function handleToggle() {
        setMostrarContraseña(!mostrarContraseña)
    };

    function registrarse() {
        setOpen(false);
        navigate("/registrarse");
        setTitulo("Datos personales")
    };

    function recuperarContraseña() {
        setTitulo("Recuperar contraseña");
        setOpen(false)
    };


    async function iniciar() {
        setOpen(false);


        if (!email || !contraseña) {
            setTipo("Error");
            setMensaje("Ingrese sus datos");
            setOpen(true);
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('https://api-sadimi-v2.vercel.app/users/login', {
                email,
                contrasena: contraseña
            });

            setUsuario(response.data.user);
            navigate("/");
        } catch (err) {
            if (err.response) {
                setTipo(err.response.data.status);
                setMensaje(err.response.data.message);
                setEmail("")
                setContraseña("")
            } else {
                setTipo("Error");
                setMensaje("Error interno");
                setEmail("")
                setContraseña("")
            }
            setOpen(true);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='flex h-full w-full flex-col gap-4'>
            <span className='mx-auto w-full max-w-96 '>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </span>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Email} alt="Email" />
                    <input
                        className='h-14 w-full rounded-xl border bg-tercero border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="email"
                        placeholder='Email:'
                        value={email}
                        onChange={handleEmail}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl bg-tercero'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-14 w-full rounded-xl border bg-tercero border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type={inputType}
                        placeholder='Contraseña:'
                        value={contraseña}
                        onChange={handleContraseña}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>

            </div>

            <div className='flex items-center justify-center'>
                <span className='relative flex h-4 w-full max-w-96 items-center text-sm font-semibold text-quinto'>
                    <u className='absolute right-0 no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={recuperarContraseña}>¿Olvidaste tu contraseña?</u>
                </span>
            </div>
            <span className='mx-auto mt-4 flex w-full max-w-96 flex-col items-center justify-between'>
                <button
                    className='w-full rounded-xl bg-primero p-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={iniciar}
                    disabled={loading}>
                    Iniciar sesión
                </button>
                <p className='mt-3 justify-center text-center text-quinto'>
                    ¿Aún no tienes una cuenta?
                    <u className='ml-1 font-extrabold no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={registrarse}>Registrate</u>
                </p>
            </span>
        </div>

    );

}

export default IniciarSesion;
