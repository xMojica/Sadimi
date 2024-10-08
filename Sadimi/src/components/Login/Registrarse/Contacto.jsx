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
        <>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Telefono} alt="Telefono" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="number"
                        value={registro.telefono}
                        name='telefono'
                        placeholder='Telefono:'
                        onChange={handleChange} />
                </span>
            </div>


            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Email} alt="Email" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="text"
                        value={registro.email}
                        name='email'
                        placeholder='Email:'
                        onChange={handleChange} />
                </span>
            </div>

            <span className='flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={mensaje} />
            </span>

            <span className='mt-auto flex w-full flex-col items-center justify-center'>
                <button className='w-2/3 rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Siguiente</button>
            </span>
        </>
    )
}

export default Contacto;