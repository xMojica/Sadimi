import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import IconoPais from '../../../assets/pais.svg'
import IconoDepartamento from '../../../assets/departamento.svg'
import IconoCiudad from '../../../assets/ciudad.svg'
import IconoDireccion from '../../../assets/direccion.svg'
import Paises from './Paises';
import Departamentos from './Departamentos';
import Ciudades from './Ciudades';

function Ubicacion({ setTitulo }) {
    const { setOpen, token, setToken, tipo, mensaje, setTipo, setMensaje } = useContext(Context);
    const [pais, setPais] = useState(null);
    const [departamento, setDepartamento] = useState(null);
    const [ciudad, setCiudad] = useState("");
    const [registro, setRegistro] = useState(() => {
        const storedRegistro = sessionStorage.getItem('registro');
        return storedRegistro ? JSON.parse(storedRegistro) : { nombre: '', apellido: '', documento: '', telefono: '', email: '', pais: "", departamento: "", ciudad: "", direccion: '', contraseña: '' };
    });

    function handleChange(e, tipo, valor) {
        setOpen(false);
        if (tipo) {
            setRegistro((prevRegistro) => ({
                ...prevRegistro, [tipo]: valor
            }))
        } else {
            const { name, value } = e.target;
            setRegistro((prevRegistro) => ({
                ...prevRegistro, [name]: value
            }));
        }
    }

    function siguiente() {
        setTitulo("Ingreso")
        console.log(registro)

    }

    return (
        <div className='flex h-full w-full flex-col justify-start gap-6 rounded-xl bg-tercero p-10'>
            <div className='flex h-12 items-center rounded-xl bg-background'>
                <img className='mx-4 h-6 w-6' src={IconoPais} alt="Pais" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <Paises
                        setPais={setPais}
                        disabled={false}
                        handleChange={handleChange} />
                </span>
            </div>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={IconoDepartamento} alt="Departamento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <Departamentos
                        setDepartamento={setDepartamento}
                        pais={pais}
                        disabled={pais == null}
                        handleChange={handleChange}
                    />
                </span>
            </div>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={IconoCiudad} alt="Ciudad" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <Ciudades
                        setCiudad={setCiudad}
                        departamento={departamento}
                        disabled={departamento == null}
                        handleChange={handleChange}
                    />
                </span>
            </div>


            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={IconoDireccion} alt="Direccion" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" value={registro.direccion} name='direccion' placeholder='Direccion:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </div>

            <span className='mt-auto flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Siguiente</button>
            </span>

        </div>
    )
}

export default Ubicacion