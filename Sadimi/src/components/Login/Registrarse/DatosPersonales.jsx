import React, { useContext, useState } from 'react';
import Documento from '../../../assets/documento.svg';
import Nombre from '../../../assets/nombre.svg';
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';

function DatosPersonales({ setTitulo }) {
    const { setOpen } = useContext(Context);
    const [mensaje, setMensaje] = useState("");
    const nombreRegex = /^(?=.*[A-Za-z])[A-Za-z\s'-]+$/;
    const apellidoRegex = /^(?=.*[A-Za-z])[A-Za-z\s'-]+$/;
    const documentoRegex = /^\d{4,10}$/;

    const [registro, setRegistro] = useState(() => {
        const storedRegistro = sessionStorage.getItem('registro');
        return storedRegistro ? JSON.parse(storedRegistro) : { nombre: '', apellido: '', documento: '', telefono: '', email: '', pais: '', departamento: '', ciudad: '', direccion: '', contraseña: '' };
    });

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
        <div className='flex h-full w-full flex-col justify-start gap-6 rounded-xl bg-background p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Nombre} alt="Nombre" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="text"
                        name="nombre"
                        value={registro.nombre}
                        placeholder='Nombre:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Nombre} alt="Apellido" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="text"
                        name="apellido"
                        value={registro.apellido}
                        placeholder='Apellido:'
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Documento} alt="Documento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
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

            <span className='mt-auto flex w-full flex-col'>
                <button
                    className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );
}

export default DatosPersonales;
