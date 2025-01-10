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
            setTitulo("/Ubicacion");
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='flex flex-col w-full h-full gap-4'>
            <span className='w-full mx-auto max-w-96'>
                <Alerta tipo={"Error"} mensaje={mensaje} />
            </span>
            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                    <img className='absolute right-0 w-6 h-6 mx-4' src={Telefono} alt="Telefono" />
                    <input
                        className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="number"
                        value={registro.telefono}
                        name='telefono'
                        placeholder='Teléfono:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                    <img className='absolute right-0 w-6 h-6 mx-4' src={Email} alt="Email" />
                    <input
                        className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        value={registro.email}
                        name='email'
                        placeholder='Email:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <span className='flex flex-col items-center justify-center w-full mx-auto mt-8 max-w-96'>
                <button
                    className='w-full p-4 text-xl font-bold rounded-xl bg-primero text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );

}

export default Contacto;