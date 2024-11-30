import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Email from '../../../assets/email.svg';
import Password from '../../../assets/password.svg';
import Atras from '../Header/Atras';
import Cerrar from "../Header/Cerrar"
import Alerta from '../../Alerts/Alerta';
import Show from '../Header/Show';
import { useNavigate, useParams } from 'react-router-dom';

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
        navigate("/Registrarse");
    };

    function recuperarContraseña() {
        setOpen(false)
        navigate("/Recuperar")
    };


    async function iniciar() {

        setOpen(false);
        if (!email || !contraseña) {
            setMensaje("Ingrese sus datos");
            setTipo("Error");
            setOpen(true);
            return;
        }

        try {
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
        } finally { }
    }

    return (
        <main className='flex items-start justify-center w-full h-full sm:items-center'>
            <section id='login' className='z-50 flex h-[100svh] w-full flex-col items-center justify-start rounded-xl p-8 shadow-xl sm:h-full sm:min-h-[520px] sm:w-2/3 md:w-1/2'>
                <header className='flex items-center justify-between w-full'>
                    <span className='w-8 h-8'>
                        <Atras />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero xl:text-4xl'>Iniciar Sesion</h1>
                    <span className='w-8 h-8'>
                        <Cerrar />
                    </span>
                </header>
                <div className='flex w-full h-full mt-16 rounded-xl'>
                    <div className='flex flex-col w-full h-full gap-4'>
                        <span className='w-full mx-auto max-w-96 '>
                            <Alerta tipo={tipo} mensaje={mensaje} />
                        </span>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Email} alt="Email" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="email"
                                    placeholder='Email:'
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </span>
                        </div>

                        <div className='flex items-center justify-center rounded-xl bg-tercero'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type={inputType}
                                    placeholder='Contraseña:'
                                    value={contraseña}
                                    onChange={handleContraseña}
                                />
                                <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                            </span>

                        </div>

                        <div className='flex items-center justify-center'>
                            <span className='relative flex items-center w-full h-4 text-sm font-semibold max-w-96 text-quinto'>
                                <u className='absolute right-0 no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={recuperarContraseña}>¿Olvidaste tu contraseña?</u>
                            </span>
                        </div>
                        <span className='flex flex-col items-center justify-between w-full mx-auto mt-4 max-w-96'>
                            <button
                                className='w-full p-4 text-xl font-bold rounded-xl bg-primero text-tercero hover:scale-105 hover:cursor-pointer'
                                onClick={iniciar}
                                disabled={loading}>
                                Iniciar sesión
                            </button>
                            <p className='justify-center mt-3 text-center text-quinto'>
                                ¿Aún no tienes una cuenta?
                                <u className='ml-1 font-extrabold no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={registrarse}>Registrate</u>
                            </p>
                        </span>
                    </div>
                </div>
            </section >
        </main >

    );

}

export default IniciarSesion;
