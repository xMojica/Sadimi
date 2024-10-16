import React, { useContext, useState } from 'react'
import Telefono from '../../../assets/telefono.svg'
import Email from '../../../assets/email.svg'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';

function Contacto({ setTitulo }) {
    const { setOpen, registro, setRegistro } = useContext(Context);
    const [mensaje, setMensaje] = useState("");
    const telefonoRegex = /^(?!0+$)\d{8,10}$/;
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
            setTitulo("Ubicacion");
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='flex h-full w-full flex-col gap-4'>
            <span className='flex w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={mensaje} />
            </span>
            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Telefono} alt="Telefono" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="number"
                        value={registro.telefono}
                        name='telefono'
                        placeholder='Teléfono:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Email} alt="Email" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        value={registro.email}
                        name='email'
                        placeholder='Email:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <span className='mx-auto mt-8 flex w-full max-w-96 flex-col items-center justify-center'>
                <button
                    className='w-full rounded-xl bg-primero p-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );

}

export default Contacto;