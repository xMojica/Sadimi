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
    const { setOpen, mensaje, registro, setRegistro, setMensaje } = useContext(Context);
    const [pais, setPais] = useState('colombia');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [descripcion, setDescripcion] = useState("")
    const [direccion, setDireccion] = useState({})
    const descripcionRegex = /^(?:[A-Za-z]+)\s\d{1,3}(\s#\s\d+[a-zA-Z]?-?\d+([a-zA-Z]?)?)?$/



    function handleChange(e, tipo, valor) {
        if (e === null) {
            setDireccion((prevDireccion) => ({
                ...prevDireccion,
                [tipo]: valor,
            }));
        } else {
            const { value } = e.target;
            setDescripcion(value);
        }
        setOpen(false);
    }

    function validaciones() {
        console.log(departamento, ciudad, descripcion)
        if (departamento === "") {
            setMensaje("Selecciona un departamento");
            setOpen(true)
            return false;
        }
        if (ciudad === "") {
            setMensaje("Selecciona una ciudad");
            setOpen(true)
            return false;
        }
        if (!descripcionRegex.test(descripcion)) {
            setMensaje("Escribe la descripción correctamente");
            setOpen(true)
            return false;
        }
        setOpen(false)
        return true
    }


    function siguiente() {

        if (validaciones()) {
            setRegistro((prevRegistro) => ({
                ...prevRegistro,
                direcciones: [direccion]
            }));
            setTitulo("Contraseña")
        }

    }

    return (
        <div className='flex h-full w-full flex-col gap-4'>

            <div className='mx-auto w-full max-w-96'>
                <Alerta tipo="Error" mensaje={mensaje} />
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
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
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
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
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input
                        className='h-14 w-full rounded-xl border bg-tercero border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        value={registro.direccion}
                        name='descripcion'
                        placeholder='Descripción:'
                        onChange={handleChange}
                    />
                    <img className='absolute right-0 mx-4 h-6 w-6' src={IconoDireccion} alt="Descripcion" />
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

export default Ubicacion