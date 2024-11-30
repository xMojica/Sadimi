import React, { useContext, useState } from 'react';
import Documento from '../../../assets/documento.svg';
import Nombre from '../../../assets/nombre.svg';
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Atras from '../Header/Atras';
import Cerrar from '../Header/Cerrar';

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
            Navigate("Contacto")
        } else {
            setOpen(true);
        }
    }

    return (

        <main className='flex items-start justify-center w-full h-full sm:items-center'>
            <section id='login' className='z-50 flex h-[100svh] w-full flex-col items-center justify-start rounded-xl p-8 shadow-xl sm:h-full sm:min-h-[520px] sm:w-2/3 md:w-1/2'>
                <header className='flex items-center justify-between w-full'>
                    <span className='w-8 h-8'>
                        <Atras />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero xl:text-4xl'>Datos personales</h1>
                    <span className='w-8 h-8'>
                        <Cerrar />
                    </span>
                </header>
                <div className='flex w-full h-full mt-16 rounded-xl'>
                    <div className='flex flex-col w-full h-full gap-4'>

                        <span className='w-full mx-auto max-w-96'>
                            <Alerta tipo={"Error"} mensaje={mensaje} />
                        </span>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Nombre} alt="Nombre" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="text"
                                    name="nombre"
                                    value={registro.nombre}
                                    placeholder='Nombres:'
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Nombre} alt="Apellido" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="text"
                                    name="apellido"
                                    value={registro.apellido}
                                    placeholder='Apellidos:'
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Documento} alt="Documento" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="number"
                                    name="documento"
                                    value={registro.documento}
                                    placeholder='Documento:'
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <span className='flex items-center justify-center w-full mx-auto mt-4 max-w-96'>
                            <button
                                className='w-full p-4 text-xl font-bold rounded-xl bg-primero text-tercero hover:scale-105 hover:cursor-pointer'
                                onClick={siguiente}>
                                Siguiente
                            </button>
                        </span>
                    </div>
                </div>
            </section >
        </main >

    );

}

export default DatosPersonales;
