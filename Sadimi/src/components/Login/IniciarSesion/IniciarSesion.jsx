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
        setLoading(true);
        setOpen(false);

        try {
            const response = await axios.post('https://api-sadimi-v2.vercel.app/users/login', {
                email,
                contrasena: contraseña
            });

            setUsuario(response.data.user);
            setOpen(false)
            navigate("/")
        } catch (err) {

            if (err.response) {
                setTipo(err.response.data.status);
                setMensaje(err.response.data.message);
            } else {
                setTipo("Error");
                setMensaje("Error interno");
            }
        } finally {
            setLoading(false);
            setOpen(true);
        }
    }

    return (
        <div className='flex h-full min-h-[70vh] w-full min-w-96 flex-col justify-between gap-6 rounded-xl p-5'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Email} alt="Email" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="email"
                        placeholder='Email:'
                        value={email}
                        onChange={handleEmail}
                    />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Password} alt="Contraseña" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type={inputType}
                        placeholder='Contraseña:'
                        value={contraseña}
                        onChange={handleContraseña}
                    />
                    <Show mostrarContraseña={mostrarContraseña} onToggle={handleToggle} />
                </span>
            </div>

            <p className='text-md text-right font-semibold text-quinto hover:cursor-pointer hover:text-primero' onClick={recuperarContraseña}>
                <u className='no-underline hover:underline'>¿Olvidaste tu contraseña?</u>
            </p>

            <span className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </span>

            <span className='mt-auto flex w-full flex-col items-center justify-between'>
                <button
                    className='w-2/3 rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer'
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
