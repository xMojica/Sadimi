import React, { useContext, useState } from 'react';
import Documento from '../../../assets/documento.svg';
import Nombre from '../../../assets/nombre.svg';
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';

function DatosPersonales({ setTitulo }) {
    const { setOpen, registro, setRegistro } = useContext(Context);
    const [mensaje, setMensaje] = useState("");
    const nombreRegex = /^(?=.*[A-Za-zñ])[A-Za-zñ'-]{1,}$/;
    const apellidoRegex = /^(?=.*[A-Za-zñ])[A-Za-zñ'-]{1,}$/;
    const documentoRegex = /^(?!0{4,12})\d{4,12}$/;


    function validaciones() {

        if (registro.nombre === undefined || !nombreRegex.test(registro.nombre)) {
            setMensaje("Nombre no permitido.");
            return false;
        }

        if (registro.apellido === undefined || !apellidoRegex.test(registro.apellido)) {
            setMensaje("Apellido no permitido.");
            return false;
        }

        if (registro.documento === undefined || !documentoRegex.test(registro.documento)) {
            setMensaje("Documento no permitido.");
            return false;
        }

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
            setTitulo("Contacto");
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='flex h-full w-full flex-col gap-4'>

            <span className='mx-auto w-full max-w-96'>
                <Alerta tipo={"Error"} mensaje={mensaje} />
            </span>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Nombre} alt="Nombre" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        name="nombre"
                        value={registro.nombre}
                        placeholder='Nombres:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Nombre} alt="Apellido" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        name="apellido"
                        value={registro.apellido}
                        placeholder='Apellidos:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Documento} alt="Documento" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="number"
                        name="documento"
                        value={registro.documento}
                        placeholder='Documento:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <span className='mx-auto mt-4 flex w-full max-w-96 items-center justify-center'>
                <button
                    className='w-full rounded-xl bg-primero p-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );

}

export default DatosPersonales;
