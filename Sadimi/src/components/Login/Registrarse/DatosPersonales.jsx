import React, { useContext, useState } from 'react';
import Documento from '../../../assets/documento.svg';
import Nombre from '../../../assets/nombre.svg';
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';

function DatosPersonales({ setTitulo }) {
    const { setOpen, registro, setRegistro } = useContext(Context);
    const [mensaje, setMensaje] = useState("");
    const nombreRegex = /^(?=.*[A-Za-zñ])[A-Za-zñ\s'-]{1,}$/;
    const apellidoRegex = /^(?=.*[A-Za-zñ])[A-Za-zñ\s'-]{1,}$/;
    const documentoRegex = /^(?!0{4,10})\d{4,10}$/;


    function validaciones() {

        if (!nombreRegex.test(registro.nombre)) {
            setMensaje("Escribe un nombre válido.");
            return false;
        }

        if (!apellidoRegex.test(registro.apellido)) {
            setMensaje("Escribe un apellido válido.");
            return false;
        }


        if (!documentoRegex.test(registro.documento)) {
            setMensaje("Escribe un documento válido.");
            return false;
        }

        setMensaje("");
        return true;
    }

    function handleChange(e) {
        setOpen(false);
        const { name, value } = e.target;
        setRegistro((prevRegistro) => ({
            ...prevRegistro,
            [name]: value
        }));
    }

    function siguiente() {
        if (validaciones()) {
            sessionStorage.setItem('registro', JSON.stringify(registro));
            setTitulo("Contacto");
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='flex h-full w-full flex-col gap-6'>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Nombre} alt="Nombre" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        name="nombre"
                        value={registro.nombre}
                        placeholder='Nombres:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Nombre} alt="Apellido" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        name="apellido"
                        value={registro.apellido}
                        placeholder='Apellidos:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute right-0 mx-4 h-4 w-4 sm:h-6 sm:w-6' src={Documento} alt="Documento" />
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        name="documento"
                        value={registro.documento}
                        placeholder='Documento:'
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

export default DatosPersonales;
