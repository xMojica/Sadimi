import React, { useContext } from 'react'
import Email from '../../../../assets/email.svg'
import Password from '../../../../assets/password.svg'
import { Context } from '../../../../Context/main';

function IniciarSesion({ setTitulo }) {
    const { setMostrarLogin } = useContext(Context);

    function siguiente() {
        setTitulo("Datos personales")
    }

    function iniciar() {
        setMostrarLogin(false)
        document.body.style.overflow = "scroll";
    }

    return (
        <div className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>
            <div className='flex h-12 items-center rounded-xl bg-segundo'>
                <img className='mx-4 h-6 w-6' src={Email} alt="Email" />
                <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-xl text-primero shadow-lg outline-none placeholder:text-primero' type="email" placeholder='Email: ' />
            </div>
            <div className='flex h-12 items-center rounded-xl bg-segundo'>
                <img className='mx-4 h-6 w-6' src={Password} alt="Contraseña" />
                <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-xl text-primero shadow-lg outline-none placeholder:text-primero' type="password" placeholder='Contraseña: ' />
            </div>
            <p className='mt-3 text-right text-quinto hover:cursor-pointer hover:text-primero'><u className='no-underline hover:underline'>¿Olvidaste tu contraseña?</u></p>
            <div className='mt-10 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl text-segundo hover:scale-105 hover:cursor-pointer' onClick={iniciar}>Iniciar sesion</button>
                <p className='mt-4 justify-center text-center text-quinto'>¿Aún no tienes una cuenta? <u className='font-extrabold no-underline hover:cursor-pointer hover:text-primero hover:underline' onClick={siguiente}>Registrate</u></p>
            </div>
        </div>

    )
}

export default IniciarSesion