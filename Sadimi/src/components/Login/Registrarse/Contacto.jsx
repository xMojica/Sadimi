import React, { useContext, useState } from 'react'
import Telefono from '../../../assets/telefono.svg'
import Email from '../../../assets/email.svg'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';

function Contacto({ setTitulo }) {
    const { setOpen, registro, setRegistro } = useContext(Context);
    const [mensaje, setMensaje] = useState("");
    const telefonoRegex = /^3\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    function handleChange(e) {
        setOpen(false);
        const { name, value } = e.target;
        setRegistro((prevRegistro) => ({
            ...prevRegistro, [name]: value
        }));
    }

    function validaciones() {
        if (!telefonoRegex.test(registro.telefono)) {
            setMensaje("Escribe un telefono válido.");
            return false;
        }
        if (!emailRegex.test(registro.email)) {
            setMensaje("Escribe un email válido.");
            return false;
        }

        setMensaje("");
        return true;
    }

    function siguiente() {
        if (validaciones()) {
            sessionStorage.setItem('registro', JSON.stringify(registro));
            setTitulo("Ubicacion");
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='flex h-full w-full flex-col gap-6'>
            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Telefono} alt="Telefono" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="number"
                        value={registro.telefono}
                        name='telefono'
                        placeholder='Teléfono:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Email} alt="Email" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        value={registro.email}
                        name='email'
                        placeholder='Email:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <span className='flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={mensaje} />
            </span>

            <span className='mt-10 flex w-full flex-col items-center justify-center sm:mt-auto'>
                <button
                    className='w-full rounded-xl bg-primero p-2 px-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer sm:w-2/3 sm:text-2xl'
                    onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );

}

export default Contacto;