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
    const { setOpen, tipo, mensaje, registro, setRegistro } = useContext(Context);

    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setDireccion] = useState({})

    function handleChange(e, tipo, valor) {
        if (e === null) {
            setDireccion((prevDireccion) => ({
                ...prevDireccion,
                [tipo]: valor,
            }));
        } else {
            const { name, value } = e.target;
            setDireccion((prevDireccion) => ({
                ...prevDireccion,
                [name]: value,
            }));
        }

        setOpen(false);
    }


    function siguiente() {
        setRegistro((prevRegistro) => ({
            ...prevRegistro, direcciones: direccion
        }));
        setTitulo("Ingreso")

    }

    return (
        <>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
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
                        pais={pais}
                        disabled={departamento == null}
                        handleChange={handleChange}
                    />
                </span>
            </div>


            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={IconoDireccion} alt="Direccion" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='h-full w-full rounded-r-xl border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero'
                        type="text"
                        value={registro.direccion}
                        name='direccion'
                        placeholder='Direccion:'
                        onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </div>

            <span className='mt-auto flex w-full flex-col items-center justify-center'>
                <button className='w-2/3 rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Siguiente</button>
            </span>

        </>
    )
}

export default Ubicacion