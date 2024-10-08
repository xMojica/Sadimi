import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import { Context } from '../../../Context/main';
import Email from '../../../assets/email.svg';
import Password from '../../../assets/password.svg';
import Alerta from '../../Alerts/Alerta';
import Show from '../Header/Show';

function IniciarSesion({ setTitulo }) {
    const { setOpen } = useContext(Context);
    const [mostrarContraseña, setMostrarContraseña] = useState(true);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputType = mostrarContraseña ? 'password' : 'text';

    const handleEmail = (e) => {
        setOpen(false);
        setEmail(e.target.value);
    };

    const handleContraseña = (e) => {
        setOpen(false);
        setContraseña(e.target.value);
    };

    const handleToggle = () => {
        setMostrarContraseña(!mostrarContraseña);
    };

    const recuperarContraseña = () => {
        setTitulo("Recuperar contraseña");
        setOpen(false);
    };

    const iniciar = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://api-sadimi-v2.vercel.app/users/login', {
                email,
                contrasena: contraseña
            });
            setTipo(response.data.status);
            setMensaje(response.data.message);
        } catch (err) {
            setTipo(err.response ? err.response.data.status : 'error');
            setMensaje(err.response ? err.response.data.message : 'Error en la conexión');
        } finally {
            setLoading(false);
            setOpen(true);
        }
    };

    const registrarse = () => {
        setTitulo("Datos personales");
        setOpen(false);
    };

    return (
        <div className='flex h-full w-full flex-col justify-start gap-6 rounded-xl bg-background p-10'>
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

            <span className='mt-auto flex w-full flex-col'>
                <button
                    className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer'
                    onClick={iniciar}
                    disabled={loading}
                >
                    Iniciar sesión
                </button>
                <p className='mt-2 justify-center text-center text-quinto'>
                    ¿Aún no tienes una cuenta?
                    <u className='font-extrabold no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={registrarse}>Registrate</u>
                </p>
            </span>
        </div>
    );
}

export default IniciarSesion;
