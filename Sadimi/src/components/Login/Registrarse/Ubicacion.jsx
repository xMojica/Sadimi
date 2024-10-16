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
        <div className='flex h-full w-full flex-col gap-6'>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute left-0 mx-4 h-6 w-6' src={IconoDepartamento} alt="Departamento" />
                    <Departamentos
                        setDepartamento={setDepartamento}
                        pais={"colombia"}
                        disabled={false}
                        handleChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <img className='absolute left-0 mx-4 h-6 w-6' src={IconoCiudad} alt="Ciudad" />
                    <Ciudades
                        setCiudad={setCiudad}
                        departamento={departamento}
                        pais={pais}
                        disabled={departamento == null}
                        handleChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg xl:max-w-[620px]'>
                    <input
                        className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                        type="text"
                        value={registro.direccion}
                        name='direccion'
                        placeholder='Dirección:'
                        onChange={handleChange}
                    />
                    <img className='absolute right-0 mx-4 h-6 w-6' src={IconoDireccion} alt="Direccion" />
                </span>
            </div>

            <div className='flex h-12 w-full justify-center'>
                <Alerta tipo={tipo} mensaje={mensaje} />
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

export default Ubicacion