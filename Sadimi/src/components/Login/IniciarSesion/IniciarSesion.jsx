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

    const handleEmail = (e) => { setOpen(false); setEmail(e.target.value) };
    const handleContraseña = (e) => { setOpen(false); setContraseña(e.target.value) };
    const handleToggle = () => { setMostrarContraseña(!mostrarContraseña) };
    function registrarse() { navigate("/registrarse"); setTitulo("Datos personales") };
    function recuperarContraseña() { setTitulo("Recuperar contraseña"); setOpen(false) };


    async function iniciar() {
        setOpen(false);
        setLoading(true)

        if (email || contraseña === "") {
            setTipo("Error");
            setMensaje("Ingrese sus datos");
            setOpen(true);
            setLoading(false)
        } else {
            try {
                const response = await axios.post('https://api-sadimi-v2.vercel.app/users/login', {
                    email,
                    contrasena: contraseña
                });

                setUsuario(response.data.user);
                navigate("/")
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
            } finally {
                setLoading(false)
            }

        }

    }

    return (
        <div className='flex h-full w-full flex-col gap-6'>
            <span className='flex w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </span>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Email} alt="Email" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="email"
                        placeholder='Email:'
                        value={email}
                        onChange={handleEmail}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl bg-tercero'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type={inputType}
                        placeholder='Contraseña:'
                        value={contraseña}
                        onChange={handleContraseña}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>

            </div>

            <p className='text-right text-sm font-semibold text-quinto'>
                <u className='justify-end no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={recuperarContraseña}>¿Olvidaste tu contraseña?</u>
            </p>

            <span className='mt-10 flex w-full flex-col items-center justify-between sm:mt-auto'>
                <button
                    className='w-full rounded-xl bg-primero p-2 px-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer sm:w-2/3 sm:text-2xl'
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
