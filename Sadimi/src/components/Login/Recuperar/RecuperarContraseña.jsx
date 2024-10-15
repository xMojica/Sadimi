import React, { useContext } from 'react'
import Email from '../../../assets/email.svg'
import Documento from '../../../assets/documento.svg'
import Alerta from '../../Alerts/Alerta';
import { Context } from '../../../Context/main';

function RecuperarContraseña() {
    const { setOpen } = useContext(Context)

    function recuperar() {
        setOpen(true)
    }

    function handleChange() {
        setOpen(false)
    }

    return (
        <div className='flex h-full w-full flex-col gap-6'>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Email} alt="Email" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-10 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="email"
                        placeholder='Email:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Documento} alt="Documento" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-10 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        placeholder='Documento:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <span className='flex w-full justify-center'>
                <Alerta tipo={"Correcto"} mensaje={"Enviamos un correo electrónico para reestablecer la contraseña."} />
            </span>

            <span className='mt-auto flex w-full flex-col items-center justify-center'>
                <button
                    className='w-full rounded-xl bg-primero p-2 px-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer sm:w-2/3 sm:text-2xl'
                    onClick={recuperar}>
                    Recuperar
                </button>
            </span>
        </div>
    );

}

export default RecuperarContraseña