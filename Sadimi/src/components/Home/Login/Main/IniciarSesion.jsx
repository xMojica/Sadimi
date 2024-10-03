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
    }

    return (
        <div className='flex h-auto flex-col gap-6 rounded-xl bg-background p-10'>
            <div className='flex rounded-xl bg-segundo p-2 pl-4 shadow-md'>
                <img src={Email} alt="Email" />
                <input className='h-12 w-full rounded-xl bg-segundo px-3 text-xl text-primero outline-none placeholder:text-primero' type="email" placeholder='Email: ' />
            </div>
            <div className='flex rounded-xl bg-segundo p-2 pl-4 shadow-md'>
                <img src={Password} alt="Contraseña" />
                <input className='h-12 w-full rounded-xl bg-segundo px-3 text-xl text-primero outline-none placeholder:text-primero' type="password" placeholder='Contraseña: ' />
            </div>
            <p className='text-right text-primero hover:cursor-pointer'><u>¿Olvidaste tu contraseña?</u></p>
            <div className='mt-10 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl text-segundo hover:scale-105 hover:cursor-pointer' onClick={iniciar}>Iniciar sesion</button>
                <p className='mt-4 justify-center text-center text-quinto'>¿Aún no tienes una cuenta? <u className='font-extrabold text-primero hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Registrate</u></p>
            </div>
        </div>

    )
}

export default IniciarSesion